"""Policy Lens pipeline — analyse one (party x policy) end to end.

    python3 pipeline/run.py <policy_id>

Stages: steel-man -> red-team -> synthesis -> verifier.
Cheap model drafts the lenses; strong model does synthesis + verifier (model tiering).
The verifier gate decides whether the record is published (data/) or blocked (data/_blocked/).
"""
import json
import os
import sys
import datetime
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from runner import run_stage  # noqa: E402  (dispatches gemini* -> Gemini, claude* -> Anthropic)

ROOT = Path(__file__).resolve().parent.parent
# Phase 1 = all-Gemini (free) to validate the re-architecture end-to-end.
# Phase 2 (hybrid) = set PL_STRONG_MODEL=claude-sonnet-4-6 to route synthesis + verifier to Anthropic.
CHEAP = os.environ.get("PL_CHEAP_MODEL", "gemini-2.5-flash")
STRONG = os.environ.get("PL_STRONG_MODEL", "gemini-2.5-flash")
MAX_REVISIONS = int(os.environ.get("PL_MAX_REVISIONS", "3"))


def load(rel):
    return json.loads((ROOT / rel).read_text())


def prompt_for(stage):
    return (ROOT / "prompts" / f"{stage}.md").read_text()


def collect_sources(steelman, redteam, synthesis):
    srcs = []
    for st in (steelman, redteam):
        for lens in st.get("by_lens", {}).values():
            srcs += lens.get("sources", [])
    for oc in synthesis.get("per_outcome", []):
        srcs += oc.get("sources", [])
    by_type = {}
    for s in srcs:
        t = s.get("source_type", "unknown")
        by_type[t] = by_type.get(t, 0) + 1
    advocacy_flag = by_type.get("advocacy", 0) > 0 or by_type.get("commercial", 0) > 0
    return {"by_type": by_type, "advocacy_flag": advocacy_flag}


