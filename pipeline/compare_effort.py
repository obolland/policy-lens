"""Effort A/B harness — generate LOW-effort verdicts to compare against the existing MEDIUM ones.

For chosen policies (same fundamental, same cached grounding), produce the low-effort verdict and pair
it with the medium verdict already in data_verdicts/. Only the effort posture differs — a clean A/B.
Writes compare/<pid>.json {policy, grounding, medium, low} for blind judging.

    PL_STRONG_MODEL=claude-sonnet-4-6 ./.venv/bin/python pipeline/compare_effort.py O9 ref-95 ref-102 ref-40 ref-101 ref-98
"""
import json
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from run_verdict import verdict_for, verdict_prefix, verify_prefix, _grounding

ROOT = Path(__file__).resolve().parent.parent


def main(fundamental, prefixes):
    cdir = ROOT / "compare"; cdir.mkdir(exist_ok=True)
    vpre, vqpre = verdict_prefix(fundamental), verify_prefix(fundamental)
    total = 0.0
    for pref in prefixes:
        pol_files = list((ROOT / "corpus").glob(f"{pref}-*.json"))
        med_files = list((ROOT / "data_verdicts").glob(f"{pref}-*__{fundamental}.json"))
        if not pol_files or not med_files:
            print(f"  skip {pref}: missing corpus or medium verdict", flush=True); continue
        policy = json.loads(pol_files[0].read_text())
        med = json.loads(med_files[0].read_text())
        g = _grounding(policy)
        # LOW posture: low effort, escalate only to thinking-off on truncation
        low_v, low_meta = verdict_for(policy, fundamental, vpre, vqpre, tiers=[("low", False), ("low", True)])
        total += low_meta["cost_equiv_usd"]
        (cdir / f"{policy['policy_id']}.json").write_text(json.dumps({
            "policy_id": policy["policy_id"], "policy_title": policy["policy_title"],
            "stated": policy.get("stated", ""),
            "grounding_text": g.get("text", ""), "sources": g.get("sources", []),
            "medium": {"verdict": med["verdict"], "meta": med["meta"]},
            "low": {"verdict": low_v, "meta": low_meta},
        }, indent=2))
        print(f"  {policy['policy_id'][:40]:<40} medium={med['verdict']['direction']:<13} "
              f"low={low_v['direction']:<13} (low +${low_meta['cost_equiv_usd']:.3f})", flush=True)
    print(f"\ngenerated {len(prefixes)} low verdicts for comparison | low-side cost ${total:.2f}", flush=True)


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2:])
