# Analysis architecture — three-stage, isolate-and-cache

Status: **design locked by council review (2026-06-12).** Supersedes the per-policy pipeline and the
first-draft "expensive per-cluster synthesis." This is the unit of analysis for the full corpus run.

> **Design-history note.** The three-stage shape below is what the live pipeline still uses (the
> party-blind, context-free verdict is the keystone). Two things have moved on since this was written:
> the outcome set has grown from the original **9 fundamentals** to **15 scored outcomes + 1
> directional measure** (immigration) — see `config/outcomes.json` — and the cell-summary stage (C)
> **remains deferred** (the site ships the per-policy verdict list + factual tally, not an abstractive
> summary). Kept as a record of *why* it's built this way; see the repo `README.md` for the current
> commands.

## Why this shape

The grid is organised as `(party × fundamental)` cells. We needed an analysis unit that is:
- **complete** (every material policy analysed),
- **anti-bias** (same scrutiny for every party — a policy must be judged the *same* regardless of
  which party proposed it or what its neighbours are),
- **affordable** (~$80–140, not ~$300+), and
- **never requires a full re-run** to tweak.

A council review collapsed the original "one expensive synthesis pass per cell" into three separated
stages. The keystone: **the per-policy verdict is party-blind and context-free.** That single
property delivers anti-bias, idempotency, and cacheability at once — and it makes the expensive
cluster-reasoning pass (with its truncation, pagination, and halo-contamination problems)
unnecessary.

## The three stages

### A. Membership — which fundamentals a policy bears on
- **Per policy**, run once. Emits a frozen **bearing-set**: the subset of the 9 fundamentals this
  policy genuinely affects (authoritative; supersedes the recall-oriented `candidate_outcomes` tags,
  which Gemini proved unreliable at).
- Runs on the strong model (Sonnet) — the reliable judge for this classification.
- **No-orphan invariant:** every extracted policy lands in ≥1 cell, or on an explicit
  "analysed, bears on nothing material" ledger. Asserted at build time (a coverage counter), not
  hoped for in a prompt. Protects completeness.

### B. Verdict — a policy's effect on ONE fundamental
- **Per `(policy, fundamental)`**, for each fundamental in the policy's bearing-set.
- **PARTY-BLIND and CONTEXT-FREE: a pure function of `(policy_text, grounding, criteria)`** — the
  prompt carries no party identity and no sibling policies. This is the anti-bias guarantee and what
  makes verdicts idempotent + cacheable. *Never* let cluster/party context touch a verdict.
- Output = the verdict object we already render: `direction, magnitude, time_horizon, confidence,
  plain, biggest_unknown, evidence_tier{stated,measurable,projected}, rationale, sources`
  (+ `uncertainty` when `too-uncertain`).
- **Cost lever = prompt caching, NOT batching.** Cache the shared prefix (system + the fundamental's
  party-blind criteria + config) at 0.1× reads; the per-call variable part is just the policy text +
  its grounding. Isolated calls then land ~$80–120 for the corpus — original target, zero
  cross-policy contamination.
- **Isolate by default.** Batching K policies per call is allowed ONLY for latency where grounding is
  shared, K≈3–5, randomised order, and ONLY if a **contamination canary** (re-judge a sampled
  verdict in isolation; check for drift) stays clean. The literature says "judge independently"
  prompts do NOT remove position/halo bias — so batching is opt-in and metric-gated, never default.
- Verified (Sonnet) with the existing checks (source support, tier integrity, lever leakage,
  magnitude/timing, uncertainty integrity); bounded per-stage revision loop.

### C. Cell summary — "taken together" (DEFERRED to v2)
- A cheap reduce over the **structured verdicts** of a cell (never re-reading policy text).
- **v1 ships WITHOUT it** — the factual tally + the per-policy verdict list is more trustworthy and
  shippable now; an abstractive summary is the highest-contamination, lowest-marginal-trust piece.
- v2 adds it behind two hard gates: **NLI entailment** (SummaC-style: tally = premise, each summary
  sentence = hypothesis; drop any non-entailed sentence) **and a separate tally-constraint check**
  (entailment ≠ faithfulness to the distribution). Plus the UI/trust contract: tally renders first;
  mandatory dissent line (schema-enforced); banned evaluative adjectives; 2-sentence cap; every
  clause links to the bar; never a score/single word.

## Data reassembly
A policy with bearing-set {O1, O2} gets its O1 verdict from the O1 work and O2 from the O2 work; the
build reassembles `record.per_outcome` as a **pure join on the frozen membership table** (not a union
of independently-made decisions). Front-end grid + drawer already built; unchanged for v1.

## Locked re-run triggers (version these explicitly)
Changing any of these forces a full re-run, so they're frozen now:
1. **The 9 fundamentals** (set + definitions).
2. **The verdict criteria text** (the party-blind rubric per fundamental).
3. **The cache-key definition** = `(policy_id, fundamental, criteria_version)`.

Tunable WITHOUT a re-run: batch size K, ordering, verifier sampling rate, summary wording (v2).

## Build order (each gates the next)
1. **Validate the prompt-cache hit rate on a small slice FIRST** — the entire cost case rests on it
   (measure `cache_read_input_tokens`; confirm ~$80–120 projection). If caching doesn't bite, isolated
   cost creeps toward $300 and we revisit K-batching.
2. Lock verdict criteria (the party-blind rubric per fundamental) + verdict schema + prompt.
3. Build membership stage (+ no-orphan assert).
4. Build the isolated cached verdict stage + verifier + revision loop; checkpoint at
   `(policy_id, fundamental)` content-hash for resumable idempotency.
5. Reassembly into the grid; run the full corpus in spend-capped chunks.
6. (v2) NLI-gated cell summary.

## Open caveats to watch
- **Cache-hit rate is unmeasured** — step 1 exists to de-risk exactly this.
- **NLI entailment ≠ tally faithfulness** — keep the tally-constraint as its own hard check in v2.
