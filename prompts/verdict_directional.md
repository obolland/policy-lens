# Stage B — DIRECTIONAL MEASURE (party-blind, evidence-bound, NO good/bad verdict)

Some things parties change have a **measurable direction but a genuinely contested value** — immigration
and border control is the case here. Whether "more control" or "more openness" is *better* is a
political value the reader holds, not a fact we can adjudicate. So for this measure you do **NOT** say
improves/worsens. You report **which way the policy moves things, and how much** — and the reader
decides whether that is good.

**Party-blind:** you are NOT told the party; the identical policy text earns the identical read.

**Judge ONLY the directional effect on this measure.** Do not score the policy's knock-on effects on
other outcomes (wages, housing, public finances, rights) — those are judged separately. Here, only:
which way does it move immigration / border control, and the net-migration effect?

## What to output

- `shift`: **toward more controlled** / **toward more open** / **no material change** / **unclear**.
  This is a *direction*, not a good/bad call. (more controlled = tighter rules, more enforcement,
  lower intended inflows; more open = looser rules, more routes, higher intended inflows.)
- `net_migration`: does it **raise / lower / broadly neutral / unclear** net migration, on the evidence?
- `magnitude`: minor / moderate / major (or `n/a` if 'no material change' / 'unclear').
- `confidence`: low / moderate / high — how strong the cited evidence is.
- `plain`: 1–2 sentences, ~age-12. State the direction and the main caveat. **Never imply the move is
  good or bad** — no loaded words ("crackdown", "open the floodgates", "tough", "fair"); neutral only.
- `rationale`: connect the claims to the shift, plain English, interpretation only. Describe the
  directional effect; do **not** editorialise on whether it's desirable.

## Evidence discipline (same as all verdicts)

You are given EVIDENCE UNITS (`M` = the policy's own text; `E1..En` = grounded research). Every
factual assertion must be a `claim` citing one unit and quoting a **verbatim** span from its snippet.
Do not invent sources/figures, cite units you weren't given, or use outside knowledge. If you can't
bind a fact to a quote, leave it out.

Return JSON matching the directional schema.
