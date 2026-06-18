# Manifestos — primary-source text for extraction

Extraction must read each party's **real 2024 manifesto**, not a web reconstruction (a
secondary-source reconstruction is not good enough for a trust tool). Drop the manifesto here
and the pipeline reads it locally.

## What to add

One file per party, named by its **slug**:

| Party              | slug  | file to add            |
|--------------------|-------|------------------------|
| Labour             | `lab` | `manifestos/lab.pdf`   |
| Conservative       | `con` | `manifestos/con.pdf`   |
| Liberal Democrat   | `ld`  | `manifestos/ld.pdf`    |
| Reform UK          | `ref` | `manifestos/ref.pdf`   |
| Green              | `grn` | `manifestos/grn.pdf`   |

Download each party's official 2024 General Election manifesto PDF, rename it to `<slug>.pdf`,
and put it in this folder. That's it.

## How it's read

- `<slug>.pdf` → text is extracted locally with `pdftotext` (poppler). No upload, no web fetch.
- `<slug>.txt` → if present, used **instead** of the PDF (handy for OCR output or a manual paste).
  Text wins over PDF when both exist.

## If a PDF is image-encoded (scanned)

Some manifestos (Reform's 2024 PDF, last time) are image-only — `pdftotext` finds almost no text
and extraction will **skip** that party with a clear message rather than guess. Two fixes:

1. **OCR it** (tesseract is installed):
   ```
   ./.venv/bin/python pipeline/ocr_manifesto.py ref     # writes manifestos/ref.txt
   ```
   Skim the resulting `.txt` for obvious OCR garble, then re-run extraction.
2. **Or** find a text-based copy of the manifesto and paste it into `manifestos/<slug>.txt`.

## Then run extraction

```
PL_EXTRACT_MODEL=gemini-2.5-flash ./.venv/bin/python pipeline/extract.py        # all parties
./.venv/bin/python pipeline/extract.py ref                                      # one party
```

The manifesto is the authoritative backbone; extraction *also* web-searches for major
attributable positions stated elsewhere (speeches, policy pages), same bar for every party.

> These PDFs are public party documents but can be large — they don't need committing to the repo.
