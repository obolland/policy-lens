"""Primary-source manifesto text — the authoritative backbone for extraction.

The extractor must NOT reconstruct a manifesto from web search / secondary sources (it did that
for Reform when the PDF was image-encoded — not good enough for a trust tool). Instead we feed it
the real manifesto text, pulled locally from a file the user drops in `manifestos/`.

Resolution order for a party slug:
  1. manifestos/<slug>.txt   — plain text (manual paste, or OCR output). Highest priority.
  2. manifestos/<slug>.pdf   — text extracted locally via `pdftotext` (poppler).

If a PDF yields too little text it's almost certainly image-encoded (scanned) — we say so loudly
and point at the OCR helper (pipeline/ocr_manifesto.py) or a manual .txt, rather than silently
proceeding on a near-empty backbone.

    from manifesto_text import get_manifesto_text
    text, note = get_manifesto_text("ref")
"""
import re
import shutil
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
MANIFESTO_DIR = ROOT / "manifestos"
MIN_CHARS = 4000  # a real manifesto is tens of thousands of chars; below this = likely image-only


def _reflow(text: str) -> str:
    """Rejoin column-wrapped lines into real paragraphs.

    pdftotext keeps every visual line-wrap as a hard newline (manifestos are typeset in narrow
    columns), shattering prose into ~30-char fragments. We rebuild paragraphs: blank lines mark
    paragraph breaks; consecutive non-blank lines are joined with a space; end-of-line hyphens are
    de-hyphenated; bare page numbers are dropped. This is text-quality cleanup only — it doesn't
    drop content (it can't fully de-duplicate repeated pull-quotes, which the extractor tolerates).
    """
    paras, buf = [], []
    def flush():
        if buf:
            paras.append(" ".join(buf).strip())
            buf.clear()
    for raw in text.split("\n"):
        line = raw.strip()
        if not line:
            flush(); continue
        if re.fullmatch(r"\d{1,4}", line):  # bare page number
            continue
        if buf and buf[-1].endswith("-") and not buf[-1].endswith((" -", "--")):
            buf[-1] = buf[-1][:-1] + line   # de-hyphenate across the wrap
        else:
            buf.append(line)
    flush()
    return "\n\n".join(p for p in paras if p)


class ManifestoMissing(Exception):
    """No primary-source file for this party (extraction must not fall back to web reconstruction)."""


class ManifestoUnreadable(Exception):
    """A PDF exists but yielded almost no text — image-encoded; needs OCR or a .txt."""


def _pdftotext(pdf: Path) -> str:
    if not shutil.which("pdftotext"):
        raise RuntimeError("pdftotext not found — install poppler (`brew install poppler`) or drop a .txt instead")
    # default reading-order extraction (no -layout: columns interleave more faithfully for prose)
    r = subprocess.run(["pdftotext", "-nopgbrk", str(pdf), "-"],
                       capture_output=True, text=True, timeout=120)
    if r.returncode != 0:
        raise RuntimeError(f"pdftotext failed: {r.stderr[:200]}")
    return r.stdout


def get_manifesto_text(slug: str):
    """Return (text, source_note) for a party slug, or raise if no usable primary source."""
    txt = MANIFESTO_DIR / f"{slug}.txt"
    pdf = MANIFESTO_DIR / f"{slug}.pdf"

    if txt.exists():
        t = _reflow(txt.read_text(errors="replace"))
        if len(t) < MIN_CHARS:
            raise ManifestoUnreadable(f"{txt.name} has only {len(t)} chars — looks truncated/empty")
        return t, f"primary text from {txt.name}, reflowed ({len(t):,} chars)"

    if pdf.exists():
        t = _reflow(_pdftotext(pdf))
        if len(t) < MIN_CHARS:
            raise ManifestoUnreadable(
                f"{pdf.name} yielded only {len(t)} chars of text — it's almost certainly image-encoded "
                f"(scanned). OCR it: `./.venv/bin/python pipeline/ocr_manifesto.py {slug}` (writes "
                f"{slug}.txt), or paste the text into manifestos/{slug}.txt yourself.")
        return t, f"primary text extracted from {pdf.name} via pdftotext, reflowed ({len(t):,} chars)"

    raise ManifestoMissing(
        f"no manifestos/{slug}.pdf or manifestos/{slug}.txt — download the party's 2024 manifesto "
        f"into manifestos/ named '{slug}.pdf' (see manifestos/README.md)")
