/* DEMO-ONLY mock data for the distribution-cell idea. Self-contained; not used by the live site.
   Multiple policies per (party × fundamental) so the distribution cell can be seen. Delete freely. */
(function () {
  const OUTCOMES = [
    { id: "O1", name: "Affordable housing",   plain: "Can I afford a decent place to live?" },
    { id: "O2", name: "Cost of living",       plain: "Is day-to-day life getting more or less affordable?" },
    { id: "O3", name: "Healthcare",           plain: "Can I get good care when I need it?" },
    { id: "O9", name: "Rights & freedoms",    plain: "Are my rights, freedoms, and fair treatment protected?" }
  ];

  // compact source + meta builders so the mock stays readable
  const src = (publisher, source_type, interest) => ({ url: "#", publisher, source_type, interest: interest || "" });
  const meta = (advocacy) => ({
    source_balance: { by_type: advocacy ? { government: 2, institutional: 3, advocacy: 2 } : { government: 4, institutional: 3, academic: 1 }, advocacy_flag: !!advocacy },
    verifier: { passed: true },
    revisions: [{ attempt: 1 }],
    generated_at: "2026-06-12"
  });
  const fb = (note) => ({ headline_verdict: "leans", note: note || "On balance the evidence points one way, but with real caveats.",
    sub_claims: [{ claim: "The headline aim is credible", verdict: "leans-for", why: "Supported by independent analysis." },
                 { claim: "The scale and timing are oversold", verdict: "leans-against", why: "Delivery record suggests slower, smaller." }] });
  const tiers = (s, m, p) => ({ stated: s, measurable: m, projected: p });

  // one verdict object on a single outcome
  function verdict(outcome, direction, magnitude, horizon, confidence, plain, opts) {
    opts = opts || {};
    const o = {
      outcome, direction,
      magnitude: direction === "too-uncertain" ? "n/a" : magnitude,
      time_horizon: direction === "too-uncertain" ? "n/a" : horizon,
      confidence, plain,
      biggest_unknown: opts.unknown || "Whether delivery matches the promise.",
      evidence_tier: opts.tiers || tiers("What the party has said it will do.", "Where the baseline sits today, per official data.", "The contested forecast — analysts differ on the size."),
      rationale: opts.rationale || plain,
      sources: opts.sources || [src("Office for Budget Responsibility", "government"), src("Institute for Fiscal Studies", "institutional")]
    };
    if (direction === "too-uncertain") o.uncertainty = { is_genuine: true,
      crux_parameter: opts.crux || "The one parameter that decides it is genuinely unknown.",
      estimate_range: opts.range || "Credible estimates span from clearly positive to clearly negative." };
    return o;
  }

  // a record = one policy, carrying its verdict(s)
  function rec(party, id, title, vlist, advocacy, source) {
    return { policy_id: id, party, policy_title: title,
      source: source || src(party + " policy document", "government"),
      per_outcome: vlist, false_balance_check: fb(), steelman: null, redteam: null, meta: meta(advocacy) };
  }

  const records = [
    // ---- Labour × Affordable housing: 4 policies, mostly help + one mixed ----
    rec("Labour", "lab-h1", "Build 1.5 million homes / planning reform",
      [verdict("O1", "improves", "moderate", "long-term", "moderate", "Should get more homes built — but likely fewer than promised, and not much cheaper for lower incomes.")]),
    rec("Labour", "lab-h2", "Restore mandatory housing targets for councils",
      [verdict("O1", "improves", "minor", "this-parliament", "moderate", "Pushes councils to permit more homes; effect depends on whether they can actually deliver.")]),
    rec("Labour", "lab-h3", "New social & affordable housing investment",
      [verdict("O1", "improves", "moderate", "long-term", "high", "Directly funds genuinely affordable homes — the part most likely to help lower-income renters.")]),
    rec("Labour", "lab-h4", "Reform Right to Buy discounts",
      [verdict("O1", "mixed", "minor", "this-parliament", "low", "Keeps more social homes in the pool, but slows some people's route to owning.")]),

    // ---- Conservative × Affordable housing: 2 policies, genuinely opposite ----
    rec("Conservative", "con-h1", "Extend Right to Buy to housing associations",
      [verdict("O1", "worsens", "moderate", "this-parliament", "moderate", "Helps some buyers, but shrinks the social-rent pool that lower-income families rely on.")]),
    rec("Conservative", "con-h2", "Help to Buy-style first-time-buyer support",
      [verdict("O1", "improves", "minor", "immediate", "low", "Eases deposits for some buyers; past schemes also nudged prices up, blunting the gain.")]),

    // ---- Labour × Cost of living: 3 policies, split ----
    rec("Labour", "lab-c1", "GB Energy / cheaper clean power",
      [verdict("O2", "improves", "moderate", "long-term", "low", "Aim is lower bills over time; the savings are real but years out and contested.")]),
    rec("Labour", "lab-c2", "Employment Rights Bill",
      [verdict("O2", "improves", "minor", "this-parliament", "moderate", "More secure pay and conditions for many workers.")]),
    rec("Labour", "lab-c3", "Keep the freeze on income-tax thresholds",
      [verdict("O2", "worsens", "moderate", "immediate", "high", "Quietly raises the tax most people pay as wages rise — a real squeeze on take-home pay.")]),

    // ---- Reform UK × Rights & freedoms: the CROWDED cell, 6 policies ----
    rec("Reform UK", "ref-r1", "Leave the ECHR / replace the Human Rights Act",
      [verdict("O9", "worsens", "major", "this-parliament", "moderate", "Removes a major external check on the state — supporters say it restores control, critics say it weakens everyone's protections.")], true),
    rec("Reform UK", "ref-r2", "Repeal parts of the Equality Act",
      [verdict("O9", "worsens", "moderate", "this-parliament", "low", "Rolls back some anti-discrimination duties; effect on day-to-day fairness is disputed.")], true),
    rec("Reform UK", "ref-r3", "Strengthen free-speech protections in law",
      [verdict("O9", "improves", "minor", "this-parliament", "low", "Aims to widen legal protection for speech; depends heavily on how it's drafted.")]),
    rec("Reform UK", "ref-r4", "Voter ID and postal-vote tightening",
      [verdict("O9", "mixed", "minor", "immediate", "moderate", "Tightens ballot security but risks shutting out some legitimate voters.")]),
    rec("Reform UK", "ref-r5", "Reform or abolish the House of Lords",
      [verdict("O9", "too-uncertain", null, null, "low", "Could make democracy more accountable or more centralised — genuinely depends on what replaces it.",
        { crux: "Whether a replacement chamber keeps an independent check on the Commons.", range: "From a healthier democracy to a weaker one, depending on design." })]),
    rec("Reform UK", "ref-r6", "Tougher protest and public-order powers",
      [verdict("O9", "worsens", "moderate", "immediate", "moderate", "Gives police broader powers to restrict protest — order vs the right to dissent.")], true),

    // ---- single-policy cells (show the adaptive 1-policy chip is unchanged) ----
    rec("Green", "grn-h1", "Insulate homes / retrofit programme",
      [verdict("O1", "improves", "moderate", "long-term", "moderate", "Warmer homes and lower bills over time, if the programme is actually funded at scale.")], true),
    rec("Green", "grn-c1", "Wealth tax to fund public services",
      [verdict("O2", "too-uncertain", null, null, "low", "Whether it raises serious money depends on avoidance — credible experts genuinely disagree.",
        { crux: "Net revenue after behavioural and administrative effects.", range: "From tens of billions a year to close to nothing." })], true),
    rec("Liberal Democrat", "ld-hc1", "Free personal care + NHS workforce expansion",
      [verdict("O3", "improves", "moderate", "long-term", "moderate", "Aims to cut waits and ease social care; the question is whether the funding holds.")]),
  ];

  const parties = ["Labour", "Conservative", "Liberal Democrat", "Reform UK", "Green"];

  window.POLICY_DATA = {
    generated_at: "2026-06-12",
    disclaimer: "DEMO — mocked multi-policy data to show the distribution-cell idea (not real analysis).",
    outcomes: OUTCOMES,
    levers: null,
    default_selected: ["O1", "O9", "O2"],
    parties,
    records
  };
})();
