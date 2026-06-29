#!/usr/bin/env python3
"""Follow the Money — Phase 1 puller (Block 1: donations ledger).

Pulls the Electoral Commission donations & loans register for the parties in
config/money_entities.json and writes one normalised ledger per party to
money_data/<slug>.json.

Deterministic, no LLM, no API key (the EC data is public).

IMPORTANT — why the CSV export, not the JSON search API:
the JSON search endpoint (search.electoralcommission.org.uk/api/search/Donations)
is relevance-ranked and SILENTLY INCOMPLETE — it reports a full `Total` but
paginating it returns only a capped subset (we measured Reform UK at £6.3m via the
JSON API vs the true £46.1m). The CSV export endpoint returns the COMPLETE filtered
dataset in one request, so it is the only trustworthy source. We dedupe by ECRef.

Donations are matched to a party by EXACT EC `RegulatedEntityName` (the EC's own
field). Company donations carry a registration number → the Companies House join
(enrich_companies.py) is a deterministic key lookup.

Usage:
    python3 pipeline/follow_money/fetch_ec_donations.py [--since YYYY-MM-DD] [--slug lab]
"""
import argparse
import csv
import datetime as dt
import io
import json
import re
import sys
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
CONFIG = ROOT / "config" / "money_entities.json"
OUT_DIR = ROOT / "money_data"

CSV_API = "https://search.electoralcommission.org.uk/api/csv/Donations"
SEARCH_UI = "https://search.electoralcommission.org.uk/?currentPage=1&rows=10&query={q}&et=pp"

# CSV column -> clean snake_case. Every field is a verbatim EC field; we restate the
# register, we don't characterise it. (The CSV export has fewer columns than the JSON
# search API — no AttemptedConcealment / ReasonForImpermissibility — but it is the only
# COMPLETE source, which is non-negotiable. We use ReturnedDate + DonationAction for the
# impermissible/returned signal.)
FIELD_MAP = {
    "DonorName": "donor",
    "DonorStatus": "donor_status",
    "CompanyRegistrationNumber": "company_number",
    "Value": "value",
    "AcceptedDate": "accepted_date",
    "ReportedDate": "reported_date",
    "ReturnedDate": "returned_date",
    "DonationType": "donation_type",
    "NatureOfDonation": "nature",
    "DonationAction": "donation_action",
    "IsAnonymous": "is_anonymous",
    "IsSponsorship": "is_sponsorship",
    "AccountingUnitName": "accounting_unit",
    "RegulatedEntityName": "regulated_entity",
    "ECRef": "ec_ref",
}


def parse_date(val):
    """'30/03/2026' -> '2026-03-30'. Blank -> None."""
    val = (val or "").strip()
    if not val:
        return None
    for fmt in ("%d/%m/%Y", "%Y-%m-%d"):
        try:
            return dt.datetime.strptime(val, fmt).date().isoformat()
        except ValueError:
            continue
    return None


def parse_value(val):
    return float(re.sub(r"[£,]", "", (val or "0")).strip() or 0)


def fetch_csv(since, until):
    # Parameters mirror the EC's own search UI (validated against it): et=pp (registered parties),
    # all three registers, and prePoll=false/postPoll=true to take the quarterly returns and NOT the
    # weekly pre-poll reports (which would double-count). The CSV export is the COMPLETE set; the JSON
    # search API is relevance-capped and must not be used. See docs/follow-the-money-architecture.md.
    params = [
        ("query", ""), ("sort", "AcceptedDate"), ("order", "desc"),
        ("et", "pp"), ("date", "Accepted"),
        ("register", "gb"), ("register", "ni"), ("register", "none"),
        ("from", since), ("to", until),
        ("prePoll", "false"), ("postPoll", "true"),
        ("isIrishSourceYes", "true"), ("isIrishSourceNo", "true"),
        ("includeOutsideSection75", "true"),
    ]
    url = CSV_API + "?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={"User-Agent": "show-the-working/follow-money", "Accept": "text/csv"})
    with urllib.request.urlopen(req, timeout=300) as r:
        data = r.read().decode("utf-8-sig", errors="replace")
    return list(csv.DictReader(io.StringIO(data)))


