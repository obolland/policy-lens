#!/usr/bin/env bash
# Follow the Money — refresh the donations data + rebuild the money/ pages.
#
# INDEPENDENT of the verdict pipeline (see docs/follow-the-money-architecture.md): deterministic,
# NO LLM, no Anthropic/Gemini spend. Sources are free public APIs — the Electoral Commission CSV
# export and Companies House (needs COMPANIES_HOUSE_API_KEY in .env). Every stage is incremental:
# the puller re-fetches the full EC export each run (fresh data), enrichment caches every company by
# number so only NEW company donors are fetched.
#
# Cadence: the EC register updates ~quarterly — run this then, not on every verdict regenerate.
# Writes data + rebuilds web/money/ + share cards, then STOPS. Review the diff, then commit + push
# manually (the two curated-adjacent strands need a human publish gate before going public).
set -euo pipefail
cd "$(dirname "$0")/../.."

PY="./.venv/bin/python"

echo "=== Follow the Money refresh ($(date -u +%FT%TZ)) ==="

echo "--- fetch EC donations (complete CSV export) ---"
$PY pipeline/follow_money/fetch_ec_donations.py

echo "--- enrich company donors via Companies House (cached; only new companies fetched) ---"
$PY pipeline/follow_money/enrich_companies.py

echo "--- build money/ pages + comparison landing ---"
$PY pipeline/build_money_web.py

echo "--- rebuild share cards (money + rest) ---"
$PY pipeline/build_og_cards.py

echo "=== done. Review web/money/ + money_data/ diff, then commit + push manually. ==="
