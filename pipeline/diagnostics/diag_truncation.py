"""Diagnostic: capture what a truncating verdict actually generates, to see WHY it runs away.

Reproduces the con-87 verdict (cached grounding), streams the raw output, and on truncation dumps
the head + tail + length so we can tell repetition-loop vs valid-but-huge."""
import json, sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent))
from anthropic_runner import _client
from run_verdict import verdict_prefix, VERDICT_SCHEMA, _grounding

ROOT = Path(__file__).resolve().parent.parent
pid_glob = "con-87*"
pol = json.loads(next((ROOT / "corpus").glob(pid_glob + ".json")).read_text())
g = _grounding(pol)
user = (f"## Policy to judge (effect on O1 only)\n{json.dumps({'policy_title': pol['policy_title'], 'stated': pol.get('stated','')}, indent=2)}\n\n"
        f"## Grounded research (cite these real sources)\n{g['text'][:6000]}\n\n### Sources found\n{json.dumps(g['sources'], indent=2)}")

acc = []
with _client.messages.stream(
    model="claude-sonnet-4-6", max_tokens=16000,
    system=[{"type": "text", "text": verdict_prefix("O1"), "cache_control": {"type": "ephemeral"}}],
    thinking={"type": "disabled"},
    output_config={"format": {"type": "json_schema", "schema": VERDICT_SCHEMA}, "effort": "low"},
    messages=[{"role": "user", "content": user}],
) as stream:
    for t in stream.text_stream:
        acc.append(t)
    msg = stream.get_final_message()

text = "".join(acc)
print(f"stop_reason={msg.stop_reason} | output_tokens={msg.usage.output_tokens} | chars={len(text)}")
print("\n===== HEAD (first 1200 chars) =====\n" + text[:1200])
print("\n===== TAIL (last 1500 chars) =====\n" + text[-1500:])
