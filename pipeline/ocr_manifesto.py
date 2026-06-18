"""OCR fallback for an image-encoded (scanned) manifesto PDF.

Only needed when `pdftotext` finds no text (e.g. Reform's 2024 PDF was image-only). Renders each
page to an image with `pdftoppm` and runs `tesseract` over it, then writes manifestos/<slug>.txt —
which get_manifesto_text() then prefers. Slow (a minute or two for a long manifesto), so it's an
explicit opt-in step, not part of the extraction path.

    ./.venv/bin/python pipeline/ocr_manifesto.py ref      # OCR manifestos/ref.pdf -> manifestos/ref.txt
"""
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MANIFESTO_DIR = ROOT / "manifestos"


def ocr(slug: str):
    pdf = MANIFESTO_DIR / f"{slug}.pdf"
    if not pdf.exists():
        sys.exit(f"no {pdf} — drop the PDF there first")
    for tool in ("pdftoppm", "tesseract"):
        if not shutil.which(tool):
            sys.exit(f"{tool} not found — install it (`brew install poppler tesseract`)")

    with tempfile.TemporaryDirectory() as td:
        td = Path(td)
        print(f"rendering {pdf.name} pages to images ...", flush=True)
        # 300 DPI greyscale gives tesseract good input without huge files
        r = subprocess.run(["pdftoppm", "-r", "300", "-gray", "-png", str(pdf), str(td / "p")],
                           capture_output=True, text=True)
        if r.returncode != 0:
            sys.exit(f"pdftoppm failed: {r.stderr[:300]}")
        pages = sorted(td.glob("p-*.png"))
        if not pages:
            sys.exit("pdftoppm produced no pages")
        print(f"OCR-ing {len(pages)} page(s) with tesseract ...", flush=True)
        out = []
        for i, img in enumerate(pages, 1):
            t = subprocess.run(["tesseract", str(img), "-", "--psm", "1"],
                              capture_output=True, text=True)
            out.append(t.stdout)
            print(f"  page {i}/{len(pages)} ({len(t.stdout)} chars)", flush=True)

    text = "\n\n".join(out).strip()
    dest = MANIFESTO_DIR / f"{slug}.txt"
    dest.write_text(text)
    print(f"wrote {dest}  ({len(text):,} chars). Review it, then re-run extraction.", flush=True)


if __name__ == "__main__":
    if len(sys.argv) != 2:
        sys.exit("usage: python pipeline/ocr_manifesto.py <slug>")
    ocr(sys.argv[1])
