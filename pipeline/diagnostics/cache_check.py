"""Quick check that prompt caching is firing: 3 calls sharing the verdict prefix; print the
cache_creation (write, 1.25x) vs cache_read (0.1x) token split per call. Call 1 should write, calls
2-3 should read."""
import json, sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent))
from anthropic_runner import run_cached, _client
from run_verdict import verdict_prefix, VERDICT_SCHEMA

MODEL = "claude-sonnet-4-6"
prefix = verdict_prefix("O2")
print(f"prefix ~{len(prefix)//4} tokens")
users = [
    "## Policy\n{\"policy_title\":\"Freeze fuel duty\",\"stated\":\"Freeze fuel duty for the parliament.\"}\n## Grounded research\n(none provided)\n### Sources found\n[]",
    "## Policy\n{\"policy_title\":\"Cut VAT on energy\",\"stated\":\"Remove VAT on domestic energy bills.\"}\n## Grounded research\n(none provided)\n### Sources found\n[]",
    "## Policy\n{\"policy_title\":\"Raise the income tax personal allowance\",\"stated\":\"Raise the personal allowance to reduce tax on low earners.\"}\n## Grounded research\n(none provided)\n### Sources found\n[]",
]
for i, u in enumerate(users, 1):
    _, usage, cost = run_cached(prefix, u, VERDICT_SCHEMA, MODEL, max_tokens=6000, effort="low")
    cw = getattr(usage, "cache_creation_input_tokens", 0) or 0
    cr = getattr(usage, "cache_read_input_tokens", 0) or 0
    print(f"call {i}: input={usage.input_tokens} cache_write={cw} cache_read={cr} output={usage.output_tokens} | ${cost:.4f}")
