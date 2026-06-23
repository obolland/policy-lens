# Diagnostics

Ad-hoc validation, calibration and spike scripts used **during development** to probe the pipeline
(prompt-caching behaviour, effort/thinking comparisons, truncation, grounding metadata, fidelity
audits, etc.). They are **not part of how the site's data is generated** — see `pipeline/regenerate.sh`
and the repo `README.md` for the real generation path.

Kept for transparency and so checks can be re-run, but they are not maintained as carefully as the
generation pipeline. They import sibling modules from `pipeline/`, so run them with that on the path, e.g.:

```
PYTHONPATH=pipeline ./.venv/bin/python pipeline/diagnostics/<script>.py
```
