"""Thin wrapper around headless `claude -p` for one pipeline stage.

Each stage is one non-interactive Claude Code call with an enforced JSON Schema.
Runs on the Claude Code subscription (Option A) — no API key, ~£0 marginal cost.
The structured result is returned in the envelope's `structured_output` field.
"""
import json
import subprocess
import time
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SYSTEM_PROMPT = (ROOT / "prompts" / "system.md").read_text()

RETRY_BACKOFF = [5, 15, 30]  # seconds; len+1 total attempts


def _attempt(cmd, prompt, timeout):
    """One subprocess attempt. Returns structured_output + cost, or raises."""
    proc = subprocess.run(cmd, input=prompt, capture_output=True,
                          text=True, timeout=timeout)
    if proc.returncode != 0:
        # claude -p often writes its error envelope/message to stdout, not stderr
        detail = (proc.stderr or proc.stdout or "").strip()[:800]
        raise RuntimeError(f"claude exited {proc.returncode}: {detail!r}")
    env = json.loads(proc.stdout)
    if env.get("is_error"):
        raise RuntimeError(f"claude reported error: {env.get('result')!r}")
    out = env.get("structured_output")
    if out is None:
        raise RuntimeError(
            f"no structured_output (result={str(env.get('result'))[:300]!r})")
    return out, env.get("total_cost_usd")


def run_stage(prompt: str, schema_path: Path, model: str,
              allow_web: bool = True, timeout: int = 600):
    """Run one stage, retrying transient failures. Returns (output_dict, cost_usd)."""
    schema = Path(schema_path).read_text()
    cmd = [
        "claude", "-p",
        "--output-format", "json",
        "--json-schema", schema,
        "--append-system-prompt", SYSTEM_PROMPT,
        "--model", model,
    ]
    if allow_web:
        # allowlisted read-only tools auto-run in print mode (no prompt/hang)
        cmd += ["--allowed-tools", "WebSearch", "WebFetch"]

    last = None
    for i in range(len(RETRY_BACKOFF) + 1):
        try:
            return _attempt(cmd, prompt, timeout)
        except (RuntimeError, json.JSONDecodeError, subprocess.TimeoutExpired) as e:
            last = e
            if i < len(RETRY_BACKOFF):
                wait = RETRY_BACKOFF[i]
                print(f"     transient failure ({str(e)[:120]}); retry in {wait}s", flush=True)
                time.sleep(wait)
    raise RuntimeError(f"stage failed after {len(RETRY_BACKOFF) + 1} attempts: {last}")
