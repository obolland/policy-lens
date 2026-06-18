"""Stage B — produce ONE (policy, fundamental) verdict: verdict -> verify -> bounded revision.

Party-blind + context-free: the verdict is a pure function of (policy_text, grounding, criteria).
Uses the cached-prefix call validated by verdict_probe (system+criteria+config cached at 0.1x).
Grounding is fetched once per policy (free, Gemini) and cached to corpus/grounding/<pid>.json so it's
reused across every fundamental the policy bears on.
"""
import json
import os
import re
from pathlib import Path

import sys
sys.path.insert(0, str(Path(__file__).resolve().parent))
from anthropic_runner import run_cached, SYSTEM_PROMPT
from ground import ground

ROOT = Path(__file__).resolve().parent.parent
MAX_REVISIONS = int(os.environ.get("PL_MAX_REVISIONS", "2"))
_CRIT = json.loads((ROOT / "config" / "verdict_criteria.json").read_text())
_OUTCOMES = json.loads((ROOT / "config" / "outcomes.json").read_text())["outcomes"]
_LENSES = json.loads((ROOT / "config" / "lenses.json").read_text()).get("lenses", {})
_SOURCES = json.loads((ROOT / "config" / "sources.json").read_text()).get("publishers", {})
# canonical per-party manifesto source for the M unit (verified URLs; extractor's per-policy guesses 404'd)
_MANIFESTO_SRC = json.loads((ROOT / "config" / "parties.json").read_text()).get("manifesto_source", {})
VERDICT_SCHEMA = json.loads((ROOT / "schema" / "verdict.schema.json").read_text())
VERIFY_SCHEMA = json.loads((ROOT / "schema" / "verdict_verify.schema.json").read_text())
DIRECTIONAL_SCHEMA = json.loads((ROOT / "schema" / "verdict_directional.schema.json").read_text())
_DIRECTIONAL = json.loads((ROOT / "config" / "outcomes.json").read_text()).get("directional_measures", [])


def verdict_prefix(fundamental):
    """Cacheable shared prefix for verdicts on one fundamental (identical across all its policies)."""
    return (
        SYSTEM_PROMPT + "\n\n" + (ROOT / "prompts" / "verdict.md").read_text() +
        "\n\n## Shared rubric\n" + _CRIT["shared"] +
        f"\n\n## Criteria for this fundamental ({fundamental})\n" + _CRIT["fundamentals"][fundamental] +
        "\n\n## All fundamentals (for boundaries)\n" + json.dumps(_OUTCOMES, indent=2) +
        "\n\n## Value-lenses\n" + json.dumps(_LENSES, indent=2) +
        "\n\n## Curated source allowlist\n" + json.dumps(_SOURCES, indent=2)
    )


def verify_prefix(fundamental):
    return (
        SYSTEM_PROMPT + "\n\n" + (ROOT / "prompts" / "verdict_verify.md").read_text() +
        f"\n\n## Criteria for this fundamental ({fundamental})\n" + _CRIT["fundamentals"][fundamental]
    )


def evidence_units(policy, g):
    """[M] = the policy's own stated text (manifesto), then [E1..En] = grounding segments.
    Every verdict claim must cite one of these ids and quote verbatim from its snippet."""
    # M's source = the party's OWN canonical manifesto page (verified), not the extractor's guessed
    # per-policy url. Metadata only — never shown to the model (format_evidence omits M's source), so
    # party-blindness holds.
    msrc = _MANIFESTO_SRC.get(policy.get("party")) or policy.get("source")
    m = {"evidence_id": "M", "snippet": policy.get("stated", ""),
         "sources": [msrc] if msrc else []}
    return [m] + (g.get("evidence", []) or [])


def format_evidence(units):
    out = []
    for u in units:
        if u["evidence_id"] == "M":
            out.append(f"[M] the policy's OWN stated text (use for 'stated'-tier claims):\n\"{u['snippet']}\"")
        else:
            pubs = ", ".join(s.get("publisher", "?") for s in (u.get("sources") or []))
            out.append(f"[{u['evidence_id']}] backed by: {pubs}\n\"{u['snippet']}\"")
    return "\n\n".join(out)


def _norm(s):
    return re.sub(r"\s+", " ", (s or "").lower()).strip()


