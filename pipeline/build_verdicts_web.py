"""Reassembly + web build for Stage-B verdicts (new per-(policy,fundamental) format).

Groups data_verdicts/<pid>__<fund>.json by policy into the record shape the UI consumes
(record.per_outcome = the policy's verdicts across its fundamentals), pulling the policy's `source`
from the corpus. Computes per-record source_balance from the verdicts' own sources. Writes
web/data.js (--publish) or web/data.generated.js. This is the v1 reassembly: it carries no
false_balance_check / steelman / redteam (those were per-policy-synthesis artifacts the new
architecture doesn't produce) — the UI degrades gracefully on their absence.

    ./.venv/bin/python pipeline/build_verdicts_web.py            # -> web/data.generated.js
    ./.venv/bin/python pipeline/build_verdicts_web.py --publish  # -> web/data.js (live)
"""
import json
import sys
import datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PARTY_ORDER = ["Labour", "Conservative", "Liberal Democrat", "Reform UK", "Green", "Plaid Cymru", "SNP"]


def _source_balance(sources):
    by_type = {}
    for s in sources or []:
        t = s.get("source_type", "unknown")
        by_type[t] = by_type.get(t, 0) + 1
    advocacy = by_type.get("advocacy", 0) > 0 or by_type.get("commercial", 0) > 0
    return {"by_type": by_type, "advocacy_flag": advocacy}


