"""Policy extraction — the keystone for completeness.

Reads a party's manifesto + attributable stated positions and extracts EVERY material
policy as an analysis-input file, so WE don't choose which policies get analysed.

    python3 pipeline/extract.py            # all parties in config/parties.json
    python3 pipeline/extract.py ref        # just one party (by slug)

Writes to corpus/:
  corpus/<slug>-NN-<title>.json   one analysis-input per extracted policy (run.py-compatible)
  corpus/<slug>.extraction.json   the full extractor output (policies + logged exclusions + coverage note)
"""
import json
import os
import re
import sys
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
from runner import run_stage  # noqa: E402
from manifesto_text import get_manifesto_text, ManifestoMissing, ManifestoUnreadable  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent
MODEL = os.environ.get("PL_EXTRACT_MODEL", "gemini-2.5-flash")


def slug(s, n=6):
    words = re.sub(r"[^a-z0-9\s-]", "", s.lower()).split()
    return "-".join(words[:n]) or "policy"


def extract_party(p, fundamentals):
    # PRIMARY source: the real manifesto text, fed in locally (never reconstructed from the web)
    manifesto_text, source_note = get_manifesto_text(p["slug"])
    print(f"[{p['slug']}] {source_note}", flush=True)

    prompt = (
        (ROOT / "prompts" / "extract.md").read_text() + "\n\n"
        "## The fundamentals (a policy is 'material' if it plausibly affects one of these)\n"
        + json.dumps(fundamentals, indent=2) + "\n\n"
        f"## Party to extract\n{p['name']}\n\n"
        "## PRIMARY SOURCE — this party's 2024 manifesto (provided in full below)\n"
        "The manifesto text is provided so you don't have to fetch it. It is the authoritative source "
        "for the policies it contains — extract material policies from it directly (do NOT re-fetch or "
        "reconstruct it). But it is NOT the party's complete platform: see the REQUIRED step below.\n"
        "<<<MANIFESTO START>>>\n" + manifesto_text + "\n<<<MANIFESTO END>>>\n\n"
        "## REQUIRED — also capture beyond-manifesto positions (do not skip this)\n"
        "Parties hide unpopular intentions by omission, so the manifesto alone is incomplete. You MUST "
        "ALSO web-search for major, on-the-record, attributable positions this party holds that are "
        "stated ELSEWHERE (leader speeches, official policy pages, press releases) and add them as "
        "policies, same materiality bar and grain. Only attributable, on-record positions, each cited "
        "to its real source. In `coverage_note`, state explicitly which beyond-manifesto positions you "
        "added and from where (if genuinely none meet the bar, say so — don't silently skip the step). "
        "Source hints to start from (verify, don't trust blindly):\n" + "\n".join(p.get("hint_urls", []))
    )
    print(f"[{p['slug']}] extracting {p['name']} ...", flush=True)
    # manifesto reading is heavy → generous timeout
    out, cost = run_stage(prompt, ROOT / "schema" / "extract.schema.json", MODEL, timeout=1200)

    cdir = ROOT / "corpus"
    cdir.mkdir(exist_ok=True)
    (cdir / f"{p['slug']}.extraction.json").write_text(json.dumps(out, indent=2))

    for i, pol in enumerate(out.get("policies", []), 1):
        pid = f"{p['slug']}-{i:02d}-{slug(pol['policy_title'])}"
        rec = {
            "policy_id": pid,
            "party": p["name"],
            "policy_title": pol["policy_title"],
            "stated": pol["stated"],
            "source": pol["source"],
            "candidate_outcomes": pol.get("candidate_outcomes", []),
        }
        (cdir / f"{pid}.json").write_text(json.dumps(rec, indent=2))

    n_pol = len(out.get("policies", []))
    n_exc = len(out.get("excluded", []))
    print(f"[{p['slug']}] {n_pol} policies, {n_exc} excluded (cost-equiv ${cost})", flush=True)
    return out


def main(only=None):
    cfg = json.loads((ROOT / "config" / "parties.json").read_text())
    fundamentals = json.loads((ROOT / "config" / "outcomes.json").read_text())["outcomes"]
    missing = []
    for p in cfg["parties"]:
        if only and p["slug"] != only:
            continue
        try:
            extract_party(p, fundamentals)
        except (ManifestoMissing, ManifestoUnreadable) as e:
            # not a code failure — a primary source the user still needs to provide
            print(f"[{p['slug']}] ⏭️  SKIPPED — {e}", flush=True)
            missing.append(p["slug"])
        except Exception as e:
            print(f"[{p['slug']}] 💥 FAILED: {e}", flush=True)
    if missing:
        print(f"\nNeed primary source for: {', '.join(missing)} — add to manifestos/ then re-run "
              f"(see manifestos/README.md).", flush=True)


if __name__ == "__main__":
    main(sys.argv[1] if len(sys.argv) > 1 else None)
