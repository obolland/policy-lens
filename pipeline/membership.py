"""Stage A — MEMBERSHIP. The authoritative bearing-set per policy (replaces candidate_outcomes).

For each extracted+normalised corpus policy, decide which of the 9 fundamentals it GENUINELY bears on
(would earn a real, non-negligible verdict), on Sonnet (the reliable judge Gemini couldn't be).
Party-blind. Writes the bearing_set back into each corpus policy file and a corpus/membership.json
table. Enforces the NO-ORPHAN invariant: a policy with an empty bearing_set is logged to an explicit
"bears on nothing material" ledger, never silently dropped.

    PL_STRONG_MODEL=claude-sonnet-4-6 ./.venv/bin/python pipeline/membership.py        # all parties
    PL_STRONG_MODEL=claude-sonnet-4-6 ./.venv/bin/python pipeline/membership.py lab    # one party

Resumable: skips policies that already have a bearing_set. Spend-capped (PL_MAX_SPEND).
"""
import json
import os
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from anthropic_runner import run_cached, SYSTEM_PROMPT

ROOT = Path(__file__).resolve().parent.parent
MODEL = os.environ.get("PL_STRONG_MODEL", "claude-sonnet-4-6")
MAX_SPEND = float(os.environ.get("PL_MAX_SPEND", "10"))
# PL_MERGE_BEARINGS=1: re-run the (updated, tradeoff-aware) membership prompt over policies that
# already have a bearing_set, and UNION any newly-found bearings (esp. harm-side) onto the existing
# set — never dropping a bearing we already generated a verdict for. Marked with membership_pass so
# the merge stays resumable. This is the additive re-run for the "tradeoff sweep" change.
MERGE = os.environ.get("PL_MERGE_BEARINGS") == "1"
MERGE_TAG = "v2frame"


def _prefix():
    crit = json.loads((ROOT / "config" / "verdict_criteria.json").read_text())
    outcomes = json.loads((ROOT / "config" / "outcomes.json").read_text())["outcomes"]
    membership_md = (ROOT / "prompts" / "membership.md").read_text()
    return (
        SYSTEM_PROMPT + "\n\n" + membership_md +
        "\n\n## The 9 fundamentals (plain)\n" + json.dumps(outcomes, indent=2) +
        "\n\n## Strict per-fundamental boundaries\n" + json.dumps(crit["fundamentals"], indent=2)
    )


def main(only=None):
    prefix = _prefix()
    schema = json.loads((ROOT / "schema" / "membership.schema.json").read_text())
    pat = f"{only}-[0-9]*.json" if only else "*-[0-9]*.json"
    files = sorted(f for f in (ROOT / "corpus").glob(pat) if not f.name.endswith((".extraction.json", ".normalized.json")))

    spent = 0.0
    done = errored = orphans = added_total = 0
    counts = {}
    mode = "MERGE/tradeoff-sweep" if MERGE else "fresh"
    print(f"membership: {len(files)} policies | model {MODEL} | cap ${MAX_SPEND} | mode {mode}", flush=True)
    for f in files:
        p = json.loads(f.read_text())
        # resumability: fresh mode skips any policy with a bearing_set; merge mode skips only those
        # already through THIS tradeoff pass (so it re-evaluates the rest and unions new bearings in).
        already = (p.get("membership_pass") == MERGE_TAG) if MERGE else ("bearing_set" in p)
        if already:
            for b in p.get("bearing_set", []):
                counts[b["outcome"]] = counts.get(b["outcome"], 0) + 1
            continue
        if spent >= MAX_SPEND:
            print(f"⛔ SPEND CAP ${spent:.2f} ≥ ${MAX_SPEND}. Stopping; re-run to resume.", flush=True)
            break
        user = f"## Policy\n{json.dumps({'policy_title': p['policy_title'], 'stated': p['stated']}, indent=2)}"
        try:
            out, usage, cost = run_cached(prefix, user, schema, MODEL,
                                          max_tokens=int(os.environ.get("PL_MEMBERSHIP_MAXTOK", "4000")))
        except Exception as e:
            errored += 1
            print(f"  💥 {p['policy_id']}: {str(e)[:100]}", flush=True)
            continue
        spent += cost; done += 1
        new_bset = out.get("bearing_set", [])
        added = []
        if MERGE:
            # UNION onto existing: keep every existing bearing (and its verdict), append only
            # outcomes not already present (the newly-surfaced harm/tradeoff bearings).
            existing = p.get("bearing_set", []) or []
            have = {b["outcome"] for b in existing}
            added = [b for b in new_bset if b["outcome"] not in have]
            bset = existing + added
            p["membership_pass"] = MERGE_TAG
        else:
            bset = new_bset
        p["bearing_set"] = bset
        p["membership_note"] = out.get("note", "")
        f.write_text(json.dumps(p, indent=2))
        if not bset:
            orphans += 1
        for b in bset:
            counts[b["outcome"]] = counts.get(b["outcome"], 0) + 1
        if MERGE:
            added_total += len(added)
            tag = (" +ADD " + ",".join(b["outcome"] for b in added)) if added else " (no new)"
            print(f"  {p['policy_id'][:40]:<40}{tag}  (${spent:.2f})", flush=True)
        else:
            ids = ",".join(b["outcome"] for b in bset) or "NONE(ledger)"
            print(f"  {p['policy_id'][:42]:<42} -> {ids}  (${spent:.2f})", flush=True)
    if MERGE:
        print(f"\n=== tradeoff sweep: {added_total} new bearings added across {done} re-evaluated ===", flush=True)

    print(f"\n=== membership done: {done} classified, {orphans} bear-on-nothing (ledger), {errored} errored "
          f"| spend ${spent:.2f} ===", flush=True)
    print(f"authoritative cluster sizes (bearing-set counts): {dict(sorted(counts.items()))}", flush=True)

    # persist the membership table + the no-orphan ledger for build-time assertion
    table, ledger = {}, []
    for f in sorted(f for f in (ROOT / "corpus").glob("*-[0-9]*.json")):
        p = json.loads(f.read_text())
        if "bearing_set" not in p:
            continue
        table[p["policy_id"]] = [b["outcome"] for b in p["bearing_set"]]
        if not p["bearing_set"]:
            ledger.append({"policy_id": p["policy_id"], "party": p["party"],
                           "policy_title": p["policy_title"], "why": p.get("membership_note", "")})
    (ROOT / "corpus" / "membership.json").write_text(json.dumps({"table": table, "bears_on_nothing_ledger": ledger}, indent=2))
    print(f"wrote corpus/membership.json ({len(table)} policies, {len(ledger)} on the bears-on-nothing ledger)", flush=True)


if __name__ == "__main__":
    main(sys.argv[1] if len(sys.argv) > 1 else None)
