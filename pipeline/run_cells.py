"""Stage B orchestrator — run every (policy, fundamental) verdict, safely.

Iterates the membership bearing-sets FUNDAMENTAL-MAJOR (all of one fundamental's policies together) so
the cached verdict prefix stays warm within its TTL. Each verdict is checkpointed to
data_verdicts/<policy_id>__<fundamental>.json — resumable (skips done), spend-capped, circuit-broken.

    PL_STRONG_MODEL=claude-sonnet-4-6 PL_MAX_SPEND=N ./.venv/bin/python pipeline/run_cells.py [fundamental] [slug]
      (no args = whole corpus; one fundamental and/or one party slug = a validation slice)
"""
import json
import os
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from run_verdict import verdict_for, verdict_prefix, verify_prefix

ROOT = Path(__file__).resolve().parent.parent
MODEL = os.environ.get("PL_STRONG_MODEL", "claude-sonnet-4-6")
MAX_SPEND = float(os.environ.get("PL_MAX_SPEND", "15"))
BREAK_N = int(os.environ.get("PL_CIRCUIT_BREAK_N", "4"))
OUT = ROOT / "data_verdicts"


def main(fund_filter=None, slug_filter=None):
    policies = {}
    for f in sorted((ROOT / "corpus").glob("*-[0-9]*.json")):
        p = json.loads(f.read_text())
        if "bearing_set" in p:
            policies[p["policy_id"]] = p

    # work list, fundamental-major (group cache-sharing calls together)
    work = []
    for pid, p in policies.items():
        if slug_filter and not pid.startswith(slug_filter + "-"):
            continue
        for b in p["bearing_set"]:
            if fund_filter and b["outcome"] != fund_filter:
                continue
            work.append((b["outcome"], pid))
    work.sort()  # outcome-major then policy_id
    OUT.mkdir(exist_ok=True)

    spent = sum(json.loads(f.read_text()).get("meta", {}).get("cost_equiv_usd", 0) or 0
                for f in OUT.glob("*.json"))
    done = published = errored = gaps = 0
    cur_fund = None; vpre = vqpre = None
    print(f"stage B: {len(work)} verdicts to run | model {MODEL} | cap ${MAX_SPEND} | prior spend ${spent:.2f}", flush=True)

    for fund, pid in work:
        ckpt = OUT / f"{pid}__{fund}.json"
        if ckpt.exists():
            continue
        if spent >= MAX_SPEND:
            print(f"⛔ SPEND CAP ${spent:.2f} ≥ ${MAX_SPEND}. Stopping; re-run to resume.", flush=True)
            break
        if fund != cur_fund:  # build the cached prefixes once per fundamental
            cur_fund = fund
            vpre, vqpre = verdict_prefix(fund), verify_prefix(fund)
        p = policies[pid]
        try:
            verdict, meta = verdict_for(p, fund, vpre, vqpre, MODEL)
        except Exception as e:
            # a failed call (esp. truncation) still BURNS output tokens though it writes no record —
            # charge a conservative estimate against the cap so waste can't silently drain credit.
            spent += 0.30
            if "truncat" in str(e).lower():
                # genuine degenerate-output pathology on this input: log a COVERAGE GAP (surfaced, not
                # silently dropped) and carry on — don't count it as a systemic error / trip the breaker.
                gaps += 1
                ckpt.write_text(json.dumps({
                    "policy_id": pid, "party": p["party"], "policy_title": p["policy_title"],
                    "outcome": fund, "gap": "truncation",
                    "meta": {"cost_equiv_usd": 0.30, "note": "verdict truncated through all effort tiers — logged coverage gap for manual review"}}, indent=2))
                print(f"  ⏭️  {pid}__{fund}: truncation gap (logged; ${spent:.2f})", flush=True)
                continue
            errored += 1
            print(f"  💥 {pid}__{fund}: {str(e)[:90]} (charged ~$0.30 est; ${spent:.2f})", flush=True)
            if errored >= BREAK_N:
                print(f"⛔ CIRCUIT BREAKER: {errored} errors. Halting.", flush=True)
                break
            continue
        spent += meta["cost_equiv_usd"]
        if verdict is None:  # provenance gate found nothing verbatim-bindable -> typed coverage gap
            gaps += 1
            ckpt.write_text(json.dumps({"policy_id": pid, "party": p["party"], "policy_title": p["policy_title"],
                                        "outcome": fund, "gap": meta.get("gap", "unsourced"), "meta": meta}, indent=2))
            print(f"  ⏭️  {pid[:36]:<36} {fund} unsourced-gap (no verbatim-bound claim; ${spent:.2f})", flush=True)
            continue
        rec = {"policy_id": pid, "party": p["party"], "policy_title": p["policy_title"],
               "outcome": fund, "verdict": verdict, "meta": meta}
        ckpt.write_text(json.dumps(rec, indent=2))
        done += 1
        passed = meta["verifier"].get("passed")
        published += 1 if passed else 0
        rev = len(meta["revisions"]); ndrop = len(meta.get("gate", {}).get("dropped", []))
        flag = "✅" if passed else "⛔"
        print(f"  {flag} {pid[:34]:<34} {fund} {verdict['direction']:<13} "
              f"rev{rev} drop{ndrop} +${meta['cost_equiv_usd']:.3f} (${spent:.2f})", flush=True)

    print(f"\n=== stage B: {done} run, {published} passed, {done-published} blocked, {gaps} gaps, "
          f"{errored} errored | spend ${spent:.2f} ===", flush=True)


if __name__ == "__main__":
    main(sys.argv[1] if len(sys.argv) > 1 else None,
         sys.argv[2] if len(sys.argv) > 2 else None)
