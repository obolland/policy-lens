#!/usr/bin/env python3
"""Follow the Money — page builder (Phase 2 UI, v1).

Renders money_data/<slug>.json into a static web/money/<slug>.html page. No LLM.
The chosen design (BeCreative pass, 2026-06-29): a composition bar ordered by the
EC's disclosure rules (most-disclosed -> least, encoded by colour solidity), the
"what we can't see" honesty card leading, a quiet "for the record" Companies House
card, and the party-blind boundary explainer pinned at top. Sub-metrics, never a
grade. Every figure taps through to its public source.

Usage:
    python3 pipeline/build_money_web.py [--slug con]
"""
import argparse
import html
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA = ROOT / "money_data"
OUT = ROOT / "web" / "money"
CH_URL = "https://find-and-update.company-information.service.gov.uk/company/{n}"

# EC donor-status -> (display label, traceability tier 1..4, short gloss). Order in the
# composition bar follows the tier (most disclosed first). The tier is grounded in the EC's
# OWN disclosure framework, not our judgement: named/reporting sources are tier 1; companies
# you can look up are tier 2; trusts tier 3; vehicles that needn't name their funders tier 4.
STATUS = {
    "Individual":                    ("Individuals", 1, "named people on the electoral register"),
    "Trade Union":                   ("Trade unions", 1, "registered, and report their own accounts"),
    "Public Fund":                   ("Public funds", 1, "state funding (e.g. Short money)"),
    "Registered Political Party":    ("Other parties", 1, "registered political parties"),
    "Friendly Society":              ("Friendly societies", 1, "registered mutuals"),
    "Building Society":              ("Building societies", 1, "registered mutuals"),
    "Limited Liability Partnership": ("LLPs", 2, "registered at Companies House"),
    "Company":                       ("Companies", 2, "registered at Companies House — owners look-up-able"),
    "Trust":                         ("Trusts", 3, "a trust; the EC records limited detail"),
    "Unincorporated Association":    ("Unincorporated associations", 4,
                                      "under electoral law, need NOT disclose who funds them"),
    "Other":                         ("Other", 4, "other / unclassified sources"),
}
TIER_OPACITY = {1: 1.0, 2: 0.62, 3: 0.42, 4: 0.26}

# Natural "Who funds ___?" phrasing per party (the config names don't slot into "the {name}").
FUNDS_PHRASE = {
    "Labour": "Labour",
    "Conservative": "the Conservatives",
    "Liberal Democrat": "the Liberal Democrats",
    "Reform UK": "Reform UK",
    "Green": "the Greens",
}


def funds_phrase(party):
    return FUNDS_PHRASE.get(party, party)

# "Dig deeper" — other independent trackers we point to rather than reinvent. Each is the best
# public tool for something we deliberately DON'T do ourselves (MP-level interests, lobbying,
# think-tank money, cross-border ownership, investigations). Pointing out is on-ethos and covers
# the gaps safely. See docs/follow-the-money-architecture.md (Dig deeper / where else to look).
RESOURCES = [
    ("The source: Electoral Commission register", "https://search.electoralcommission.org.uk/",
     "every donation here, searchable at source"),
    ("Who funds your MP — Westminster Accounts", "https://www.tortoisemedia.com/data/the-westminster-accounts",
     "Tortoise & Sky News: money around individual MPs, by name or postcode"),
    ("Who funds your MP — WhoFundsThem", "https://www.mysociety.org/democracy/who-funds-them/",
     "mySociety: MPs' financial interests"),
    ("Think-tank funding — Who Funds You?", "https://www.opendemocracy.net/en/who-funds-you/",
     "openDemocracy: how openly think tanks disclose their donors"),
    ("Lobbying meetings — Open Access UK", "https://openaccess.transparency.org.uk/",
     "Transparency International: who's meeting ministers"),
    ("Company ownership — Companies House", "https://find-and-update.company-information.service.gov.uk/",
     "the official register behind our company notes"),
]


def money(v):
    v = float(v)
    if v >= 1_000_000:
        return f"£{v/1e6:.1f}m"
    if v >= 1_000:
        return f"£{v/1e3:.0f}k"
    return f"£{v:,.0f}"


def esc(s):
    return html.escape(str(s if s is not None else ""))


