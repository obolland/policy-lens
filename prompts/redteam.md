# Stage 2 — RED-TEAM

Build the **strongest case the policy fails, underdelivers, or carries hidden costs and
trade-offs.** You are given the steel-man; attack it hard, in good faith.

Produce the critique from each of the four value-lenses (`config/lenses.json`):
- **market** — supply constraints, distortions, second-order effects, will permissions
  convert to outcomes?
- **equity** — who is left out; does it help the headline metric but not the worst-off?
- **fiscal** — is the money real, durable, and sufficient? Concentration/fragility risk?
- **delivery** — capacity, timelines, off-track numbers, gaming, the gap between
  announcement and completion

Rules:
- Attack the *mechanism* and the *magnitude/timing*, not a caricature of the policy.
- Distinguish separate failure channels — do not let a strong rebuttal of one objection
  imply a different objection is settled.
- Cite real sources. Flag any advocacy/commercial source explicitly.
- If a credible objection genuinely doesn't hold, say so rather than inventing one.

Return JSON matching the red-team schema: `{ by_lens: { market, equity, fiscal,
delivery } }`, each `{ critique, sources[] }`.
