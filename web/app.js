/* Show the Working — prototype UI. Vanilla JS, reads window.POLICY_DATA. */
(function () {
  const D = window.POLICY_DATA;

  // Party order carries no ranking. A fixed order (by seats, alphabetical, …) always hands someone
  // the top row, and the top of a list draws disproportionate attention (the ballot-order effect).
  // So we SHUFFLE the parties on EVERY load — the visible reshuffle is itself part of the message
  // that position means nothing. The legend states this openly.
  (function shuffleParties() {
    const a = [...(D.parties || [])];
    for (let i = a.length - 1; i > 0; i--) {  // Fisher–Yates
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    D.parties = a;
  })();
  const VERDICT = {
    improves:        { icon: "↑", label: "Helps",                cls: "improves" },
    worsens:         { icon: "↓", label: "Hurts",                cls: "worsens" },
    mixed:           { icon: "↕", label: "Mixed",                cls: "mixed" },
    negligible:      { icon: "–", label: "Little effect",        cls: "negligible" },
    "too-uncertain": { icon: "⚖", label: "Genuinely contested",  cls: "uncertain" }
  };
  const CONF = { low: 1, moderate: 2, high: 3 };
  const esc = s => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  let selected = new Set((D.default_selected && D.default_selected.length) ? D.default_selected : ["O1", "O3"]);
  let lastFocused = null;
  let lastOpened = null;                   // {party, outcome} of the currently-open drawer — for the report-error link

  // GitHub repo (owner/name) that receives "report an error" issues.
  const ISSUE_REPO = "obolland/policy-lens";

  // responsive: below this width we swap the wide table for stacked issue-cards, and the picker for an accordion
  const mq = window.matchMedia("(max-width: 700px)");
  let isMobile = mq.matches;

  // Privacy-safe, cookieless event tracking. Sends only non-identifying labels
  // (issue/party), never personal data. No-op until a backend is wired at deploy
  // (GoatCounter by default — see index.html). Never throws into the UI.
  function track(name, props) {
    try {
      const label = props ? name + ":" + Object.keys(props).sort().map(k => props[k]).join(":") : name;
      if (window.goatcounter && typeof window.goatcounter.count === "function") {
        window.goatcounter.count({ path: "evt/" + label, title: "event:" + name, event: true });
      }
      // else: no analytics backend configured (local/dev) — silently do nothing.
    } catch (e) { /* analytics must never break the page */ }
  }

  // order used for the distribution bar + drawer list (positive → contested → negative)
  const DIR_ORDER = ["improves", "mixed", "too-uncertain", "negligible", "worsens"];

  // ALL policies a party has touching a fundamental (the cell may roll up several)
  function lookupAll(party, outcomeId) {
    const hits = [];
    for (const r of D.records) {
      if (r.party !== party) continue;
      const oc = r.per_outcome.find(o => o.outcome === outcomeId);
      if (oc) hits.push({ record: r, oc });
    }
    return hits;
  }

  // The cell leads on the HELP↔HURT balance only. Mixed / little-effect / contested don't compete
  // with a direction — they say "no clear lean" — so they're SIDELINED out of the headline (shown
  // muted beneath, as a grey bar block, and in full on tap), never counted into the denominator. We
  // show BOTH raw help and hurt numbers, so there's no hidden remainder to misread as "the opposite".
  // A direction is asserted only when one side clearly outweighs; close calls read "Roughly even".
  function spreadLead(hits) {
    const counts = {};
    for (const h of hits) counts[h.oc.direction] = (counts[h.oc.direction] || 0) + 1;
    const help = counts.improves || 0, hurt = counts.worsens || 0;
    const dir = help + hurt, other = hits.length - dir;
    const lo = Math.min(help, hurt), hi = Math.max(help, hurt);
    // clear lean: one side unopposed, OR ≥60% of the directional policies AND ahead by ≥2
    const clear = dir > 0 && (lo === 0 ? hi >= 1 : (hi / dir >= 0.6 && hi - lo >= 2));
    let base;
    if (!clear) base = { icon: "↕", cls: "mixed", text: dir ? "Roughly even" : "No clear lean" };
    else if (hurt > help) base = { icon: "↓", cls: "worsens", text: "Leans negative" };
    else base = { icon: "↑", cls: "improves", text: "Leans positive" };
    return Object.assign(base, { help, hurt, other, counts });
  }

  // multi-policy cell — help/hurt is the signal (big, colour-coded); the rest is sidelined (see spreadLead)
  const _OTHER_DIRS = ["mixed", "negligible", "too-uncertain"];
  const _OTHER_WORD = { mixed: "mixed", negligible: "little effect", "too-uncertain": "contested" };
  function distributionChip(hits) {
    const n = hits.length;
    const lead = spreadLead(hits);
    const { help, hurt, other, counts } = lead;

    let h = '<div class="dist">';
    h += '<div class="dist-lead v-' + lead.cls + '"><span class="dl-icon" aria-hidden="true">' + lead.icon +
         '</span><span class="dl-text">' + esc(lead.text) + '</span></div>';
    // the two numbers that carry the signal — dominant first, colour-coded
    const nHelp = '<span class="hh v-improves">' + help + ' help</span>';
    const nHurt = '<span class="hh v-worsens">' + hurt + ' hurt</span>';
    h += '<div class="dist-nums">' + (hurt > help ? nHurt + nHelp : nHelp + nHurt) + '</div>';
    // tug-of-war bar: help (green) | hurt (red) | sidelined (grey)
    h += '<div class="dist-bar" role="img" aria-label="' + help + ' help, ' + hurt + ' hurt, ' + other + ' neither">';
    if (help)  h += '<span class="dist-seg improves" style="flex:' + help + '"></span>';
    if (hurt)  h += '<span class="dist-seg worsens" style="flex:' + hurt + '"></span>';
    if (other) h += '<span class="dist-seg other" style="flex:' + other + '"></span>';
    h += '</div>';
    if (other) {  // sidelined buckets — muted, with the exact split on hover; full detail on tap
      const title = "Neither a clear help nor hurt — " +
        _OTHER_DIRS.filter(d => counts[d]).map(d => counts[d] + " " + _OTHER_WORD[d]).join(", ");
      h += '<div class="dist-other" title="' + esc(title) + '">+' + other + ' neither help nor hurt</div>';
    }
    h += '<div class="dist-foot"><span class="dist-hint">tap for all ' + n + ' →</span></div>';
    if (hits.some(x => x.record.meta.source_balance.advocacy_flag))
      h += '<div class="tags"><span class="tag advocacy">some lean on advocacy sources</span></div>';
    return h + '</div>';
  }

  function confDots(conf) {
    const n = CONF[conf] || 0;
    let s = '<span class="conf" role="img" aria-label="confidence: ' + conf + '">';
    for (let i = 0; i < 3; i++) s += '<span class="dot' + (i < n ? ' on' : '') + '"></span>';
    return s + '</span>';
  }

  function verdictChip(oc, record) {
    const v = VERDICT[oc.direction];
    let h = '<div class="verdict v-' + v.cls + '">';
    h += '<span class="v-icon" aria-hidden="true">' + v.icon + '</span>';
    h += '<span class="v-label">' + esc(v.label) + '</span>';
    h += confDots(oc.confidence) + '</div>';
    h += '<div class="policy-sub">' + esc(record.policy_title) + '</div>';
    const tags = [];
    if (oc.direction === "too-uncertain") tags.push('<span class="tag contested">credible experts disagree</span>');
    if (record.meta.source_balance.advocacy_flag) tags.push('<span class="tag advocacy">leans on advocacy sources</span>');
    if (tags.length) h += '<div class="tags">' + tags.join("") + '</div>';
    return h;
  }

  // ---- DIRECTIONAL measures (e.g. D1 immigration): show WHICH WAY, never good/bad ----
  const DIR_SHIFT = {
    "toward more controlled": { lean: 1, label: "tighter" },
    "toward more open": { lean: -1, label: "looser" },
    "no material change": { lean: 0, label: "no change" },
    "unclear": { lean: 0, label: "unclear" },
  };
  const MAG_W = { minor: 0.5, moderate: 1, major: 1.5, "n/a": 0 };

  function dirLean(reads) {
    let s = 0, moved = 0;
    for (const h of reads) {
      const d = DIR_SHIFT[h.oc.shift]; if (!d || !d.lean) continue;
      s += d.lean * (MAG_W[h.oc.magnitude] || 1); moved++;
    }
    return moved ? s / moved : 0;  // -1.5 (open) .. +1.5 (controlled)
  }

  function directionalChip(reads) {
    const c = { ctrl: 0, open: 0, none: 0 };
    for (const h of reads) {
      const sh = h.oc.shift;
      if (sh === "toward more controlled") c.ctrl++;
      else if (sh === "toward more open") c.open++;
      else c.none++;
    }
    const net = dirLean(reads);
    const pos = Math.max(7, Math.min(93, 50 + net * 30));
    const lead = net > 0.25 ? "Leans tighter" : net < -0.25 ? "Leans looser" : "No clear direction";
    const bits = [];
    if (c.ctrl) bits.push(c.ctrl + " tighter");
    if (c.open) bits.push(c.open + " looser");
    if (c.none) bits.push(c.none + " unclear");
    return '<div class="dir">' +
      '<div class="dir-lead">' + lead + '</div>' +
      '<div class="dir-axis" role="img" aria-label="' + c.open + ' looser, ' + c.ctrl + ' tighter">' +
        '<span class="dir-end">open</span>' +
        '<span class="dir-track"><span class="dir-marker" style="left:' + pos + '%"></span></span>' +
        '<span class="dir-end">controlled</span></div>' +
      '<div class="dir-foot"><span class="dir-mix">' + bits.join(" · ") + '</span>' +
        '<span class="dist-hint">' + reads.length + " policies · tap →</span></div>" +
      '</div>';
  }

  function directionalBody(oc) {
    let b = "";
    if (oc.plain) b += '<p class="plain-lead">' + esc(oc.plain) + '</p>';
    b += '<div class="dl-line"><b>Direction:</b> ' + esc(oc.shift) +
      (oc.magnitude && oc.magnitude !== "n/a" ? ' <span class="muted">(' + esc(oc.magnitude) + ')</span>' : "") + '</div>';
    if (oc.net_migration) b += '<div class="dl-line"><b>Effect on net migration:</b> ' + esc(oc.net_migration) + '</div>';
    const claims = oc.claims || [];
    if (claims.length) {
      b += '<div class="section-h">The evidence — every claim, with its source</div>';
      for (const c of claims) {
        const pub = c.publisher ? esc(c.publisher) : "source";
        const link = (c.url && c.url !== "#") ? ' <a href="' + esc(c.url) + '" target="_blank" rel="noopener">' + pub + ' ↗</a>' : " " + pub;
        const typ = c.source_type ? '<span class="src-type ' + esc(c.source_type) + '">' + esc(c.source_type) + "</span>" : "";
        b += '<details class="claim"><summary><span class="claim-txt">' + esc(c.claim) + '</span>' +
          '<span class="receipt-cue">show source ▾</span></summary>' +
          '<div class="receipt"><span class="rq">“' + esc(c.quote) + '”</span><div class="rs">— ' + link + " " + typ + "</div></div></details>";
      }
    }
    if (oc.rationale) b += '<div class="section-h reading-h">Our reading</div><p class="our-reading">' + esc(oc.rationale) + "</p>";
    return b;
  }

  function directionalDrawer(party, outcome, reads) {
    let b = '<p class="multi-intro">We don’t judge immigration as good or bad — that’s your call. We show which way each policy moves it, and its effect on net migration. Its knock-on effects (jobs, housing, the public finances) are scored under those topics.</p>';
    b += directionalChip(reads).replace('class="dir"', 'class="dir big"');
    b += '<div class="policy-list">';
    const ordered = reads.slice().sort((a, c) => (DIR_SHIFT[c.oc.shift] ? DIR_SHIFT[c.oc.shift].lean : 0) - (DIR_SHIFT[a.oc.shift] ? DIR_SHIFT[a.oc.shift].lean : 0));
    for (const { record, oc } of ordered) {
      b += '<details class="policy-item"><summary>' +
        '<span class="pi-title">' + esc(record.policy_title) + '</span>' +
        '<span class="pi-verdict dir">' + esc(oc.shift) + '</span></summary>' +
        '<div class="pi-body">' + directionalBody(oc) + '</div></details>';
    }
    return b + '</div><div class="drawer-actions"><button class="btn primary challenge" type="button">Report an error in these</button></div>';
  }

  function chipHtml(o) {
    const on = selected.has(o.id);
    const tag = o.type === "directional" ? '<span class="o-tag">direction only</span>' : "";
    return '<button class="chip' + (o.type === "directional" ? " chip-dir" : "") + '" type="button" aria-pressed="' + on + '" data-oc="' + o.id + '">' +
      '<span class="o-name">' + esc(o.name) + tag + '</span>' +
      '<span class="o-plain">' + esc(o.plain) + '</span></button>';
  }

  // accordion picker on MOBILE (compact: 4 lines), always-visible labelled sections on desktop (discoverable)
  const expandedGroups = new Set();        // which accordion sections are open (preserved across re-renders)

  function renderPicker() {
    const byId = id => D.outcomes.find(o => o.id === id);
    const groups = (D.picker_groups && D.picker_groups.length) ? D.picker_groups : null;
    const groupCount = g => g.ids.filter(id => selected.has(id)).length;
    let html;
    if (groups && isMobile) {
      html = groups.map(g => {
        const chips = g.ids.map(byId).filter(Boolean).map(chipHtml).join("");
        const sel = groupCount(g);
        const badge = sel ? '<span class="pg-count">' + sel + ' selected</span>' : "";
        return '<details class="pgroup pgroup-acc" data-g="' + esc(g.name) + '"' + (expandedGroups.has(g.name) ? " open" : "") + '>' +
          '<summary class="pgroup-h pgroup-h-acc"><span class="pg-title">' + esc(g.name) + '</span>' + badge + '<span class="pg-chev" aria-hidden="true">▾</span></summary>' +
          '<div class="pgroup-chips">' + chips + "</div></details>";
      }).join("");
    } else if (groups) {
      html = groups.map(g => {
        const chips = g.ids.map(byId).filter(Boolean).map(chipHtml).join("");
        return '<div class="pgroup"><div class="pgroup-h">' + esc(g.name) + "</div>" +
          '<div class="pgroup-chips">' + chips + "</div></div>";
      }).join("");
    } else {
      html = D.outcomes.map(chipHtml).join("");
    }
    document.getElementById("picker-chips").innerHTML = html;
    document.querySelectorAll("details.pgroup-acc").forEach(d => d.addEventListener("toggle", () => {
      if (d.open) expandedGroups.add(d.dataset.g); else expandedGroups.delete(d.dataset.g);
    }));
    document.querySelectorAll(".chip").forEach(c => c.addEventListener("click", () => {
      const id = c.dataset.oc;
      if (selected.has(id)) { if (selected.size > 1) selected.delete(id); }
      else { selected.add(id); track("select-fundamental", { o: id }); }
      renderPicker(); renderBoard();
    }));
  }

  // the content for one (party, outcome) cell — shared by the desktop table and the mobile cards
  function cellInner(party, o) {
    const hits = lookupAll(party, o.id);
    if (o.type === "directional") {  // immigration etc. — neutral axis, no good/bad
      const reads = hits.filter(h => h.oc.shift);
      if (!reads.length) return { empty: true };
      return { cls: "dir", html: directionalChip(reads) };
    }
    const verdicts = hits.filter(h => h.oc.direction);   // real verdicts
    const gaps = hits.filter(h => h.oc.gap);              // typed coverage gaps (honest, not blanks)
    if (!hits.length) return { empty: true };
    if (!verdicts.length) return { cls: "gap", html: '<div class="dist-lead gap-lead">⊘ ' + gaps.length + ' not yet assessed</div>' };
    const gnote = gaps.length ? '<div class="dist-gapnote">+' + gaps.length + ' not yet assessed</div>' : "";
    if (verdicts.length === 1) return { cls: VERDICT[verdicts[0].oc.direction].cls, html: verdictChip(verdicts[0].oc, verdicts[0].record) + gnote };
    return { cls: "multi", html: distributionChip(verdicts) + gnote };
  }

  function renderGrid() {
    const cols = D.outcomes.filter(o => selected.has(o.id));
    let head = '<thead><tr><th scope="col"><span class="vh">Party</span></th>';
    for (const o of cols) head += '<th scope="col"' + (o.type === "directional" ? ' class="col-dir"' : "") + '>' + esc(o.name) + '<span class="col-plain">' + esc(o.plain) + '</span></th>';
    head += '</tr></thead><tbody>';
    let body = "";
    for (const party of D.parties) {
      body += '<tr><th scope="row" class="party">' + esc(party) + '</th>';
      for (const o of cols) {
        const ci = cellInner(party, o);
        const dc = o.type === "directional" ? " cell-dir" : "";
        if (ci.empty) { body += '<td class="cell' + dc + '"><div class="cell-empty">no policy</div></td>'; continue; }
        body += '<td class="cell' + dc + '"><button class="cell-btn ' + ci.cls + '" type="button" data-party="' + esc(party) +
          '" data-oc="' + o.id + '">' + ci.html + '</button></td>';
      }
      body += '</tr>';
    }
    document.getElementById("grid").innerHTML = head + body + '</tbody>';
    document.querySelectorAll(".cell-btn").forEach(b => b.addEventListener("click", () =>
      openDrawer(b.dataset.party, b.dataset.oc, b)));
    // sticky-column elevation shadow: on only while horizontally scrolled (listener wired once)
    const gs = document.querySelector(".grid-scroll");
    if (gs) {
      gs.classList.toggle("scrolled", gs.scrollLeft > 0);
      if (!gs._shadowWired) {
        gs._shadowWired = true;
        gs.addEventListener("scroll", () => gs.classList.toggle("scrolled", gs.scrollLeft > 0), { passive: true });
      }
    }
  }

  // MOBILE: one card per selected issue, with each party stacked inside (no wide table, no h-scroll)
  function renderCards() {
    const cols = D.outcomes.filter(o => selected.has(o.id));
    let html = "";
    for (const o of cols) {
      html += '<section class="ocard"><div class="ocard-h">' + esc(o.name) +
        (o.type === "directional" ? ' <span class="o-tag">direction only</span>' : "") +
        '<span class="ocard-plain">' + esc(o.plain) + '</span></div>';
      for (const party of D.parties) {
        const ci = cellInner(party, o);
        if (ci.empty) {
          html += '<div class="ocard-row empty"><span class="ocard-party">' + esc(party) + '</span><span class="ocard-na">no policy</span></div>';
        } else {
          html += '<button class="ocard-row ' + ci.cls + '" type="button" data-party="' + esc(party) + '" data-oc="' + o.id + '">' +
            '<span class="ocard-party">' + esc(party) + '</span><span class="ocard-cell">' + ci.html + '</span></button>';
        }
      }
      html += "</section>";
    }
    const host = document.getElementById("grid-cards");
    host.innerHTML = html;
    host.querySelectorAll(".ocard-row[data-party]").forEach(b => b.addEventListener("click", () =>
      openDrawer(b.dataset.party, b.dataset.oc, b)));
  }

  // pick table vs cards by viewport
  function renderBoard() {
    document.body.classList.toggle("is-mobile", isMobile);
    if (isMobile) renderCards(); else renderGrid();
  }

  function tier(name, cls, text) {
    return '<div class="tier ' + cls + '"><div class="swatch"></div><div>' +
      '<span class="t-name">' + esc(name) + '</span>' + esc(text || "—") + '</div></div>';
  }

  function balanceNote(meta) {
    const bt = meta.source_balance.by_type || {};
    const badges = Object.entries(bt).map(([k, n]) => '<span class="badge"><b>' + n + '</b> ' + esc(k) + '</span>').join("");
    const note = meta.source_balance.advocacy_flag
      ? '<div class="prov-note advocacy">⚠ A verdict here leans on advocacy or commercial sources — weigh accordingly. They are labelled and never the sole basis for a verdict.</div>'
      : '<div class="prov-note clean">Rests on government, institutional, and academic sources.</div>';
    return '<div class="prov" title="overall source mix for this policy">' + badges + '</div>' + note;
  }

  // list individual sources (deduped) as links with a source_type badge
  function sourceItems(list) {
    const seen = new Set(), out = [];
    for (const s of list || []) {
      const k = (s.url || "") + "|" + (s.publisher || "");
      if (seen.has(k)) continue;
      seen.add(k); out.push(s);
    }
    if (!out.length) return '<p class="src-empty">No individual evidence sources on this verdict in the mock — real records carry the full list.</p>';
    return '<ul class="src-list">' + out.map(s => {
      const name = esc(s.publisher || "source");
      const hasUrl = s.url && s.url !== "#";
      const label = hasUrl ? '<a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + name + ' ↗</a>' : name;
      const type = '<span class="src-type ' + esc(s.source_type) + '">' + esc(s.source_type) + '</span>';
      const interest = s.interest ? '<span class="src-interest">— ' + esc(s.interest) + '</span>' : "";
      return '<li>' + label + " " + type + " " + interest + '</li>';
    }).join("") + '</ul>';
  }

  // policy-statement source(s) — normalise to an array so 1 or many both work
  function policySources(src) {
    const list = Array.isArray(src) ? src : (src ? [src] : []);
    if (!list.length) return "";
    const items = list.map(s => {
      const name = esc(s.publisher || "source");
      return (s.url && s.url !== "#") ? '<a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + name + ' ↗</a>' : name;
    }).join(" · ");
    return '<div class="stated-src">Stated in: ' + items + '</div>';
  }

  function lensBlock(record) {
    const lenses = ["market", "equity", "fiscal", "delivery"];
    let out = "";
    for (const l of lenses) {
      const s = record.steelman && record.steelman.by_lens && record.steelman.by_lens[l];
      const r = record.redteam && record.redteam.by_lens && record.redteam.by_lens[l];
      if (!s && !r) continue;
      out += '<div class="lens"><span class="lname">' + l + '</span><br>';
      if (s) out += '<span class="for">For:</span> ' + esc(s.argument) + '<br>';
      if (r) out += '<span class="against">Against:</span> ' + esc(r.critique);
      out += '</div>';
    }
    if (!out) out = '<div class="lens">(Full steel-man / red-team detail is produced by the pipeline; omitted in this mock record.)</div>';
    return '<details class="dig"><summary>See the full argument — the case for &amp; against</summary>' + out + '</details>';
  }

  // DUAL-HORIZON badge — only render when near & long genuinely diverge in VALENCE (the model
  // over-emits time_split; this filter keeps it to the real "cost now -> gain later" type cases).
  // PARKED for post-release iteration: flip to true (and regen O12/O13 with the time_split field)
  // to ship it across all dual-horizon outcomes, not just the 2 environment cells that have it now.
  const SHOW_DUAL_HORIZON = false;
  function dhSign(d) { return d === "improves" ? 1 : d === "worsens" ? -1 : 0; }
  function dualHorizonBadge(oc) {
    if (!SHOW_DUAL_HORIZON) return "";
    const t = oc.time_split;
    if (!t || !t.near_direction || !t.long_direction) return "";
    // ONLY a genuine reversal: one side helps, the other hurts (cost-now/gain-later or vice-versa).
    // Excludes the ubiquitous 'negligible -> improves' delayed-benefit case, which would over-fire.
    if (dhSign(t.near_direction) * dhSign(t.long_direction) >= 0) return "";
    const seg = (lbl, dir) => {
      const v = VERDICT[dir] || { icon: "", label: dir, cls: "" };
      return '<span class="thz-seg"><span class="thz-lbl">' + lbl + '</span><b class="v-' + v.cls + '">' + v.icon + " " + esc(v.label) + "</b></span>";
    };
    return '<div class="thz"><div class="thz-row"><span class="thz-ic" aria-hidden="true">⏳</span>' +
      seg("Now", t.near_direction) + '<span class="thz-arrow" aria-hidden="true">→</span>' + seg("Long term", t.long_direction) +
      "</div>" + (t.note ? '<div class="thz-note">' + esc(t.note) + "</div>" : "") + "</div>";
  }

  // full detail for ONE policy's verdict — used standalone (single-policy cell) and inside each
  // collapsible of a multi-policy drawer. Each policy keeps its own analysis; nothing is collapsed.
  // detail for ONE verdict — evidence-bound: every claim shows its receipt (the verbatim quote +
  // source), and OUR READING (interpretation) sits clearly below the evidence.
  function singleVerdictBody(record, oc) {
    const v = VERDICT[oc.direction];
    const CONF_WORD = {
      low: "Our best read — there isn't a lot of hard evidence yet",
      moderate: "We're reasonably confident in this",
      high: "There's strong evidence for this"
    };
    const MAG = { minor: "Minor effect", moderate: "Moderate effect", major: "Major effect" };
    const HORIZON = { immediate: "felt immediately", "this-parliament": "within this parliament", "long-term": "long-term effect" };
    const TIER = { stated: "What they promise", measurable: "Where things stand now", projected: "Will it work? (contested forecast)" };

    let b = '<div class="verdict-big v-' + v.cls + '"><span class="v-icon" aria-hidden="true">' + v.icon + '</span>' +
      esc(v.label) + ' &nbsp;' + confDots(oc.confidence) + '</div>';
    b += '<div class="conf-word">' + esc(CONF_WORD[oc.confidence] || "") + '</div>';

    const vmeta = [];
    if (oc.magnitude && oc.magnitude !== "n/a") vmeta.push(MAG[oc.magnitude] || oc.magnitude);
    if (oc.time_horizon && oc.time_horizon !== "n/a") vmeta.push(HORIZON[oc.time_horizon] || oc.time_horizon);
    if (vmeta.length) b += '<div class="vmeta">' + esc(vmeta.join(" · ")) + '</div>';

    b += '<p class="plain-lead"><span class="plain-tag">In plain terms</span>' + esc(oc.plain || "") + '</p>';
    b += dualHorizonBadge(oc);

    if (oc.direction === "too-uncertain" && oc.uncertainty) {
      b += '<div class="unknown"><b>Why the experts can’t agree</b>' + esc(oc.uncertainty.crux_parameter) +
        '<br><br><b>How far the estimates vary</b>' + esc(oc.uncertainty.estimate_range) + '</div>';
    } else if (oc.biggest_unknown) {
      b += '<div class="unknown"><b>The big question</b>' + esc(oc.biggest_unknown) + '</div>';
    }

    // THE EVIDENCE — every claim with a tap-to-reveal receipt (verbatim quote + source). Grouped by tier.
    b += '<div class="section-h">The evidence — every claim, with its source</div>';
    const claims = oc.claims || [];
    for (const t of ["stated", "measurable", "projected"]) {
      const cl = claims.filter(c => c.tier === t);
      if (!cl.length) continue;
      b += '<div class="tier-h ' + t + '">' + TIER[t] + '</div>';
      for (const c of cl) {
        const pub = c.publisher ? esc(c.publisher) : "source";
        const link = (c.url && c.url !== "#") ? ' <a href="' + esc(c.url) + '" target="_blank" rel="noopener">' + pub + ' ↗</a>' : ' ' + pub;
        const typ = c.source_type ? '<span class="src-type ' + esc(c.source_type) + '">' + esc(c.source_type) + '</span>' : "";
        b += '<details class="claim"><summary><span class="claim-txt">' + esc(c.claim) + '</span>' +
          '<span class="receipt-cue">show source ▾</span></summary>' +
          '<div class="receipt"><span class="rq">“' + esc(c.quote) + '”</span><div class="rs">— ' + link + ' ' + typ + '</div></div>' +
          '</details>';
      }
    }

    // OUR READING — interpretation, clearly separated and BELOW the evidence
    if (oc.rationale) {
      b += '<div class="section-h reading-h">Our reading</div>' +
        '<p class="our-reading">' + esc(oc.rationale) + '</p>';
    }

    b += balanceNote(record.meta);
    b += '<div class="drawer-actions"><button class="btn primary challenge" type="button" data-policy="' + esc(record.policy_title) + '">Report an error in this verdict</button></div>';

    const rev = (record.meta.revisions || []).length;
    b += '<div class="meta-line">Verifier: ' + (record.meta.verifier.passed ? "passed" : "blocked") +
      (rev ? " after " + rev + " self-correction" + (rev > 1 ? "s" : "") : "") +
      ' · generated ' + esc(record.meta.generated_at) + '</div>';
    return b;
  }

  function wireChallenge() {
    const c = lastOpened || {};
    const oname = (D.outcomes.find(o => o.id === c.outcome) || {}).name || c.outcome || "";
    // there can be MANY report-error buttons in one drawer (one per policy in a multi-cell, plus the
    // bottom one) — wire every .challenge, not just the first. Each may name its own policy.
    document.querySelectorAll(".challenge").forEach(ch => {
      if (ch.dataset.wired) return;
      ch.dataset.wired = "1";
      ch.addEventListener("click", () => {
        if (!ISSUE_REPO || ISSUE_REPO === "OWNER/REPO") {
          alert("Reporting an error opens a public GitHub issue so the correction is logged in the open. (Not yet wired up in this build.)");
          return;
        }
        const policy = ch.dataset.policy || "";
        const link = location.origin + location.pathname + "#cell=" + encodeURIComponent(c.party || "") + "|" + encodeURIComponent(c.outcome || "");
        const title = "Verdict error: " + (c.party || "") + " — " + (policy || oname);
        const body = [
          "**Party:** " + (c.party || ""),
          "**Topic:** " + oname,
          policy ? "**Policy:** " + policy : null,
          "**Cell:** " + link,
          "",
          "**What looks wrong** (ideally name the specific claim, and a source that shows the correction):",
          "",
          "",
          "_Reported via the Show the Working “report an error” button._",
        ].filter(x => x !== null).join("\n");
        const url = "https://github.com/" + ISSUE_REPO + "/issues/new?labels=verdict-error&title=" +
          encodeURIComponent(title) + "&body=" + encodeURIComponent(body);
        window.open(url, "_blank", "noopener");
      });
    });
  }

  function gapItems(gaps) {
    if (!gaps.length) return "";
    let h = '<div class="gap-list"><div class="tier-h">Not yet assessed</div>';
    for (const { record, oc } of gaps)
      h += '<div class="gap-item">⊘ ' + esc(record.policy_title) + ' — <span class="gap-why">' + esc(oc.gap_label || "not yet assessed") + '</span></div>';
    return h + '</div>';
  }

  // lazy-load per-policy detail (claims/quotes/rationale/sources) on drawer-open; cache + merge into
  // the record so the existing render functions find oc.claims etc. Keeps the initial data.js tiny.
  const detailCache = {};
  function loadDetail(pids) {
    return Promise.all(pids.map(function (pid) {
      if (detailCache[pid]) return detailCache[pid];
      const p = fetch("detail/" + encodeURIComponent(pid) + ".json")
        .then(function (r) { return r.ok ? r.json() : null; })
        .then(function (d) {
          if (d) {
            const rec = D.records.find(function (x) { return x.policy_id === pid; });
            if (rec) { rec.per_outcome = d.per_outcome; if (d.meta) Object.assign(rec.meta, d.meta); }
          }
          return d;
        })
        .catch(function () { return null; });
      detailCache[pid] = p;
      return p;
    }));
  }

  async function openDrawer(party, outcomeId, trigger) {
    let hits = lookupAll(party, outcomeId);
    if (!hits.length) return;
    lastFocused = trigger || document.activeElement;
    lastOpened = { party: party, outcome: outcomeId };
    // reflect the open cell in the URL so it's copy/shareable. replaceState → no history spam and no
    // hashchange event (so this doesn't re-trigger openFromHash).
    history.replaceState(null, "", "#cell=" + encodeURIComponent(party) + "|" + encodeURIComponent(outcomeId));
    const outcome = D.outcomes.find(o => o.id === outcomeId);
    const head = '<div class="eyebrow">' + esc(party) + ' · ' + esc(outcome.name) + '</div>';

    // open with a loading state, fetch this cell's policy detail, then render
    document.getElementById("drawer-head-inner").innerHTML = head + '<h3 id="drawer-title">' + esc(outcome.name) + '</h3>';
    document.getElementById("drawer-body").innerHTML = '<p class="multi-intro">Loading the evidence…</p>';
    track("open-cell", { p: party, o: outcomeId });
    openPanel();
    await loadDetail([...new Set(hits.map(h => h.record.policy_id))]);
    hits = lookupAll(party, outcomeId);  // records now carry full detail

    if (outcome.type === "directional") {  // immigration etc. — neutral axis drawer
      const reads = hits.filter(h => h.oc.shift);
      if (!reads.length) { closeDrawer(); return; }
      document.getElementById("drawer-body").innerHTML = directionalDrawer(party, outcome, reads);
      wireChallenge();
      return;
    }

    const verdicts = hits.filter(h => h.oc.direction);
    const gaps = hits.filter(h => h.oc.gap);

    if (!verdicts.length) {  // gap-only — explain honestly
      document.getElementById("drawer-head-inner").innerHTML = head + '<h3 id="drawer-title">Not yet assessed</h3>';
      document.getElementById("drawer-body").innerHTML =
        '<p class="multi-intro">We found policies here but couldn’t yet verify them against checkable sources, so we’re not showing a verdict — that’s an honest gap, not a judgement.</p>' + gapItems(gaps);
      return;
    }

    if (verdicts.length === 1 && !gaps.length) {
      const { record, oc } = verdicts[0];
      document.getElementById("drawer-head-inner").innerHTML = head + '<h3 id="drawer-title">' + esc(record.policy_title) + '</h3>';
      document.getElementById("drawer-body").innerHTML = singleVerdictBody(record, oc);  // includes its own report-error
      wireChallenge();
      return;
    }

    // MULTI: lead with the spread of the verdicts, then list each policy individually (no collapse)
    const counts = {};
    for (const h of verdicts) counts[h.oc.direction] = (counts[h.oc.direction] || 0) + 1;
    const present = DIR_ORDER.filter(d => counts[d]);
    let bar = '<div class="dist-bar big">';
    for (const d of present) bar += '<span class="dist-seg ' + VERDICT[d].cls + '" style="flex:' + counts[d] + '"></span>';
    bar += '</div>';
    const mix = present.map(d => '<span class="dist-tally v-' + VERDICT[d].cls + '">' +
      VERDICT[d].icon + " " + counts[d] + " " + VERDICT[d].label.toLowerCase() + '</span>').join("");

    document.getElementById("drawer-head-inner").innerHTML = head +
      '<h3 id="drawer-title">' + verdicts.length + ' policies affect this</h3>';

    let b = '<p class="multi-intro">We don’t roll these into one score — each policy is judged on its own and listed below, so you can see the full spread and decide what weighs most.</p>';
    b += bar + '<div class="dist-mix wide">' + mix + '</div><div class="policy-list">';
    const ordered = verdicts.slice().sort((a, c) => DIR_ORDER.indexOf(a.oc.direction) - DIR_ORDER.indexOf(c.oc.direction));
    for (const { record, oc } of ordered) {
      const v = VERDICT[oc.direction];
      b += '<details class="policy-item" data-pid="' + esc(record.policy_id) + '"><summary>' +
        '<span class="pi-icon v-' + v.cls + '" aria-hidden="true">' + v.icon + '</span>' +
        '<span class="pi-title">' + esc(record.policy_title) + '</span>' +
        '<span class="pi-verdict v-' + v.cls + '">' + esc(v.label) + '</span></summary>' +
        '<div class="pi-body">' + singleVerdictBody(record, oc) + '</div></details>';
    }
    b += '</div>' + gapItems(gaps) +
      '<div class="drawer-actions"><button class="btn primary challenge" type="button">Report an error in these verdicts</button></div>';
    document.getElementById("drawer-body").innerHTML = b;
    wireChallenge();
  }

  // open the side panel with whatever is already in its head/body
  // (shared by cell detail + the issues explainer — overlays, never shifts the table)
  function openPanel() {
    document.getElementById("scrim").classList.add("open");
    const drawer = document.getElementById("drawer");
    drawer.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");
    document.getElementById("drawer-close").focus();
  }

  function closeDrawer() {
    document.getElementById("scrim").classList.remove("open");
    const drawer = document.getElementById("drawer");
    drawer.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
    if (location.hash.indexOf("#cell=") === 0) history.replaceState(null, "", location.pathname + location.search);
    if (lastFocused && lastFocused.focus) lastFocused.focus();
  }

  // focus trap within the open drawer
  function trapFocus(e) {
    const drawer = document.getElementById("drawer");
    if (e.key !== "Tab" || !drawer.classList.contains("open")) return;
    const f = drawer.querySelectorAll('a[href], button, summary, [tabindex]:not([tabindex="-1"])');
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  document.getElementById("scrim").addEventListener("click", closeDrawer);
  document.getElementById("drawer-close").addEventListener("click", closeDrawer);
  document.addEventListener("keydown", e => { if (e.key === "Escape") closeDrawer(); trapFocus(e); });
  const copyBtn = document.getElementById("copy-link");
  if (copyBtn) copyBtn.addEventListener("click", async () => {
    try { await navigator.clipboard.writeText(location.href); } catch (e) { /* clipboard blocked (e.g. non-https) */ }
    const t = copyBtn.textContent; copyBtn.textContent = "✓ Copied"; copyBtn.disabled = true;
    setTimeout(() => { copyBtn.textContent = t; copyBtn.disabled = false; }, 1500);
  });

  function buildExplainerHtml() {
    const lv = D.levers;
    if (!lv) return "";
    const nameOf = id => { const o = D.outcomes.find(x => x.id === id); return o ? o.name : id; };
    let h = '<p class="ex-principle">' + esc(lv.principle) + '</p><ul class="lever-list">';
    for (const item of lv.items) {
      const feeds = (item.affects || []).map(id =>
        '<button class="feed-chip" type="button" data-oc="' + id + '">' + esc(nameOf(id)) + '</button>').join("");
      h += '<li><div class="lever-name">' + esc(item.name) + '</div>' +
        '<div class="lever-why">' + esc(item.why) + '</div>' +
        '<div class="feeds"><span class="feeds-label">Shows up in:</span> ' + feeds + '</div></li>';
    }
    h += '</ul>';
    if (lv.lens_note) h += '<p class="ex-lens">' + esc(lv.lens_note) + '</p>';
    return h;
  }

  // the "why these issues?" explainer opens in the SAME side panel as cell detail
  // (overlays the page — never pushes the table down)
  function openExplainer() {
    if (!D.levers) return;
    lastFocused = document.getElementById("explainer-btn");
    document.getElementById("drawer-head-inner").innerHTML =
      '<div class="eyebrow">About the topics</div>' +
      '<h3 id="drawer-title">Why these topics — and where do policy areas like energy or childcare show up?</h3>';
    document.getElementById("drawer-body").innerHTML = buildExplainerHtml();
    // "shows up in" chips: pick that fundamental, close the panel, scroll to the grid
    document.querySelectorAll("#drawer-body .feed-chip").forEach(c => c.addEventListener("click", () => {
      selected.add(c.dataset.oc);
      track("select-fundamental", { o: c.dataset.oc });
      renderPicker(); renderBoard();
      closeDrawer();
      document.querySelector(".gridcard").scrollIntoView({ behavior: "smooth", block: "center" });
    }));
    track("open-explainer");
    openPanel();
  }

  const exBtn = document.getElementById("explainer-btn");
  if (exBtn) exBtn.addEventListener("click", openExplainer);

  // deep link: #cell=Party|OutcomeId opens that drawer on load — shareable, and lets us screenshot states
  async function openFromHash() {
    const m = /#cell=([^|]+)\|([^|]+)(?:\|(.+))?/.exec(location.hash);
    if (!m) return;
    const party = decodeURIComponent(m[1]), oc = decodeURIComponent(m[2]);
    if (!D.parties.includes(party) || !D.outcomes.some(o => o.id === oc)) return;
    if (!selected.has(oc)) { selected.add(oc); renderPicker(); renderBoard(); }
    await openDrawer(party, oc, null);
    if (m[3]) {  // optional policy id — expand that policy's collapsible + scroll to it
      const pid = decodeURIComponent(m[3]);
      const el = document.querySelector('#drawer-body .policy-item[data-pid="' + (window.CSS && CSS.escape ? CSS.escape(pid) : pid) + '"]');
      if (el) { el.open = true; el.scrollIntoView({ block: "start" }); }
    }
  }
  window.addEventListener("hashchange", openFromHash);

  // re-render picker + board when crossing the mobile/desktop breakpoint
  mq.addEventListener("change", e => { isMobile = e.matches; renderPicker(); renderBoard(); });

  renderPicker();
  renderBoard();
  openFromHash();
})();
