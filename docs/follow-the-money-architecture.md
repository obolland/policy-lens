# Follow the Money — architecture

Status: **design locked by council review (2026-06-29).** A new top-level section, separate from the
policy analysis. This doc is the reference; no code should land that contradicts it without another
review.

> **One-line summary.** Show, from public records only, *who funds each party* and *how traceable
> that money is* — stated as bare fact or attributed official finding, never as motive. The policy
> analysis stays party-blind; this section is deliberately the opposite (it is *about* party
> identity), and the boundary between the two is made explicit to the reader.

## Why this exists

Media framing obscures who funds a party and what its funders do. The public record actually holds a
lot of this — the Electoral Commission donations register, Companies House ownership, official
enforcement findings — but it's scattered and unreadable. This section turns it into something a
voter can grasp at a glance, with every figure tapping through to its public source, exactly like the
rest of the site.

The hard truth this section is designed around: **the most consequential influence is often
structured to be unregistrable** (unincorporated associations that needn't name their funders,
money routed to obscure its origin). We do **not** fill that gap with inference. Instead we
*photograph the gap*: flag the opaque vehicles the register itself names, **measure** how much money
runs through them, and cite the official bodies that have investigated. Darkness becomes a measured,
comparable signal — not a guess.

## Non-negotiable discipline

Inherited from the rest of the site, hardened for this section:

- **Party-attached here, but the policy core stays party-blind.** Money data **never** flows into a
  policy verdict (that would break party-blindness + idempotency). One-way coupling only: party pages
  may link *out* to the money section; verdicts never ingest money data.
- **Every claim is a public record stated as bare fact, or an attributed official finding.** Never
  our characterisation. "Reporting what the EC found" has privilege; "our conclusion about what it
  means" does not.
- **Facts, not motive.** No "corrupt", "shell", "front", "sinister". Where a company's own filings are
  notable, we quote the filing ("incorporated 3 months before the donation; filed dormant accounts"),
  never label it.
- **UK-libel-safe.** Claimant-friendly jurisdiction. The two guardrails that keep us safe are
  (a) deterministic entity joins only, and (b) no adjective that imputes wrongdoing.
- **Complete sets against disclosed rules — never hand-picked subsets.** See the principle below.

## The keystone principle: complete sets, not curation

A hand-picked list of "notable" cases is both a cherry-pick accusation waiting to happen *and*
unsustainable manual toil. So we never hand-pick. Every strand is populated by an **objective,
external, exhaustive inclusion rule** — "we show *all* of X" cannot be cherry-picking — and the only
editorial decision is the **rule itself**, which is stated openly (like the topic set). A rule-based
complete set is a *feed*, not a curation, so the manual cost largely disappears too.

This principle is what makes the otherwise-worrying strands (findings, contracts) safe and tractable.

## The four building blocks

### Block 1 — Donations ledger  *(v1)*
Per party: who funds them, totals over time, donor type. **Comprehensive and mechanical.**
- **Source:** Electoral Commission donations & loans register (bulk CSV download).
- The register already classifies each donation by donor **status** (Individual, Company, Trade Union,
  Unincorporated Association, LLP, Trust, …), records value, dates, cash/non-cash, donation/loan, and
  permissibility — so most of what we render is a faithful restatement of structured fields.
- **No LLM.** Deterministic ETL + templated copy.

### Block 2 — Funding-traceability sub-metrics  *(v1)*
A **symmetric, un-gameable** read of how traceable each party's money is. **Sub-metrics, never a
single composite grade** (consistent with the site's no-composite-score rule, and a single grade is
the most weaponisable artefact).
- Computed **only over the EC's own donor-status categories** — we do not invent a taxonomy of
  "opaque". "Traceability" is a *descriptive consequence* of the statutory categories, not our verdict.
- **Normalised as share of total reported donation value** (volume-independent, so a small and a large
  party are compared on proportion). Absolute totals shown alongside; the comparison is the share.
- The sub-metrics:
  1. Share from **named individuals** (most traceable).
  2. Share from **companies** resolvable to Companies House via the registration number the EC records.
  3. Share from **unincorporated associations** — stated with the statutory fact: *"under electoral
     law, UAs need not disclose who funds them."*
  4. Share from **trade unions / other categories** (shown, not editorialised).
  5. **Count of impermissible or returned donations** (an EC finding — a privileged fact).
  6. **Donor-company self-filings of note**, raw: *"incorporated < 12 months before the donation"*,
     *"filed dormant / micro-entity accounts"* — quoted from the company's own filing, never labelled.