def main(publish=False):
    outcomes_cfg = json.loads((ROOT / "config/outcomes.json").read_text())
    outcomes = [{"id": o["id"], "name": o["name"], "plain": o["plain"], "type": o.get("type", "valenced")}
                for o in outcomes_cfg["outcomes"]]
    # directional measures (e.g. D1 immigration) are selectable too, but render as a neutral axis, not a verdict
    for m in outcomes_cfg.get("directional_measures", []):
        outcomes.append({"id": m["id"], "name": m["name"], "plain": m["plain"], "type": "directional",
                         "axis": m.get("axis", [])})
    levers_cfg = json.loads((ROOT / "config/levers.json").read_text())
    levers = {"principle": levers_cfg["principle"], "lens_note": levers_cfg["lens_note"],
              "items": [{"name": l["name"], "why": l["why"], "affects": l["affects"]} for l in levers_cfg["levers"]]}

    # canonical per-party manifesto source (M) — overrides the extractor's guessed/404'd per-policy URLs
    manifesto_src = json.loads((ROOT / "config/parties.json").read_text()).get("manifesto_source", {})

    # policy_id -> source (from corpus)
    corpus_src = {}
    for f in (ROOT / "corpus").glob("*-[0-9]*.json"):
        p = json.loads(f.read_text())
        corpus_src[p["policy_id"]] = p.get("source")

    byp = {}  # policy_id -> record
    for f in sorted((ROOT / "data_verdicts").glob("*.json")):
        if f.name.startswith("_"):
            continue
        r = json.loads(f.read_text())
        pid = r["policy_id"]
        # the policy's stated source = the party's manifesto; pin it to the canonical verified page
        # (keep the extracted quote, swap the guessed/404 url+publisher) so the open data carries no
        # dead links even though this top-level field isn't currently rendered.
        _src = dict(corpus_src.get(pid) or {})
        _m = manifesto_src.get(r["party"])
        if _m:
            _src.update({k: _m[k] for k in ("url", "publisher", "source_type")})
        rec = byp.setdefault(pid, {
            "policy_id": pid, "party": r["party"], "policy_title": r["policy_title"],
            "source": _src or None, "per_outcome": [],
            "meta": {"models": {"verdict": "claude-sonnet-4-6"}, "revisions": [],
                     "generated_at": datetime.date.today().isoformat()},
        })
        if "verdict" not in r:  # typed coverage gap — surfaced honestly, not dropped
            gtype = r.get("gap", "unsourced")
            rec["per_outcome"].append({"outcome": r["outcome"], "gap": gtype,
                                       "gap_label": {"truncation": "not yet assessed (technical)",
                                                     "unsourced": "analysed — couldn't verify external evidence"}.get(gtype, "not yet assessed")})
            continue
        v = dict(r["verdict"])  # verdict already carries outcome, direction, claims, sources, ...
        # enrich each claim with the source behind its cited evidence unit (for tap-to-receipt)
        ev_idx = {u.get("evidence_id"): u for u in (r.get("meta", {}).get("evidence") or [])}
        for c in v.get("claims", []):
            # M-tier claims cite the party's own manifesto — always use the canonical, verified party
            # source (the extractor's per-policy M url was a guess and several 404'd). E# claims keep
            # their grounded source. Falls through to the cited unit if a party has no canonical entry.
            m = manifesto_src.get(rec["party"]) if c.get("evidence_id") == "M" else None
            srcs = (ev_idx.get(c.get("evidence_id")) or {}).get("sources") or []
            s0 = m or (srcs[0] if srcs else {})
            c["publisher"] = (s0 or {}).get("publisher", "")
            c["url"] = (s0 or {}).get("url", "")
            c["source_type"] = (s0 or {}).get("source_type", "")
        # re-derive the verdict's source list from the (now-canonical) claim sources so the source-mix
        # badge matches the receipts and the extractor's stale/404 M url is purged from the data.
        titles = {s.get("url"): s.get("title", "") for s in v.get("sources", [])}
        seen_s, newsrcs = set(), []
        for c in v.get("claims", []):
            u = c.get("url")
            if u and u not in seen_s:
                seen_s.add(u)
                newsrcs.append({"url": u, "publisher": c.get("publisher", ""),
                                "source_type": c.get("source_type", ""), "title": titles.get(u, "")})
        v["sources"] = newsrcs
        rec["per_outcome"].append(v)
        rec["meta"]["revisions"] += r["meta"].get("revisions", [])
        rec["_passed"] = rec.get("_passed", True) and bool(r["meta"].get("verifier", {}).get("passed"))

    # DIRECTIONAL measures (e.g. D1 immigration) — separate dir; rendered as a neutral axis, not a verdict
    ddir = ROOT / "data_directional"
    for f in sorted(ddir.glob("*.json")) if ddir.exists() else []:
        if f.name.startswith("_"):
            continue
        r = json.loads(f.read_text())
        rec = byp.get(r["policy_id"])
        if rec is None:
            continue  # directional-only policy with no valenced record (rare) — skip
        if "verdict" not in r:  # directional gap — keyword caught it but it couldn't be verified; drop quietly
            continue
        # 'no material change' = the keyword filter over-matched (the policy doesn't actually move
        # immigration). Drop it from the immigration column entirely — no bearing, not shown. Keep
        # 'unclear' (it DOES touch immigration, we just can't call the direction).
        if r["verdict"].get("shift") == "no material change":
            continue
        dv = dict(r["verdict"]); dv["outcome"] = r["measure"]; dv["type"] = "directional"
        ev_idx = {u.get("evidence_id"): u for u in (r.get("meta", {}).get("evidence") or [])}
        for c in dv.get("claims", []):
            m = manifesto_src.get(rec["party"]) if c.get("evidence_id") == "M" else None
            srcs = (ev_idx.get(c.get("evidence_id")) or {}).get("sources") or []
            s0 = m or (srcs[0] if srcs else {})
            c["publisher"] = (s0 or {}).get("publisher", ""); c["url"] = (s0 or {}).get("url", ""); c["source_type"] = (s0 or {}).get("source_type", "")
        rec["per_outcome"].append(dv)

    records = []
    for rec in byp.values():
        all_src = [s for oc in rec["per_outcome"] for s in oc.get("sources", [])]
        rec["meta"]["source_balance"] = _source_balance(all_src)
        rec["meta"]["verifier"] = {"passed": rec.pop("_passed", True)}
        records.append(rec)

    present = {r["party"] for r in records}
    parties = [p for p in PARTY_ORDER if p in present] + sorted(p for p in present if p not in PARTY_ORDER)
    present_outcomes = sorted({oc["outcome"] for r in records for oc in r["per_outcome"]})
    # open the grid on a curated, balanced subset (config default_selected) so it isn't 15-wide;
    # fall back to whatever's present. Keep only defaults that actually have data in this build.
    cfg_default = [o for o in outcomes_cfg.get("default_selected", []) if o in present_outcomes]
    default_selected = cfg_default or present_outcomes or ["O1", "O3"]

    payload = {
        "generated_at": datetime.date.today().isoformat(),
        "disclaimer": "Source-checked analysis from the Policy Lens pipeline (Stage-B verdicts). Every verdict is challengeable — check its sources.",
        "outcomes": outcomes, "levers": levers, "parties": parties, "records": records,
        "default_selected": default_selected,
        "picker_groups": outcomes_cfg.get("picker_groups", []),
    }
    out = ROOT / "web" / ("data.js" if publish else "data.generated.js")
    out.write_text("/* GENERATED from data_verdicts/*.json by build_verdicts_web.py — do not edit by hand. */\n"
                   "window.POLICY_DATA = " + json.dumps(payload, indent=2) + ";\n")
    cells = {}
    for r in records:
        for oc in r["per_outcome"]:
            cells.setdefault((r["party"], oc["outcome"]), 0)
            cells[(r["party"], oc["outcome"])] += 1
    print(f"wrote {out} | {len(records)} policies, {sum(len(r['per_outcome']) for r in records)} verdicts, "
          f"parties: {', '.join(parties)}", flush=True)
    print(f"populated cells: {[(f'{p}/{o}', n) for (p,o),n in sorted(cells.items())]}", flush=True)


if __name__ == "__main__":
    main(publish="--publish" in sys.argv)
