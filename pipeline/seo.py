"""SEO / reach: pre-render static, indexable pages from the analysis data.

The site is a JS app — crawlers see only the shell. This emits real HTML so search engines and
social scrapers get actual content. Phase 1: per-topic pages + sitemap + robots. Called from
build_verdicts_web with the FULL records (before they're slimmed for data.js). No API cost.
"""
import html
import re
import datetime
from pathlib import Path

BASE_URL = "https://policylens.uk"
GOATCOUNTER = '<script data-goatcounter="https://policylens.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>'

_DIR_LABEL = {"improves": "helps", "worsens": "hurts", "mixed": "mixed", "negligible": "little effect",
              "too-uncertain": "genuinely contested"}
_SHIFT_LABEL = {"toward more controlled": "tighter", "toward more open": "looser",
                "no material change": "no material change", "unclear": "unclear direction"}


def _slug(s):
    return re.sub(r"[^a-z0-9]+", "-", s.lower()).strip("-")


def _esc(s):
    return html.escape(str(s or ""))


def _page(title, description, canonical, body, jsonld=""):
    """Shared shell for a pre-rendered page. styles.css + goatcounter sit one level up (/topic/)."""
    return f"""<!DOCTYPE html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{_esc(title)}</title>
<meta name="description" content="{_esc(description)}">
<link rel="canonical" href="{canonical}">
<meta property="og:type" content="article">
<meta property="og:site_name" content="Policy Lens">
<meta property="og:title" content="{_esc(title)}">
<meta property="og:description" content="{_esc(description)}">
<meta property="og:url" content="{canonical}">
<meta name="twitter:card" content="summary">
<link rel="stylesheet" href="../styles.css">
<style>.doc{{max-width:760px;margin:0 auto;padding:8px 22px 60px}}.doc h2{{font-size:21px;margin:28px 0 6px}}
.doc p,.doc li{{font-size:15.5px;color:var(--ink-soft);line-height:1.6}}.doc .lead{{font-size:17px;color:var(--ink)}}
.doc .back{{font-size:14px;font-weight:600}}.seo-party{{border-left:3px solid var(--line-strong);padding:2px 0 2px 14px;margin:14px 0}}
.seo-ex{{font-size:14px;margin:4px 0}}.seo-ex b{{color:var(--ink)}}</style>
{('<script type="application/ld+json">' + jsonld + '</script>') if jsonld else ''}
</head>
<body>
<header class="site"><div class="wrap bar">
<span class="brand">Policy<span class="dot">·</span>Lens</span>
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
        out.append(f'<div class="seo-ex"><b>{_esc(h["title"])}</b> — <i>{_esc(verdict)}</i>. {plain}</div>')
    out.append("</div>")
    return "".join(out)


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
            hits = [{"oc": oc, "title": r["policy_title"]} for r in records if r["party"] == party
                    for oc in r["per_outcome"] if oc.get("outcome") == oid]
            if not hits:
                continue
            any_hits = True
            body_parts.append(_party_block(party, oid, hits, directional))
        if not any_hits:
            continue
        body_parts.append('<p class="back"><a href="../index.html">← See the full interactive comparison across every topic</a></p>')
        title = f"{name}: where the UK parties stand — Policy Lens"
        desc = (f"Source-checked analysis of where Labour, the Conservatives, Liberal Democrats, "
                f"Reform UK and the Greens land on {name.lower()}. {plain}")[:300]
        canonical = f"{BASE_URL}/topic/{slug}.html"
        jsonld = ('{"@context":"https://schema.org","@type":"Article","headline":' +
                  _json_str(title) + ',"description":' + _json_str(desc) +
                  ',"isPartOf":{"@type":"WebSite","name":"Policy Lens","url":"' + BASE_URL + '/"}}')
        (topic_dir / f"{slug}.html").write_text(_page(title, desc, canonical, "\n".join(body_parts), jsonld))
        urls.append(canonical)

    # sitemap + robots
    sm = ['<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    for u in urls:
        sm.append(f"  <url><loc>{u}</loc><lastmod>{today}</lastmod></url>")
    sm.append("</urlset>")
    (out_root / "sitemap.xml").write_text("\n".join(sm))
    (out_root / "robots.txt").write_text(f"User-agent: *\nAllow: /\nSitemap: {BASE_URL}/sitemap.xml\n")
    return len([u for u in urls if "/topic/" in u])


def _json_str(s):
    import json
    return json.dumps(str(s or ""))