- Same categories, same arithmetic, every party. Methodology is one tap from every figure and is
  **baked into every shareable card** so the number can't travel without its method.
- **No LLM.**

### Block 4 — Sourced "findings" layer  *(v1)*
What official bodies have **concluded** about influence / dark money — attributed and quoted, never
extrapolated. Plus a per-party **"what we can't see"** gap panel.
- **Anchored to complete official registers, ingested wholesale** (the keystone principle):
  - **Electoral Commission enforcement / sanctions register** — every sanction it has issued;
    mechanically filtered to political-party recipients.
  - **ICO enforcement-action list** — same treatment.
  - *(Exact feed/format to confirm at build; both are published in full.)*
- **Residual manual layer (small, slow-changing):** one-off **court judgments** and named
  **select-committee reports** (e.g. the Vote Leave / Cambridge Analytica findings). A dozen entries,
  rarely changing. This is the only genuinely hand-maintained content, and it is *additive*.
- **"What we can't see" panel:** *"Money routed to hide its origin won't appear here. That's a limit
  of the public record — not an all-clear."* The honest floor; also the most emotionally connectable
  and the safest content, so the section **leads with it**.
- **v1: hand-curated entries are stored as structured data and rendered by template — no LLM.** An
  LLM *drafting-only, human-approved* aid is deferred until volume justifies it; the libel cost of one
  hallucinated finding is catastrophic, so we don't introduce that surface early.

### Block 3 — Public contracts / data & ownership  *(SPECIFIED FOLLOW-UP — not v1)*
The reverse flow: public money / data / contracts going **from government to companies**, flagged by
ultimate ownership / nationality (e.g. Palantir / NHS Federated Data Platform). **Important and
definitely on the roadmap** — parked from v1 only because it is the most editorial and the weakest fit
with the "money into politics" theme, not because it's optional.
- **Inclusion rule (mechanical, exhaustive — the keystone principle applies):** e.g. *all
  central-government contracts above £[threshold] awarded to suppliers whose ultimate owner (per
  Companies House PSC) is registered outside the UK.* A deterministic join of Find a Tender /
  Contracts Finder (OCDS data) + Companies House — a **complete list against a disclosed rule**, the
  same ETL as the ledger. Not a hand-picked watchlist.
- **Split fact from comment:** the contract + ownership is the mechanical fact; the **attributed
  concern** (NAO report, Hansard, a select committee) is *additive context shown only where it
  exists* — it is **not** the inclusion criterion. So we don't select contracts *because* they're
  controversial; we show the whole rule-defined set, and append a quote where an official body has
  commented.
- **Incumbency wrinkle:** this strand structurally surfaces more about parties that *have been in
  government* (they award the contracts). Label clearly as **"what they did in power"** vs the
  manifesto's **"what they say they'll do"**, and keep it out of the Block 2 score.
- **Highest libel surface**, so: every critical statement is a direct attributed quote from a
  privileged source; no contract carries a concern unless an official body already raised one; behind
  the publish gate.

## Coexistence with the party-blind core

- **Separate section**, "Follow the Money", with its own nav entry and a distinct visual treatment.
- Permanent header explainer: *"Our policy analysis is judged blind to party. This section is the
  opposite — it's about who funds whom, drawn entirely from public records."*
- **Structural separation:** own data directory (`money_data/`), own build step
  (`build_money_web.py`), own page type (`money/<party>.html`). **No shared state** with the verdict
  pipeline. One-way links out from party/policy pages only.

## Pipeline — deterministic vs LLM

- **Blocks 1, 2, 3: zero LLM.** Pure ETL + templated copy from structured fields. No paraphrase
  anywhere a fact is asserted — that's exactly where libel risk concentrates.
- **Block 4: hand-curated structured entries rendered by template (v1), plus wholesale ingest of the
  complete EC / ICO enforcement registers.** LLM drafting aid deferred and, if ever added,
  confined to quote-plus-attribution behind a mandatory human gate.

## Entity resolution — confidence / abstain policy

