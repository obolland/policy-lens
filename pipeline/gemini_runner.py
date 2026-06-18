"""Gemini runner — Phase 1 (free bulk + validation). Mirrors claude_runner.run_stage.

Reads GEMINI_API_KEY / GOOGLE_API_KEY from the project .env (handles `export` prefix).
Structured output via Gemini's response_schema (JSON mode). No web tools here — grounding
is done separately (retrieve-once) and fed in as context, because Gemini can't combine
forced JSON output with its search tool.
"""
import json
import os
import time
from pathlib import Path

from google import genai
from google.genai import types

ROOT = Path(__file__).resolve().parent.parent
SYSTEM_PROMPT = (ROOT / "prompts" / "system.md").read_text()
RETRY_BACKOFF = [5, 15, 30]


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
_KEY = os.environ.get("GEMINI_API_KEY") or os.environ.get("GOOGLE_API_KEY")
_client = genai.Client(api_key=_KEY) if _KEY else None


def _sanitize(schema):
    """Resolve $ref/$defs inline and drop keys Gemini's response_schema rejects."""
    defs = schema.get("$defs", {})

    def resolve(node):
        if isinstance(node, dict):
            if "$ref" in node:
                return resolve(defs[node["$ref"].split("/")[-1]])
            return {k: resolve(v) for k, v in node.items()
                    if k not in ("$schema", "$defs", "additionalProperties", "title")}
        if isinstance(node, list):
            return [resolve(x) for x in node]
        return node

    return resolve(schema)


def run_stage(prompt, schema_path, model, allow_web=True, timeout=600):
    """Run one stage on Gemini. Returns (structured_output_dict, cost) — cost is None (free)."""
    if _client is None:
        raise RuntimeError("No GEMINI_API_KEY / GOOGLE_API_KEY found in env or .env")
    schema = _sanitize(json.loads(Path(schema_path).read_text()))
    cfg = types.GenerateContentConfig(
        system_instruction=SYSTEM_PROMPT,
        response_mime_type="application/json",
        response_schema=schema,
        # On 2.5-flash, thinking tokens share the output budget. Unbounded thinking starved the JSON
        # (a big manifesto extraction truncated mid-string). Cap thinking and lift the output ceiling
        # to the model max so the full structured output always fits.
        max_output_tokens=65536,
        thinking_config=types.ThinkingConfig(thinking_budget=4096),
    )
    last = None
    for i in range(len(RETRY_BACKOFF) + 1):
        try:
            resp = _client.models.generate_content(model=model, contents=prompt, config=cfg)
            # truncation is deterministic — surface it (don't burn retries on an identical re-truncate)
            fr = getattr(resp.candidates[0], "finish_reason", None) if getattr(resp, "candidates", None) else None
            if fr is not None and str(fr).rsplit(".", 1)[-1] == "MAX_TOKENS":
                raise RuntimeError("output hit MAX_TOKENS — too much to extract in one call; chunk the input")
            return json.loads(resp.text), None
        except (json.JSONDecodeError, RuntimeError) as e:  # deterministic — fail fast, don't retry
            raise RuntimeError(f"gemini stage failed (non-transient): {e}")
        except Exception as e:  # genuine transients (503/429/network) — retry with backoff
            last = e
            if i < len(RETRY_BACKOFF):
                wait = RETRY_BACKOFF[i]
                print(f"     gemini transient ({str(e)[:140]}); retry in {wait}s", flush=True)
                time.sleep(wait)
    raise RuntimeError(f"gemini stage failed after {len(RETRY_BACKOFF) + 1} attempts: {last}")