def main(policy_id):
    policy = load(f"policies/{policy_id}.json")
    outcomes = load("config/outcomes.json")
    lenses = load("config/lenses.json")
    sources = load("config/sources.json")

    # retrieve-once grounding: real facts + real sources, fed to every stage.
    # Grounding is load-bearing: the verifier (correctly) blocks any analysis whose citations
    # aren't independently grounded, so an ungrounded run is DOOMED to block. Rather than pay
    # strong-model cost to discover that, bail before the pipeline if grounding comes back empty
    # (e.g. a Gemini outage that outlasts ground()'s own retries). No record is written, so the
    # corpus orchestrator simply retries this policy on the next resume once the outage clears.
    grounding = {"text": "", "sources": []}
    try:
        from ground import ground
        print("  -> grounding (web search) ...", flush=True)
        grounding = ground(policy)
        print(f"     grounded: {len(grounding['sources'])} source(s)", flush=True)
    except Exception as e:
        print(f"     grounding failed ({str(e)[:120]})", flush=True)
    if not grounding.get("text", "").strip() and not grounding.get("sources"):
        print(f"[{policy_id}] SKIPPED — grounding empty; not spending on a run that can't pass. "
              f"Resume later to retry.", flush=True)
        sys.exit(3)

    context = (
        f"## Policy under analysis\n{json.dumps(policy, indent=2)}\n\n"
        f"## Grounded research (verified via web search — base claims on this and CITE these real sources)\n"
        f"{grounding['text']}\n\n### Sources found (use these real URLs in citations):\n"
        f"{json.dumps(grounding['sources'], indent=2)}\n\n"
        f"## Layer-1 outcomes — the rubric (score only these)\n"
        f"{json.dumps(outcomes['outcomes'], indent=2)}\n\n"
        f"## Value-lenses\n{json.dumps(lenses['lenses'], indent=2)}\n\n"
        f"## Curated source allowlist (prefer these publishers; label advocacy/commercial)\n"
        f"{json.dumps(sources['publishers'], indent=2)}\n"
    )

    def stage(name, model, extra=""):
        print(f"  -> {name} ({model}) ...", flush=True)
        out, cost = run_stage(prompt_for(name) + "\n\n" + context + extra,
                              ROOT / "schema" / f"{name}.schema.json", model)
        print(f"     done (cost-equiv ${cost})", flush=True)
        return out, cost

    def verify(sm, rt, syn, prior_issues=None):
        ctx = ("\n## Steel-man\n" + json.dumps(sm, indent=2) +
               "\n## Red-team\n" + json.dumps(rt, indent=2) +
               "\n## Synthesis to verify\n" + json.dumps(syn, indent=2))
        if prior_issues:
            ctx += ("\n## SCOPED RE-VERIFY\n"
                    "This is a re-verification after a TARGETED fix. The issues below were flagged "
                    "last pass; only the claims they named were edited — the rest of the analysis is "
                    "byte-identical. Concentrate on (a) whether each flagged issue is now genuinely "
                    "resolved and (b) whether the fix regressed the SAME claims it touched. You need "
                    "not re-audit untouched content. Return the full schema.\n"
                    "## Issues flagged last pass\n" + json.dumps(prior_issues, indent=2))
        return stage("verifier", STRONG, ctx)

    print(f"[{policy_id}] starting pipeline", flush=True)
    costs = []
    steelman, c = stage("steelman", CHEAP); costs.append(c)
    redteam, c = stage("redteam", CHEAP,
                       "\n## Steel-man to attack\n" + json.dumps(steelman, indent=2)); costs.append(c)
    synthesis, c = stage("synthesis", STRONG,
                         "\n## Steel-man\n" + json.dumps(steelman, indent=2) +
                         "\n## Red-team\n" + json.dumps(redteam, indent=2)); costs.append(c)
    verifier, c = verify(steelman, redteam, synthesis); costs.append(c)

    # Revision loop: fix the blocking issues, then re-verify. Bounded.
    # Done as small PER-STAGE calls (each stage's own schema) rather than one giant
    # composite call — the composite was unreliable and timed out (>600s). Per-stage calls
    # are the size of the base stages (fast, reliable).
    REVISE = (
        "\n\n## REVISION TASK — targeted patch only.\n"
        "Below is the CURRENT output for THIS stage and the verifier's blocking issues that concern "
        "THIS stage. Return the SAME object with ONLY the flagged claims changed — every other field "
        "byte-for-byte identical to the current output. Do NOT rewrite, re-word, re-order, or "
        "regenerate anything the issues don't name: a fresh rewrite tends to introduce NEW "
        "unsupported citations, which is the exact failure we are avoiding.\n"
        "For each flagged claim: replace any hallucinated/unsupported citation with a real source you "
        "verify (one web search) actually supports it; correct factual/arithmetic errors and "
        "re-derive anything that depends on them; fix evidence-tier mis-statements.\n"
        "IMPORTANT: if you cannot find a source that *genuinely* supports a flagged claim within "
        "one web search, REMOVE the claim (or downgrade it to a clearly-labelled 🟥 projected "
        "assumption) — do NOT re-cite it speculatively or swap in a source you haven't verified "
        "supports it. A dropped claim is better than an unsupported one. Government/modelled "
        "projections are 🟥 projected, never 🟨 measured, even from official publishers.")

    def fix_stage(name, current, issues, extra=""):
        prompt = (prompt_for(name) + "\n\n" + context + extra + REVISE +
                  "\n## Current output for this stage\n" + json.dumps(current, indent=2) +
                  "\n## Verifier blocking issues for THIS stage\n" + json.dumps(issues, indent=2))
        out, c = run_stage(prompt, ROOT / "schema" / f"{name}.schema.json", STRONG)
        costs.append(c)
        return out

    # default an untagged issue to synthesis — it's the published artifact and the safest place to patch
    def stage_of(issue):
        return issue.get("stage") or "synthesis"

    revisions = []
    attempt = 0
    while not verifier.get("passed") and attempt < MAX_REVISIONS:
        blocking = [i for i in verifier.get("blocking_issues", []) if i.get("severity") == "blocking"]
        if not blocking:
            # passed is false but nothing is actionably blocking — stop rather than churn re-verifies
            print("     re-verify: not passed, but no blocking issues to act on — stopping revision loop", flush=True)
            break
        attempt += 1
        flagged = {stage_of(i) for i in blocking}
        for_stage = lambda s: [i for i in blocking if stage_of(i) == s]
        print(f"  -> revision {attempt}/{MAX_REVISIONS}: patching {len(blocking)} blocking issue(s) "
              f"in {sorted(flagged)} (only flagged stages)", flush=True)
        # patch ONLY the stages that carry a flagged issue (was: regenerate all three every round)
        if "steelman" in flagged:
            steelman = fix_stage("steelman", steelman, for_stage("steelman"))
        if "redteam" in flagged:
            redteam = fix_stage("redteam", redteam, for_stage("redteam"),
                                "\n## Steel-man (context)\n" + json.dumps(steelman, indent=2))
        if "synthesis" in flagged:
            synthesis = fix_stage("synthesis", synthesis, for_stage("synthesis"),
                                 "\n## Steel-man\n" + json.dumps(steelman, indent=2) +
                                 "\n## Red-team\n" + json.dumps(redteam, indent=2))
        verifier, c = verify(steelman, redteam, synthesis, prior_issues=blocking); costs.append(c)
        remaining = [i for i in verifier.get("blocking_issues", []) if i.get("severity") == "blocking"]
        revisions.append({
            "attempt": attempt,
            "issues_addressed": len(blocking),
            "stages_patched": sorted(flagged),
            "issues": blocking,                 # per-round evidence — what was flagged this round
            "remaining_issues": remaining,      # ...and what survived the patch
            "passed_after": bool(verifier.get("passed")),
            "issues_remaining": len(remaining),
        })
        print(f"     re-verify: {'PASSED' if verifier.get('passed') else 'still blocked'}", flush=True)

    record = {
        "policy_id": policy["policy_id"],
        "party": policy["party"],
        "policy_title": policy["policy_title"],
        "source": policy["source"],
        "steelman": steelman,
        "redteam": redteam,
        "synthesis": synthesis,
        "meta": {
            "models": {"lenses": CHEAP, "synthesis_verifier_revision": STRONG},
            "generated_at": datetime.datetime.now(datetime.timezone.utc).isoformat(),
            "cost_equiv_usd": round(sum(c for c in costs if c), 4),
            "source_balance": collect_sources(steelman, redteam, synthesis),
            "revisions": revisions,
            "verifier": verifier,
        },
    }

    published = bool(verifier.get("passed"))
    out_dir = ROOT / ("data" if published else "data/_blocked")
    out_dir.mkdir(parents=True, exist_ok=True)
    out_path = out_dir / f"{policy_id}.json"
    out_path.write_text(json.dumps(record, indent=2))

    status = "PUBLISHED" if published else "BLOCKED by verifier"
    print(f"[{policy_id}] {status} -> {out_path}", flush=True)
    if not published:
        for iss in verifier.get("blocking_issues", []):
            print(f"     - [{iss.get('severity')}] {iss.get('check')}: {iss.get('detail')}", flush=True)


if __name__ == "__main__":
    if len(sys.argv) != 2:
        sys.exit("usage: python3 pipeline/run.py <policy_id>")
    main(sys.argv[1])