- **Join only on the EC-supplied company registration number → Companies House.** Deterministic key
  lookup; **no fuzzy name-matching.** (Company donors must supply their number — this is what de-risks
  the whole problem.)
- **Abstain otherwise.** Individuals and unincorporated associations get no ownership join — shown
  as-is.
- A join Companies House can't confirm (number not found / mismatch) is **withheld, not guessed**, and
  surfaces as a named gap.

## Data freshness & refresh model

- **EC: quarterly.** Automated fetch → diff against last pull → **human review of the diff** →
  regenerate → publish. No real-time treadmill (that breaks the "regenerate is the only cost" model
  and invites half-stale states).
- **Companies House: on-demand and cached**, keyed by the company numbers the EC pull introduces.
- **Block 4 registers: re-pulled on the same quarterly cadence;** the manual court/committee entries
  are event-driven.
- **Block 3 (when built): event-driven re-run of the mechanical join.**
- **Every record carries an "as reported to the EC up to [date]" stamp.** Staleness presented as
  currency is a top failure mode.

## Publish gate — the first human-in-the-loop on the site

- **Blocks 1, 2:** automated diff review is sufficient — it's arithmetic over a public register.
- **Blocks 4 and 3:** **mandatory human pre-publish review** against a checklist:
  1. every critical statement is a direct attributed quote from a privileged source;
  2. no adjective imputes wrongdoing;
  3. every entity join is registration-number-confirmed;
  4. every figure is datestamped.
- This gate stands between generation and `git push`, consistent with the standing rule that push
  always gets a manual review — here hardened into a checklist.

## Failure modes → guardrails

| Failure | Guardrail |
|---|---|
| Wrong-company join → false statement | Registration-number key only; abstain + gap otherwise |
| "Shell" / "front" imputation | Raw self-filed facts, never labels |
| Score screenshotted as a partisan attack | Sub-metrics not a grade; methodology rides every shareable card; raw ledger one tap away |
| Score gamed by restructuring donations | Boundaries = EC's own statutory categories; raw filing facts resist gaming (you'd have to actually trade) |
| Stale data read as current | Record-level "as reported up to" datestamp |
| Contracts strand reads as "foreign = bad" | Neutral facts + attributed official concern only; no contract without prior official scrutiny |
| Findings layer extrapolates | Quote-or-drop + attribution + human gate |
| "Cherry-picked the cases" | Complete sets against disclosed rules; never hand-picked subsets |
| Boundary contamination ("verdicts follow the money too") | Separate section/identity + explicit explainer + one-way links |

## Deferred / NOT built

- **Auto-juxtaposition of donor ↔ policy** (implying causation): not in v1; arguably never — the
  libel / partisanship trap.
- **Wholesale contracts ingestion / ranking of all contracts:** Block 3 is a *complete set against a
  disclosed rule*, not "score every contract".
- **A single composite transparency grade:** violates the no-composite-score ethos; most weaponisable.
- **LLM paraphrase in any factual strand:** excluded by design.
- **Media-ownership lens:** out of scope for now.

## Phased build order

- **Phase 0 — data spike.** Pull the EC CSV; prove the company-number → Companies House join
  end-to-end on one party. Validates the single hardest assumption before any UI.
- **Phase 1 — Donations ledger (Block 1).** Pure ETL, per-party `money/<party>.html`, raw sourced
  figures + the "what we can't see" panel. Lowest risk, ships first, earns trust.
- **Phase 2 — Traceability sub-metrics (Block 2).** Layered on Phase 1's data; no new sources.
- **Phase 3 — Findings layer (Block 4).** Complete EC / ICO register ingest + the small manual
  court/committee layer; human-gated.
- **Phase 4 (definite follow-up) — Contracts / ownership (Block 3).** Mechanical complete-set join,
  badged "what they did in power", behind the publish gate.

## Load-bearing decisions (the ones not to quietly reverse)

1. **Mirror the EC's own categories — don't invent a taxonomy of "opaque".** Kills the
   symmetry / gaming / boundary fight.
2. **Deterministic company-number joins only, abstain otherwise.** Kills libel-via-error.
3. **Sub-metrics, never a composite grade.** Keeps it un-weaponisable and on-ethos.
4. **Complete sets against disclosed rules, never hand-picked subsets.** Kills both cherry-pick
   accusations and manual toil.
5. **A hardened human publish gate for the two curated-adjacent strands (4, then 3).**
