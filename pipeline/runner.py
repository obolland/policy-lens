"""Provider dispatcher — routes run_stage to the right backend by model name.

Lets us set the model per stage (config) and flip providers without touching pipeline code:
  - "gemini*"  -> gemini_runner   (free, bulk drafting)
  - "claude*"  -> anthropic_runner (PERSONAL Anthropic API key — synthesis + verifier)

NB: claude-* routes to anthropic_runner (Anthropic SDK + a PERSONAL Anthropic key) — never the
Hudl org seat / `claude -p`.
"""
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))


def run_stage(prompt, schema_path, model, allow_web=True, timeout=600):
    if str(model).startswith("gemini"):
        from gemini_runner import run_stage as _g
        return _g(prompt, schema_path, model, allow_web=allow_web, timeout=timeout)
    if str(model).startswith("claude"):
        from anthropic_runner import run_stage as _a
        return _a(prompt, schema_path, model, allow_web=allow_web, timeout=timeout)
    raise ValueError(f"unknown model/provider: {model!r}")
