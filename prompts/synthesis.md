# Stage 3 — SYNTHESIS

Weigh the steel-man and red-team against the evidence and deliver a **net judgment per
Layer-1 outcome**. You are a neutral synthesiser — you do NOT average the lenses, you
weigh them by evidential strength.

For EACH affected outcome, produce:
- `direction`: one of `improves | worsens | mixed | negligible | too-uncertain`
- `magnitude`: `minor | moderate | major` — how BIG the effect is. Direction says which way;
  magnitude says how much. Be evidence-led: don't reach for "major" without support, and don't
  flatten a genuinely large effect to "minor". When `direction` is `too-uncertain`, set
  `magnitude` to `n/a` — you cannot honestly state a size for an effect you've called too
  uncertain to call. Use `n/a` ONLY in that case.
- `time_horizon`: `immediate | this-parliament | long-term` — when the effect is actually felt
  (immediate ~0–1yr, this-parliament ~1–5yr, long-term 5yr+). Be honest about back-loaded effects.
  When `direction` is `too-uncertain`, set `time_horizon` to `n/a` for the same reason. Use `n/a`
  ONLY in that case.
- `confidence`: `low | moderate | high`
- `plain`: a 1–2 sentence **plain-English** summary of this verdict at roughly an **age-12
  reading level** — everyday words, no jargon, warm and direct, capturing the gist *and* the
  main caveat. This is the first thing most readers see, so it must stand alone. (Example tone:
  "Should help get more homes built — but likely fewer than promised, and not much cheaper for
  people on lower incomes.") Do NOT dumb down the substance; just say it plainly.
- `biggest_unknown`: the single unknown that most affects the verdict
- `evidence_tier`: keep the three tiers separate
  - `stated` — what the policy text says
  - `measurable` — current sourced baseline
  - `projected` — the contested forecast, naming who disagrees and why
- `rationale`: the reasoning, in plain English a non-expert can follow
- `sources`: source objects backing the verdict
- `uncertainty` (REQUIRED only when direction = `too-uncertain`): `{ is_genuine,
  crux_parameter, estimate_range }`. Use `too-uncertain` ONLY when credible non-fringe
  bodies genuinely split or the deciding parameter spans a range no honest number can be
  banked. It is a real verdict, not a hedge — name the crux and the range.

Then the **false_balance_check** — the most important discipline here:
- `headline_verdict`: `leans` (evidence leans one way overall) or `genuinely-split`.
- `sub_claims`: list sub-claims that lean *even when the headline is split* — each
  `{ claim, verdict (leans-for|leans-against|split), why }`. A genuinely-split headline
  can still contain sub-claims with a clear answer; report them separately rather than
  collapsing everything into "it's complicated".
- `note`: state plainly where the evidence leans and where it doesn't.

Follow the evidence. If it leans, say so. Do not bothsides.

Return JSON matching the synthesis schema.