def normalise(row):
    out = {}
    for csv_key, clean in FIELD_MAP.items():
        v = row.get(csv_key)
        if clean in ("accepted_date", "reported_date", "returned_date"):
            v = parse_date(v)
        elif clean == "value":
            v = parse_value(v)
        elif isinstance(v, str):
            v = v.strip() or None
        out[clean] = v
    return out


def tally(donations):
    """Seed of Block 2 sub-metrics 1-5: count + value share by the EC's OWN donor
    status categories. No invented taxonomy; no composite grade."""
    by_status, total_val, returned = {}, 0.0, 0
    for d in donations:
        s = d["donor_status"] or "Unknown"
        b = by_status.setdefault(s, {"count": 0, "value": 0.0})
        b["count"] += 1
        b["value"] += d["value"]
        total_val += d["value"]
        action = (d.get("donation_action") or "").lower()
        if d["returned_date"] or action in ("returned", "forfeited", "impermissible"):
            returned += 1
    for b in by_status.values():
        b["value_share"] = round(b["value"] / total_val, 4) if total_val else 0.0
    return {
        "count": len(donations),
        "value": round(total_val, 2),
        "by_donor_status": dict(sorted(by_status.items(), key=lambda kv: -kv[1]["value"])),
        "impermissible_or_returned_count": returned,
    }


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--since", help="ISO date floor (default: config window_since)")
    ap.add_argument("--slug", help="only write this one party")
    args = ap.parse_args()

    cfg = json.loads(CONFIG.read_text())
    since = args.since or cfg["window_since"]
    until = dt.date.today().isoformat()

    name_to_party = {n: p for p in cfg["parties"] for n in p["ec_entity_names"]}
    wanted = set(name_to_party)

    print(f"Fetching EC CSV export {since} .. {until} ...", file=sys.stderr)
    rows = fetch_csv(since, until)
    print(f"  {len(rows)} rows in export", file=sys.stderr)

    buckets = {p["slug"]: {} for p in cfg["parties"]}  # slug -> {ec_ref: record} (dedupe by ECRef)
    for row in rows:
        name = (row.get("RegulatedEntityName") or "").strip()
        if name in wanted:
            rec = normalise(row)
            buckets[name_to_party[name]["slug"]][rec["ec_ref"] or id(rec)] = rec

    OUT_DIR.mkdir(exist_ok=True)
    generated_at = dt.datetime.now(dt.timezone.utc).replace(microsecond=0, tzinfo=None).isoformat() + "Z"
    for p in cfg["parties"]:
        if args.slug and p["slug"] != args.slug:
            continue
        ds = sorted(buckets[p["slug"]].values(), key=lambda d: d["accepted_date"] or "", reverse=True)
        reported_up_to = max((d["reported_date"] for d in ds if d["reported_date"]), default=None)
        doc = {
            "party": p["party"], "slug": p["slug"],
            "source": "Electoral Commission donations & loans register (CSV export)",
            "source_url": SEARCH_UI.format(q=urllib.parse.quote(p["ec_entity_names"][0])),
            "ec_entity_names": p["ec_entity_names"],
            "window_since": since, "reported_up_to": reported_up_to,
            "generated_at": generated_at,
            "summary": tally(ds),
            "donations": ds,
        }
        out = OUT_DIR / f"{p['slug']}.json"
        out.write_text(json.dumps(doc, indent=2, ensure_ascii=False))
        s = doc["summary"]
        print(f"  wrote {out.relative_to(ROOT)}  {s['count']} donations  £{s['value']:,.0f}  "
              f"(reported up to {reported_up_to})", file=sys.stderr)


if __name__ == "__main__":
    main()
