"""Retrieve-once grounding via Gemini's Google-Search tool.

For a policy, run ONE grounded research call (free, on Gemini) → real facts + real sources,
fed into every analysis stage as context. Sidesteps the structured-output-vs-tools conflict
(this call returns text, not JSON). Google returns opaque grounding-redirect URLs, so we
resolve each to its real destination for clean, durable citations.

NOTE (pre-launch): Gemini "Grounding with Google Search" has Google display/usage requirements
for production use — verify compliance before public launch, or switch to Brave/curated then.
"""
import re
import time
import urllib.request
from pathlib import Path
from urllib.parse import urlparse

from google.genai import types
from gemini_runner import _client  # reuses .env loading + client

ROOT = Path(__file__).resolve().parent.parent
_UA = "Mozilla/5.0 (PolicyLens grounding resolver)"
# grounding is free (Gemini) and load-bearing — an ungrounded run is doomed to block, so it's
# worth retrying transient 503/429 outages patiently before giving up.
_GROUND_BACKOFF = [10, 20, 40, 60]


_INSTITUTIONS = ("ifs.org.uk", "resolutionfoundation.org", "kingsfund.org.uk", "nuffieldtrust.org.uk",
                 "jrf.org.uk", "ippr.org", "niesr.ac.uk", "health.org.uk", "instituteforgovernment.org.uk",
                 "obr.uk", "ons.gov.uk", "nao.org.uk", "jointcouncil", "fullfact.org", "ukandeu.ac.uk")
_MEDIA = ("bbc.co.uk", "bbc.com", "theguardian.com", "ft.com", "telegraph.co.uk", "thetimes",
          "independent.co.uk", "itv.com", "news.sky.com", "economist.com", "reuters.com", "inews.co.uk")


def classify_domain(dom):
    """Coarse, deterministic source_type from the resolved domain — feeds the reader-facing source mix.
    Honest and crude: the reader still sees the actual domain; this only buckets it."""
    d = (dom or "").lower()
    if d.endswith(".gov.uk") or "parliament.uk" in d or d.endswith(".gov") or "gov.scot" in d or "gov.wales" in d:
        return "government"
    if d.endswith(".ac.uk") or d.endswith(".edu"):
        return "academic"
    if any(k in d for k in _INSTITUTIONS):
        return "institutional"
    if any(k in d for k in _MEDIA):
        return "media"
    return "media"  # neutral default for unknown domains (never auto-labelled 'advocacy')


def _resolve(url, timeout=8):
    """Follow the grounding redirect to the real publisher URL (best-effort)."""
    try:
        req = urllib.request.Request(url, method="GET", headers={"User-Agent": _UA})
        with urllib.request.urlopen(req, timeout=timeout) as r:
            return r.url
    except Exception:
        return url


def ground(policy, model="gemini-2.5-flash"):
    """Returns grounded research as EVIDENCE UNITS for (b-pragmatic) provenance.

    {
      text: full research summary (context),
      evidence: [{source_id, publisher (resolved domain — deterministic, kills mislabel),
                  url (resolved), title, snippet (Gemini's grounding segments attributed to THIS
                  source — what a verdict claim must quote/cite from)}],
      sources: [{title,url}]   # back-compat
    }
    A verdict may only cite a source_id and quote from its snippet; publisher is taken from the unit,
    never from the model. (Snippet = Gemini's attributed research segment, not the source's verbatim
    text — labelled honestly in the UI as our sourced research + a link to the source.)
    """
    if _client is None:
        return {"text": "", "evidence": [], "sources": []}
    q = (
        "Research the likely real-world effects of this UK policy, and what credible data and "
        "analysts (IFS, OBR, ONS, Resolution Foundation, House of Commons Library, Health "
        "Foundation, etc.) say about it. Give specific figures where they exist, and note where "
        "experts genuinely disagree.\n\n"
        f"Policy — {policy['party']}: {policy['policy_title']}\n{policy.get('stated','')}"
    )
    cfg = types.GenerateContentConfig(tools=[types.Tool(google_search=types.GoogleSearch())])
    resp = None
    for i in range(len(_GROUND_BACKOFF) + 1):
        try:
            resp = _client.models.generate_content(model=model, contents=q, config=cfg)
            break
        except Exception as e:  # 503 high-demand / 429 — retry patiently (it's free)
            if i >= len(_GROUND_BACKOFF):
                raise
            wait = _GROUND_BACKOFF[i]
            print(f"     grounding transient ({str(e)[:90]}); retry in {wait}s", flush=True)
            time.sleep(wait)
    evidence = []
    try:
        gm = resp.candidates[0].grounding_metadata
        chunks = list(getattr(gm, "grounding_chunks", None) or [])
        # resolve each source chunk once -> {url, publisher(domain), title}
        resolved = []
        for c in chunks:
            w = getattr(c, "web", None)
            if w and getattr(w, "uri", None):
                url = _resolve(w.uri)
                dom = urlparse(url).netloc.replace("www.", "")
                resolved.append({"url": url, "publisher": dom or (getattr(w, "title", "") or "unknown"),
                                 "title": getattr(w, "title", ""), "source_type": classify_domain(dom)})
            else:
                resolved.append(None)
        # SEGMENT-CENTRIC: each Gemini research segment + the source(s) that back it.
        # A verdict claim cites an evidence_id and quotes its snippet; publisher comes from the unit.
        seen = {}
        for s in (getattr(gm, "grounding_supports", None) or []):
            seg = getattr(s, "segment", None)
            txt = (getattr(seg, "text", "") or "").strip() if seg else ""
            if not txt:
                continue
            srcs = [resolved[ci] for ci in (getattr(s, "grounding_chunk_indices", None) or [])
                    if ci < len(resolved) and resolved[ci]]
            if txt in seen:
                for sr in srcs:
                    if sr not in seen[txt]["sources"]:
                        seen[txt]["sources"].append(sr)
            else:
                seen[txt] = {"snippet": txt, "sources": srcs}
        evidence = [{"evidence_id": f"E{i + 1}", "snippet": e["snippet"], "sources": e["sources"]}
                    for i, e in enumerate(seen.values())]
        # FALLBACK: Gemini sometimes returns chunks + research text but no grounding_supports
        # (the segment->source attribution), giving 0 evidence units despite real sources. Salvage it:
        # segment the research text and attach the available sources (coarser attribution, but the
        # sources are real and the snippet is verbatim research the verdict can quote + cite).
        if not evidence and resolved and (resp.text or "").strip():
            allsrcs = [r for r in resolved if r]
            segs = [s.strip() for s in re.split(r"(?<=[.!?])\s+", resp.text) if len(s.strip()) > 40]
            evidence = [{"evidence_id": f"E{i + 1}", "snippet": seg, "sources": allsrcs, "attribution": "research-set"}
                        for i, seg in enumerate(segs[:25])]
    except Exception:
        pass
    # back-compat: flat unique source list
    seen_u, sources = set(), []
    for e in evidence:
        for sr in e["sources"]:
            if sr["url"] not in seen_u:
                seen_u.add(sr["url"]); sources.append({"title": sr["title"], "url": sr["url"]})
    return {"text": resp.text or "", "evidence": evidence, "sources": sources}
