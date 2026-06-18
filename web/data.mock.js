/* Policy Lens — MOCK data for UI/UX development.
 * Shape mirrors the real pipeline output (data/<id>.json), flattened into one global.
 * The real build will generate this file from data/*.json. Verdicts here are illustrative,
 * not researched — they exist to exercise every UI state. */
window.POLICY_DATA = {
  generated_at: "2026-06-11",
  disclaimer: "MOCK DATA for design. Not researched. Do not treat as real analysis.",
  outcomes: [
    { id: "O2", name: "Cost of living",          plain: "Can I afford the essentials — food, energy, the bills?" },
    { id: "O1", name: "Affordable housing",      plain: "Can I afford a decent home, to rent or buy, near my life?" },
    { id: "O3", name: "Healthcare",              plain: "Can I get treated when I need it?" },
    { id: "O4", name: "Good work & fair pay",    plain: "Can I earn a decent, secure living?" },
    { id: "O7", name: "Education & opportunity", plain: "Can my kids get a good education — and can I get the skills to get on?" },
    { id: "O8", name: "Security in later life",  plain: "Will I have a dignified retirement and care when I'm old?" },
    { id: "O5", name: "Safety & crime",          plain: "Are my streets safe, and does justice work?" },
    { id: "O9", name: "Rights & freedoms",       plain: "Are my rights, freedoms, and fair treatment protected?" },
    { id: "O6", name: "Clean environment",       plain: "Is the air, water, and climate liveable?" }
  ],
  parties: ["Labour", "Conservative", "Liberal Democrat", "Reform UK", "Green"],
  levers: {
    principle: "We organise around the outcomes you actually feel in your life. Things like the economy, tax, and immigration are powerful tools parties use to move those outcomes — so we judge each party's use of them by their effect here, rather than giving them columns of their own. That's a deliberate choice, and you're free to disagree with it.",
    lens_note: "Fairness isn't a column either — it runs through everything. Every verdict is examined from a fairness/distribution angle (who gains, who bears the cost) as well as efficiency, cost, and deliverability.",
    items: [
      { name: "The economy / growth", why: "Growth is a means, not an end — people want it for the jobs, pay, and public services it pays for. We score what it's for, not the abstraction.", affects: ["O4", "O2", "O3"] },
      { name: "Tax", why: "Tax is a tool, not an outcome: it changes your take-home pay and how much there is to fund services. We track those effects.", affects: ["O2", "O3", "O7"] },
      { name: "Immigration", why: "We treat immigration as a factor that affects outcomes — housing demand, NHS and care staffing, wages — rather than an outcome in itself. This is a deliberate framing choice; some people value it for its own sake and may disagree, which is fair.", affects: ["O1", "O3", "O4"] },
      { name: "Childcare", why: "Childcare cost and availability shape what families can afford and whether parents can work — so it shows up inside those fundamentals.", affects: ["O2", "O4"] },
      { name: "Transport", why: "Transport cost and access are means to a budget that works and getting to a job — we trace them into those outcomes.", affects: ["O2", "O4"] },
      { name: "Energy policy", why: "Energy policy is the instrument; what you feel is your bill and the air/climate around you. We score those.", affects: ["O2", "O6"] }
    ]
  },

  records: [
    {
      policy_id: "lab-planning-homes", party: "Labour",
      policy_title: "Planning reform to deliver 1.5m homes this parliament",
      stated: "Mandatory NPPF targets; local plans cut 7yr→2.5yr; committee bypass for compliant schemes; grey-belt release.",
      source: { publisher: "Full Fact", url: "https://fullfact.org/government-tracker/1-5-million-homes/", manifesto_date: "2024-06-13" },
      per_outcome: [
        { outcome: "O1", direction: "improves", confidence: "low",
          biggest_unknown: "Whether permissions convert to completions given construction-labour limits.",
          evidence_tier: { stated: "Mandatory targets + faster local plans + committee bypass.", measurable: "342,100 net adds in ~20 months ≈ 68% of the 300k/yr pace required.", projected: "OBR sees a 40-yr housebuilding high if reforms bite; critics say absorption rate caps completions." },
          plain: "Should help get more homes built — but likely fewer than the 1.5 million promised, and not much cheaper for people on lower incomes.",
          rationale: "Right lever, but the headline number is off-pace on current delivery and affordability for low-income households is weakly addressed.",
          sources: [{ publisher: "OBR", source_type: "government", url: "https://obr.uk/box/alternative-scenarios-for-housebuilding/" }, { publisher: "IFS", source_type: "institutional", url: "https://ifs.org.uk/publications/land-value-capture-uk-housebuilding" }] },
        { outcome: "O2", direction: "mixed", confidence: "low",
          biggest_unknown: "Speed at which added supply lowers rents within the parliament.",
          evidence_tier: { stated: "Supply-side reform.", measurable: "Housing is the largest household outlay.", projected: "Long-lag effect; back-loaded to 2029-30." },
          rationale: "Should ease housing costs eventually, but no near-term effect.",
          sources: [{ publisher: "ONS", source_type: "government" }] },
        { outcome: "O4", direction: "improves", confidence: "moderate",
          biggest_unknown: "Can construction labour expand fast enough.",
          evidence_tier: { stated: "Construction ramp.", measurable: "Sector is a major employer.", projected: "OBR ~0.2% GDP / ~£6.8bn by 2029-30." },
          rationale: "Supports jobs and GDP, though the same labour demand is the delivery constraint.",
          sources: [{ publisher: "OBR", source_type: "government" }] }
      ],
      false_balance_check: { headline_verdict: "leans", note: "Directionally right on supply and jobs; overstated on the 1.5m pace and on affordability for the worst-off.",
        sub_claims: [
          { claim: "Planning reform will grow housing supply", verdict: "leans-for", why: "Removing committee discretion is the binding-est constraint; OBR-backed." },
          { claim: "1.5m homes delivered this parliament", verdict: "leans-against", why: "Current pace ~68% of required; back-loaded." },
          { claim: "Lowest-income households' affordability improves", verdict: "split", why: "Total supply ≠ affordable supply without grant funding." }
        ] },
      meta: { source_balance: { by_type: { government: 34, institutional: 7 }, advocacy_flag: false },
        verifier: { passed: true }, revisions: [{ attempt: 1 }, { attempt: 2 }], generated_at: "2026-06-11" }
    },

    {
      policy_id: "con-localism-taxcut", party: "Conservative",
      policy_title: "Planning localism + income-tax cuts",
      stated: "Restore local control over housing targets; phased income-tax reductions.",
      source: { publisher: "Manifesto", url: "#", manifesto_date: "2024-06-11" },
      per_outcome: [
        { outcome: "O1", direction: "worsens", confidence: "moderate",
          biggest_unknown: "Whether localism's supply drag is offset by other measures.",
          evidence_tier: { stated: "Local control over targets.", measurable: "Discretionary local planning is the main historic source of delay.", projected: "Returning discretion likely lowers permissions in high-need areas." },
          rationale: "Localism predictably suppresses supply where need is severest — the opposite of what O1 requires.",
          sources: [{ publisher: "Institute for Government", source_type: "institutional" }] },
        { outcome: "O2", direction: "improves", confidence: "low",
          biggest_unknown: "Whether tax cuts are inflationary or offset by spending cuts.",
          evidence_tier: { stated: "Phased income-tax cuts.", measurable: "Raises take-home pay directly.", projected: "Net effect depends on funding and inflation response." },
          rationale: "More take-home pay helps cost of living, but the macro offset is uncertain.",
          sources: [{ publisher: "IFS", source_type: "institutional" }] },
        { outcome: "O4", direction: "mixed", confidence: "low",
          biggest_unknown: "Investment vs demand effects of the tax change.",
          evidence_tier: { stated: "Lower marginal rates.", measurable: "—", projected: "Contested labour-supply and investment effects." },
          rationale: "Plausible mild boost to work incentives; evidence is genuinely mixed.",
          sources: [{ publisher: "IFS", source_type: "institutional" }] }
      ],
      false_balance_check: { headline_verdict: "leans", note: "Helps take-home pay; works against housing supply.",
        sub_claims: [{ claim: "Localism improves housing supply", verdict: "leans-against", why: "Discretion is the delay source." }] },
      meta: { source_balance: { by_type: { institutional: 9, government: 4 }, advocacy_flag: false },
        verifier: { passed: true }, revisions: [], generated_at: "2026-06-11" }
    },

    {
      policy_id: "ld-nhs-socialhousing", party: "Liberal Democrat",
      policy_title: "NHS investment + 150k social homes/yr",
      stated: "Ring-fenced NHS funding for staffing and GP access; large social-housing programme.",
      source: { publisher: "Manifesto", url: "#", manifesto_date: "2024-06-10" },
      per_outcome: [
        { outcome: "O1", direction: "improves", confidence: "moderate",
          biggest_unknown: "Delivery capacity for a large social-build programme.",
          evidence_tier: { stated: "150k social homes/yr.", measurable: "Social housing stock has fallen for decades.", projected: "Direct social supply targets affordability better than market supply alone." },
          rationale: "Grant-funded social housing addresses the affordable-supply gap market reforms miss.",
          sources: [{ publisher: "Resolution Foundation", source_type: "institutional" }] },
        { outcome: "O2", direction: "mixed", confidence: "low",
          biggest_unknown: "Funding source and its drag elsewhere.",
          evidence_tier: { stated: "Ring-fenced spending.", measurable: "—", projected: "Depends on tax mix." },
          rationale: "Helps via services; net household effect depends on how it's paid for.",
          sources: [{ publisher: "IFS", source_type: "institutional" }] },
        { outcome: "O3", direction: "improves", confidence: "moderate",
          biggest_unknown: "Whether staffing can be recruited at the needed pace.",
          evidence_tier: { stated: "Ring-fenced NHS staffing + GP access funding.", measurable: "Waiting lists and GP availability are the binding pain points.", projected: "Funding helps if workforce can be recruited; training lags are real." },
          plain: "Aimed at the real problem — not enough staff. It could work, but training enough people takes years.",
          rationale: "Targets the actual NHS bottleneck (workforce), with a real recruitment-lag caveat.",
          sources: [{ publisher: "Health Foundation", source_type: "institutional", url: "https://www.health.org.uk/" }, { publisher: "The King's Fund", source_type: "institutional", url: "https://www.kingsfund.org.uk/" }] }
      ],
      false_balance_check: { headline_verdict: "leans", note: "Well-targeted on social housing and NHS workforce; both gated by delivery capacity.",
        sub_claims: [{ claim: "Social housing improves affordability for the worst-off", verdict: "leans-for", why: "Grant-funded social supply targets affordability directly." }] },
      meta: { source_balance: { by_type: { institutional: 12, government: 6 }, advocacy_flag: false },
        verifier: { passed: true }, revisions: [{ attempt: 1 }], generated_at: "2026-06-11" }
    },

    {
      policy_id: "ref-migration-tax", party: "Reform UK",
      policy_title: "Sharp net-migration reduction + tax cuts",
      stated: "Large cut to net migration; raised personal allowance.",
      source: { publisher: "Manifesto", url: "#", manifesto_date: "2024-06-17" },
      per_outcome: [
        { outcome: "O1", direction: "too-uncertain", confidence: "low",
          biggest_unknown: "Net effect of lower migration on housing demand vs construction labour supply.",
          uncertainty: { is_genuine: true, crux_parameter: "Whether reduced migration cuts housing demand faster than it shrinks the construction workforce that builds homes.", estimate_range: "Credible estimates point in opposite directions; the two channels roughly offset within wide bands." },
          evidence_tier: { stated: "Sharp net-migration reduction.", measurable: "Migrants are both housing demanders and a large share of construction labour.", projected: "Demand-down and supply-down effects pull opposite ways; magnitudes contested." },
          plain: "Could go either way: fewer people might mean cheaper housing, but fewer builders means fewer homes get built. Honestly, it's a toss-up.",
          rationale: "Genuinely two-sided: lower demand could ease prices, but a thinner construction workforce could cut supply. No honest single direction.",
          sources: [{ publisher: "ONS", source_type: "government", url: "https://www.ons.gov.uk/peoplepopulationandcommunity/populationandmigration/internationalmigration" }, { publisher: "House of Commons Library", source_type: "government", url: "https://commonslibrary.parliament.uk/research-briefings/cbp-7671/" }] },
        { outcome: "O2", direction: "mixed", confidence: "low",
          biggest_unknown: "Wage vs price effects across sectors.",
          evidence_tier: { stated: "Higher personal allowance.", measurable: "Raises take-home pay.", projected: "Sectoral labour shortages could raise some prices." },
          rationale: "Take-home pay up; possible cost pressure in migration-dependent sectors.",
          sources: [{ publisher: "IFS", source_type: "institutional" }] },
        { outcome: "O3", direction: "worsens", confidence: "low",
          biggest_unknown: "How fast NHS/social-care staffing can be replaced domestically.",
          evidence_tier: { stated: "Net-migration reduction.", measurable: "A material share of NHS/care staff are non-UK nationals.", projected: "Rapid reduction risks staffing gaps before domestic training fills them." },
          plain: "Risky for the NHS in the short term — a lot of doctors, nurses and carers come from abroad, and you can't replace them overnight.",
          rationale: "Near-term staffing risk to an already-stretched workforce.",
          sources: [{ publisher: "Nuffield Trust", source_type: "institutional" }] }
      ],
      false_balance_check: { headline_verdict: "genuinely-split", note: "The headline housing effect is genuinely unresolved; the NHS-staffing sub-claim leans negative.",
        sub_claims: [
          { claim: "Lower migration improves housing affordability", verdict: "split", why: "Demand-down vs construction-labour-down offset." },
          { claim: "Reduced migration strains NHS staffing short-term", verdict: "leans-against", why: "High non-UK staff share; training lags." }
        ] },
      meta: { source_balance: { by_type: { government: 8, institutional: 6 }, advocacy_flag: false },
        verifier: { passed: true }, revisions: [{ attempt: 1 }], generated_at: "2026-06-11" }
    },

    {
      policy_id: "grn-wealthtax-retrofit", party: "Green",
      policy_title: "Annual wealth tax funding NHS + home retrofit",
      stated: "~1–2% annual tax on net assets above £10m, earmarked for public services and a home-insulation programme.",
      source: { publisher: "Manifesto", url: "#", manifesto_date: "2024-06-12" },
      per_outcome: [
        { outcome: "O3", direction: "too-uncertain", confidence: "low",
          biggest_unknown: "Net revenue after behavioural response.",
          uncertainty: { is_genuine: true, crux_parameter: "The behavioural-response elasticity (avoidance, restructuring, valuation gaming) that decides net revenue.", estimate_range: "Wealth Tax Commission: literature on taxpayer response varies by a factor of ~800." },
          evidence_tier: { stated: "~£10–25bn/yr earmarked for services.", measurable: "Revenue hyper-concentrated (~80% from ~5,000 people).", projected: "Estimates range from ~£24bn after losses to far less; credible bodies split." },
          plain: "The idea is to fund the NHS — but nobody really knows how much a wealth tax would actually raise. The estimates are all over the place, so it's an honest unknown.",
          rationale: "Intent maps to O3, but revenue is too uncertain to score a direction honestly. The 800× behavioural range IS the finding.",
          sources: [{ publisher: "Tax Justice UK", source_type: "advocacy", interest: "campaigns for higher wealth taxes", url: "https://taxjustice.uk/" }, { publisher: "IFS", source_type: "institutional", url: "https://ifs.org.uk/articles/wealth-tax-would-be-poor-substitute-properly-taxing-sources-and-uses-wealth" }, { publisher: "Chartered Institute of Taxation", source_type: "institutional", url: "https://www.tax.org.uk/" }] },
        { outcome: "O2", direction: "mixed", confidence: "low",
          biggest_unknown: "Whether revenue funds services or growth-drag offsets it.",
          evidence_tier: { stated: "Service funding + retrofit.", measurable: "—", projected: "Contingent on the revenue question." },
          rationale: "Mild help via services if revenue lands; long-run drag if the market critique holds.",
          sources: [{ publisher: "IFS", source_type: "institutional" }] },
        { outcome: "O4", direction: "improves", confidence: "low",
          biggest_unknown: "Scale and durability of retrofit employment.",
          evidence_tier: { stated: "National home-insulation programme.", measurable: "Retrofit is labour-intensive.", projected: "Plausible green-jobs boost; depends on funding stability." },
          rationale: "Retrofit programme is a credible jobs channel if funded.",
          sources: [{ publisher: "Resolution Foundation", source_type: "institutional" }] }
      ],
      false_balance_check: { headline_verdict: "genuinely-split", note: "The exodus sub-claim leans overstated; the headline 'is an annual wealth tax sound?' is genuinely unresolved.",
        sub_claims: [
          { claim: "An annual wealth tax raises durable net revenue", verdict: "split", why: "Behavioural response spans 800×; IFS/CIOT/Wealth Tax Commission vs Tax Justice." },
          { claim: "The rich will flee if taxed", verdict: "leans-against", why: "HMRC/LSE show near-0% migration; exodus narrative traces to one commercial source." }
        ] },
      meta: { source_balance: { by_type: { institutional: 11, government: 3, advocacy: 4 }, advocacy_flag: true },
        verifier: { passed: true }, revisions: [{ attempt: 1 }, { attempt: 2 }], generated_at: "2026-06-11" }
    },

    {
      policy_id: "ref-echr-exit", party: "Reform UK",
      policy_title: "Leave the ECHR and replace the Human Rights Act",
      stated: "Withdraw from the European Convention on Human Rights and repeal/replace the Human Rights Act with a UK framework, to (per Reform) restore control over deportations, borders and sentencing.",
      source: { publisher: "Reform UK (stated position — leader speeches & policy statements)", url: "#", manifesto_date: "2024-06-17" },
      per_outcome: [
        { outcome: "O9", direction: "worsens", confidence: "moderate",
          plain: "Removes a key legal safeguard — the right to challenge the UK government in the European human-rights court. Supporters say it restores UK control; critics say it weakens everyone's protections, especially the most vulnerable.",
          biggest_unknown: "What replaces the ECHR/HRA, and whether a UK framework keeps equivalent protections or narrows them.",
          evidence_tier: { stated: "Withdraw from the ECHR; repeal/replace the Human Rights Act.", measurable: "The ECHR/HRA currently give individuals an external route to challenge the state on rights (privacy, fair trial, family life, freedom from inhuman treatment).", projected: "Leaving removes that external backstop; the net effect depends entirely on the replacement framework, which is unspecified." },
          rationale: "On the rights-protection framework specifically, withdrawal removes a layer of external safeguard — a reduction in formal protections — though proponents frame it as restoring democratic control rather than reducing rights.",
          sources: [{ publisher: "House of Commons Library", source_type: "government", url: "https://commonslibrary.parliament.uk/" }, { publisher: "Liberty", source_type: "advocacy", interest: "campaigns for civil liberties" }] },
        { outcome: "O5", direction: "mixed", confidence: "low",
          plain: "Might make some deportations quicker — but most crime and safety isn't driven by human-rights law, so the day-to-day effect is probably small and contested.",
          biggest_unknown: "How many removals or sentencing outcomes the ECHR actually blocks in practice.",
          evidence_tier: { stated: "Aimed partly at deportations and sentencing.", measurable: "Only a small share of cases turn on ECHR grounds.", projected: "Safety benefit is contested and likely modest; depends on the replacement regime." },
          rationale: "A plausible but limited safety channel; the main crime/safety drivers lie elsewhere.",
          sources: [{ publisher: "House of Commons Library", source_type: "government", url: "https://commonslibrary.parliament.uk/" }] }
      ],
      false_balance_check: { headline_verdict: "leans", note: "On rights protections specifically, removing the external safeguard leans toward weaker protection; the sovereignty case is a values argument, not evidence of a day-to-day rights gain.",
        sub_claims: [
          { claim: "Leaving the ECHR reduces formal rights protections", verdict: "leans-against", why: "Removes an external route to challenge the state; the replacement is unspecified." },
          { claim: "It restores democratic / parliamentary control", verdict: "split", why: "A genuine sovereignty argument — a value judgment, not a measurable life-outcome gain." },
          { claim: "It materially improves public safety", verdict: "split", why: "Only a small share of cases turn on ECHR grounds; the effect is likely modest." }
        ] },
      meta: { source_balance: { by_type: { government: 6, advocacy: 3 }, advocacy_flag: true },
        verifier: { passed: true }, revisions: [{ attempt: 1 }], generated_at: "2026-06-11" }
    }
  ]
};
