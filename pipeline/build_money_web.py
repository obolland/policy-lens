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
        segs.append((b["value_share"], label, tier, gloss, b["value"], b["count"], status))
    segs.sort(key=lambda s: (s[2], -s[0]))  # tier asc, then share desc
    bar, legend = [], []
    for share, label, tier, gloss, val, cnt, status in segs:
        pct = share * 100
        if pct < 0.05:
            continue
        hatch = " hatch" if tier == 4 else ""
        bar.append(
            f'<span class="seg t{tier}{hatch}" style="width:{pct:.2f}%;--op:{TIER_OPACITY[tier]}" '
            f'title="{esc(label)}: {pct:.1f}% · {money(val)} · {cnt} donations"></span>'
        )
        legend.append(
            f'<li class="lg t{tier}"><span class="sw" style="--op:{TIER_OPACITY[tier]}"></span>'
            f'<b>{esc(label)}</b> — {pct:.1f}% · {money(val)} '
            f'<span class="lg-n">({cnt} donation{"s" if cnt != 1 else ""})</span>'
            f'<span class="lg-gloss">{esc(gloss)}</span></li>'
        )
    return '<div class="cbar">' + "".join(bar) + "</div>\n<ul class=\"clegend\">" + "".join(legend) + "</ul>"


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


def render(doc):
    s, ch = doc["summary"], doc.get("companies_house", {})
    party = doc["party"]
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

    return f"""<!DOCTYPE html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Who funds the {esc(party)}? — Show the Working</title>
<meta name="description" content="Who funds the {esc(party)}, and how traceable that money is — every figure from the public Electoral Commission register and Companies House.">
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
  .cbar .seg {{ background: var(--accent); opacity: var(--op); height: 100%; }}
  .cbar .seg.hatch {{ background-image: repeating-linear-gradient(45deg, transparent, transparent 4px,
    rgba(255,255,255,.55) 4px, rgba(255,255,255,.55) 7px); }}
  .clegend {{ list-style: none; padding: 0; margin: 14px 0 2px; display: grid; gap: 9px; }}
  .clegend li {{ font-size: 13.5px; color: var(--ink-soft); padding-left: 24px; position: relative; }}
  .clegend .sw {{ position: absolute; left: 0; top: 2px; width: 15px; height: 15px; border-radius: 4px;
    background: var(--accent); opacity: var(--op); border: 1px solid var(--line-strong); }}
  .clegend .lg-n {{ color: var(--muted); }}
  .clegend .lg-gloss {{ display: block; font-size: 12px; color: var(--muted); }}
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

  <h1>Who funds the {esc(party)}?</h1>
  <p class="topline"><span class="big">{money(s['value'])}</span> in reported donations, from {s['count']} donations.</p>
  <p class="asof">Source: <a href="{esc(doc['source_url'])}" target="_blank" rel="noopener">Electoral Commission register ↗</a>
    · since {esc(doc['window_since'])} · as reported up to {esc(doc['reported_up_to'])}. Company ownership from Companies House.</p>

  <div class="card">
    <h2>Where the money comes from</h2>
    {composition_bar(bs, s['value'])}
    <div class="trace-key"><span>more disclosed</span><span class="g"></span><span>discloses less</span></div>
  </div>

  <div class="card gap">
    <h2>What we can't see</h2>
    <p style="font-size:13.5px;color:var(--ink-soft);margin:0 0 8px;">
      {ua_share:.1f}% ({money(ua_val)}) came via <b>unincorporated associations</b>, which under electoral law
      need not disclose who funds <i>them</i>. And money deliberately routed to hide its origin won't appear on this
      register at all. <b>This is a limit of the public record — not an all-clear.</b> What you see above is what's
      been declared; treat the faded end of the bar as "we can follow this less far", not as proof of anything.</p>
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
    for lp in ledgers:
        doc = json.loads(lp.read_text())
        out = OUT / f"{doc['slug']}.html"
        out.write_text(render(doc))
        print(f"wrote {out.relative_to(ROOT)}  ({doc['party']})")


if __name__ == "__main__":
    main()
