# Stage A — MEMBERSHIP (which fundamentals a policy bears on)

Decide which of the fundamentals THIS policy genuinely bears on — i.e. for which it would earn a
real, non-negligible verdict. This produces the policy's authoritative **bearing-set**; it replaces
the rough candidate tags. Use the full set of fundamental definitions provided in context (do not
assume a fixed number).

**Party-blind:** you are not told which party proposed this; do not infer or let it matter.

Rules:
- A fundamental is in the bearing-set only if the policy would plausibly earn a real verdict on it
  (improves / worsens / mixed / genuinely-contested — NOT negligible). If the effect on a fundamental
  would be negligible or merely incidental, **leave it out.**
- Be **precise, not generous**, but DON'T under-count: **usually 1 for a genuinely single-target
  policy; expect 2 where there is a real cross-outcome tradeoff** (see the tradeoff check below); 3+
  is rare. No fundamental is a catch-all. Use the strict fundamental definitions provided in context.
  Boundary notes that catch common errors:
  - **O9 (Equal treatment & democratic rights)** = anti-discrimination, equal treatment, voting/democratic
    rights, due process. **O10 (Personal liberty & free speech)** = speech/protest, privacy/surveillance,
    bodily autonomy, freedom from state coercion. These are SEPARATE and often rival — an enforcement or
    speech measure usually bears on O10 (and may also bear on O5); a discrimination/voting measure on O9.
  - A crime/policing/defence measure bears on **O5** for its safety effect, and on **O10** if it adds
    coercive/surveillance power — score the safety side (O5) and the liberty side (O10) as separate bearings.
  - **O11 (Tax & money you keep)** vs **O12 (Public finances)** vs **O2 (Cost of living)**: a tax change
    bears on O11 (take-home pay); if it materially affects the funded/borrowed balance it ALSO bears on
    O12; O2 is the price of essentials. **O13 (Prosperity)** is aggregate growth/opportunity; **O14
    (Inequality)** is the rich-poor gap; **O15 (Cohesion)** is social trust/belonging.
- **Tradeoff check (mandatory — and held to the SAME strict bar).** A policy almost always bears on,
  and *helps*, the fundamental it was designed for. Before finalising, ask explicitly: **does this
  policy plausibly WORSEN or make MIXED a *different* fundamental** (a cross-outcome spillover or
  tradeoff)? A harm-side bearing must clear the identical non-negligible bar as any other: include it
  **only if you can name the concrete mechanism AND the specific indicator it would move** (not a
  vague "it costs money" or "trades off somehow"). If you can name them, it **must** go in the
  bearing-set even though it is the *unfavourable* side — do **not** let the "usually 1" guidance
  prune a harm you can mechanistically justify. If you cannot pin it to a specific fundamental's
  indicator, leave it out. (Fiscal effects now HAVE homes — use them: a tax cut bears on O11 (money
  you keep, a benefit) AND, if it materially widens the funding gap, on O12 (public finances); an
  unfunded spending pledge bears on O12. So "this is unfunded / costs revenue" is no longer a homeless
  harm — route it to O12. Still don't force it onto a specific service like the NHS unless the policy
  acts on that service directly.)
- **Do not anchor on the policy's stated purpose.** The designed-for outcome is usually an *improve*;
  weigh every candidate fundamental on its own merits, not on whether the proposer would highlight it.
- If the policy genuinely bears on **none** of the fundamentals (pure machinery-of-government,
  internal process, or no material life effect), return an **empty** bearing_set and explain why in
  `note` — it will be logged as "analysed, bears on nothing material", never silently dropped.
- For each fundamental you include, give a one-line `reason` (why it earns a real verdict there).

Return JSON matching the membership schema.
