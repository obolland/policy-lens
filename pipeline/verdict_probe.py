"""Cache-validation probe — de-risk the cost model BEFORE building the full verdict stage.

The council's whole cost case rests on ONE assumption: prompt-caching the shared prefix
(system + verdict prompt + fundamental criteria + config) makes isolated per-(policy,fundamental)
verdicts cheap (~$80-120 corpus). This probe runs a handful of REAL party-blind verdict calls for
one fundamental and reports, per call, the cache_creation vs cache_read token split + cost — so we
can see caching actually bite (calls 2+ should read the prefix at 0.1x) and project the full run.

    ./.venv/bin/python pipeline/verdict_probe.py O2 lab 4     # fundamental, party slug, N policies

Party slug is used ONLY to pick test policies from the corpus — it is NOT sent to the model
(verdicts are party-blind). Set ANTHROPIC model via PL_STRONG_MODEL (default claude-sonnet-4-6).
"""
import json
import os
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import anthropic
from anthropic_runner import _client, _cost, SYSTEM_PROMPT  # reuse client + cost + system prompt
from ground import ground

ROOT = Path(__file__).resolve().parent.parent
MODEL = os.environ.get("PL_STRONG_MODEL", "claude-sonnet-4-6")


def _cached_prefix(fundamental):
    """The SHARED, cacheable prefix: identical across every verdict call for this fundamental."""
    crit = json.loads((ROOT / "config" / "verdict_criteria.json").read_text())
    outcomes = json.loads((ROOT / "config" / "outcomes.json").read_text())["outcomes"]
    lenses = json.loads((ROOT / "config" / "lenses.json").read_text()).get("lenses", {})
    sources = json.loads((ROOT / "config" / "sources.json").read_text()).get("publishers", {})
    verdict_md = (ROOT / "prompts" / "verdict.md").read_text()
    return (
        SYSTEM_PROMPT + "\n\n" + verdict_md +
        "\n\n## Shared rubric\n" + crit["shared"] +
        f"\n\n## Criteria for this fundamental ({fundamental})\n" + crit["fundamentals"][fundamental] +
        "\n\n## All fundamentals (for boundaries)\n" + json.dumps(outcomes, indent=2) +
        "\n\n## Value-lenses\n" + json.dumps(lenses, indent=2) +
        "\n\n## Curated source allowlist\n" + json.dumps(sources, indent=2)
    )


def _verdict(prefix, schema, policy, fundamental):
    grounding = ground(policy)
    user = (
        f"## Policy to judge (effect on {fundamental} only)\n{json.dumps({k: policy[k] for k in ('policy_title','stated') if k in policy}, indent=2)}\n\n"
        f"## Grounded research (cite these real sources)\n{grounding['text']}\n\n"
        f"### Sources found\n{json.dumps(grounding['sources'], indent=2)}"
    )
    with _client.messages.stream(
        model=MODEL, max_tokens=8000,
        system=[{"type": "text", "text": prefix, "cache_control": {"type": "ephemeral"}}],
        thinking={"type": "adaptive"},
        output_config={"format": {"type": "json_schema", "schema": schema}},
        messages=[{"role": "user", "content": user}],
    ) as stream:
        msg = stream.get_final_message()
    u = msg.usage
    return json.loads(next(b.text for b in msg.content if b.type == "text")), u, _cost(MODEL, u), len(grounding["sources"])


def main(fundamental, slug, n):
    prefix = _cached_prefix(fundamental)
    schema = json.loads((ROOT / "schema" / "verdict.schema.json").read_text())
    pols = []
    for f in sorted((ROOT / "corpus").glob(f"{slug}-[0-9]*.json")):
        p = json.loads(f.read_text())
        if fundamental in p.get("candidate_outcomes", []):
            pols.append(p)
        if len(pols) >= n:
            break
    if not pols:
        sys.exit(f"no corpus policies for {slug} tagged {fundamental} — run extraction/normalisation first")

    print(f"probe: {len(pols)} verdicts for {fundamental} | model {MODEL} | prefix ~{len(prefix)//4} tok", flush=True)
    total = 0.0
    for i, p in enumerate(pols, 1):
        v, u, c, nsrc = _verdict(prefix, schema, p, fundamental)
        total += c
        cw = getattr(u, "cache_creation_input_tokens", 0) or 0
        cr = getattr(u, "cache_read_input_tokens", 0) or 0
        print(f"  [{i}] {p['policy_title'][:48]:<48} in={u.input_tokens} cache_write={cw} cache_read={cr} "
              f"out={u.output_tokens} | {v['direction']}/{v.get('magnitude')} | {nsrc} src | ${c:.4f}", flush=True)

    print(f"\n=== {len(pols)} verdicts | total ${total:.4f} | avg ${total/len(pols):.4f}/verdict ===", flush=True)
    print(f"projection @ ~600 corpus verdicts: ${total/len(pols)*600:.0f}", flush=True)
    print("CACHE CHECK: call 1 should show cache_write>0; calls 2+ should show cache_read>0 (prefix reused at 0.1x).", flush=True)


if __name__ == "__main__":
    if len(sys.argv) < 3:
        sys.exit("usage: python pipeline/verdict_probe.py <fundamental> <party_slug> [n=4]")
    main(sys.argv[1], sys.argv[2], int(sys.argv[3]) if len(sys.argv) > 3 else 4)