def composition_bar(by_status, total):
    segs = []
    for status, b in by_status.items():
        label, tier, gloss = STATUS.get(status, (status, 4, ""))
        if b["value_share"] * 100 >= 0.05:
            segs.append((b["value_share"], label, tier, gloss, b["value"], b["count"]))
    segs.sort(key=lambda s: (s[2], -s[0]))  # tier asc (most-disclosed first), then share desc

    # Stacked bar = the funding SHAPE at a glance. White dividers keep adjacent blocks distinct even
    # when they share a shade; shade encodes disclosure (a luminance ramp, which reads in greyscale /
    # for colour-vision deficiency). It is NOT asked to identify categories — that's the job of the
    # labelled breakdown below.
    bar = "".join(
        f'<span class="seg t{tier}{" hatch" if tier == 4 else ""}" style="width:{share*100:.2f}%;--op:{TIER_OPACITY[tier]}" '
        f'title="{esc(label)}: {share*100:.1f}% · {money(val)} · {cnt} donations"></span>'
        for share, label, tier, gloss, val, cnt in segs)

    # Accessible breakdown: one LABELLED bar per source. Identity comes from the text label; size from
    # bar length + the printed %/£; disclosure from shade + a hatch on the least-disclosed sources —
    # all redundant cues, so nothing depends on telling two colours apart.
    rows = "".join(
        f'<li class="crow">'
        f'<div class="crow-h"><b>{esc(label)}</b>'
        f'<span class="crow-v">{share*100:.1f}% · {money(val)} '
        f'<span class="lg-n">({cnt} donation{"s" if cnt != 1 else ""})</span></span></div>'
        f'<div class="crow-track"><span class="fill t{tier}{" hatch" if tier == 4 else ""}" '
        f'style="width:{max(share*100, 0.8):.2f}%;--op:{TIER_OPACITY[tier]}"></span></div>'
        f'<div class="crow-g">{esc(gloss)}</div></li>'
        for share, label, tier, gloss, val, cnt in segs)

    return (f'<div class="cbar">{bar}</div>'
            f'<div class="trace-key"><span>more disclosed</span><span class="g"></span><span>discloses less</span></div>'
            f'<ul class="cbreak">{rows}</ul>')


def top_donors(donations, n=6):
    rows = sorted(donations, key=lambda d: d["value"], reverse=True)[:n]
    out = []
    for d in rows:
        label = STATUS.get(d["donor_status"], (d["donor_status"],))[0]
        co = d.get("company") or {}
        extra = ""
        if co.get("resolved"):
            bits = []
            if co.get("non_uk_controller"):
                places = sorted({c.get("country_of_residence") or c.get("country_registered")
                                 for c in co.get("controllers", [])
                                 if (c.get("country_of_residence") or c.get("country_registered"))
                                 and (c.get("country_of_residence") or c.get("country_registered")).lower()
                                 not in ("united kingdom", "england", "wales", "scotland", "northern ireland",
                                         "england & wales", "great britain")})
                if places:
                    bits.append(f"a controlling person recorded by Companies House as based in {esc(', '.join(places))}")
            if co.get("low_disclosure_accounts"):
                bits.append(f"files <i>{esc(co.get('accounts_type'))}</i> accounts")
            if bits:
                extra = f'<span class="d-note">{" · ".join(bits)}</span>'
        out.append(
            f'<li class="drow"><span class="d-val">{money(d["value"])}</span>'
            f'<span class="d-main"><b>{esc(d["donor"])}</b> <span class="d-type">{esc(label)}</span>'
            f'<span class="d-date">accepted {esc(d["accepted_date"])}</span>{extra}</span></li>'
        )
    return "<ul class=\"dlist\">" + "".join(out) + "</ul>"


def mini_bar(by_status):
    """A compact composition bar (same tier ordering/opacity as the per-party page)."""
    segs = []
    for status, b in by_status.items():
        label, tier, _ = STATUS.get(status, (status, 4, ""))
        segs.append((b["value_share"], label, tier, b["value"], b["count"]))
    segs.sort(key=lambda s: (s[2], -s[0]))
    out = []
    for share, label, tier, val, cnt in segs:
        pct = share * 100
        if pct < 0.05:
            continue
        hatch = " hatch" if tier == 4 else ""
        out.append(f'<span class="seg t{tier}{hatch}" style="width:{pct:.2f}%;--op:{TIER_OPACITY[tier]}" '
                   f'title="{esc(label)}: {pct:.1f}% · {money(val)}"></span>')
    return '<div class="cbar mini">' + "".join(out) + "</div>"


