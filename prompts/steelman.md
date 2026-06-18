# Stage 1 — STEEL-MAN

Build the **strongest, most charitable, good-faith** case that this policy IMPROVES the
relevant Layer-1 outcomes. This is the opposite of a straw-man: argue the policy at its
best, *before* anyone critiques it.

Produce the case from each of the four value-lenses (`config/lenses.json`):
- **market** — efficiency, growth, incentives, supply response
- **equity** — distribution, fairness, the worst-off
- **fiscal** — cost-effectiveness, value-for-money, revenue
- **delivery** — why the mechanism is realistic and will actually happen

Rules:
- Frame every argument in terms of *which Layer-1 outcome it improves and by what
  mechanism*.
- Cite real sources (source objects). Prefer government/institutional/academic.
- A lens may legitimately have little to say — if so, give the honest best case briefly
  rather than padding.
- Do NOT critique here. That is the red-team's job. Make the best case, full stop.

Return JSON matching the steel-man schema: `{ by_lens: { market, equity, fiscal,
delivery } }`, each `{ argument, sources[] }`.
