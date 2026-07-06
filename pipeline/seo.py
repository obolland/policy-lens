"""SEO / reach: pre-render static, indexable pages from the analysis data.

The site is a JS app — crawlers see only the shell. This emits real HTML so search engines and
social scrapers get actual content. Phase 1: per-topic pages + sitemap + robots. Called from
build_verdicts_web with the FULL records (before they're slimmed for data.js). No API cost.
"""
import html
import re
import datetime
from pathlib import Path

BASE_URL = "https://showtheworking.uk"
GOATCOUNTER = '<script data-goatcounter="https://policylens.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>'

_DIR_LABEL = {"improves": "helps", "worsens": "hurts", "mixed": "mixed", "negligible": "little effect",
              "too-uncertain": "genuinely contested"}
_SHIFT_LABEL = {"toward more controlled": "tighter", "toward more open": "looser",
                "no material change": "no material change", "unclear": "unclear direction"}


def _slug(s):
    return re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")


def _esc(s):
    return html.escape(str(s or ""))


def _page(title, description, canonical, body, jsonld="", og_image="/og/default.png", og_desc=""):
    """Shared shell for a pre-rendered page. styles.css + goatcounter sit one level up (/topic/).
    og_desc is the share-preview description (short, with a call-to-action); description is the
    longer SEO meta description for search snippets."""
    img = BASE_URL + og_image
    return f"""<!DOCTYPE html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{_esc(title)}</title>
<meta name="description" content="{_esc(description)}">
<link rel="canonical" href="{canonical}">
<meta property="og:type" content="article">
<meta property="og:site_name" content="Show the Working">
<meta property="og:title" content="{_esc(title)}">
<meta property="og:description" content="{_esc(og_desc or description)}">
<meta property="og:url" content="{canonical}">
<meta property="og:image" content="{img}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="{img}">
<link rel="stylesheet" href="../styles.css">
<style>.doc{{max-width:760px;margin:0 auto;padding:8px 22px 60px}}.doc h2{{font-size:21px;margin:28px 0 6px}}
.doc p,.doc li{{font-size:15.5px;color:var(--ink-soft);line-height:1.6}}.doc .lead{{font-size:17px;color:var(--ink)}}
.doc .back{{font-size:14px;font-weight:600}}.seo-party{{border-left:3px solid var(--line-strong);padding:2px 0 2px 14px;margin:14px 0}}
.seo-ex{{font-size:14px;margin:4px 0}}.seo-ex b{{color:var(--ink)}}
.vsec{{border-left:4px solid var(--line-strong);padding:2px 0 2px 16px;margin:22px 0}}.vsec h2{{margin-top:0}}
.claims{{margin:8px 0 0;padding-left:18px}}.claims li{{margin:6px 0;font-size:14px}}.csrc{{color:#6b7280}}
.reading{{background:#f5f6f8;padding:10px 14px;border-radius:8px}}.xlinks a{{display:block;margin:5px 0;font-weight:600;font-size:14px}}</style>
{('<script type="application/ld+json">' + jsonld + '</script>') if jsonld else ''}
</head>
<body>
<header class="site"><div class="wrap bar">
<span class="brand">Show the <span class="uw">Working</span></span>
<nav class="trustline" aria-label="nav"><a class="back" href="../index.html">← The full comparison</a></nav>
</div></header>
<main class="doc">
{body}
</main>
{GOATCOUNTER}
</body>
</html>
"""


