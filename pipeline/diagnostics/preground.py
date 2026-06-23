"""Phase 1 — pre-ground every corpus policy into the new evidence-unit format, ONCE, up front.

Decouples the free-but-flaky Gemini grounding from the paid verdict run: grounding is cached per
policy (corpus/grounding/<pid>.json), so the later run never stalls on a Gemini 503. Resumable —
skips policies already grounded; re-run to finish any the outages left behind.

    ./.venv/bin/python pipeline/preground.py            # all corpus policies
    ./.venv/bin/python pipeline/preground.py grn        # one party (by slug prefix)
"""
import json
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from run_verdict import _grounding

ROOT = Path(__file__).resolve().parent.parent


def main(slug=None):
    pat = f"{slug}-[0-9]*.json" if slug else "*-[0-9]*.json"
    files = sorted(f for f in (ROOT / "corpus").glob(pat)
                   if not f.name.endswith((".extraction.json", ".normalized.json")))
    gdir = ROOT / "corpus" / "grounding"
    done = errored = fresh = 0
    print(f"pre-grounding: {len(files)} policies", flush=True)
    for f in files:
        p = json.loads(f.read_text())
        if "bearing_set" not in p:  # only policies that will actually be analysed
            continue
        gf = gdir / f"{p['policy_id']}.json"
        if gf.exists() and "evidence" in json.loads(gf.read_text()):
            done += 1
            continue
        try:
            g = _grounding(p)   # fetches + caches (new evidence-unit format)
            fresh += 1
            print(f"  ✓ {p['policy_id'][:46]:<46} {len(g.get('evidence', []))} evidence units", flush=True)
        except Exception as e:
            errored += 1
            print(f"  ✗ {p['policy_id'][:46]:<46} {str(e)[:70]}", flush=True)
    print(f"\n=== pre-grounding: {fresh} grounded, {done} already cached, {errored} failed "
          f"(re-run to retry failures) ===", flush=True)


if __name__ == "__main__":
    main(sys.argv[1] if len(sys.argv) > 1 else None)
