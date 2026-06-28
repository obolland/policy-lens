# Show the Working

A free, open, transparent resource that analyses UK political parties' policies through the lens of
the outcomes people actually care about. Live at **<https://showtheworking.uk>**.

**Trust comes from transparency, not a neutrality badge.** Every verdict is produced *party-blind*,
every factual claim quotes the source line behind it, and the whole pipeline + prompts are public so
anyone can check — or challenge — how a verdict was reached. We don't tell you how to vote and we
don't claim to be neutral; we show our working and make it easy to report an error.

## How it works

Analysis is computed **ahead of time** by a batch pipeline and baked into static files. There is **no
LLM in the request path** — the live site just serves pre-built JSON + HTML, so traffic is free and
only regeneration costs anything. The unit of analysis is a `(policy × outcome)` cell.

The keystone design property (locked by a council review — see
[`docs/analysis-architecture.md`](docs/analysis-architecture.md)): **each verdict is party-blind and
context-free — a pure function of `(policy text, grounding, criteria)`.** No party identity, no
sibling policies. That single property delivers anti-bias (same policy ⇒ same verdict whoever tabled
it), idempotency, and cacheability at once.

### The pipeline (`pipeline/regenerate.sh` runs it end-to-end)

1. **Corpus** — `extract.py` extracts each party's material policies from its **manifesto** (the
   primary source) *and* its major **on-the-record positions beyond the manifesto** — web-searched and
   each tied to a real source, since parties omit unpopular intentions. `normalize_corpus.py` cleans
   them into one file per policy. → `corpus/<policy_id>.json`
2. **Stage A · Membership** (`membership.py`) — party-blind, decides which outcomes a policy genuinely
   bears on (its *bearing-set*). Enforces a no-orphan invariant (every policy lands in ≥1 cell or an
   explicit "bears on nothing material" ledger). Writes the bearing-set back into each corpus file.
3. **Stage B · Verdict** (`run_cells.py` per scored outcome, `run_directional.py` for immigration; both
   via `run_verdict.py`) — one verdict per `(policy, outcome)`: **verdict → independent verify →
   bounded revision**. Evidence is gathered by grounded search (`ground.py`); every claim must quote a
   real source line or it is dropped. → `data_verdicts/<policy>__<O#>.json`,
   `data_directional/<policy>__D1.json`
4. **Stage C · Build** (`build_verdicts_web.py --publish`, then `build_og_cards.py`) — reassembles the
   verdicts into the site: a slim grid summary + lazy-loaded per-cell detail, pre-rendered topic and
   per-policy pages, sitemap, and share-card images. → `web/`

**Models:** the judge (membership + verdict + verifier) runs on Claude (Anthropic API, Sonnet by
default); evidence grounding uses Google Search grounding via Gemini. *(The grounding mechanism is
flagged for review — see the project notes.)*

### The outcome frame

Verdicts are organised around a deliberately **balanced** set of outcomes so every political tradition
can see its goals register as a benefit, not only as a cost to someone else's. The canonical list
(currently **15 scored outcomes** + **1 directional measure**, immigration, which we report as a
*direction* with no good/bad verdict — that's the reader's call) lives in
[`config/outcomes.json`](config/outcomes.json). **There is no composite party score** — readers weigh
the outcomes themselves.

## Layout

```
config/      outcomes.json (the scored set + directional measures), verdict_criteria.json,
             levers.json, lenses.json, sources.json, parties.json
prompts/     membership.md, verdict.md, verdict_verify.md, verdict_directional.md,
             extract.md, normalize.md, system.md  (the live pipeline prompts)
schema/      matching *.schema.json (structured-output contracts)
pipeline/    the generators (see above) + regenerate.sh; runners (anthropic/gemini/claude/runner);
             diagnostics/ — ad-hoc dev/validation scripts, NOT part of generation
corpus/          one JSON per extracted policy (pipeline input, with its bearing-set)
data_verdicts/   one JSON per (policy, scored outcome) verdict
data_directional/ one JSON per directional (immigration) read
web/             the static site served by GitHub Pages (data.js, detail/, topic/, policy/, og/)
docs/            design-history notes
.github/workflows/pages.yml   deploys web/ to GitHub Pages on push to main
```

## Setup (one-off — only to run the pipeline; the live site itself is static and needs none of this)

```bash
python3 -m venv .venv
./.venv/bin/pip install -r requirements.txt
```

Put the API keys in a `.env` at the repo root (git-ignored — never commit it):

```
ANTHROPIC_API_KEY=sk-ant-...   # a PERSONAL key — the judge (membership + verdicts + verify)
GEMINI_API_KEY=...             # or GOOGLE_API_KEY — used for evidence grounding
```

Rebuilding the **corpus from raw manifestos** (Stage 0 only) additionally needs the `pdftotext` /
`pdftoppm` (poppler) and `tesseract` command-line tools, plus the manifesto PDFs themselves — these
aren't committed (copyright + size); their source URLs live in
[`config/parties.json`](config/parties.json). Because the extracted `corpus/` **is** committed, you
can regenerate every verdict and rebuild the whole site without them.

## Reproducing / updating the data

```bash
PL_STRONG_MODEL=claude-sonnet-4-6 PL_MAX_SPEND=50 ./pipeline/regenerate.sh
```

Every stage is **resumable and incremental** — membership skips policies that already have a
bearing-set, and the verdict stages skip `(policy, outcome)` pairs that already have a file. So the
same script both regenerates from scratch and **adds new policies**: drop a manifesto in, re-extract,
re-run, and only the new work is done. Generation runs on a personal Anthropic key (never an org key)
and is spend-capped. The script writes data + rebuilds `web/`, then stops — committing is fine to
automate, but `git push` (the public publish) always gets a manual review first.

## Checking & challenging

Every verdict on the site opens to its evidence and sources and carries a "report an error" button
(it files a public GitHub issue). See the site's
[How it works](https://showtheworking.uk/how-it-works.html) page for the method in full and an honest
account of the limits.
