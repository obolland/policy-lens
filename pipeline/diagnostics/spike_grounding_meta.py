"""Spike: inspect Gemini grounding metadata to design the snippet-extraction mechanism.
Does a grounding chunk carry any source CONTENT (so we can get a verbatim snippet), or only
uri+title (meaning we must fetch each source page ourselves)?"""
import sys
from pathlib import Path
sys.path.insert(0, str(Path(__file__).resolve().parent))
from google.genai import types
from gemini_runner import _client

q = ("Research the likely real-world effects of this UK policy and what credible analysts say. "
     "Policy: Build 1.5 million new homes and reform the planning system.")
cfg = types.GenerateContentConfig(tools=[types.Tool(google_search=types.GoogleSearch())])
resp = _client.models.generate_content(model="gemini-2.5-flash", contents=q, config=cfg)
gm = resp.candidates[0].grounding_metadata
chunks = getattr(gm, "grounding_chunks", None) or []
supports = getattr(gm, "grounding_supports", None) or []
print("response text chars:", len(resp.text or ""))
print("grounding_chunks:", len(chunks), "| grounding_supports:", len(supports))
if chunks:
    c0 = chunks[0]
    print("\nchunk[0] attrs:", [a for a in dir(c0) if not a.startswith('_')])
    w = getattr(c0, "web", None)
    if w:
        print("chunk[0].web attrs:", [a for a in dir(w) if not a.startswith('_')])
        for a in ("uri", "title", "domain"):
            print(f"  web.{a}:", repr(getattr(w, a, None))[:100])
if supports:
    s0 = supports[0]
    print("\nsupport[0] attrs:", [a for a in dir(s0) if not a.startswith('_')])
    seg = getattr(s0, "segment", None)
    if seg:
        print("  segment text:", repr(getattr(seg, "text", None))[:200])
        print("  chunk indices:", getattr(s0, "grounding_chunk_indices", None))
