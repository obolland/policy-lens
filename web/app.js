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

  function confDots(conf) {
    const n = CONF[conf] || 0;
    let s = '<span class="conf" role="img" aria-label="confidence: ' + conf + '">';
    for (let i = 0; i < 3; i++) s += '<span class="dot' + (i < n ? ' on' : '') + '"></span>';
    return s + '</span>';
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

  // ── THE BOARD (v2 design): personalised + issue-first. Each selected issue compares the parties;
  //    a vis selector switches the per-party encoding (diverging bars ⇄ dot spread); tapping a row
  //    opens the evidence drawer. Replaces the old wide table + mobile cards. ──
  let visMode = (function () { try { return localStorage.getItem("stw_vis") || "bars"; } catch (e) { return "bars"; } })();
  const SEG = { improves: "var(--v-improves)", worsens: "var(--v-worsens)", mixed: "var(--v-mixed)", negligible: "var(--v-negligible)", "too-uncertain": "var(--v-uncertain)" };
  const MAGV = { minor: 1, moderate: 2, major: 3, "n/a": 1 };       // distance from centre = effect size
  // a policy's position on the spread axis (helps right, hurts left). Also orders the drawer list so it
  // reads in the same order as the spread — the far-left harm outlier ends up last, not buried mid-list.
  function spreadX(oc) {
    const m = MAGV[oc.magnitude] || 1;
    if (oc.direction === "improves") return 50 + (m / 3) * 43;
    if (oc.direction === "worsens") return 50 - (m / 3) * 43;
    return 50;
  }

  function vCounts(party, oid) {
    const c = { improves: 0, worsens: 0, mixed: 0, negligible: 0, "too-uncertain": 0, n: 0, gaps: 0 };
    for (const x of lookupAll(party, oid)) { if (x.oc.direction) { c[x.oc.direction]++; c.n++; } else if (x.oc.gap) c.gaps++; }
    return c;
  }
  function netLean(party, oid) { const c = vCounts(party, oid); return c.improves - c.worsens; }
  function leanSort(oid) { return D.parties.slice().sort((a, b) => netLean(b, oid) - netLean(a, oid)); }
  function issueMaxSide(oid) { let m = 1; for (const p of D.parties) { const c = vCounts(p, oid); m = Math.max(m, c.improves, c.worsens); } return m; }

  function divBar(party, oid, max) {
    const c = vCounts(party, oid), w = n => (n / max * 50);   // a side reaches the edge at the issue's max
    return '<div class="dvwrap">' +
      '<span class="dv-num neg" title="' + c.worsens + ' hurt">' + (c.worsens || '') + '</span>' +
      '<div class="dv"><span class="dv-axis"></span>' +
      '<span class="dv-neg" style="width:' + w(c.worsens) + '%"></span>' +
      '<span class="dv-pos" style="width:' + w(c.improves) + '%"></span></div>' +
      '<span class="dv-num pos" title="' + c.improves + ' help">' + (c.improves || '') + '</span></div>';
  }
  // SPREAD: x = effect size (direction × magnitude), y = confidence (higher = more certain). Dots that
  // share an (effect, confidence) bucket fan out in a small cluster so none hide behind another.
  const CONFY = { high: 30, moderate: 50, low: 70 };
  function dotStrip(party, oid) {
    const items = lookupAll(party, oid).filter(x => x.oc.direction)
      .sort((a, b) => spreadX(b.oc) - spreadX(a.oc));
    const bucket = {};
    let dots = "";
    for (const { record, oc } of items) {
      const m = MAGV[oc.magnitude] || 1;
      const cx = oc.direction === "improves" ? 50 + (m / 3) * 43 : oc.direction === "worsens" ? 50 - (m / 3) * 43 : 50;
      const cy = CONFY[oc.confidence] || 50;
      const key = oc.direction + m + oc.confidence;
      const n = (bucket[key] = (bucket[key] || 0) + 1) - 1;          // 0,1,2,… within this bucket
      const ang = (n % 6) * (Math.PI / 3), r = 2.5 + Math.min(3, Math.floor(n / 6)) * 4;
      const x = Math.max(3, Math.min(97, cx + Math.cos(ang) * r));
      const y = Math.max(15, Math.min(85, cy + Math.sin(ang) * r * 0.7));
      const tip = record.policy_title + ' — ' + VERDICT[oc.direction].label +
        (oc.magnitude && oc.magnitude !== "n/a" ? ', ' + oc.magnitude + ' effect' : '') +
        (oc.confidence ? ', ' + oc.confidence + ' confidence' : '');
      dots += '<span class="dot" title="' + esc(tip) + '" style="left:' + x + '%;top:' + y + '%;width:10px;height:10px;background:' + SEG[oc.direction] + '"></span>';
    }
    return '<div class="dstrip"><span class="dstrip-mid"></span>' + dots + '</div>';
  }

  function issueSection(o) {
    let rows = "", any = false;
    const order = o.type === "directional" ? D.parties.slice() : leanSort(o.id);
    const max = o.type === "directional" ? 0 : issueMaxSide(o.id);
    for (const p of order) {
      let vis, nsub = "";
      if (o.type === "directional") {
        const reads = lookupAll(p, o.id).filter(h => h.oc.shift); if (!reads.length) continue;
        vis = directionalChip(reads);
      } else {
        const c = vCounts(p, o.id); if (!c.n) continue;
        vis = visMode === "dots" ? dotStrip(p, o.id) : divBar(p, o.id, max);
        nsub = '<span class="ir-n">' + c.n + (c.n === 1 ? ' policy' : ' policies') + '</span>';
      }
      any = true;
      rows += '<button class="irow" type="button" data-party="' + esc(p) + '" data-oc="' + o.id + '">' +
        '<span class="ir-name">' + esc(p) + nsub + '</span><span class="ir-vis">' + vis + '</span></button>';
    }
    if (!any) return "";
    // quick per-issue tally: how the parties split on THIS issue (descriptive, no overall score)
    let tally = "";
    if (o.type !== "directional") {
      let hl = 0, ht = 0, he = 0;
      for (const p of D.parties) { const c = vCounts(p, o.id); if (!c.n) continue; const net = c.improves - c.worsens; if (net > 0) hl++; else if (net < 0) ht++; else he++; }
      const bits = [];
      if (hl) bits.push('<b class="v-improves">' + hl + '</b> lean help');
      if (ht) bits.push('<b class="v-worsens">' + ht + '</b> lean hurt');
      if (he) bits.push('<b>' + he + '</b> even/mixed');
      tally = '<p class="issue-tally">' + bits.join(' · ') + '</p>';
    }
    const axis = o.type === "directional"
      ? '<div class="axis-lab"><span>open ◄</span><span>► more controlled</span></div>'
      : (visMode === "dots" ? '<div class="axis-lab"><span>◄ bigger harm</span><span class="al-mid">↕ height = confidence</span><span>bigger benefit ►</span></div>'
        : '<div class="axis-lab"><span>◄ hurts</span><span>helps ►</span></div>');
    return '<section class="issue"><h3 class="issue-h">' + esc(o.name) + (o.type === "directional" ? ' <span class="o-tag">direction only</span>' : '') + '</h3>' +
      '<p class="issue-plain">' + esc(o.plain) + '</p>' + tally + axis + rows + '</section>';
  }

  // ── desktop-only "Grid" view: the at-a-glance matrix (parties × your issues), coloured by net lean ──
  let hmSort = null;
  function leanColour(lean) {
    const a = Math.min(.9, Math.abs(lean) * 1.15 + .12);
    if (lean > 0.08) return ['rgba(21,114,58,' + a + ')', a > .5 ? '#fff' : 'var(--ink)'];
    if (lean < -0.08) return ['rgba(179,18,28,' + a + ')', a > .5 ? '#fff' : 'var(--ink)'];
    return ['rgba(120,128,138,.16)', 'var(--ink)'];
  }
  function renderMatrix(cols) {
    if (!cols.length) return '<p class="empty-note">Pick an issue above to compare the parties.</p>';
    const parties = hmSort ? D.parties.slice().sort((a, b) => netLean(b, hmSort) - netLean(a, hmSort)) : D.parties;
    let h = '<div class="issue"><div class="hm-scroll"><table class="hm"><thead><tr><th class="hm-cap">Party</th>';
    for (const o of cols) h += '<th data-sort="' + o.id + '" class="' + (hmSort === o.id ? 'on' : '') + '" title="' + esc(o.plain) + '">' + esc(o.name) + '</th>';
    h += '</tr></thead><tbody>';
    for (const p of parties) {
      h += '<tr><th class="hm-party" scope="row">' + esc(p) + '</th>';
      for (const o of cols) {
        if (o.type === "directional") {
          const reads = lookupAll(p, o.id).filter(x => x.oc.shift);
          if (!reads.length) { h += '<td><div class="hcell hm-empty">—</div></td>'; continue; }
          const net = dirLean(reads), a = net > 0.25 ? '→' : net < -0.25 ? '←' : '~';
          h += '<td><button class="hcell hm-dir" type="button" data-party="' + esc(p) + '" data-oc="' + o.id + '"><b>' + a + '</b><small>' + reads.length + '</small></button></td>';
        } else {
          const c = vCounts(p, o.id); if (!c.n) { h += '<td><div class="hcell hm-empty">—</div></td>'; continue; }
          const lean = (c.improves - c.worsens) / c.n, col = leanColour(lean);
          const dom = c.improves > c.worsens ? '↑' : c.improves < c.worsens ? '↓' : '↕';
          h += '<td><button class="hcell" type="button" style="background:' + col[0] + ';color:' + col[1] + '" data-party="' + esc(p) + '" data-oc="' + o.id + '"><b>' + dom + '</b><small>' + c.improves + '·' + c.worsens + '</small></button></td>';
        }
      }
      h += '</tr>';
    }
    const sortNote = hmSort ? 'Sorted by ' + esc((D.outcomes.find(o => o.id === hmSort) || {}).name) + '.' : 'Click a column header to rank parties on that issue.';
    return h + '</tbody></table></div><p class="hm-note">↑/↓ = net lean · numbers = help·hurt · grey = mixed/balanced · immigration shown as direction (no good/bad). ' + sortNote + ' Select a cell for the policies.</p></div>';
  }

  function visToggle() {
    const eff = (visMode === "grid" && isMobile) ? "bars" : visMode;
    let b = '<div class="visbar"><span class="visbar-l">View</span>' +
      '<button class="vt' + (eff === "bars" ? " on" : "") + '" data-vis="bars" type="button">▰ Bars</button>' +
      '<button class="vt' + (eff === "dots" ? " on" : "") + '" data-vis="dots" type="button">⠿ Spread</button>';
    if (!isMobile) b += '<button class="vt' + (eff === "grid" ? " on" : "") + '" data-vis="grid" type="button">▦ Grid</button>';
    return b + '</div>';
  }

  function renderBoard() {
    const cols = D.outcomes.filter(o => selected.has(o.id));
    const mode = (visMode === "grid" && isMobile) ? "bars" : visMode;   // Grid is desktop-only
    let html = visToggle();
    if (mode === "grid") html += renderMatrix(cols);
    else {
      if (!cols.length) html += '<p class="empty-note">Pick an issue above to compare the parties.</p>';
      for (const o of cols) html += issueSection(o);
    }
    const host = document.getElementById("board");
    host.innerHTML = html;
    host.querySelectorAll(".irow, .hcell[data-party]").forEach(b => b.addEventListener("click", () => openDrawer(b.dataset.party, b.dataset.oc, b)));
    host.querySelectorAll(".vt").forEach(b => b.addEventListener("click", () => {
      visMode = b.dataset.vis; try { localStorage.setItem("stw_vis", visMode); } catch (e) {}
      track("vis-toggle", { v: visMode }); renderBoard();
    }));
    host.querySelectorAll(".hm th[data-sort]").forEach(th => th.addEventListener("click", () => {
      hmSort = (hmSort === th.dataset.sort) ? null : th.dataset.sort; renderBoard();
    }));
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
    const ordered = verdicts.slice().sort((a, c) => spreadX(c.oc) - spreadX(a.oc));  // strongest helps → strongest harm (matches the spread)
    for (const { record, oc } of ordered) {
      const v = VERDICT[oc.direction];
      b += '<details class="policy-item" data-pid="' + esc(record.policy_id) + '"><summary>' +
        '<span class="pi-icon v-' + v.cls + '" aria-hidden="true">' + v.icon + '</span>' +
        '<span class="pi-title">' + esc(record.policy_title) + '</span>' +
        (oc.magnitude && oc.magnitude !== "n/a" ? '<span class="pi-mag">' + esc(oc.magnitude) + '</span>' : '') +
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
    // iOS Safari percent-encodes "|" in location.hash to %7C (desktop Chrome keeps it literal), which
    // broke the delimiter match on iPhone. Normalise it back before parsing so deep links work there.
    const m = /#cell=([^|]+)\|([^|]+)(?:\|(.+))?/.exec(location.hash.replace(/%7C/gi, "|"));
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
