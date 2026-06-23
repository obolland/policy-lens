#!/usr/bin/env bash
# Policy Lens — regenerate the analysis + rebuild the site, using the CURRENT architecture.
#
# Every stage is RESUMABLE and INCREMENTAL: membership skips policies that already have a
# bearing_set; run_cells / run_directional skip (policy, outcome) pairs that already have a verdict
# file. So this same script is BOTH the full regenerate AND the "add new policies / run an update"
# path — add a manifesto + extract it, re-run, and only the new work is done.
#
# Runs on a Mac against a PERSONAL Anthropic key (never an org key) + a Gemini key for grounding.
# Generation costs money, so it's spend-capped. It writes data + builds web/, then STOPS:
# committing is fine to do by hand, but `git push` (the public publish) always needs review.
set -euo pipefail
cd "$(dirname "$0")/.."

PY="./.venv/bin/python"
export PL_STRONG_MODEL="${PL_STRONG_MODEL:-claude-sonnet-4-6}"   # judge for membership + verdicts
export PL_MAX_SPEND="${PL_MAX_SPEND:-50}"                        # USD cap; aborts before exceeding

echo "=== Policy Lens regenerate ($(date -u +%FT%TZ)) | model=$PL_STRONG_MODEL cap=\$$PL_MAX_SPEND ==="

# Stage 0 — CORPUS (only when (re)building inputs from manifestos in manifestos/*.pdf).
#   Uncomment to rebuild the corpus; otherwise the committed corpus/ is used as-is.
# echo "--- extract + normalise corpus ---"
# $PY pipeline/extract.py            # manifestos -> corpus/<slug>.extraction.json
# $PY pipeline/normalize_corpus.py   # -> corpus/<policy_id>.json

# Stage A — MEMBERSHIP: which outcomes each policy bears on (writes bearing_set into corpus/*.json).
echo "--- stage A: membership ---"
$PY pipeline/membership.py

# Stage B — VERDICTS: one party-blind, grounded, verified verdict per (policy, outcome) + the
# directional immigration read. -> data_verdicts/<policy>__<O#>.json + data_directional/<policy>__D1.json
echo "--- stage B: verdicts (scored outcomes) ---"
$PY pipeline/run_cells.py
echo "--- stage B: directional read (immigration) ---"
$PY pipeline/run_directional.py

# Stage C — BUILD the static site (slim data.js + lazy detail + topic/policy pages + sitemap + OG cards).
echo "--- stage C: build web ---"
$PY pipeline/build_verdicts_web.py --publish
$PY pipeline/build_og_cards.py

echo "=== done. Review the diff in web/ + data_verdicts/, then commit + push manually to publish. ==="
