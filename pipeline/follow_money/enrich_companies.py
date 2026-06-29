#!/usr/bin/env python3
"""Follow the Money — Companies House enrichment (Block 2 sub-metric 6 + ownership flag).

For every COMPANY donor in money_data/<slug>.json, look up Companies House by the
registration number the EC already recorded (deterministic key join — no fuzzy
matching), and fold two things into each donation record:
  - accounts_type   -> the company's OWN last-filed accounts category (dormant /
                       micro / full ...). Quoted raw; never labelled "shell".
  - ownership (PSC) -> persons with significant control, with the CH-recorded
                       country of residence / registration (the foreign-ownership
                       flag). Bare facts; the reader infers.

Free, local, NO LLM. Companies House REST API: HTTP Basic auth, key as username,
empty password; 600 requests / 5 min. We cache every lookup by company number in
money_data/_ch_cache.json so repeat donors and re-runs cost nothing.

Run AFTER fetch_ec_donations.py (the puller writes un-enriched ledgers; this folds
CH data in). Idempotent: re-running only fetches companies not already cached.

Usage:
    python3 pipeline/follow_money/enrich_companies.py [--slug lab] [--refresh]
"""
import argparse
import base64
import datetime as dt
import json
import re
import sys
import time
import urllib.error
import urllib.request
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
OUT_DIR = ROOT / "money_data"
CACHE = OUT_DIR / "_ch_cache.json"
ENV = ROOT / ".env"

CH = "https://api.company-information.service.gov.uk"
THROTTLE = 0.2  # seconds between calls — keeps us well under 600 / 5 min

# CH account-type strings that mean the company files minimal financial detail.
# Used ONLY for a neutral tally; the raw string is always shown, never relabelled.
LOW_DISCLOSURE_ACCOUNTS = {"dormant", "micro-entity", "total-exemption-micro", "no-accounts-filed"}

UK_COUNTRIES = {"united kingdom", "uk", "gb", "great britain", "england", "wales", "scotland",
                "northern ireland", "england and wales", "england wales", "great britain and northern ireland"}


def _norm_place(s):
    """Normalise a CH country string for UK matching ('England & Wales' -> 'england and wales')."""
    return (s or "").strip().lower().replace("&", "and").replace("  ", " ")


def place_outside_uk(place):
    p = _norm_place(place)
    return bool(p) and p not in UK_COUNTRIES


def controller_outside_uk(c):
    """A PSC counts as outside-UK if its CH-recorded residence (individuals) or registration
    country (corporates) is outside the UK. Nationality is recorded but NOT used (a non-British
    nationality resident in the UK is not 'control from outside the UK')."""
    return place_outside_uk(c.get("country_of_residence")) or place_outside_uk(c.get("country_registered"))

NON_UK_CONTROLLER_DEF = (
    "true if Companies House records at least one person/entity with significant control whose "
    "country of residence (individuals) or country of registration (corporates) is outside the UK"
)


def load_key():
    for line in ENV.read_text().splitlines():
        m = re.match(r"(?:export\s+)?COMPANIES_HOUSE_API_KEY=(.+)", line.strip())
        if m:
            return m.group(1).strip().strip('"').strip("'")
    sys.exit("COMPANIES_HOUSE_API_KEY not found in .env")


def pad(num):
    """CH company numbers are 8 chars. Pure-numeric EC values are zero-padded;
    letter-prefixed ones (SC…, NI…, OC…) are already correct — just upper-cased."""
    num = str(num).strip().upper()
    return num.zfill(8) if num.isdigit() else num


class CH_Client:
    def __init__(self, key):
        self.auth = "Basic " + base64.b64encode((key + ":").encode()).decode()

    def get(self, path):
        req = urllib.request.Request(CH + path, headers={"Authorization": self.auth})
        for attempt in range(4):
            try:
                with urllib.request.urlopen(req, timeout=30) as r:
                    return r.status, json.loads(r.read())
            except urllib.error.HTTPError as e:
                if e.code == 404:
                    return 404, None
                if e.code == 429:  # rate-limited — back off and retry
                    time.sleep(5 * (attempt + 1))
                    continue
                return e.code, None
            except Exception:
                time.sleep(1 + attempt)
        return None, None


