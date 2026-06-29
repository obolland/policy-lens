#!/usr/bin/env python3
"""Follow the Money — Phase 1 puller (Block 1: donations ledger).

Pulls the Electoral Commission donations & loans register for the parties in
config/money_entities.json and writes one normalised ledger per party to
money_data/<slug>.json.

Deterministic, no LLM, no API key (the EC search API is public). Companies House
enrichment (accounts-type / shell flag, sub-metric 6) and the contracts strand
are SEPARATE later steps that need the free Companies House key — see
docs/follow-the-money-architecture.md.

Design notes:
- Donations are matched to a party by EXACT EC `RegulatedEntityName` (the EC's own
  field) — never fuzzy text search (a donor surnamed "Green" must not land under
  the Green Party). The `query=` param is full-text, so we don't rely on it.
- We pull the whole party-donation window once, paginated, and bucket client-side.
  ~40 requests for the default window; this is a quarterly one-off.
- Every record keeps its EC reference so the figure taps through to the public
  source, like the rest of the site.

Usage:
    python3 pipeline/follow_money/fetch_ec_donations.py [--since YYYY-MM-DD] [--slug lab]
"""
import argparse
import datetime as dt
import json
import re
import sys
import time
import urllib.parse
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
CONFIG = ROOT / "config" / "money_entities.json"
OUT_DIR = ROOT / "money_data"

API = "https://search.electoralcommission.org.uk/api/search/Donations"
# A stable, human-clickable search URL for "show the source" links per party.
SEARCH_UI = "https://search.electoralcommission.org.uk/?currentPage=1&rows=10&query={q}&et=pp"

PAGE = 500
_DATE_RE = re.compile(r"/Date\((-?\d+)\)/")

# Fields we keep, mapped to clean snake_case. Everything here is a verbatim EC
# field — we restate the register, we don't characterise it.
FIELD_MAP = {
    "DonorName": "donor",
    "DonorStatus": "donor_status",
    "CompanyRegistrationNumber": "company_number",
    "Value": "value",
    "AcceptedDate": "accepted_date",
    "ReportedDate": "reported_date",
    "DonationType": "donation_type",
    "NatureOfDonation": "nature",
    "ReturnedDate": "returned_date",
    "ReasonForImpermissibility": "impermissibility_reason",
    "AttemptedConcealment": "attempted_concealment",
    "IsAnonymous": "is_anonymous",
    "IsSponsorship": "is_sponsorship",
    "AccountingUnitName": "accounting_unit",
    "RegulatedEntityName": "regulated_entity",
    "ECRef": "ec_ref",
}


def parse_ms_date(val):
    """`/Date(1774998000000)/` -> 'YYYY-MM-DD' (UTC). None/'' -> None."""
    if not val:
        return None
    m = _DATE_RE.search(str(val))
    if not m:
        return None
    secs = int(m.group(1)) / 1000.0
    return dt.datetime.fromtimestamp(secs, dt.timezone.utc).date().isoformat()


def fetch_page(start, rows, since, until):
    params = {
        "start": start, "rows": rows, "query": "",
        "sort": "AcceptedDate", "order": "desc",
        "et": "pp", "date": "Accepted", "register": "gb",
        "from": since, "to": until,
        "isIrishSourceYes": "true", "isIrishSourceNo": "true",
        "includeOutsideSection75": "true",
    }
    url = API + "?" + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers={"Accept": "application/json", "User-Agent": "show-the-working/follow-money"})
    with urllib.request.urlopen(req, timeout=60) as r:
        return json.loads(r.read())


def normalise(row):
    out = {}
    for ec_key, clean in FIELD_MAP.items():
        v = row.get(ec_key)
        if clean in ("accepted_date", "reported_date", "returned_date"):
            v = parse_ms_date(v)
        elif clean == "value":
            v = float(v) if v not in (None, "") else 0.0
        elif clean == "nature" and v == "None":
            v = None
        out[clean] = v
    return out


def tally(donations):
    """Seed of Block 2 sub-metrics 1-5: count + value share by the EC's OWN donor
    status categories. No invented taxonomy; no composite grade."""
    by_status = {}
    total_val = 0.0
    returned = 0
    concealment = 0
    for d in donations:
        s = d["donor_status"] or "Unknown"
        b = by_status.setdefault(s, {"count": 0, "value": 0.0})
        b["count"] += 1
        b["value"] += d["value"]
        total_val += d["value"]
        if d["returned_date"] or d["impermissibility_reason"]:
            returned += 1
        if d["attempted_concealment"]:
            concealment += 1
    for s, b in by_status.items():
        b["value_share"] = round(b["value"] / total_val, 4) if total_val else 0.0
    return {
        "count": len(donations),
        "value": round(total_val, 2),
        "by_donor_status": dict(sorted(by_status.items(), key=lambda kv: -kv[1]["value"])),
        "impermissible_or_returned_count": returned,
        "attempted_concealment_count": concealment,
    }


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--since", help="ISO date floor (default: config window_since)")
    ap.add_argument("--slug", help="only write this one party (still pulls full window)")
    args = ap.parse_args()

    cfg = json.loads(CONFIG.read_text())
    since = args.since or cfg["window_since"]
    until = dt.date.today().isoformat()

    # exact RegulatedEntityName -> slug/party
    name_to_party = {}
    for p in cfg["parties"]:
        for n in p["ec_entity_names"]:
            name_to_party[n] = p
    wanted_names = set(name_to_party)

    print(f"Pulling EC party donations {since} .. {until} (page size {PAGE})", file=sys.stderr)
    buckets = {p["slug"]: [] for p in cfg["parties"]}
    start, total = 0, None
    while True:
        d = fetch_page(start, PAGE, since, until)
        total = d.get("Total") if total is None else total
        rows = d.get("Result") or []
        if not rows:
            break
        for row in rows:
            name = row.get("RegulatedEntityName")
            if name in wanted_names:
                buckets[name_to_party[name]["slug"]].append(normalise(row))
        start += PAGE
        print(f"  {min(start, total or start)}/{total}  matched-so-far={sum(len(v) for v in buckets.values())}", file=sys.stderr)
        if total and start >= total:
            break
        time.sleep(0.3)  # be polite to the EC API

    OUT_DIR.mkdir(exist_ok=True)
    generated_at = dt.datetime.now(dt.timezone.utc).replace(microsecond=0, tzinfo=None).isoformat() + "Z"
    for p in cfg["parties"]:
        if args.slug and p["slug"] != args.slug:
            continue
        ds = sorted(buckets[p["slug"]], key=lambda d: d["accepted_date"] or "", reverse=True)
        reported_up_to = max((d["reported_date"] for d in ds if d["reported_date"]), default=None)
        doc = {
            "party": p["party"],
            "slug": p["slug"],
            "source": "Electoral Commission donations & loans register",
            "source_url": SEARCH_UI.format(q=urllib.parse.quote(p["ec_entity_names"][0])),
            "ec_entity_names": p["ec_entity_names"],
            "window_since": since,
            "reported_up_to": reported_up_to,
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