def gate(verdict, evidence):
    """DETERMINISTIC provenance gate (claim-level). Drops any claim whose `quote` is not a verbatim
    (whitespace/case-normalised) substring of its cited evidence unit's snippet, or cites an unknown
    unit. Survivors keep the verdict; sources/publishers are DERIVED from the cited units (the model
    never supplies them). Returns (gated_verdict, report) — report.status: ok | gap_unsourced."""
    idx = {u["evidence_id"]: u for u in evidence}
    kept, dropped = [], []
    for c in verdict.get("claims", []):
        u = idx.get(c.get("evidence_id"))
        if u and _norm(c.get("quote", "")) and _norm(c["quote"]) in _norm(u.get("snippet", "")):
            kept.append(c)
        else:
            dropped.append({"claim": c.get("claim", ""), "evidence_id": c.get("evidence_id"),
                            "reason": "unknown_evidence_id" if not u else "quote_not_verbatim_in_snippet"})
    verdict["claims"] = kept
    # derive the reader-facing sources ONLY from cited+verified evidence units (incl. publisher)
    srcs, seen = [], set()
    for c in kept:
        for s in (idx.get(c["evidence_id"], {}).get("sources") or []):
            url = (s or {}).get("url")
            if url and url not in seen:
                seen.add(url); srcs.append(s)
    verdict["sources"] = srcs
    has_external = any(c.get("tier") in ("measurable", "projected") for c in kept)
    status = "gap_unsourced" if not kept else "ok"
    return verdict, {"kept": len(kept), "dropped": dropped, "status": status, "has_external_evidence": has_external}


def _grounding(policy):
    """Fetch-once, cached per policy. Party-blind query (don't condition the search on the party)."""
    gdir = ROOT / "corpus" / "grounding"
    gdir.mkdir(exist_ok=True)
    gf = gdir / f"{policy['policy_id']}.json"
    if gf.exists():
        return json.loads(gf.read_text())
    g = ground({"party": "", "policy_title": policy["policy_title"], "stated": policy.get("stated", "")})
    gf.write_text(json.dumps(g, indent=2))
    return g


def verdict_for(policy, fundamental, vpre=None, vqpre=None, model="claude-sonnet-4-6", tiers=None):
    """Return (verdict, meta). meta: cost, revisions, verifier, grounded_sources.

    `tiers` = the effort-escalation ladder (effort, thinking_off) tried on truncation; defaults to
    medium->low->thinking-off. Pass a fixed ladder (e.g. [("low", False), ("low", True)]) to force an
    effort posture — used by the effort A/B comparison.
    """
    vpre = vpre or verdict_prefix(fundamental)
    vqpre = vqpre or verify_prefix(fundamental)
    # uniform low effort by default (validated: as good as medium, cheaper, and avoids medium's
    # over-reasoning-into-false-balance failure on contested policies); escalate to thinking-off only
    # if a verdict's output still truncates.
    tiers = tiers or [("low", False), ("low", True)]
    g = _grounding(policy)
    evidence = evidence_units(policy, g)  # [M (manifesto)] + [E1..En (grounding segments)]
    pol_user = (
        f"## Policy to judge (effect on {fundamental} only)\n"
        f"{json.dumps({'policy_title': policy['policy_title'], 'stated': policy.get('stated','')}, indent=2)}\n\n"
        "## Evidence units — cite ONLY these; every claim must quote VERBATIM from one snippet\n"
        + format_evidence(evidence)
    )
    cost = 0.0

    def _gen(prefix, user):
        # tiered fallback against runaway adaptive-thinking truncation; each tier triggers only on a
        # truncation, and the verifier gates whatever completes.
        for i, (eff, toff) in enumerate(tiers):
            try:
                return run_cached(prefix, user, VERDICT_SCHEMA, model, max_tokens=32000, effort=eff, thinking_off=toff)
            except RuntimeError as e:
                if "truncat" in str(e).lower() and i < len(tiers) - 1:
                    print(f"     verdict truncated (effort={eff}, thinking_off={toff}); escalating fallback", flush=True)
                    continue
                raise

    verdict, _, c = _gen(vpre, pol_user); cost += c
    verdict, gate_report = gate(verdict, evidence)  # deterministic provenance gate (drops bad-quote claims)
    if gate_report["status"] == "gap_unsourced":
        return None, {"cost_equiv_usd": round(cost, 4), "gap": "unsourced", "gate": gate_report,
                      "note": "no claim could be verbatim-bound to a provided evidence unit — logged gap, not published"}

    def verify(v):
        vu = (pol_user + "\n\n## Verdict to check\n" + json.dumps(v, indent=2))
        # the verifier is also subject to thinking-runaway truncation — bound it (effort low + headroom)
        out, _, c = run_cached(vqpre, vu, VERIFY_SCHEMA, model, max_tokens=12000, effort="low")
        return out, c

    verifier, c = verify(verdict); cost += c
    revisions = []
    attempt = 0
    while not verifier.get("passed") and attempt < MAX_REVISIONS:
        blocking = [i for i in verifier.get("blocking_issues", []) if i.get("severity") == "blocking"]
        if not blocking:
            break
        attempt += 1
        fix_user = (pol_user +
            "\n\n## Your previous verdict (FAILED verification)\n" + json.dumps(verdict, indent=2) +
            "\n\n## Blocking issues to fix — return a corrected verdict, same schema. DROP any claim "
            "whose quote isn't a verbatim span of its cited evidence unit; cite only provided "
            "evidence_ids; fix tier/magnitude/timing/uncertainty errors; remove any party-based "
            "reasoning; don't manufacture balance.\n" + json.dumps(blocking, indent=2))
        verdict, _, c = _gen(vpre, fix_user); cost += c
        verdict, gate_report = gate(verdict, evidence)  # re-gate the revised verdict
        if gate_report["status"] == "gap_unsourced":
            return None, {"cost_equiv_usd": round(cost, 4), "gap": "unsourced", "gate": gate_report,
                          "revisions": revisions, "note": "revision left no verbatim-bound claims — logged gap"}
        verifier, c = verify(verdict); cost += c
        revisions.append({"attempt": attempt, "addressed": len(blocking), "passed_after": bool(verifier.get("passed"))})

    meta = {"cost_equiv_usd": round(cost, 4), "revisions": revisions, "verifier": verifier,
            "gate": gate_report, "evidence": evidence}
    return verdict, meta


