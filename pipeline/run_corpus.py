"""Corpus orchestrator — run the pipeline over many policies, safely.

    ./.venv/bin/python pipeline/run_corpus.py [policy_dir]     # default: policies/

Safety (so a failing/expensive run stops itself):
  - SPEND CAP (PL_MAX_SPEND, $): aborts before starting a new policy once cumulative
    Anthropic cost (summed from written records) reaches the cap.
  - CIRCUIT BREAKER (PL_CIRCUIT_BREAK_N): halts if nothing has published after the first
    N attempts, or after N crashes — i.e. something is systemically wrong.
  - RESUMABLE: skips policies already in data/ or data/_blocked/ — re-run to continue;
    nothing is re-paid.
Each policy runs as its own subprocess (a crash in one can't take down the run).
Set PL_STRONG_MODEL=claude-sonnet-4-6 for the hybrid (synthesis+verifier on Anthropic).
"""
import json
import os
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
VENV_PY = ROOT / ".venv" / "bin" / "python"
MAX_SPEND = float(os.environ.get("PL_MAX_SPEND", "15"))
BREAK_N = int(os.environ.get("PL_CIRCUIT_BREAK_N", "3"))


def _records(*dirs):
    for d in dirs:
        if d.exists():
            for f in d.glob("*.json"):
                yield f


def _cost_of(f):
    try:
        return float(json.loads(f.read_text()).get("meta", {}).get("cost_equiv_usd", 0) or 0)
    except Exception:
        return 0.0


def main(policy_dir="policies"):
    data, blocked = ROOT / "data", ROOT / "data" / "_blocked"
    policies = sorted(p for p in (ROOT / policy_dir).glob("*.json")
                      if not p.name.endswith(".extraction.json"))
    done = {f.stem for f in _records(data, blocked)}
    spent = sum(_cost_of(f) for f in _records(data, blocked))

    print(f"corpus: {len(policies)} policies in {policy_dir}/ | {len(done)} already done | "
          f"spend so far ${spent:.2f} | cap ${MAX_SPEND} | breaker N={BREAK_N}", flush=True)

    processed = published = blocked_n = errored = skipped = 0
    for p in policies:
        pid = p.stem
        if pid in done:
            continue
        if spent >= MAX_SPEND:
            print(f"⛔ SPEND CAP reached (${spent:.2f} ≥ ${MAX_SPEND}). Stopping. "
                  f"Raise PL_MAX_SPEND and re-run to resume.", flush=True)
            break

        print(f"--- {pid} ---", flush=True)
        r = subprocess.run([str(VENV_PY), str(ROOT / "pipeline" / "run.py"), pid],
                           env=os.environ.copy())
        processed += 1

        pub_f, blk_f = data / f"{pid}.json", blocked / f"{pid}.json"
        if pub_f.exists():
            published += 1
            c = _cost_of(pub_f); spent += c
            print(f"  ✅ published  +${c:.3f}  (total ${spent:.2f})", flush=True)
        elif blk_f.exists():
            blocked_n += 1
            c = _cost_of(blk_f); spent += c
            print(f"  ⛔ blocked by verifier  +${c:.3f}  (total ${spent:.2f})", flush=True)
        elif r.returncode == 3:
            # grounding empty (e.g. Gemini outage) — skipped before any spend; resume later
            skipped += 1
            print(f"  ⏭️  skipped — grounding empty, no spend; will retry on resume", flush=True)
        else:
            errored += 1
            print(f"  💥 ERROR — no record written (exit {r.returncode})", flush=True)

        # circuit breaker — something systemically wrong
        if published == 0 and (processed - skipped) >= BREAK_N:
            print(f"⛔ CIRCUIT BREAKER: {processed - skipped} real attempts, 0 published. Halting — "
                  f"fix the systemic issue, then resume.", flush=True)
            break
        if errored >= BREAK_N:
            print(f"⛔ CIRCUIT BREAKER: {errored} crashes. Halting.", flush=True)
            break
        if skipped >= BREAK_N:
            print(f"⛔ GROUNDING OUTAGE: {skipped} policies skipped (grounding empty). Halting — "
                  f"likely a transient Gemini outage; resume later, nothing was spent on them.", flush=True)
            break

    print(f"\n=== done: {published} published, {blocked_n} blocked, {errored} errored, "
          f"{skipped} skipped of {processed} attempted | total spend ${spent:.2f} ===", flush=True)


if __name__ == "__main__":
    main(sys.argv[1] if len(sys.argv) > 1 else "policies")
