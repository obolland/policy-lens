# Policy Lens

A free, open, transparent resource that analyses UK political parties' policies through
the lens of the outcomes people actually care about. **Trust via transparency, not a
neutrality badge.**

Full design: `~/Desktop/policy-lens-spec.md`.

## How it works (the short version)
1. A **batch pipeline** analyses each `(party × policy)` through four stages —
   steel-man → red-team → synthesis → verifier — and writes a JSON record per policy.
2. A **static site** serves those pre-computed JSON files. **No LLM in the request
   path**, so traffic is free and only refreshes cost anything.
3. v1 runs the pipeline on a Mac via the **Claude Code subscription** (`claude -p`), so
   marginal compute cost is ~£0.

## Layout
```
config/
  outcomes.json     Layer-1 outcomes — the rubric (the ONLY things scored)
  lenses.json       the 4 value-lenses (market/equity/fiscal/delivery)
  sources.json      curated source library + provenance/source_type model (§3.1)
prompts/
  system.md         shared stance + taxonomy + rules (appended to every stage)
  steelman.md       stage 1 — strongest good-faith case FOR
  redteam.md        stage 2 — strongest case AGAINST
  synthesis.md      stage 3 — net verdict per outcome + false-balance check
  verifier.md       stage 4 — independent pre-publication check (blocks on fail)
schema/
  *.schema.json     per-stage JSON Schemas enforced via `claude -p --json-schema`
policies/
  *.json            pipeline inputs (one per party × policy)
data/               pipeline OUTPUT (one record per policy) — served by the site
pipeline/           orchestrator (to be added next): loops policies -> 4 stages -> validate -> write
launchd/            the scheduled job (to be added next)
```

## The pipeline mechanism (Option A)
Each stage is one headless call:
```
claude -p "<stage prompt + inputs>" \
  --append-system-prompt "$(cat prompts/system.md)" \
  --json-schema schema/<stage>.schema.json \
  --output-format json \
  --model <haiku for lenses | opus for synthesis+verifier>
```
The orchestrator assembles the four stage outputs into one record and writes it to
`data/<policy_id>.json`. The verifier gate must pass before a record is published.

## Status
Analytical core scaffolded (config + prompts + schemas + one seed policy). Next: the
orchestrator + `launchd` job, then an end-to-end test on the seed policy.