def render_index(docs):
    docs = sorted(docs, key=lambda d: d["summary"]["value"], reverse=True)
    rows = []
    for d in docs:
        s = d["summary"]
        rows.append(
            f'<a class="prow" href="{esc(d["slug"])}.html">'
            f'<span class="p-head"><b>{esc(d["party"])}</b>'
            f'<span class="p-total">{money(s["value"])}<span class="p-n"> · {s["count"]} donations</span></span></span>'
            f'{mini_bar(s["by_donor_status"])}</a>'
        )
    return f"""<!DOCTYPE html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Follow the money — who funds the UK parties? — Show the Working</title>
<meta name="description" content="Who funds each UK party, and how traceable that money is — every figure from the public Electoral Commission register and Companies House. Compare the funding shapes.">
<link rel="canonical" href="https://showtheworking.uk/money/index.html">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Show the Working">
<meta property="og:title" content="Follow the money — who funds the UK parties?">
<meta property="og:description" content="Who funds each UK party, and how far the money can be traced — every figure from the public record. Compare the funding shapes.">
<meta property="og:url" content="https://showtheworking.uk/money/index.html">
<meta property="og:image" content="https://showtheworking.uk/og/money/index.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="https://showtheworking.uk/og/money/index.png">
<link rel="stylesheet" href="../styles.css">
<style>
  .fm {{ max-width: 820px; margin: 0 auto; padding: 6px 20px 70px; }}
  .boundary {{ background: var(--accent-tint); border: 1px solid var(--line); border-radius: var(--radius);
    padding: 11px 14px; font-size: 13px; color: var(--accent-ink); margin: 14px 0 22px; }}
  .fm h1 {{ font-size: 27px; letter-spacing: -.02em; margin: 6px 0 6px; }}
  .lead {{ font-size: 15.5px; color: var(--ink-soft); line-height: 1.6; margin: 0 0 8px; }}
  .ordernote {{ font-size: 12.5px; color: var(--muted); margin: 0 0 18px; }}
  .prow {{ display: block; text-decoration: none; color: inherit; background: var(--surface);
    border: 1px solid var(--line); border-radius: var(--radius); box-shadow: var(--shadow);
    padding: 14px 16px; margin: 12px 0; }}
  .prow:hover {{ border-color: var(--line-strong); }}
  .p-head {{ display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 9px; gap: 10px; }}
  .p-head b {{ font-size: 16px; }}
  .p-total {{ font-weight: 800; }}
  .p-n {{ font-weight: 400; font-size: 12.5px; color: var(--muted); }}
  .cbar {{ display: flex; height: 26px; border-radius: 6px; overflow: hidden; border: 1px solid var(--line-strong); }}
  .cbar.mini {{ height: 18px; }}
  .cbar .seg {{ background: var(--accent); opacity: var(--op); height: 100%; box-sizing: border-box; }}
  .cbar .seg + .seg {{ border-left: 2px solid var(--surface); }}
  .cbar .seg.hatch {{ background-image: repeating-linear-gradient(45deg, transparent, transparent 4px,
    rgba(255,255,255,.6) 4px, rgba(255,255,255,.6) 7px); }}
  .trace-key {{ font-size: 12px; color: var(--muted); margin: 4px 0 20px; display: flex; gap: 6px; align-items: center; }}
  .trace-key .g {{ flex: 1; height: 8px; border-radius: 4px;
    background: linear-gradient(90deg, var(--accent), rgba(31,58,95,.22)); }}
  .src {{ font-size: 12.5px; color: var(--muted); margin-top: 18px; }}
  .src a {{ color: var(--accent); font-weight: 600; }}
</style>
</head>
<body>
<header class="site"><div class="wrap bar">
  <span class="brand">Show the <span class="uw">Working</span></span>
  <nav class="trustline" aria-label="nav"><a href="../index.html">← Policy comparison</a></nav>
</div></header>

<main class="fm">
  <div class="boundary"><b>Note:</b> our policy analysis is judged <b>blind to party</b>. This section is the
  opposite — it's about <b>who funds whom</b>, drawn entirely from public records. Nothing here feeds into a policy verdict.</div>

  <h1>Follow the money</h1>
  <p class="lead">Who funds each UK party — and how far that money can be traced to a named source.
  Every figure comes from the public <b>Electoral Commission</b> register; company ownership from
  <b>Companies House</b>. The bars show the <i>shape</i> of each party's funding, not a score —
  solid means more disclosed, faded means it discloses less.</p>
  <div class="trace-key"><span>more disclosed</span><span class="g"></span><span>discloses less</span></div>
  <p class="ordernote">Ordered by total declared donations since 2019. This is not a ranking of good or bad — tap a party to see the detail and sources.</p>

  {''.join(rows)}

  <p class="src">A snapshot of <b>declared</b> donations; money structured to hide its origin won't appear here.
  Each party page shows what we <i>can't</i> see, alongside what we can.</p>
</main>
</body>
</html>
"""