def lookup_company(client, num):
    """Return the cacheable enrichment record for one company number, or a gap."""
    st, prof = client.get(f"/company/{num}")
    if st != 200 or not prof:
        return {"resolved": False, "gap": f"company {num} not found on Companies House (HTTP {st})"}
    last = (prof.get("accounts") or {}).get("last_accounts") or {}
    accounts_type = last.get("type")

    sst, psc = client.get(f"/company/{num}/persons-with-significant-control")
    controllers = []
    for p in (psc.get("items") if isinstance(psc, dict) else None) or []:
        if p.get("ceased") or p.get("ceased_on"):
            continue
        ident = p.get("identification") or {}
        controllers.append({
            "name": p.get("name"),
            "kind": p.get("kind"),
            "nationality": p.get("nationality"),
            "country_of_residence": p.get("country_of_residence"),
            "country_registered": ident.get("country_registered"),
        })

    # Cache RAW facts only. Derived flags (low-disclosure, outside-UK control) are computed at
    # fold-in time so the definitions can change without re-hitting the API.
    return {
        "resolved": True,
        "ch_name": prof.get("company_name"),
        "status": prof.get("company_status"),
        "incorporated": prof.get("date_of_creation"),
        "accounts_type": accounts_type,            # raw CH string — quote, don't relabel
        "accounts_made_up_to": last.get("made_up_to"),
        "controllers": controllers,                # raw PSC facts
        "psc_status": "none-recorded" if sst == 200 and not controllers else ("ok" if sst == 200 else f"http-{sst}"),
    }


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--slug", help="only enrich this party's ledger")
    ap.add_argument("--refresh", action="store_true", help="ignore cache and re-fetch every company")
    args = ap.parse_args()

    client = CH_Client(load_key())
    cache = {} if args.refresh else (json.loads(CACHE.read_text()) if CACHE.exists() else {})

    ledgers = sorted(OUT_DIR.glob("*.json"))
    ledgers = [p for p in ledgers if not p.name.startswith("_")]
    if args.slug:
        ledgers = [p for p in ledgers if p.stem == args.slug]

    # 1) collect unique company numbers needing a lookup
    needed = {}
    for lp in ledgers:
        for d in json.loads(lp.read_text())["donations"]:
            if d["donor_status"] == "Company" and d.get("company_number"):
                needed[pad(d["company_number"])] = True
    to_fetch = [n for n in needed if n not in cache]
    print(f"{len(needed)} unique company donors; {len(to_fetch)} need fetching "
          f"({len(needed) - len(to_fetch)} cached). ~{len(to_fetch) * 2} CH calls.", file=sys.stderr)

    # 2) fetch + cache
    for i, num in enumerate(to_fetch, 1):
        cache[num] = lookup_company(client, num)
        if i % 20 == 0 or i == len(to_fetch):
            print(f"  fetched {i}/{len(to_fetch)}", file=sys.stderr)
            CACHE.write_text(json.dumps(cache, indent=2, ensure_ascii=False))  # checkpoint
        time.sleep(THROTTLE)
    CACHE.write_text(json.dumps(cache, indent=2, ensure_ascii=False))

    # 3) fold enrichment into each ledger + extend the summary
    fetched_at = dt.datetime.now(dt.timezone.utc).replace(microsecond=0, tzinfo=None).isoformat() + "Z"
    for lp in ledgers:
        doc = json.loads(lp.read_text())
        resolved = non_uk = low_disc = 0
        non_uk_value = low_disc_value = 0.0
        for d in doc["donations"]:
            if d["donor_status"] == "Company" and d.get("company_number"):
                enr = cache.get(pad(d["company_number"]))
                d["company"] = enr
                if enr and enr.get("resolved"):
                    resolved += 1
                    ctrls = enr.get("controllers") or []
                    enr["non_uk_controller"] = any(controller_outside_uk(c) for c in ctrls) if ctrls else None
                    enr["low_disclosure_accounts"] = enr.get("accounts_type") in LOW_DISCLOSURE_ACCOUNTS
                    if enr["non_uk_controller"]:
                        non_uk += 1; non_uk_value += d["value"]
                    if enr["low_disclosure_accounts"]:
                        low_disc += 1; low_disc_value += d["value"]
        doc["companies_house"] = {
            "enriched_at": fetched_at,
            "non_uk_controller_definition": NON_UK_CONTROLLER_DEF,
            "company_donations_resolved": resolved,
            "non_uk_controller_count": non_uk,
            "non_uk_controller_value": round(non_uk_value, 2),
            "low_disclosure_accounts_count": low_disc,
            "low_disclosure_accounts_value": round(low_disc_value, 2),
        }
        lp.write_text(json.dumps(doc, indent=2, ensure_ascii=False))
        print(f"  {doc['slug']}: {resolved} companies resolved | "
              f"{non_uk} non-UK-controlled (£{non_uk_value:,.0f}) | "
              f"{low_disc} low-disclosure-accounts (£{low_disc_value:,.0f})", file=sys.stderr)


if __name__ == "__main__":
    main()
