"""Stage B (directional) — generate D1 (immigration & border control) reads for the policies that
materially touch immigration. DIRECTIONAL = we report which way it moves things (more open <-> more
controlled), NO improves/worsens; the reader supplies the valence.

Pre-filters the corpus by immigration keywords (cheap), then runs directional_for on each. The model
itself returns 'no material change' if a keyword-matched policy doesn't really move immigration, so
the filter only needs to be inclusive, not precise. Writes data_directional/<pid>__D1.json — a SEPARATE
dir so it doesn't enter the valenced build until the UI phase wires it in. Resumable + spend-capped.

    PL_STRONG_MODEL=claude-sonnet-4-6 PL_MAX_SPEND=N ./.venv/bin/python pipeline/run_directional.py
"""
import json
import os
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from run_verdict import directional_for, directional_prefix

ROOT = Path(__file__).resolve().parent.parent
MODEL = os.environ.get("PL_STRONG_MODEL", "claude-sonnet-4-6")
MAX_SPEND = float(os.environ.get("PL_MAX_SPEND", "15"))
OUT = ROOT / "data_directional"

# inclusive immigration/border keyword filter (the model downgrades non-material matches to 'no material change')
_KW = re.compile(r"\b(immigrat|migrant|migration|border|asylum|refugee|\bvisa|deport|small boat|"
                 r"channel crossing|points-based|net migration|work permit|settlement|citizenship|"
                 r"right to remain|illegal entr|foreign national|skilled worker|student visa|"
                 r"indefinite leave|ECHR|human rights act|sponsor|home office)\b", re.I)


def main():
    OUT.mkdir(exist_ok=True)
    files = sorted(f for f in (ROOT / "corpus").glob("*-[0-9]*.json")
                   if not f.name.endswith((".extraction.json", ".normalized.json")))
    cand = []
    for f in files:
        p = json.loads(f.read_text())
        if "bearing_set" not in p:
            continue
        blob = (p.get("policy_title", "") + " " + p.get("stated", ""))
        if _KW.search(blob):
            cand.append(p)
    print(f"directional D1: {len(cand)} immigration-relevant policies (of {len(files)})", flush=True)
    vpre = directional_prefix("D1")
    spent = sum(json.loads(f.read_text()).get("meta", {}).get("cost_equiv_usd", 0) or 0
                for f in OUT.glob("*.json"))
    done = nomat = gaps = errored = 0
    for p in cand:
        ckpt = OUT / f"{p['policy_id']}__D1.json"
        if ckpt.exists():
            continue
        if spent >= MAX_SPEND:
            print(f"⛔ SPEND CAP ${spent:.2f} ≥ ${MAX_SPEND}. Re-run to resume.", flush=True)
            break
        try:
            verdict, meta = directional_for(p, "D1", vpre, MODEL)
        except Exception as e:
            errored += 1
            print(f"  💥 {p['policy_id'][:40]}: {str(e)[:80]}", flush=True)
            continue
        spent += meta["cost_equiv_usd"]
        if verdict is None:
            gaps += 1
            ckpt.write_text(json.dumps({"policy_id": p["policy_id"], "party": p["party"],
                                        "policy_title": p["policy_title"], "measure": "D1",
                                        "gap": meta.get("gap", "unsourced"), "meta": meta}, indent=2))
            continue
        rec = {"policy_id": p["policy_id"], "party": p["party"], "policy_title": p["policy_title"],
               "measure": "D1", "verdict": verdict, "meta": meta}
        ckpt.write_text(json.dumps(rec, indent=2))
        done += 1
        if verdict.get("shift") == "no material change":
            nomat += 1
        print(f"  ✅ {p['policy_id'][:38]:<38} {verdict.get('shift','?'):20} mag={verdict.get('magnitude','?'):8} (${spent:.2f})", flush=True)
    print(f"\n=== D1 directional: {done} read ({nomat} 'no material change'), {gaps} gaps, {errored} errored | spend ${spent:.2f} ===", flush=True)


if __name__ == "__main__":
    main()
