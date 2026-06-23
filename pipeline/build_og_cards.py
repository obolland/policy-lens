"""Generate 1200x630 Open Graph share-card images: homepage + per-topic + a branded fallback.

These are rendered from a bespoke card TEMPLATE via headless Chrome — NOT screenshots of the live
pages (a page-crop would be illegible at card size). Run locally when the card text/design changes;
commit the PNGs. The text is topic names + static taglines, so it rarely needs regenerating. No API cost.

    ./.venv/bin/python pipeline/build_og_cards.py
"""
import json
import os
import subprocess
import tempfile
from pathlib import Path

from seo import _esc, _slug

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "web" / "og"
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"


def _title_size(t):
    n = len(t)
    return 104 if n <= 16 else 84 if n <= 26 else 66 if n <= 40 else 54


def _card_html(title, subtitle, cta="Compare the parties →"):
    return f"""<!DOCTYPE html><html><head><meta charset="utf-8"><style>
*{{margin:0;box-sizing:border-box}}
body{{width:1200px;height:630px;background:#fafaf7;color:#14181d;
 font-family:-apple-system,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif;
 padding:64px 84px;display:flex;flex-direction:column;justify-content:space-between;
 border-top:16px solid #1f3a5f}}
.brand{{font-size:36px;font-weight:800;letter-spacing:-.02em}}
.brand .uw{{border-bottom:5px solid #1f3a5f;padding-bottom:3px}}
.title{{font-size:{_title_size(title)}px;font-weight:800;letter-spacing:-.03em;line-height:1.04}}
.sub{{font-size:36px;color:#38414c;margin-top:20px;line-height:1.22;max-width:1000px}}
.cta{{display:inline-block;margin-top:30px;background:#1f3a5f;color:#fff;font-size:28px;
 font-weight:700;padding:15px 28px;border-radius:11px}}
.foot{{display:flex;justify-content:space-between;align-items:center;font-size:25px;color:#59626d}}
.foot .dom{{font-weight:800;color:#14181d}}
.tick{{color:#15723a;font-weight:800}}
</style></head><body>
<div class="brand">Show the <span class="uw">Working</span></div>
<div>
 <div class="title">{_esc(title)}</div>
 <div class="sub">{_esc(subtitle)}</div>
 <div class="cta">{_esc(cta)}</div>
</div>
<div class="foot"><span><span class="tick">✓</span> Independent · source-checked · non-partisan</span>
 <span class="dom">showtheworking.uk</span></div>
</body></html>"""


def render(html, out_path):
    out_path.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.NamedTemporaryFile("w", suffix=".html", delete=False) as f:
        f.write(html)
        tmp = f.name
    try:
        subprocess.run([CHROME, "--headless=new", "--disable-gpu", "--hide-scrollbars",
                        "--force-device-scale-factor=1", "--window-size=1200,630",
                        f"--screenshot={out_path}", f"file://{tmp}"],
                       check=True, capture_output=True, timeout=60)
    finally:
        os.unlink(tmp)


def main():
    cfg = json.loads((ROOT / "config/outcomes.json").read_text())
    topics = [(o["name"], False) for o in cfg["outcomes"]] + \
             [(m["name"], True) for m in cfg.get("directional_measures", [])]
    render(_card_html("See what each party’s plans would actually do.",
                      "Independent, source-checked analysis of UK party policies — pick what matters to you."),
           OUT / "home.png")
    render(_card_html("What the parties’ policies would actually do.",
                      "Independent, source-checked analysis of UK party policies. Non-partisan, every claim sourced."),
           OUT / "default.png")
    n = 2
    for name, directional in topics:
        sub = ("Which way would each party move it? Your call." if directional
               else "Where the UK parties stand — source-checked, non-partisan.")
        render(_card_html(name, sub), OUT / "topic" / f"{_slug(name)}.png")
        n += 1
    print(f"wrote {n} OG cards to {OUT}", flush=True)


if __name__ == "__main__":
    main()