def render(doc):
    s, ch = doc["summary"], doc.get("companies_house", {})
    party = doc["party"]
    slug = doc["slug"]
    funds = funds_phrase(party)
    bs = s["by_donor_status"]
    ua = bs.get("Unincorporated Association", {})
    ua_share = ua.get("value_share", 0) * 100
    ua_val = ua.get("value", 0)

    # "for the record" CH facts
    rec = []
    if ch.get("non_uk_controller_count"):
        rec.append(
            f'<li><b>{ch["non_uk_controller_count"]}</b> company donations ({money(ch["non_uk_controller_value"])}) '
            f'are from companies where Companies House records at least one person with significant control '
            f'as based outside the UK. <span class="rec-def">This is a record of where a controller is based — '
            f'a UK company donating is lawful; make of it what you will.</span></li>')
    if ch.get("low_disclosure_accounts_count"):
        rec.append(
            f'<li><b>{ch["low_disclosure_accounts_count"]}</b> company donations ({money(ch["low_disclosure_accounts_value"])}) '
            f'are from companies that file <i>dormant</i> or <i>micro-entity</i> accounts — i.e. their own filings '
            f'disclose little financial detail.</li>')
    imp = s.get("impermissible_or_returned_count", 0)
    rec.append(f'<li><b>{imp}</b> donations in this window were recorded by the Electoral Commission as '
               f'impermissible or returned.</li>')

    resources = "".join(
        f'<li><a href="{esc(url)}" target="_blank" rel="noopener"><b>{esc(title)}</b></a>'
        f'<span class="res-what">{esc(what)}</span></li>' for title, url, what in RESOURCES)

    return f"""<!DOCTYPE html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Who funds {esc(funds)}? — Show the Working</title>
<meta name="description" content="Who funds {esc(funds)}, and how traceable that money is — every figure from the public Electoral Commission register and Companies House.">
<link rel="canonical" href="https://showtheworking.uk/money/{esc(slug)}.html">
<meta property="og:type" content="article">
<meta property="og:site_name" content="Show the Working">
<meta property="og:title" content="Who funds {esc(funds)}?">
<meta property="og:description" content="{money(s['value'])} in reported donations since {esc(doc['window_since'][:4])} — and how far it can be traced. Every figure from the public record.">
<meta property="og:url" content="https://showtheworking.uk/money/{esc(slug)}.html">
<meta property="og:image" content="https://showtheworking.uk/og/money/{esc(slug)}.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="https://showtheworking.uk/og/money/{esc(slug)}.png">
<link rel="stylesheet" href="../styles.css">
<style>
  .fm {{ max-width: 820px; margin: 0 auto; padding: 6px 20px 70px; }}
  .boundary {{ background: var(--accent-tint); border: 1px solid var(--line); border-radius: var(--radius);
    padding: 11px 14px; font-size: 13px; color: var(--accent-ink); margin: 14px 0 22px; }}
  .boundary b {{ color: var(--accent-ink); }}
  .fm h1 {{ font-size: 27px; letter-spacing: -.02em; margin: 6px 0 4px; }}
  .topline {{ font-size: 16px; color: var(--ink-soft); margin: 0 0 2px; }}
  .topline .big {{ font-weight: 800; color: var(--ink); font-size: 19px; }}
  .asof {{ font-size: 12.5px; color: var(--muted); margin: 0 0 22px; }}
  .asof a {{ color: var(--accent); }}
  .card {{ background: var(--surface); border: 1px solid var(--line); border-radius: var(--radius);
    box-shadow: var(--shadow); padding: 18px 18px 16px; margin: 16px 0; }}
  .card h2 {{ font-size: 16px; margin: 0 0 12px; letter-spacing: -.01em; }}
  .card.gap {{ background: var(--panel); box-shadow: none; }}
  .card.gap h2::before {{ content: "🕳 "; }}
  .cbar {{ display: flex; height: 30px; border-radius: 7px; overflow: hidden; border: 1px solid var(--line-strong); }}
  .cbar .seg {{ background: var(--accent); opacity: var(--op); height: 100%; box-sizing: border-box; }}
  .cbar .seg + .seg {{ border-left: 2px solid var(--surface); }}  /* white divider keeps same-shade blocks distinct */
  .cbar .seg.hatch {{ background-image: repeating-linear-gradient(45deg, transparent, transparent 4px,
    rgba(255,255,255,.6) 4px, rgba(255,255,255,.6) 7px); }}
  /* accessible per-source breakdown — identity from label, size from bar, shade+hatch redundant */
  .cbreak {{ list-style: none; padding: 0; margin: 16px 0 2px; display: grid; gap: 13px; }}
  .cbreak .crow-h {{ display: flex; justify-content: space-between; align-items: baseline; gap: 10px; font-size: 14px; }}
  .cbreak .crow-h b {{ font-weight: 700; }}
  .cbreak .crow-v {{ color: var(--ink-soft); white-space: nowrap; }}
  .cbreak .lg-n {{ color: var(--muted); }}
  .cbreak .crow-track {{ background: var(--panel); border: 1px solid var(--line); border-radius: 5px;
    height: 13px; overflow: hidden; margin: 5px 0 3px; }}
  .cbreak .fill {{ display: block; height: 100%; background: var(--accent); opacity: var(--op); }}
  .cbreak .fill.hatch {{ background-image: repeating-linear-gradient(45deg, transparent, transparent 4px,
    rgba(255,255,255,.6) 4px, rgba(255,255,255,.6) 7px); }}
  .cbreak .crow-g {{ font-size: 12px; color: var(--muted); }}
  .trace-key {{ font-size: 12px; color: var(--muted); margin: 12px 0 0; display: flex; gap: 6px; align-items: center; }}
  .trace-key .g {{ flex: 1; height: 8px; border-radius: 4px;
    background: linear-gradient(90deg, var(--accent), rgba(31,58,95,.22)); }}
  .dlist, .recl {{ list-style: none; padding: 0; margin: 0; }}
  .drow {{ display: flex; gap: 12px; padding: 9px 0; border-top: 1px solid var(--line); }}
  .drow:first-child {{ border-top: 0; }}
  .d-val {{ font-weight: 800; min-width: 64px; }}
  .d-main b {{ font-weight: 700; }}
  .d-type {{ font-size: 12px; color: var(--muted); margin-left: 6px; }}
  .d-date {{ display: block; font-size: 12px; color: var(--muted); }}
  .d-note {{ display: block; font-size: 12.5px; color: var(--v-mixed); margin-top: 2px; }}
  .recl li {{ font-size: 13.5px; color: var(--ink-soft); padding: 7px 0; border-top: 1px solid var(--line); }}
  .recl li:first-child {{ border-top: 0; }}
  .rec-def {{ color: var(--muted); }}
  .src {{ font-size: 12.5px; color: var(--muted); margin-top: 14px; }}
  .src a {{ color: var(--accent); font-weight: 600; }}
  .reslist {{ list-style: none; padding: 0; margin: 0; display: grid; gap: 10px; }}
  .reslist li {{ font-size: 13.5px; }}
  .reslist a {{ color: var(--accent); font-weight: 600; text-decoration: none; }}
  .reslist a:hover {{ text-decoration: underline; }}
  .reslist .res-what {{ display: block; font-size: 12.5px; color: var(--muted); }}
</style>
</head>
<body>
<header class="site"><div class="wrap bar">
  <span class="brand">Show the <span class="uw">Working</span></span>
  <nav class="trustline" aria-label="nav"><a href="../index.html">← Policy comparison</a></nav>
</div></header>

<main class="fm">
  <div class="boundary"><b>Note:</b> our policy analysis is judged <b>blind to party</b>. This section is the
  opposite — it's about <b>who funds whom</b>, drawn entirely from public records. Nothing here feeds into a policy verdict.</div>

  <h1>Who funds {esc(funds)}?</h1>
  <p class="topline"><span class="big">{money(s['value'])}</span> in reported donations, from {s['count']} donations.</p>
  <p class="asof">Source: <a href="{esc(doc['source_url'])}" target="_blank" rel="noopener">Electoral Commission register ↗</a>
    · since {esc(doc['window_since'])} · as reported up to {esc(doc['reported_up_to'])}. Company ownership from Companies House.</p>

  <div class="card">
    <h2>Where the money comes from</h2>
    {composition_bar(bs, s['value'])}
  </div>

  <div class="card gap">
    <h2>What we can't see</h2>
    <p style="font-size:13.5px;color:var(--ink-soft);margin:0 0 8px;">
      {ua_share:.1f}% ({money(ua_val)}) came via <b>unincorporated associations</b>, which under electoral law
      need not disclose who funds <i>them</i>. And money deliberately routed to hide its origin won't appear on this
      register at all. <b>This is a limit of the public record — not an all-clear.</b> What you see above is what's
      been declared; treat the faded end of the bar as "we can follow this less far", not as proof of anything.</p>
    <p style="font-size:13.5px;color:var(--ink-soft);margin:0;">
      We can also check where a <b>company</b> donor's owners are based (via Companies House), but
      <b>not where an individual donor lives</b> — the register doesn't publish it, and a UK-registered
      donor can be resident abroad. So a large individual donor based overseas would show here with no
      such note.</p>
  </div>

  <div class="card">
    <h2>Largest reported donations</h2>
    {top_donors(doc['donations'])}
    <p class="src">Each donation is a public Electoral Commission record. Company notes are from Companies House filings.</p>
  </div>

  <div class="card">
    <h2>For the record — company donors</h2>
    <ul class="recl">{''.join(rec)}</ul>
    <p class="src">Definitions and method: these are facts from each company's own Companies House record, shown without
      interpretation. "Based outside the UK" means the country of residence/registration recorded for a person with
      significant control — not a claim about the source of the money.</p>
  </div>

  <div class="card">
    <h2>Dig deeper — where else to look</h2>
    <p style="font-size:13px;color:var(--muted);margin:0 0 10px;">We focus on party-level money from the
      public record. For things we deliberately don't do — your MP's interests, lobbying, think-tank
      funding — these independent trackers do it well:</p>
    <ul class="reslist">{resources}</ul>
  </div>

  <p class="src">Show the Working shows its working: every figure here links to the public register it came from.
    This is a snapshot of <b>declared</b> donations and may lag recent reporting.</p>
</main>
</body>
</html>
"""


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--slug", help="build one party; omit to build every ledger in money_data/")
    args = ap.parse_args()
    OUT.mkdir(parents=True, exist_ok=True)
    if args.slug:
        ledgers = [DATA / f"{args.slug}.json"]
    else:
        ledgers = sorted(p for p in DATA.glob("*.json") if not p.name.startswith("_"))
    built = []
    for lp in ledgers:
        doc = json.loads(lp.read_text())
        out = OUT / f"{doc['slug']}.html"
        out.write_text(render(doc))
        built.append(doc)
        print(f"wrote {out.relative_to(ROOT)}  ({doc['party']})")
    # the comparison landing always reflects every ledger (not just --slug)
    all_docs = [json.loads(p.read_text()) for p in sorted(DATA.glob("*.json")) if not p.name.startswith("_")]
    (OUT / "index.html").write_text(render_index(all_docs))
    print(f"wrote {(OUT / 'index.html').relative_to(ROOT)}  (comparison landing)")


if __name__ == "__main__":
    main()
