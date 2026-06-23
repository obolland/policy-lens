"""Anthropic runner — the trust-critical judge calls (membership, verdict, verify) on a personal Anthropic key.

Uses the Anthropic SDK with the PERSONAL ANTHROPIC_API_KEY from .env — NOT `claude -p`
(which is the Hudl org seat). Structured output via output_config.format; system prompt
cached via cache_control; adaptive thinking on for the rigorous stages. Returns a real
$ cost computed from token usage so the orchestrator can enforce a spend cap.
"""
import json
import os
import time
from pathlib import Path

import anthropic

ROOT = Path(__file__).resolve().parent.parent
SYSTEM_PROMPT = (ROOT / "prompts" / "system.md").read_text()
RETRY_BACKOFF = [5, 15, 30]

# $/token (input, output)
PRICES = {
    "claude-sonnet-4-6": (3 / 1e6, 15 / 1e6),
    "claude-opus-4-8":   (5 / 1e6, 25 / 1e6),
    "claude-haiku-4-5":  (1 / 1e6, 5 / 1e6),
}


def _load_env():
    envf = ROOT / ".env"
    if not envf.exists():
        return
    for line in envf.read_text().splitlines():
        line = line.strip()
        if not line or line.startswith("#"):
            continue
        if line.startswith("export "):
            line = line[7:].strip()
        if "=" not in line:
            continue
        k, v = line.split("=", 1)
        os.environ.setdefault(k.strip(), v.strip().strip('"').strip("'"))


_load_env()
_KEY = os.environ.get("ANTHROPIC_API_KEY")
_client = anthropic.Anthropic(api_key=_KEY) if _KEY else None


def _cost(model, usage):
    pin, pout = PRICES.get(model, PRICES["claude-sonnet-4-6"])
    inp = getattr(usage, "input_tokens", 0) or 0
    out = getattr(usage, "output_tokens", 0) or 0
    cr = getattr(usage, "cache_read_input_tokens", 0) or 0
    cw = getattr(usage, "cache_creation_input_tokens", 0) or 0
    return inp * pin + out * pout + cr * pin * 0.1 + cw * pin * 1.25


def run_stage(prompt, schema_path, model, allow_web=True, timeout=600):
    """Run one stage on the Anthropic API. Returns (structured_output_dict, cost_usd).

    Streams (so thinking + a large structured output both fit, no truncation/timeout) with a
    generous max_tokens. Retries genuine TRANSIENTS (rate/overload) with backoff; does NOT
    burn repeated attempts on deterministic failures (truncation / bad JSON) — those fail fast.
    """
    if _client is None:
        raise RuntimeError("No ANTHROPIC_API_KEY found in env or .env")
    schema = json.loads(Path(schema_path).read_text())  # Anthropic structured output supports $ref/$defs

    def _attempt():
        with _client.messages.stream(
            model=model,
            max_tokens=32000,  # room for adaptive thinking + the full structured output
            system=[{"type": "text", "text": SYSTEM_PROMPT, "cache_control": {"type": "ephemeral"}}],
            thinking={"type": "adaptive"},
            output_config={"format": {"type": "json_schema", "schema": schema}},
            messages=[{"role": "user", "content": prompt}],
        ) as stream:
            msg = stream.get_final_message()
        if msg.stop_reason == "max_tokens":
            raise RuntimeError("output truncated at max_tokens — raise the cap or shorten the stage")
        text = next((b.text for b in msg.content if b.type == "text"), None)
        if text is None:
            raise RuntimeError(f"no text block (stop_reason={msg.stop_reason})")
        return json.loads(text), _cost(model, msg.usage)

    last = None
    for i in range(len(RETRY_BACKOFF) + 1):
        try:
            return _attempt()
        except anthropic.APIError as e:  # transient (429 / 5xx / overload) — retry with backoff
            last = e
            if i < len(RETRY_BACKOFF):
                wait = RETRY_BACKOFF[i]
                print(f"     anthropic transient ({str(e)[:120]}); retry in {wait}s", flush=True)
                time.sleep(wait)
        except (json.JSONDecodeError, RuntimeError) as e:  # deterministic — don't burn money retrying
            raise RuntimeError(f"anthropic stage failed (non-transient): {e}")
    raise RuntimeError(f"anthropic stage failed after {len(RETRY_BACKOFF) + 1} attempts: {last}")


def run_cached(prefix, user, schema, model, max_tokens=8000, effort=None, thinking_off=False):
    """One structured call with a CACHED shared prefix (validated by verdict_probe).

    `prefix` = the large, stable, cacheable system text (system+criteria+config) — reused verbatim
    across many calls so it's written once then read at 0.1x. `user` = the per-call variable content
    (the policy + its grounding). Returns (structured_output, usage, cost_usd). Same fail-fast/retry
    discipline as run_stage. Used by membership (Stage A) and the verdict stage (Stage B).
    """
    if _client is None:
        raise RuntimeError("No ANTHROPIC_API_KEY found in env or .env")

    output_config = {"format": {"type": "json_schema", "schema": schema}}
    if effort:  # lower effort = less thinking = avoids truncation + cheaper (runtime knob, not a re-run trigger)
        output_config["effort"] = effort
    # last-resort for pathological runaway-thinking prompts: disable thinking entirely (direct answer)
    thinking = {"type": "disabled"} if thinking_off else {"type": "adaptive"}

    def _attempt():
        with _client.messages.stream(
            model=model, max_tokens=max_tokens,
            system=[{"type": "text", "text": prefix, "cache_control": {"type": "ephemeral"}}],
            thinking=thinking,
            output_config=output_config,
            messages=[{"role": "user", "content": user}],
        ) as stream:
            msg = stream.get_final_message()
        if msg.stop_reason == "max_tokens":
            raise RuntimeError("output truncated at max_tokens — raise the cap or shorten")
        text = next((b.text for b in msg.content if b.type == "text"), None)
        if text is None:
            raise RuntimeError(f"no text block (stop_reason={msg.stop_reason})")
        return json.loads(text), msg.usage, _cost(model, msg.usage)

    last = None
    for i in range(len(RETRY_BACKOFF) + 1):
        try:
            return _attempt()
        except anthropic.APIError as e:
            last = e
            if i < len(RETRY_BACKOFF):
                wait = RETRY_BACKOFF[i]
                print(f"     anthropic transient ({str(e)[:120]}); retry in {wait}s", flush=True)
                time.sleep(wait)
        except (json.JSONDecodeError, RuntimeError) as e:
            raise RuntimeError(f"anthropic cached call failed (non-transient): {e}")
    raise RuntimeError(f"anthropic cached call failed after {len(RETRY_BACKOFF) + 1} attempts: {last}")
