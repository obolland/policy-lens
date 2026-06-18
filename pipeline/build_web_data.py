"""Data bridge: turn pipeline output (data/*.json) into the frontend's data file.

    python3 pipeline/build_web_data.py            # -> web/data.generated.js (safe, non-destructive)
    python3 pipeline/build_web_data.py --publish   # -> web/data.js (what the live site reads)

Flattens each record's `synthesis` (per_outcome + false_balance_check) to the top level,
which is the shape the UI expects, and keeps steelman/redteam for the "Dig" view.
"""
import json
import sys
import datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

PARTY_ORDER = ["Labour", "Conservative", "Liberal Democrat", "Reform UK", "Green",
               "Plaid Cymru", "SNP"]


def main(publish=False):
    outcomes_cfg = json.loads((ROOT / "config/outcomes.json").read_text())
    outcomes = [{"id": o["id"], "name": o["name"], "plain": o["plain"]}
                for o in outcomes_cfg["outcomes"]]

    levers_cfg = json.loads((ROOT / "config/levers.json").read_text())
    levers = {
        "principle": levers_cfg["principle"],
        "lens_note": levers_cfg["lens_note"],
        "items": [{"name": l["name"], "why": l["why"], "affects": l["affects"]}
                  for l in levers_cfg["levers"]],
    }

    records = []
    for f in sorted((ROOT / "data").glob("*.json")):
        if f.name.startswith("run."):
            continue
        r = json.loads(f.read_text())
        syn = r.get("synthesis", {})
        records.append({
            "policy_id": r["policy_id"],
            "party": r["party"],
            "policy_title": r["policy_title"],
            "source": r.get("source"),
            "per_outcome": syn.get("per_outcome", []),
            "false_balance_check": syn.get("false_balance_check", {}),
            "steelman": r.get("steelman"),
            "redteam": r.get("redteam"),
            "meta": r.get("meta", {}),
        })

    parties_present = {r["party"] for r in records}
    parties = [p for p in PARTY_ORDER if p in parties_present] + \
              sorted(p for p in parties_present if p not in PARTY_ORDER)

    payload = {
        "generated_at": datetime.date.today().isoformat(),
        "disclaimer": "Source-checked analysis from the Policy Lens pipeline. Every verdict is challengeable — check its sources.",
        "outcomes": outcomes,
        "levers": levers,
        "parties": parties,
        "records": records,
    }

    out = ROOT / "web" / ("data.js" if publish else "data.generated.js")
    out.write_text("/* GENERATED from data/*.json by build_web_data.py — do not edit by hand. */\n"
                   "window.POLICY_DATA = " + json.dumps(payload, indent=2) + ";\n")
    print(f"wrote {out}  ({len(records)} record(s), parties: {', '.join(parties) or 'none'})")


if __name__ == "__main__":
    main(publish="--publish" in sys.argv)
