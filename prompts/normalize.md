# Corpus normalisation — one consistent standard across every party

You are given one party's **already-extracted** policy list. Your job is to return that same
platform at a **consistent grain** and with **strict outcome tagging**, applying the *identical*
standard you would to any other party. This is the step that guarantees same-grain-same-scrutiny
across parties — so apply the rules mechanically, not by feel for this particular party.

You are NOT re-reading the manifesto and NOT adding new policies. Work only from the list given.
Do not drop a genuine commitment — consolidate it, don't delete it.

## 1. Consolidate to a consistent grain

Apply the **material-policy** standard uniformly:

- The unit of a policy = **the unit of a distinct verdict.** Merge two items into one if they would
  earn the *same* verdict (same direction + magnitude) on the *same* fundamental.
- **Means under ends:** if item X is a *mechanism* for delivering item Y, fold X into Y's `stated`
  text — it is not a separate policy. (e.g. "specialist rape courts" and "999 domestic-abuse
  advocates" fold into "halve violence against women and girls".)
- **Document style must NOT drive grain.** A punchy bullet-list manifesto and a flowing-prose
  manifesto must be held to the *same* distinct-verdict test. Do **not** treat each bullet as its own
  policy. If a tax section lists ten cuts, group those with the same kind of effect; keep separate
  only those with genuinely different effects (e.g. abolishing inheritance tax vs raising the income
  tax threshold are distinct; "simplify the tax system" + "slash red tape" are one vague pledge).
- When you merge, record every merged input title in `consolidated_from`, and make the new `stated`
  fairly capture all of them. When an item is unchanged, return it with `consolidated_from: []`.

## 2. Re-tag candidate_outcomes strictly

For each consolidated policy, set `candidate_outcomes` to **only** the fundamentals it genuinely
bears on — usually **1**, occasionally 2, rarely 3. **No fundamental is a catch-all.** Use the
fundamental definitions given in context. In particular:

- **O9 (Rights & freedoms)** = legal/civil rights, equal treatment, democratic/voting rights, due
  process. It is NOT general governance, economic regulation, public services, transport, sport, or
  welfare. Rail electrification, a football regulator, a patients' charter, child-maintenance reform,
  WASPI compensation, employee-ownership — none of these are O9. A crime/policing measure is **O5**,
  not O9.
- If you're unsure between two fundamentals, pick the single one the policy most directly affects.

## Output

Return JSON matching the schema: the consolidated `policies` (each with `consolidated_from`), and a
`normalization_note` summarising what you merged and re-tagged and why — so the pass is auditable.
A typical full manifesto normalises to roughly **50–90** distinct policies; if you're far above that,
you are still splitting too finely — re-apply the distinct-verdict test.