def _party_block(party, outcome_id, hits, directional):
    """One party's stance on this topic: a one-line summary + a few example policies (with links)."""
    cell = f"../index.html#cell={party.replace(' ', '%20')}|{outcome_id}"
    if directional:
        from collections import Counter
        c = Counter(h["oc"].get("shift") for h in hits)
        summ = " · ".join(f"{n} {_SHIFT_LABEL.get(s, s)}" for s, n in c.most_common() if s)
        lead = f"<b>{_esc(party)}</b> — {len(hits)} policies touch this. Direction: {summ or 'unclear'}."
    else:
        from collections import Counter
        c = Counter(h["oc"].get("direction") for h in hits)
        summ = " · ".join(f"{n} {_DIR_LABEL.get(d, d)}" for d, n in c.most_common() if d)
        lead = f"<b>{_esc(party)}</b> — {len(hits)} policies affect this: {summ}."
    # lead with the clearest signal — helps/hurts (or a directional shift) before mixed/contested/little-effect
    def _rank(h):
        oc = h["oc"]
        if directional:
            return 0 if oc.get("shift") in ("toward more controlled", "toward more open") else 1
        return {"improves": 0, "worsens": 0, "mixed": 1, "too-uncertain": 1, "negligible": 2}.get(oc.get("direction"), 1)
    out = [f'<div class="seo-party"><p>{lead} <a href="{cell}">Compare interactively →</a></p>']
    for h in sorted(hits, key=_rank)[:5]:
        oc = h["oc"]
        verdict = _SHIFT_LABEL.get(oc.get("shift"), "") if directional else _DIR_LABEL.get(oc.get("direction"), "")
        raw = (oc.get("plain") or "").strip()
        plain = _esc(raw[:200] + ("…" if len(raw) > 200 else ""))
        out.append(f'<div class="seo-ex"><b><a href="../policy/{_esc(h["pid"])}.html">{_esc(h["title"])}</a></b> — <i>{_esc(verdict)}</i>. {plain}</div>')
    out.append("</div>")
    return "".join(out)


_VPILL = {
    "improves": ("Helps", "var(--v-improves,#2e7d32)"),
    "worsens": ("Hurts", "var(--v-worsens,#c62828)"),
    "mixed": ("Mixed picture", "var(--v-mixed,#b8860b)"),
    "negligible": ("Little effect", "var(--v-negligible,#6b7280)"),
    "too-uncertain": ("Genuinely contested", "var(--v-uncertain,#6d4c9f)"),
}
_DIR_MEASURE_LABEL = {
    "toward more controlled": "Moves toward more control",
    "toward more open": "Moves toward more openness",
    "no material change": "No material change",
    "unclear": "Direction unclear",
}


