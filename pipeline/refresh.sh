#!/usr/bin/env bash
# Policy Lens — scheduled refresh (Option A: runs on the Mac via Claude Code subscription).
# Regenerates every policy record. Invoked by launchd/com.policylens.refresh.plist.
set -uo pipefail
cd "$(dirname "$0")/.."

echo "=== Policy Lens refresh $(date -u +%FT%TZ) ==="
for f in policies/*.json; do
  id="$(basename "$f" .json)"
  echo "--- $id ---"
  python3 pipeline/run.py "$id" || echo "FAILED: $id"
done

# --- Publish step ---
# Generation writes data/<id>.json. Committing the data is fine to automate;
# PUSHING IS NOT — `git push` always needs review (a push is what triggers the
# Cloudflare deploy / public publish). So this script stops at an OPTIONAL local commit.
#
#   git add data && git commit -m "refresh: $(date -u +%FT%TZ)"
#
# Then review the diff and push manually to publish. Uncomment the commit line only
# once the repo + Cloudflare Pages are wired up.
echo "=== refresh complete; review data/ then commit + push manually to publish ==="