def directional_prefix(measure_id):
    """Cacheable prefix for a DIRECTIONAL measure (e.g. D1 immigration) — no good/bad valence."""
    m = next((x for x in _DIRECTIONAL if x["id"] == measure_id), None) or {}
    return (
        SYSTEM_PROMPT + "\n\n" + (ROOT / "prompts" / "verdict_directional.md").read_text() +
        f"\n\n## The measure ({measure_id}: {m.get('name', measure_id)})\n" + json.dumps(m, indent=2)
    )


def directional_for(policy, measure_id="D1", vpre=None, model="claude-sonnet-4-6", tiers=None):
    """Produce ONE directional-measure read (e.g. how a policy moves immigration), party-blind and
    evidence-bound, but with NO improves/worsens. Reuses grounding + evidence units + the provenance
    gate; no verifier loop (its checks are valence-specific). Returns (verdict, meta) or (None, gap)."""
    vpre = vpre or directional_prefix(measure_id)
    tiers = tiers or [("low", False), ("low", True)]
    g = _grounding(policy)
    evidence = evidence_units(policy, g)
    pol_user = (
        f"## Policy to read (directional effect on {measure_id} ONLY)\n"
        f"{json.dumps({'policy_title': policy['policy_title'], 'stated': policy.get('stated','')}, indent=2)}\n\n"
        "## Evidence units — cite ONLY these; every claim must quote VERBATIM from one snippet\n"
        + format_evidence(evidence)
    )
    cost = 0.0
    for i, (eff, toff) in enumerate(tiers):
        try:
            verdict, _, c = run_cached(vpre, pol_user, DIRECTIONAL_SCHEMA, model, max_tokens=20000, effort=eff, thinking_off=toff)
            cost += c
            break
        except RuntimeError as e:
            if "truncat" in str(e).lower() and i < len(tiers) - 1:
                continue
            raise
    verdict, gate_report = gate(verdict, evidence)  # same verbatim-quote provenance gate
    if gate_report["status"] == "gap_unsourced":
        return None, {"cost_equiv_usd": round(cost, 4), "gap": "unsourced", "gate": gate_report,
                      "note": "no claim verbatim-bound to evidence — logged gap"}
    return verdict, {"cost_equiv_usd": round(cost, 4), "gate": gate_report, "evidence": evidence, "directional": True}