def _policy_page(rec, name_by_id, type_by_id):
    """One policy's full, sourced analysis across every outcome it bears on. Article markup (NOT
    ClaimReview — see build_seo). Returns (html, canonical) or (None, None) for gap-only policies."""
    import json as _j
    party, ptitle, pid = rec["party"], rec["policy_title"], rec["policy_id"]
    verdicts = [oc for oc in rec["per_outcome"] if oc.get("direction") or oc.get("shift")]
    if not verdicts:
        return None, None  # only unverified gaps — nothing substantive to index
    canonical = f"{BASE_URL}/policy/{pid}.html"
    body = [f'<h1 style="letter-spacing:-.02em">{_esc(ptitle)}</h1>',
            f'<p style="font-weight:700;color:var(--ink)">{_esc(party)} · what the evidence says</p>',
            f'<p>An independent, source-checked look at {_esc(party)}’s policy “{_esc(ptitle)}” — what it '
            'would actually do across the things that affect your life. Every claim below quotes the source '
            'behind it. <a href="../how-it-works.html">How this works</a>.</p>']
    abouts = []
    for oc in verdicts:
        oid = oc["outcome"]; oname = name_by_id.get(oid, oid); abouts.append(oname)
        directional = type_by_id.get(oid) == "directional"
        if directional:
            label, color = _DIR_MEASURE_LABEL.get(oc.get("shift"), "Direction unclear"), "var(--ink)"
        else:
            label, color = _VPILL.get(oc.get("direction"), (oc.get("direction") or "", "var(--line-strong)"))
        meta = " · ".join(x for x in [oc.get("magnitude"),
                          (oc.get("confidence") + " confidence") if oc.get("confidence") else None] if x)
        sec = [f'<div class="vsec" style="border-left-color:{color}">',
               f'<h2>{_esc(oname)} — <span style="color:{color}">{_esc(label)}</span></h2>']
        if directional:
            sec.append('<p style="font-size:13px;margin:0 0 6px;color:#6b7280">We don’t call this better or '
                       'worse — that’s your call; we only show which way the policy moves it.</p>')
        if meta:
            sec.append(f'<p style="font-size:13px;margin:0 0 6px;color:#6b7280">{_esc(meta)}</p>')
        if oc.get("plain"):
            sec.append(f'<p>{_esc(oc["plain"])}</p>')
        claims = oc.get("claims") or []
        if claims:
            sec.append('<h3 style="font-size:15px;margin:10px 0 2px">The evidence</h3><ul class="claims">')
            for c in claims:
                src, st = c.get("publisher") or "", c.get("source_type") or ""
                q = (c.get("quote") or "").strip()
                qd = (' — “' + _esc(q[:220] + ("…" if len(q) > 220 else "")) + '”') if q else ""
                srcbit = (f' <span class="csrc">— {_esc(src)}{(" (" + _esc(st) + ")") if st else ""}{qd}</span>') if src else ""
                sec.append(f'<li>{_esc(c.get("claim") or "")}{srcbit}</li>')
            sec.append('</ul>')
        if oc.get("biggest_unknown"):
            sec.append(f'<p style="font-size:14px"><b>Biggest unknown:</b> {_esc(oc["biggest_unknown"])}</p>')
        if oc.get("rationale"):
            sec.append(f'<p class="reading"><b>Our reading:</b> {_esc(oc["rationale"])}</p>')
        sec.append('</div>')
        body.append("".join(sec))
    # cross-links: out to each topic page, into the live tool, home
    xl = ['<div class="xlinks" style="margin-top:26px">']
    for oid in dict.fromkeys(oc["outcome"] for oc in verdicts):
        oname = name_by_id.get(oid, oid)
        xl.append(f'<a href="../topic/{_slug(oname)}.html">Compare all parties on {_esc(oname.lower())} →</a>')
    xl.append(f'<a href="../index.html#cell={party.replace(" ", "%20")}|{verdicts[0]["outcome"]}|{_esc(pid)}">'
              'Open this in the interactive comparison →</a>')
    xl.append('<a href="../index.html">← Show the Working home</a></div>')
    body.append("".join(xl))

    title = f"{ptitle} — {party} policy analysis | Show the Working"
    desc = (f"{party}: {ptitle}. " + (verdicts[0].get("plain") or "").strip())[:300]
    jsonld = _j.dumps({"@context": "https://schema.org", "@type": "Article",
                       "headline": title[:110], "description": desc, "about": list(dict.fromkeys(abouts)),
                       "isPartOf": {"@type": "WebSite", "name": "Show the Working", "url": BASE_URL + "/"},
                       "author": {"@type": "Organization", "name": "Show the Working", "url": BASE_URL + "/"},
                       "publisher": {"@type": "Organization", "name": "Show the Working", "url": BASE_URL + "/"}})
    head = f"{party} · {ptitle}"
    share = (head[:78] + "…" if len(head) > 78 else head) + " — see the sourced verdict →"
    return _page(title, desc, canonical, "\n".join(body), jsonld, og_desc=share), canonical


