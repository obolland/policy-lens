"""Corpus normalisation — pass 2 of extraction.

Extraction (pass 1) reads each manifesto independently, so grain and outcome-tagging drift between
parties (a bullet-list contract over-splits vs a prose manifesto; O9 becomes a catch-all). This pass
re-imposes ONE standard across every party: consolidate to a consistent distinct-verdict grain and
re-tag candidate_outcomes strictly. It works only from the extracted lists (never re-reads the
manifesto) and never drops a genuine commitment — it consolidates.

    ./.venv/bin/python pipeline/normalize_corpus.py           # all parties with a corpus/<slug>.extraction.json
    ./.venv/bin/python pipeline/normalize_corpus.py ref       # one party

Reads  corpus/<slug>.extraction.json   (pass-1 output)
Writes corpus/<slug>.normalized.json   (the consolidated list + audit note)
       corpus/<slug>-NN-<title>.json   (regenerated per-policy analysis inputs — REPLACES pass-1 set)
"""
import json
import os
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from runner import run_stage  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent
MODEL = os.environ.get("PL_NORMALIZE_MODEL", "gemini-2.5-flash")


def slug(s, n=6):
    words = re.sub(r"[^a-z0-9\s-]", "", s.lower()).split()
    return "-".join(words[:n]) or "policy"


def normalize_party(party_slug, fundamentals):
    src = ROOT / "corpus" / f"{party_slug}.extraction.json"
    if not src.exists():
        print(f"[{party_slug}] no extraction file — run extract.py first", flush=True)
        return
    ext = json.loads(src.read_text())
    party = ext.get("party", party_slug)
    policies_in = ext.get("policies", [])

    prompt = (
        (ROOT / "prompts" / "normalize.md").read_text() + "\n\n"
        "## The fundamentals (use these definitions for strict tagging)\n"
        + json.dumps(fundamentals, indent=2) + "\n\n"
        f"## Party\n{party}\n\n"
        f"## Extracted policies to normalise ({len(policies_in)} items)\n"
        + json.dumps(policies_in, indent=2)
    )
    print(f"[{party_slug}] normalising {len(policies_in)} policies ...", flush=True)
    out, cost = run_stage(prompt, ROOT / "schema" / "normalize.schema.json", MODEL, timeout=1200)

    cdir = ROOT / "corpus"
    (cdir / f"{party_slug}.normalized.json").write_text(json.dumps(out, indent=2))

    # regenerate per-policy analysis-input files, REPLACING the pass-1 set for this party
    for f in cdir.glob(f"{party_slug}-[0-9]*.json"):
        f.unlink()
    for i, pol in enumerate(out.get("policies", []), 1):
        pid = f"{party_slug}-{i:02d}-{slug(pol['policy_title'])}"
        (cdir / f"{pid}.json").write_text(json.dumps({
            "policy_id": pid,
            "party": party,
            "policy_title": pol["policy_title"],
            "stated": pol["stated"],
            "source": pol["source"],
            "candidate_outcomes": pol.get("candidate_outcomes", []),
            "consolidated_from": pol.get("consolidated_from", []),
        }, indent=2))

    n_in, n_out = len(policies_in), len(out.get("policies", []))
    merged = sum(1 for p in out.get("policies", []) if p.get("consolidated_from"))
    print(f"[{party_slug}] {n_in} -> {n_out} policies ({merged} consolidated) (cost-equiv ${cost})", flush=True)
    return out


def main(only=None):
    fundamentals = json.loads((ROOT / "config" / "outcomes.json").read_text())["outcomes"]
    slugs = [only] if only else [p["slug"] for p in
             json.loads((ROOT / "config" / "parties.json").read_text())["parties"]]
    for s in slugs:
        try:
            normalize_party(s, fundamentals)
        except Exception as e:
            print(f"[{s}] FAILED: {e}", flush=True)


if __name__ == "__main__":
    main(sys.argv[1] if len(sys.argv) > 1 else None)
