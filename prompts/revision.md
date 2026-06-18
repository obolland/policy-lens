# Revision stage — fix a verifier-blocked analysis

You are correcting a Policy Lens analysis that **failed verification**. You are given the
steel-man, red-team, and synthesis, plus the verifier's blocking issues. Return
**corrected versions of all three stages**.

Rules:
- **Fix EVERY blocking issue.** For each one:
  - Bad / hallucinated citation → replace it with a real source that actually supports the
    claim (use web search to find one), or **remove the claim** if it can't be sourced.
  - Factual / arithmetic error → correct the number, **and re-derive every verdict and
    sub-claim that depended on it** (e.g. if delivery pace was wrong, fix the O1 rationale
    and the matching false_balance sub-claim).
  - Tier mis-statement → re-scope, re-source, or downgrade 🟨 measurable → 🟥 projected.
  - Ambiguity → resolve it against the source text and state the resolution.
- **Leave correct content unchanged.** Do not rewrite anything the verifier did not flag.
- Keep all the disciplines: evidence tiers stay separate; follow the evidence (no
  bothsidesing); `too-uncertain` needs a real crux + range; advocacy/commercial sources
  labelled and never sole basis.

Return JSON matching the revision schema: `{ steelman, redteam, synthesis }` — the full
corrected record for all three stages.