def build_seo(records, outcomes, directional_measures, parties, out_root):
    """records: FULL records (per_outcome with direction/shift/plain). outcomes: scored outcome dicts
    {id,name,plain}. directional_measures: [{id,name,plain}]. Writes web/topic/*.html + sitemap + robots."""
    out_root = Path(out_root)
    topic_dir = out_root / "topic"
    topic_dir.mkdir(parents=True, exist_ok=True)
    for f in topic_dir.glob("*.html"):
        f.unlink()

    today = datetime.date.today().isoformat()
    all_topics = [(o, False) for o in outcomes] + [(m, True) for m in directional_measures]
    urls = [f"{BASE_URL}/", f"{BASE_URL}/how-it-works.html", f"{BASE_URL}/about.html"]

    for topic, directional in all_topics:
        oid, name, plain = topic["id"], topic["name"], topic.get("plain", "")
        slug = _slug(name)
        # gather hits per party
        body_parts = [f'<h1 style="letter-spacing:-.02em">{_esc(name)}: where the UK parties stand</h1>',
                      f'<p class="lead">{_esc(plain)}</p>',
                      '<p>Independent, source-checked analysis of how each party’s policies would affect this — '
                      'judged on the evidence, without telling the system who proposed them. '
                      '<a href="../how-it-works.html">How this works</a>.</p>']
        if directional:
            body_parts.append('<p><b>Note:</b> we don’t call immigration good or bad — that’s your call. '
                              'We show which way each party’s policies move it.</p>')
        any_hits = False
        for party in parties:
            hits = [{"oc": oc, "title": r["policy_title"], "pid": r["policy_id"]} for r in records if r["party"] == party
                    for oc in r["per_outcome"] if oc.get("outcome") == oid]
            if not hits:
                continue
            any_hits = True
            body_parts.append(_party_block(party, oid, hits, directional))
        if not any_hits:
            continue
        body_parts.append('<p class="back"><a href="../index.html">← See the full interactive comparison across every topic</a></p>')
        title = f"{name}: where the UK parties stand — Show the Working"
        desc = (f"Source-checked analysis of where Labour, the Conservatives, Liberal Democrats, "
                f"Reform UK and the Greens land on {name.lower()}. {plain}")[:300]
        canonical = f"{BASE_URL}/topic/{slug}.html"
        jsonld = ('{"@context":"https://schema.org","@type":"Article","headline":' +
                  _json_str(title) + ',"description":' + _json_str(desc) +
                  ',"isPartOf":{"@type":"WebSite","name":"Show the Working","url":"' + BASE_URL + '/"}}')
        share = f"Where the UK parties stand on {name.lower()} — sourced, non-partisan. Compare them →"
        (topic_dir / f"{slug}.html").write_text(
            _page(title, desc, canonical, "\n".join(body_parts), jsonld,
                  og_image=f"/og/topic/{slug}.png", og_desc=share))
        urls.append(canonical)

    # per-policy pages (the long-tail). Article markup, NOT ClaimReview: our verdicts judge a policy's
    # EFFECT (helps/hurts), not the truthfulness of a claim, so fact-check markup would be a misuse that
    # Google can penalise. Each page still carries real, sourced analysis and is fully indexable.
    n_topic = len([u for u in urls if "/topic/" in u])
    name_by_id = {o["id"]: o["name"] for o in outcomes}
    name_by_id.update({m["id"]: m["name"] for m in directional_measures})
    type_by_id = {o["id"]: o.get("type", "valenced") for o in outcomes}
    type_by_id.update({m["id"]: "directional" for m in directional_measures})
    policy_dir = out_root / "policy"
    policy_dir.mkdir(parents=True, exist_ok=True)
    for f in policy_dir.glob("*.html"):
        f.unlink()
    n_policy = 0
    for rec in records:
        page_html, canonical = _policy_page(rec, name_by_id, type_by_id)
        if not page_html:
            continue
        (policy_dir / f"{rec['policy_id']}.html").write_text(page_html)
        urls.append(canonical)
        n_policy += 1

    # Follow the money pages (built separately by build_money_web.py; include any present on disk so
    # the sitemap stays correct regardless of build order).
    money_dir = out_root / "money"
    if money_dir.exists():
        for f in sorted(money_dir.glob("*.html")):
            urls.append(f"{BASE_URL}/money/{f.name}")

    # sitemap + robots
    sm = ['<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    for u in urls:
        sm.append(f"  <url><loc>{u}</loc><lastmod>{today}</lastmod></url>")
    sm.append("</urlset>")
    (out_root / "sitemap.xml").write_text("\n".join(sm))
    (out_root / "robots.txt").write_text(f"User-agent: *\nAllow: /\nSitemap: {BASE_URL}/sitemap.xml\n")
    return n_topic, n_policy


def _json_str(s):
    import json
    return json.dumps(str(s or ""))
