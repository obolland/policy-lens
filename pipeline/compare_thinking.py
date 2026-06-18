"""A/B harness — thinking-ON (current low) vs thinking-OFF, same v3 prompt + cached grounding.

Only the thinking setting differs, so a blind panel can judge whether disabling thinking (≈6x cheaper,
truncation-free) costs quality on hard contested verdicts. Writes compare/<pid>.json {on, off}.

    PL_STRONG_MODEL=claude-sonnet-4-6 ./.venv/bin/python pipeline/compare_thinking.py O9 ref-95 ref-102 ref-40 ref-101 ref-98
"""
import json, sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent))
from run_verdict import verdict_for, verdict_prefix, verify_prefix, _grounding

ROOT = Path(__file__).resolve().parent.parent


def main(fundamental, prefixes):
    cdir = ROOT / "compare"; cdir.mkdir(exist_ok=True)
    vpre, vqpre = verdict_prefix(fundamental), verify_prefix(fundamental)
    total = 0.0
    for pref in prefixes:
        pf = list((ROOT / "corpus").glob(f"{pref}-*.json"))
        if not pf:
            print(f"  skip {pref}: no corpus file", flush=True); continue
        policy = json.loads(pf[0].read_text())
        g = _grounding(policy)
        try:
            on_v, on_m = verdict_for(policy, fundamental, vpre, vqpre, tiers=[("low", False), ("low", True)])
            off_v, off_m = verdict_for(policy, fundamental, vpre, vqpre, tiers=[("low", True)])
        except Exception as e:
            print(f"  skip {pref}: {str(e)[:90]}", flush=True); continue
        total += on_m["cost_equiv_usd"] + off_m["cost_equiv_usd"]
        (cdir / f"{policy['policy_id']}.json").write_text(json.dumps({
            "policy_id": policy["policy_id"], "policy_title": policy["policy_title"],
            "stated": policy.get("stated", ""), "grounding_text": g.get("text", ""), "sources": g.get("sources", []),
            "on": {"verdict": on_v, "meta": on_m}, "off": {"verdict": off_v, "meta": off_m},
        }, indent=2))
        print(f"  {policy['policy_id'][:38]:<38} on={on_v['direction']:<13}(${on_m['cost_equiv_usd']:.3f}) "
              f"off={off_v['direction']:<13}(${off_m['cost_equiv_usd']:.3f})", flush=True)
    print(f"\nA/B generated | total ${total:.2f}", flush=True)


if __name__ == "__main__":
    main(sys.argv[1], sys.argv[2:])
