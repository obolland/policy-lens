"""Step A — deterministic source-fidelity audit on EXISTING verdicts (no LLM, ~$0).

Measures the current "blast radius" the council asked for, using only string/number matching:
  - URL fidelity: does every URL a verdict CITES appear in that policy's grounding source set?
    A cited URL NOT in grounding = imported/fabricated citation (the fatal failure mode).
  - Numeric fidelity: does every number in the verdict text appear in the grounding text?
    A figure not in grounding = likely parametric-knowledge bleed (soft flag — rounding/units noise).

Audits both data_verdicts/*.json (live verdicts, grounding in corpus/grounding/<pid>.json) and
compare/*.json (the A/B verdicts, which carry their own grounding inline)."""
import json, re, glob
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
NUM = re.compile(r"£?\d[\d,]*\.?\d*\s*(?:%|bn|billion|million|m\b)?", re.I)


def norm_urls(srcs):
    return {(s.get("url") or "").rstrip("/").lower() for s in srcs if s.get("url") and s.get("url") != "#"}


def numbers(text):
    return {n.strip().lower().replace(",", "") for n in NUM.findall(text or "") if any(c.isdigit() for c in n)}


def audit_verdict(v, grounding_urls, grounding_text):
    cited = norm_urls(v.get("sources", []))
    bad_urls = sorted(u for u in cited if u not in grounding_urls)
    vtext = " ".join(str(v.get(k, "")) for k in ("plain", "rationale", "biggest_unknown")) + " " + \
            " ".join((v.get("evidence_tier") or {}).values())
    gnums = numbers(grounding_text)
    bad_nums = sorted(n for n in numbers(vtext) if n not in gnums and n.replace(".0", "") not in gnums)
    return len(cited), bad_urls, bad_nums


def main():
    rows = []
    # live verdicts
    for f in glob.glob(str(ROOT / "data_verdicts" / "*.json")):
        if Path(f).name.startswith("_"):
            continue
        r = json.loads(Path(f).read_text())
        if "verdict" not in r:
            continue
        gf = list((ROOT / "corpus" / "grounding").glob(r["policy_id"] + ".json"))
        if not gf:
            continue
        g = json.loads(gf[0].read_text())
        rows.append((r["policy_id"], "live", audit_verdict(r["verdict"], norm_urls(g.get("sources", [])), g.get("text", ""))))
    # A/B verdicts (grounding inline)
    for f in glob.glob(str(ROOT / "compare" / "*.json")):
        if Path(f).name.startswith("_"):
            continue
        d = json.loads(Path(f).read_text())
        gurls = norm_urls(d.get("sources", [])); gtext = d.get("grounding_text", "")
        for arm in ("on", "off", "medium", "low"):
            if arm in d:
                rows.append((d["policy_id"] + ":" + arm, "ab", audit_verdict(d[arm]["verdict"], gurls, gtext)))

    if not rows:
        print("no verdicts to audit"); return
    n = len(rows)
    url_fail = sum(1 for _, _, (c, bu, bn) in rows if bu)
    num_fail = sum(1 for _, _, (c, bu, bn) in rows if bn)
    tot_cited = sum(c for _, _, (c, bu, bn) in rows)
    tot_bad_url = sum(len(bu) for _, _, (c, bu, bn) in rows)
    print(f"audited {n} verdicts | {tot_cited} cited sources total\n")
    print(f"URL fidelity:  {url_fail}/{n} verdicts ({url_fail/n*100:.0f}%) cite >=1 URL NOT in grounding "
          f"| {tot_bad_url}/{tot_cited} cited URLs unmatched ({tot_bad_url/max(tot_cited,1)*100:.0f}%)")
    print(f"Numeric flags: {num_fail}/{n} verdicts ({num_fail/n*100:.0f}%) have >=1 number not found in grounding text (soft)\n")
    print("--- worst offenders (cited URLs not in grounding) ---")
    for pid, src, (c, bu, bn) in sorted(rows, key=lambda x: -len(x[2][1]))[:8]:
        if bu:
            print(f"  {pid[:46]:<46} {len(bu)}/{c} unmatched: {bu[0][:60]}")


if __name__ == "__main__":
    main()
