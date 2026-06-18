# Policy extraction

Extract the party's **material policies** from its stated positions (the manifesto text is provided
to you as the authoritative backbone; you are also asked, separately below, to add verifiable
positions stated elsewhere). The goal is the party's *full* platform at the right grain — every
material policy, none hidden by omission, but **one policy per distinct commitment, not one per
sentence**.

## What counts as a "material policy"

A material policy is a distinct, attributable commitment that:
1. a reasonable observer would name as **a single policy**, AND
2. **plausibly moves at least one fundamental** given in context, AND
3. is **analytically distinct** — splitting it further would only yield the *same* verdict on the
   *same* fundamental.

**The unit of a policy = the unit of a distinct verdict.** Two commitments are separate policies
only if they could plausibly earn *different* judgements (different direction, magnitude, or
evidence) on the outcomes they touch. If they'd be judged the same way, they are ONE policy.

## Consolidate means under ends (this is the key fix)

Group the mechanisms under the goal they serve. "Halve violence against women and girls" is ONE
policy; specialist rape courts, 999 advocates, and a new spiking offence are *how* it's delivered —
they belong in that policy's `stated` text, **not as separate policies**. Consolidating loses
nothing: the mechanisms stay in the policy text and are still weighed when it's analysed.

Tests to apply (consistently):
- **Verdict test** (primary): would these two commitments get the same direction + magnitude on the
  same fundamental? → fold into ONE policy.
- **Means/ends test:** is X a way of delivering Y, where Y is also present? → X is detail under Y.
- **Naming test:** would a journalist summarising the manifesto list these as one bullet, or several?

## Coverage exhaustive, grain consolidated

- **Exhaustive in COVERAGE:** do not cherry-pick flagship or flattering policies; include unpopular
  and controversial commitments. No material theme omitted.
- **Consolidated in GRAIN:** apply the tests above so a single pledge is one policy. A full manifesto
  typically yields **tens** of material policies (roughly 40–70), not hundreds. If you find yourself
  emitting many near-identical verdicts, you have split too finely — consolidate.
- **Materiality floor / exclude:** purely procedural or internal-party items, machinery-of-government
  tweaks with no real-world life impact, or vague aspirations with no mechanism. LOG each exclusion
  with a one-line reason in `excluded` — no silent dropping.
- Only **attributable, on-the-record** positions. Never infer a position; never include "critics
  say they'll…" speculation.
- Apply the **same grain and thoroughness to every party** — this even-handedness, not a target
  count, is the anti-bias guarantee.

## For each policy
- `policy_title` — short, neutral, descriptive (names the policy, not a sub-mechanism).
- `stated` — 1–4 sentences: what the party commits to, in neutral terms, **including the main
  mechanisms folded in** (quote key wording where possible). This is the input to analysis, so it
  must fairly and fully represent the consolidated policy.
- `candidate_outcomes` — the fundamental IDs this policy genuinely bears on. Be **precise, not
  generous**: tag a fundamental only if the policy would plausibly earn a real verdict on it.
  **Usually 1, occasionally 2, rarely 3** — if you're tagging more than 2, you're almost certainly
  over-reaching. **No fundamental is a catch-all.** In particular, O9 (Rights & freedoms) means
  legal/civil rights, equal treatment, democratic/voting rights, due process — NOT general
  governance, economic regulation, or public services (e.g. railway ownership, OBR powers, football
  governance, animal welfare do NOT belong in O9). A crime/policing measure is O5, not O9. When in
  doubt between two fundamentals, pick the single one the policy most directly affects; analysis can
  still surface a secondary effect.
- `source` — `{quote, url, publisher}`: where it's stated.

## Also return
- `excluded` — items you considered but left out, each with a reason (so exclusions are auditable).
- `coverage_note` — which sources you actually used (the provided manifesto **and** which
  beyond-manifesto positions you added and from where), plus any completeness gaps. Be honest so a
  reviewer knows what to check.

Return JSON matching the schema.
