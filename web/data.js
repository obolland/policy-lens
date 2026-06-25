/* GENERATED from data_verdicts/*.json by build_verdicts_web.py — do not edit by hand. */
window.POLICY_DATA = {
  "generated_at": "2026-06-18",
  "disclaimer": "Source-checked analysis of UK party policies \u2014 every verdict is challengeable, so check its sources.",
  "outcomes": [
    {
      "id": "O2",
      "name": "Cost of living",
      "plain": "Can I afford the essentials \u2014 food, energy, the bills?",
      "type": "valenced"
    },
    {
      "id": "O1",
      "name": "Affordable housing",
      "plain": "Can I afford a decent home, to rent or buy, near my life?",
      "type": "valenced"
    },
    {
      "id": "O3",
      "name": "Healthcare",
      "plain": "Can I get treated when I need it?",
      "type": "valenced"
    },
    {
      "id": "O4",
      "name": "Good work & fair pay",
      "plain": "Can I earn a decent, secure living?",
      "type": "valenced"
    },
    {
      "id": "O7",
      "name": "Education & opportunity",
      "plain": "Can my kids get a good education \u2014 and can I get the skills to get on?",
      "type": "valenced"
    },
    {
      "id": "O8",
      "name": "Security in later life",
      "plain": "Will I have a dignified retirement and care when I'm old?",
      "type": "valenced"
    },
    {
      "id": "O5",
      "name": "Crime, justice & national security",
      "plain": "Are my streets safe, the country secure, and does justice work?",
      "type": "valenced"
    },
    {
      "id": "O9",
      "name": "Equal treatment & democratic rights",
      "plain": "Am I treated equally and fairly, with a fair say and due process?",
      "type": "valenced"
    },
    {
      "id": "O10",
      "name": "Personal liberty & free speech",
      "plain": "Am I free from undue state control over my speech, body, and choices?",
      "type": "valenced"
    },
    {
      "id": "O6",
      "name": "Clean environment & nature",
      "plain": "Is the air, water, and climate liveable \u2014 now and for the future?",
      "type": "valenced"
    },
    {
      "id": "O11",
      "name": "Tax & the money you keep",
      "plain": "How much of what I earn do I get to keep?",
      "type": "valenced"
    },
    {
      "id": "O12",
      "name": "Public finances & the next generation",
      "plain": "Do the sums add up, or is the bill passed to our kids?",
      "type": "valenced"
    },
    {
      "id": "O13",
      "name": "Prosperity & living standards",
      "plain": "Is the economy growing, with real opportunities to get on?",
      "type": "valenced"
    },
    {
      "id": "O14",
      "name": "Inequality & fair shares",
      "plain": "Is the gap between the richest and the rest getting wider or narrower?",
      "type": "valenced"
    },
    {
      "id": "O15",
      "name": "Community cohesion & belonging",
      "plain": "Do people feel part of a community they can trust and belong to?",
      "type": "valenced"
    },
    {
      "id": "D1",
      "name": "Immigration & border control",
      "plain": "Which way does this move immigration and border control?",
      "type": "directional",
      "axis": [
        "more open / higher net migration",
        "more controlled / lower net migration"
      ]
    }
  ],
  "levers": {
    "principle": "We organise around the outcomes you actually feel in your life. A few policy areas \u2014 like energy, childcare, or transport \u2014 are mainly the tools parties use to move those outcomes, so rather than giving each its own column, we judge each party's use of them by their effect here. That's a deliberate choice, and you're free to disagree with it.",
    "lens_note": "Fairness runs through everything. As well as the dedicated 'Inequality & fair shares' column, every single verdict is also examined from a who-gains-who-pays angle, alongside cost, efficiency and deliverability.",
    "items": [
      {
        "name": "Energy policy",
        "why": "Energy policy is the instrument; what you feel is your bill and the air and climate around you. We score those.",
        "affects": [
          "O2",
          "O6"
        ]
      },
      {
        "name": "Childcare",
        "why": "Childcare cost and availability shape what families can afford and whether parents can work \u2014 so it shows up inside those outcomes.",
        "affects": [
          "O2",
          "O4",
          "O7"
        ]
      },
      {
        "name": "Transport",
        "why": "Transport cost and access are means to a budget that works and getting to a job \u2014 we trace them into those outcomes.",
        "affects": [
          "O2",
          "O4"
        ]
      }
    ]
  },
  "parties": [
    "Labour",
    "Conservative",
    "Liberal Democrat",
    "Reform UK",
    "Green"
  ],
  "records": [
    {
      "policy_id": "con-01-cut-employee-national-insurance",
      "party": "Conservative",
      "policy_title": "Cut Employee National Insurance",
      "per_outcome": [
        {
          "outcome": "O11",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "major",
          "confidence": "moderate"
        },
        {
          "outcome": "O14",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 3,
            "institutional": 11,
            "government": 7
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-02-abolish-self-employed-national-insurance",
      "party": "Conservative",
      "policy_title": "Abolish Self-Employed National Insurance",
      "per_outcome": [
        {
          "outcome": "O11",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 17,
            "institutional": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-03-introduce-triple-lock-plus-for-pensioners",
      "party": "Conservative",
      "policy_title": "Introduce Triple Lock Plus for Pensioners",
      "per_outcome": [
        {
          "outcome": "O11",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O8",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "institutional": 7,
            "media": 14,
            "government": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-04-expand-free-childcare-for-working-parents",
      "party": "Conservative",
      "policy_title": "Expand Free Childcare for Working Parents",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O13",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O14",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O7",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 6,
            "government": 10,
            "institutional": 7,
            "media": 16
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-05-reform-child-benefit-household-income-threshold",
      "party": "Conservative",
      "policy_title": "Reform Child Benefit Household Income Threshold",
      "per_outcome": [
        {
          "outcome": "O11",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O14",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 5,
            "media": 5,
            "institutional": 4
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-06-mandatory-national-service-for-18-year-olds",
      "party": "Conservative",
      "policy_title": "Mandatory National Service for 18-Year-Olds",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O15",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O7",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 7,
            "media": 27,
            "academic": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-07-fund-100000-apprenticeships-by-curbing-poor",
      "party": "Conservative",
      "policy_title": "Fund 100,000 Apprenticeships by Curbing Poor University Degrees",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O7",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 12,
            "institutional": 8
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-08-ban-mobile-phones-in-schools",
      "party": "Conservative",
      "policy_title": "Ban Mobile Phones in Schools",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O7",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 7,
            "government": 2,
            "academic": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-09-introduce-advanced-british-standard",
      "party": "Conservative",
      "policy_title": "Introduce Advanced British Standard",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O7",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "government": 2,
            "academic": 1,
            "media": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-10-boost-defence-spending-to-25-of",
      "party": "Conservative",
      "policy_title": "Boost Defence Spending to 2.5% of GDP",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 3,
            "institutional": 4,
            "government": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-100-align-penalties-for-dangerous-cyclists",
      "party": "Conservative",
      "policy_title": "Align Penalties for Dangerous Cyclists",
      "per_outcome": [
        {
          "outcome": "O5",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 1,
            "government": 1,
            "media": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-101-maintain-six-day-royal-mail-postal-service",
      "party": "Conservative",
      "policy_title": "Maintain Six-Day Royal Mail Postal Service",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O15",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 13
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-102-ensure-post-office-horizon-scandal-redress",
      "party": "Conservative",
      "policy_title": "Ensure Post Office Horizon Scandal Redress",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 3,
            "government": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-103-ensure-access-to-cash-and-banking",
      "party": "Conservative",
      "policy_title": "Ensure Access to Cash and Banking Hubs",
      "per_outcome": [
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O8",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 17,
            "government": 5
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-104-ensure-schools-follow-guidance-for-gender",
      "party": "Conservative",
      "policy_title": "Ensure Schools Follow Guidance for Gender Questioning Students",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O7",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 15,
            "government": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-105-improve-support-for-guideassistance-dogs",
      "party": "Conservative",
      "policy_title": "Improve Support for Guide/Assistance Dogs",
      "per_outcome": [
        {
          "outcome": "O9",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 1,
            "media": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-106-ratify-global-oceans-treaty-and-continue",
      "party": "Conservative",
      "policy_title": "Ratify Global Oceans Treaty and Continue Deep Sea Mining Moratorium",
      "per_outcome": [
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 1,
            "media": 6,
            "government": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-107-maintain-record-flood-defence-funding",
      "party": "Conservative",
      "policy_title": "Maintain Record Flood Defence Funding",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "government": 5,
            "media": 14,
            "institutional": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-108-hold-water-companies-accountable-and-invest",
      "party": "Conservative",
      "policy_title": "Hold Water Companies Accountable and Invest Fines",
      "per_outcome": [
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 1,
            "government": 1,
            "media": 6
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-109-reform-water-company-price-review-process",
      "party": "Conservative",
      "policy_title": "Reform Water Company Price Review Process",
      "per_outcome": [
        {
          "outcome": "O2",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 6,
            "government": 4
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-11-introduce-a-legal-cap-on-migration",
      "party": "Conservative",
      "policy_title": "Introduce a Legal Cap on Migration",
      "per_outcome": [
        {
          "outcome": "O1",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O10",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O13",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O15",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O3",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O8",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "D1",
          "type": "directional",
          "shift": "toward more controlled",
          "magnitude": "major",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 8,
            "media": 12,
            "institutional": 12,
            "government": 8,
            "academic": 4
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-110-deliver-tree-planting-and-peatland-commitments",
      "party": "Conservative",
      "policy_title": "Deliver Tree Planting and Peatland Commitments",
      "per_outcome": [
        {
          "outcome": "O6",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 1,
            "media": 4,
            "institutional": 3,
            "academic": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-111-introduce-forest-risk-commodities-legislation",
      "party": "Conservative",
      "policy_title": "Introduce Forest Risk Commodities Legislation",
      "per_outcome": [
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 1,
            "media": 3,
            "government": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-112-designate-11th-national-park-and-improve",
      "party": "Conservative",
      "policy_title": "Designate 11th National Park and Improve Access to Nature",
      "per_outcome": [
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 1,
            "media": 6,
            "government": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-113-crack-down-on-organised-waste-crime",
      "party": "Conservative",
      "policy_title": "Crack Down on Organised Waste Crime and Fly Tipping",
      "per_outcome": [
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "government": 6,
            "media": 5
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-114-develop-uk-wide-deposit-return-scheme",
      "party": "Conservative",
      "policy_title": "Develop UK-Wide Deposit Return Scheme",
      "per_outcome": [
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 1,
            "media": 5
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-115-prevent-new-waste-incinerators",
      "party": "Conservative",
      "policy_title": "Prevent New Waste Incinerators",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 7,
            "government": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-116-maintain-grassroots-sports-facilities-investment",
      "party": "Conservative",
      "policy_title": "Maintain Grassroots Sports Facilities Investment",
      "per_outcome": [
        {
          "outcome": "O15",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 1,
            "government": 1,
            "media": 1,
            "academic": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-117-introduce-laws-for-independent-football-regulator",
      "party": "Conservative",
      "policy_title": "Introduce Laws for Independent Football Regulator",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O15",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "government": 2,
            "media": 8
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-118-prioritise-equal-access-for-women-and",
      "party": "Conservative",
      "policy_title": "Prioritise Equal Access for Women and Girls in Grassroots Sport",
      "per_outcome": [
        {
          "outcome": "O15",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 10,
            "government": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-12-stop-illegal-migrants-by-removing-to",
      "party": "Conservative",
      "policy_title": "Stop Illegal Migrants by Removing to Rwanda",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "major",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "D1",
          "type": "directional",
          "shift": "toward more controlled",
          "magnitude": "moderate",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 5,
            "media": 15,
            "government": 5,
            "institutional": 2,
            "academic": 10
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-120-introduce-new-bbc-complaints-process",
      "party": "Conservative",
      "policy_title": "Introduce New BBC Complaints Process",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 5,
            "government": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-121-protect-first-past-the-post-electoral",
      "party": "Conservative",
      "policy_title": "Protect First Past the Post Electoral System",
      "per_outcome": [
        {
          "outcome": "O9",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 1,
            "media": 2,
            "institutional": 1,
            "government": 2,
            "academic": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-13-increase-nhs-spending-and-workforce",
      "party": "Conservative",
      "policy_title": "Increase NHS Spending and Workforce",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O3",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 9,
            "institutional": 2,
            "academic": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-14-clarify-biological-sex-in-equality-act",
      "party": "Conservative",
      "policy_title": "Clarify Biological Sex in Equality Act",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 5,
            "academic": 2,
            "government": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-15-deliver-16-million-homes-and-support",
      "party": "Conservative",
      "policy_title": "Deliver 1.6 Million Homes and Support First-Time Buyers",
      "per_outcome": [
        {
          "outcome": "O1",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O11",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O6",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 22,
            "institutional": 4,
            "government": 5,
            "academic": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-16-recruit-8000-more-police-officers",
      "party": "Conservative",
      "policy_title": "Recruit 8,000 More Police Officers",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 7,
            "institutional": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-17-cut-anti-social-behaviour",
      "party": "Conservative",
      "policy_title": "Cut Anti-Social Behaviour",
      "per_outcome": [
        {
          "outcome": "O1",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O10",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O15",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 20,
            "government": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-18-invest-36-billion-in-local-transport",
      "party": "Conservative",
      "policy_title": "Invest \u00a336 Billion in Local Transport Infrastructure",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O2",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O6",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 6,
            "media": 25,
            "government": 5,
            "institutional": 6
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-19-back-drivers-with-policy-reforms",
      "party": "Conservative",
      "policy_title": "Back Drivers with Policy Reforms",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O5",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O6",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 5,
            "media": 9,
            "institutional": 2,
            "government": 3,
            "academic": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-20-support-farmers-and-food-security",
      "party": "Conservative",
      "policy_title": "Support Farmers and Food Security",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O2",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O5",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O6",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 19,
            "institutional": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-21-maintain-income-tax-and-vat-rates",
      "party": "Conservative",
      "policy_title": "Maintain Income Tax and VAT Rates",
      "per_outcome": [
        {
          "outcome": "O11",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O12",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O2",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "government": 6,
            "institutional": 4,
            "media": 7
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-22-maintain-national-living-wage",
      "party": "Conservative",
      "policy_title": "Maintain National Living Wage",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "institutional": 15,
            "government": 7,
            "media": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-23-pensions-tax-guarantee",
      "party": "Conservative",
      "policy_title": "Pensions Tax Guarantee",
      "per_outcome": [
        {
          "outcome": "O11",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O14",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O8",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "government": 4,
            "media": 9,
            "institutional": 4
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-24-maintain-pensioner-benefits",
      "party": "Conservative",
      "policy_title": "Maintain Pensioner Benefits",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O8",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 12,
            "government": 3,
            "academic": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-25-expand-wraparound-childcare",
      "party": "Conservative",
      "policy_title": "Expand Wraparound Childcare",
      "per_outcome": [
        {
          "outcome": "O2",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O7",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 14,
            "institutional": 4,
            "academic": 3,
            "government": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-26-deliver-family-hub-in-every-local",
      "party": "Conservative",
      "policy_title": "Deliver Family Hub in Every Local Authority",
      "per_outcome": [
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O15",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O3",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O7",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 12,
            "institutional": 4,
            "government": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-27-improve-childrens-social-care",
      "party": "Conservative",
      "policy_title": "Improve Children's Social Care",
      "per_outcome": [
        {
          "outcome": "O1",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O14",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O7",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "government": 7,
            "media": 10,
            "academic": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-28-introduce-parental-controls-for-social-media",
      "party": "Conservative",
      "policy_title": "Introduce Parental Controls for Social Media",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O3",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O5",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 15,
            "institutional": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-29-reform-disability-benefits-and-capability-for",
      "party": "Conservative",
      "policy_title": "Reform Disability Benefits and Capability for Work Assessments",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O14",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "high"
        },
        {
          "outcome": "O2",
          "direction": "worsens",
          "magnitude": "major",
          "confidence": "high"
        },
        {
          "outcome": "O4",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "institutional": 6,
            "media": 7,
            "government": 4
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-30-overhaul-fit-note-process",
      "party": "Conservative",
      "policy_title": "Overhaul Fit Note Process",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O3",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 15,
            "institutional": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-31-introduce-tougher-welfare-sanctions",
      "party": "Conservative",
      "policy_title": "Introduce Tougher Welfare Sanctions",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O12",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O14",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 5,
            "government": 10,
            "media": 4,
            "institutional": 4
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-32-accelerate-universal-credit-rollout-and-combat",
      "party": "Conservative",
      "policy_title": "Accelerate Universal Credit Rollout and Combat Fraud",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O12",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O2",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 5,
            "media": 20,
            "institutional": 1,
            "government": 5
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-33-reform-child-maintenance-service",
      "party": "Conservative",
      "policy_title": "Reform Child Maintenance Service",
      "per_outcome": [
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 13,
            "government": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-34-legislate-for-register-of-children-not",
      "party": "Conservative",
      "policy_title": "Legislate for Register of Children Not in School",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O7",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 7,
            "government": 8
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-35-strengthen-parental-rights-in-school-curriculum",
      "party": "Conservative",
      "policy_title": "Strengthen Parental Rights in School Curriculum",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O7",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 13,
            "government": 4,
            "academic": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-36-increase-faith-school-places",
      "party": "Conservative",
      "policy_title": "Increase Faith School Places",
      "per_outcome": [
        {
          "outcome": "O15",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O7",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 9,
            "government": 5,
            "academic": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-37-transform-education-for-send-children",
      "party": "Conservative",
      "policy_title": "Transform Education for SEND Children",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O7",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 11,
            "institutional": 2,
            "government": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-38-pass-veterans-bill",
      "party": "Conservative",
      "policy_title": "Pass Veterans' Bill",
      "per_outcome": [
        {
          "outcome": "O3",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O7",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O8",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 5,
            "media": 14,
            "government": 5
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-39-reform-asylum-treaties",
      "party": "Conservative",
      "policy_title": "Reform Asylum Treaties",
      "per_outcome": [
        {
          "outcome": "O5",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "D1",
          "type": "directional",
          "shift": "toward more controlled",
          "magnitude": "moderate",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 5,
            "government": 3,
            "academic": 4
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-40-return-people-with-no-right-to",
      "party": "Conservative",
      "policy_title": "Return People with No Right to Be Here",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "academic": 6,
            "media": 5
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-41-control-safe-and-legal-routes-for",
      "party": "Conservative",
      "policy_title": "Control Safe and Legal Routes for Refugees",
      "per_outcome": [
        {
          "outcome": "O15",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O5",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "government": 5,
            "media": 4,
            "institutional": 2,
            "academic": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-42-raise-skilled-worker-and-family-visa",
      "party": "Conservative",
      "policy_title": "Raise Skilled Worker and Family Visa Income Thresholds with Inflation",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O15",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "D1",
          "type": "directional",
          "shift": "toward more controlled",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 5,
            "media": 10
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-43-require-migrants-to-undergo-health-checks",
      "party": "Conservative",
      "policy_title": "Require Migrants to Undergo Health Checks and Pay Higher Surcharge/Insurance",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O12",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O3",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 14,
            "government": 2,
            "institutional": 1,
            "academic": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-44-implement-planned-social-care-reforms-and",
      "party": "Conservative",
      "policy_title": "Implement Planned Social Care Reforms and Multi-Year Funding",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O3",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O8",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "institutional": 9,
            "media": 8,
            "government": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-45-improve-nhs-dental-access-and-sustainability",
      "party": "Conservative",
      "policy_title": "Improve NHS Dental Access and Sustainability",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "high"
        },
        {
          "outcome": "O2",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O3",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 20
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-46-invest-34-billion-in-nhs-technology",
      "party": "Conservative",
      "policy_title": "Invest \u00a33.4 Billion in NHS Technology and Productivity",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O12",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O3",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 14
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-47-publish-and-implement-major-conditions-strategy",
      "party": "Conservative",
      "policy_title": "Publish and Implement Major Conditions Strategy",
      "per_outcome": [
        {
          "outcome": "O3",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O8",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 9,
            "government": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-48-introduce-tobacco-and-vapes-bill",
      "party": "Conservative",
      "policy_title": "Introduce Tobacco and Vapes Bill",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O3",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 3,
            "government": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-49-prioritise-womens-health",
      "party": "Conservative",
      "policy_title": "Prioritise Women's Health",
      "per_outcome": [
        {
          "outcome": "O3",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 1,
            "government": 1,
            "media": 5
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-50-implement-cass-review-recommendations-on-gender",
      "party": "Conservative",
      "policy_title": "Implement Cass Review Recommendations on Gender Care",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O3",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 15,
            "government": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-51-amend-nhs-constitution-for-single-sex-accommodation",
      "party": "Conservative",
      "policy_title": "Amend NHS Constitution for Single-Sex Accommodation and Same-Sex Care",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O3",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 14
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-52-expand-mental-health-support-services",
      "party": "Conservative",
      "policy_title": "Expand Mental Health Support Services",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O3",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O7",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "government": 11,
            "media": 12,
            "academic": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-53-pass-new-mental-health-law",
      "party": "Conservative",
      "policy_title": "Pass New Mental Health Law",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O3",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 9,
            "government": 4,
            "institutional": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-54-pay-infected-blood-compensation",
      "party": "Conservative",
      "policy_title": "Pay Infected Blood Compensation",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O2",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "government": 3,
            "media": 6,
            "academic": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-55-give-police-new-powers-and-tools",
      "party": "Conservative",
      "policy_title": "Give Police New Powers and Tools",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 17,
            "government": 4
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-56-restore-public-trust-in-policing",
      "party": "Conservative",
      "policy_title": "Restore Public Trust in Policing",
      "per_outcome": [
        {
          "outcome": "O15",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "government": 9,
            "media": 10,
            "academic": 4
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-57-introduce-martyns-law",
      "party": "Conservative",
      "policy_title": "Introduce Martyn's Law",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 1,
            "government": 2,
            "media": 5
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-58-toughen-community-sentencing",
      "party": "Conservative",
      "policy_title": "Toughen Community Sentencing",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 7,
            "government": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-59-combat-fraud",
      "party": "Conservative",
      "policy_title": "Combat Fraud",
      "per_outcome": [
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 1,
            "media": 3,
            "government": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-60-legislate-new-offences-for-violence-against",
      "party": "Conservative",
      "policy_title": "Legislate New Offences for Violence Against Women and Girls",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 5,
            "government": 7
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-61-toughen-sentencing-for-domestic-murders-and",
      "party": "Conservative",
      "policy_title": "Toughen Sentencing for Domestic Murders and 'Rough Sex' Defence",
      "per_outcome": [
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "government": 4,
            "media": 7
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-62-improve-justice-and-support-for-rape",
      "party": "Conservative",
      "policy_title": "Improve Justice and Support for Rape Victims",
      "per_outcome": [
        {
          "outcome": "O5",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 1,
            "media": 5
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-63-toughen-sentencing-for-worst-offenders",
      "party": "Conservative",
      "policy_title": "Toughen Sentencing for Worst Offenders",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 12,
            "institutional": 3,
            "government": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-64-build-four-new-prisons-and-expand",
      "party": "Conservative",
      "policy_title": "Build Four New Prisons and Expand Removals",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "D1",
          "type": "directional",
          "shift": "toward more controlled",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 11,
            "institutional": 1,
            "government": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-65-cut-covid-court-backlog",
      "party": "Conservative",
      "policy_title": "Cut Covid Court Backlog",
      "per_outcome": [
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 1,
            "institutional": 2,
            "media": 1,
            "academic": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-66-expand-legal-aid-and-pupillages",
      "party": "Conservative",
      "policy_title": "Expand Legal Aid and Pupillages",
      "per_outcome": [
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 12
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-67-design-redress-scheme-for-child-sexual",
      "party": "Conservative",
      "policy_title": "Design Redress Scheme for Child Sexual Abuse Victims",
      "per_outcome": [
        {
          "outcome": "O5",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 4,
            "academic": 1,
            "government": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-68-restrict-sex-offenders-from-changing-names",
      "party": "Conservative",
      "policy_title": "Restrict Sex Offenders from Changing Names",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "government": 5,
            "media": 6
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-69-introduce-further-powers-to-curb-disruptive",
      "party": "Conservative",
      "policy_title": "Introduce Further Powers to Curb Disruptive Protests",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 19,
            "government": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-70-legislate-for-annual-oil-and-gas",
      "party": "Conservative",
      "policy_title": "Legislate for Annual Oil and Gas Licensing Rounds",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O6",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 17,
            "government": 3,
            "academic": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-71-treble-offshore-wind-capacity",
      "party": "Conservative",
      "policy_title": "Treble Offshore Wind Capacity",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "major",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 5,
            "media": 18,
            "government": 8
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-72-build-two-carbon-capture-and-storage",
      "party": "Conservative",
      "policy_title": "Build Two Carbon Capture and Storage Clusters",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O13",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O14",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 5,
            "academic": 6,
            "media": 9,
            "government": 8
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-73-invest-11-billion-in-green-industries",
      "party": "Conservative",
      "policy_title": "Invest \u00a31.1 Billion in Green Industries Growth Accelerator",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O13",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 13,
            "government": 4,
            "institutional": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-74-scale-up-nuclear-power-with-small",
      "party": "Conservative",
      "policy_title": "Scale Up Nuclear Power with Small Modular Reactors",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O5",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 5,
            "media": 23,
            "government": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-75-deliver-new-gigawatt-power-plant-at",
      "party": "Conservative",
      "policy_title": "Deliver New Gigawatt Power Plant at Wylfa",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O13",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O6",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 5,
            "media": 19,
            "government": 8,
            "institutional": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-76-implement-import-carbon-pricing-mechanism",
      "party": "Conservative",
      "policy_title": "Implement Import Carbon Pricing Mechanism",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "government": 4,
            "academic": 4,
            "institutional": 2,
            "media": 14
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-77-cut-cost-of-net-zero-for",
      "party": "Conservative",
      "policy_title": "Cut Cost of Net Zero for Consumers",
      "per_outcome": [
        {
          "outcome": "O2",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O6",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 10
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-78-maintain-energy-price-cap-and-reform",
      "party": "Conservative",
      "policy_title": "Maintain Energy Price Cap and Reform Standing Charges",
      "per_outcome": [
        {
          "outcome": "O14",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O2",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 3,
            "government": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-79-invest-6-billion-in-energy-efficiency",
      "party": "Conservative",
      "policy_title": "Invest \u00a36 Billion in Energy Efficiency and Voucher Scheme",
      "per_outcome": [
        {
          "outcome": "O14",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "institutional": 4,
            "government": 6,
            "media": 5
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-80-ensure-democratic-consent-for-onshore-wind",
      "party": "Conservative",
      "policy_title": "Ensure Democratic Consent for Onshore Wind and Protect Agricultural Land from Solar",
      "per_outcome": [
        {
          "outcome": "O2",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O6",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "government": 3,
            "media": 7
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-81-improve-social-housing-allocation-and-management",
      "party": "Conservative",
      "policy_title": "Improve Social Housing Allocation and Management",
      "per_outcome": [
        {
          "outcome": "O1",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 17,
            "government": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-82-pledge-not-to-increase-family-home",
      "party": "Conservative",
      "policy_title": "Pledge Not to Increase Family Home Taxes",
      "per_outcome": [
        {
          "outcome": "O1",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O11",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O12",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O14",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 5,
            "media": 12,
            "institutional": 8,
            "government": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-83-introduce-capital-gains-tax-relief-for",
      "party": "Conservative",
      "policy_title": "Introduce Capital Gains Tax Relief for Landlords Selling to Tenants",
      "per_outcome": [
        {
          "outcome": "O1",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O11",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O14",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 16
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-84-protect-right-to-buy-discounts",
      "party": "Conservative",
      "policy_title": "Protect Right to Buy Discounts",
      "per_outcome": [
        {
          "outcome": "O1",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O14",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 14,
            "institutional": 6,
            "government": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-85-complete-leasehold-reform",
      "party": "Conservative",
      "policy_title": "Complete Leasehold Reform",
      "per_outcome": [
        {
          "outcome": "O1",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O10",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "government": 3,
            "media": 9
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-86-pass-renters-reform-bill",
      "party": "Conservative",
      "policy_title": "Pass Renters Reform Bill",
      "per_outcome": [
        {
          "outcome": "O1",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "institutional": 2,
            "media": 10
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-87-continue-to-end-rough-sleeping",
      "party": "Conservative",
      "policy_title": "Continue to End Rough Sleeping",
      "per_outcome": [
        {
          "outcome": "O1",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O14",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 9
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-88-require-developer-funded-cladding-remediation",
      "party": "Conservative",
      "policy_title": "Require Developer-Funded Cladding Remediation",
      "per_outcome": [
        {
          "outcome": "O1",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "government": 5,
            "media": 12
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-89-manage-growth-of-holiday-lets",
      "party": "Conservative",
      "policy_title": "Manage Growth of Holiday Lets",
      "per_outcome": [
        {
          "outcome": "O1",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O10",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O15",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 12,
            "institutional": 1,
            "government": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-90-provide-105-towns-with-20-million",
      "party": "Conservative",
      "policy_title": "Provide 105 Towns with \u00a320 Million Endowment Funds",
      "per_outcome": [
        {
          "outcome": "O1",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O13",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O15",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 5,
            "media": 15,
            "government": 3,
            "institutional": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-91-extend-community-ownership-fund",
      "party": "Conservative",
      "policy_title": "Extend Community Ownership Fund",
      "per_outcome": [
        {
          "outcome": "O15",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O7",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 4
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-92-extend-uk-shared-prosperity-fund",
      "party": "Conservative",
      "policy_title": "Extend UK Shared Prosperity Fund",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O14",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O15",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O7",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 6,
            "media": 33
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-93-create-more-freeports-and-business-rates",
      "party": "Conservative",
      "policy_title": "Create More Freeports and Business Rates Retention Zones",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O14",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "academic": 4,
            "institutional": 8,
            "government": 4,
            "media": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-94-invest-in-investment-zones",
      "party": "Conservative",
      "policy_title": "Invest in Investment Zones",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O14",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 5,
            "government": 5,
            "academic": 4,
            "institutional": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-95-revitalise-high-streets-and-tackle-street",
      "party": "Conservative",
      "policy_title": "Revitalise High Streets and Tackle Street Scars/Fly Tipping",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O15",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O5",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 15,
            "government": 6
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-96-extend-2-bus-fare-cap",
      "party": "Conservative",
      "policy_title": "Extend \u00a32 Bus Fare Cap",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 6,
            "institutional": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-97-introduce-rail-reform-bill-to-create",
      "party": "Conservative",
      "policy_title": "Introduce Rail Reform Bill to Create Great British Railways",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O2",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "institutional": 2,
            "media": 11
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-98-roll-out-mobile-pay-as-you-go-contactless-tickets",
      "party": "Conservative",
      "policy_title": "Roll Out Mobile Pay-As-You-Go Contactless Tickets Nationwide",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O2",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 7
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "con-99-improve-safety-for-active-travel",
      "party": "Conservative",
      "policy_title": "Improve Safety for Active Travel",
      "per_outcome": [
        {
          "outcome": "O3",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O5",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O6",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "government": 7,
            "media": 5
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "grn-01-strengthen-and-expand-public-nhs-services",
      "party": "Green",
      "policy_title": "Strengthen and expand public NHS services",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "major",
          "confidence": "moderate"
        },
        {
          "outcome": "O3",
          "direction": "improves",
          "magnitude": "major",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O7",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "government": 5,
            "institutional": 3,
            "media": 13,
            "academic": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "grn-02-reform-drug-laws-and-increase-public",
      "party": "Green",
      "policy_title": "Reform drug laws and increase public health funding",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O3",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 18,
            "government": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "grn-03-introduce-free-personal-social-care-and",
      "party": "Green",
      "policy_title": "Introduce free personal social care and reform the care workforce",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "major",
          "confidence": "moderate"
        },
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O3",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O8",
          "direction": "improves",
          "magnitude": "major",
          "confidence": "moderate"
        },
        {
          "outcome": "D1",
          "type": "directional",
          "shift": "unclear",
          "magnitude": "n/a",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 6,
            "media": 15,
            "institutional": 7,
            "government": 7
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "grn-04-legalise-assisted-dying-with-safeguards",
      "party": "Green",
      "policy_title": "Legalise assisted dying with safeguards",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O3",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O8",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 22,
            "institutional": 4,
            "government": 2,
            "academic": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "grn-05-restore-and-improve-disability-benefits-and",
      "party": "Green",
      "policy_title": "Restore and improve disability benefits and support",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O7",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "academic": 2,
            "media": 12,
            "government": 4,
            "institutional": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "grn-06-increase-funding-for-childrens-social-care",
      "party": "Green",
      "policy_title": "Increase funding for children's social care",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O3",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O7",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "academic": 3,
            "government": 4,
            "institutional": 1,
            "media": 20
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "grn-07-build-new-social-homes-and-end",
      "party": "Green",
      "policy_title": "Build new social homes and end Right to Buy",
      "per_outcome": [
        {
          "outcome": "O1",
          "direction": "improves",
          "magnitude": "major",
          "confidence": "moderate"
        },
        {
          "outcome": "O12",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 14,
            "institutional": 7,
            "government": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "grn-08-empower-local-authorities-to-introduce-rent",
      "party": "Green",
      "policy_title": "Empower local authorities to introduce rent controls and strengthen tenants' rights",
      "per_outcome": [
        {
          "outcome": "O1",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O10",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O14",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O6",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 5,
            "institutional": 3,
            "media": 22,
            "government": 3,
            "academic": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "grn-09-invest-in-home-insulation-green-heating",
      "party": "Green",
      "policy_title": "Invest in home insulation, green heating, and climate adaptation for homes",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O2",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O3",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 5,
            "government": 7,
            "institutional": 10,
            "media": 12,
            "academic": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "grn-10-reform-the-planning-system-for-sustainable",
      "party": "Green",
      "policy_title": "Reform the planning system for sustainable development and protect green spaces",
      "per_outcome": [
        {
          "outcome": "O1",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 16,
            "institutional": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "grn-11-achieve-a-zero-carbon-economy-through-energy",
      "party": "Green",
      "policy_title": "Achieve a zero-carbon economy through energy transition and green investment",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O2",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "major",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 6,
            "media": 36,
            "government": 4
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "grn-12-bring-privatised-utilities-into-public-ownership",
      "party": "Green",
      "policy_title": "Bring privatised utilities into public ownership",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O2",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O6",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "institutional": 6,
            "media": 7,
            "government": 7
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "grn-13-promote-a-circular-economy-and-right",
      "party": "Green",
      "policy_title": "Promote a circular economy and right to repair",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O2",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 13,
            "government": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "grn-14-introduce-a-15-minimum-wage-and",
      "party": "Green",
      "policy_title": "Introduce a \u00a315 minimum wage and 10:1 pay ratio cap",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 5,
            "media": 36,
            "institutional": 5,
            "government": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "grn-15-strengthen-workers-rights-and-trade-union",
      "party": "Green",
      "policy_title": "Strengthen workers' rights and trade union powers",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "media": 13,
            "academic": 4,
            "government": 7,
            "institutional": 8,
            "manifesto": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "grn-16-expand-pay-gap-protections-and-support-flexible",
      "party": "Green",
      "policy_title": "Expand pay-gap protections and support flexible working",
      "per_outcome": [
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "government": 5,
            "media": 17,
            "academic": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "grn-17-increase-universal-credit-benefits-and-pensions",
      "party": "Green",
      "policy_title": "Increase Universal Credit, benefits, and pensions",
      "per_outcome": [
        {
          "outcome": "O1",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "major",
          "confidence": "moderate"
        },
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "major",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "improves",
          "magnitude": "major",
          "confidence": "moderate"
        },
        {
          "outcome": "O8",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "government": 4,
            "media": 19,
            "institutional": 5,
            "manifesto": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "grn-18-introduce-a-wealth-tax-and-reform",
      "party": "Green",
      "policy_title": "Introduce a wealth tax and reform capital gains and inheritance taxes",
      "per_outcome": [
        {
          "outcome": "O1",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O11",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O12",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 6,
            "media": 7,
            "government": 8,
            "institutional": 14
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "grn-19-introduce-a-progressive-carbon-tax",
      "party": "Green",
      "policy_title": "Introduce a progressive carbon tax",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O14",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "major",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 5,
            "academic": 7,
            "institutional": 2,
            "media": 13,
            "government": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "grn-20-reform-property-taxes-towards-a-land",
      "party": "Green",
      "policy_title": "Reform property taxes towards a Land Value Tax",
      "per_outcome": [
        {
          "outcome": "O1",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O11",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O12",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 6,
            "institutional": 15,
            "government": 10,
            "media": 13,
            "academic": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "grn-21-increase-business-taxes-and-clamp-down",
      "party": "Green",
      "policy_title": "Increase business taxes and clamp down on tax avoidance",
      "per_outcome": [
        {
          "outcome": "O11",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O12",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O7",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 6,
            "media": 29,
            "government": 6
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "grn-22-introduce-a-rights-of-nature-act",
      "party": "Green",
      "policy_title": "Introduce a Rights of Nature Act",
      "per_outcome": [
        {
          "outcome": "O2",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 12,
            "academic": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "grn-23-protect-and-restore-30-of-land",
      "party": "Green",
      "policy_title": "Protect and restore 30% of land and seas for nature by 2030",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 19,
            "government": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "grn-24-increase-defra-budget-and-fund-nature-based",
      "party": "Green",
      "policy_title": "Increase DEFRA budget and fund nature-based solutions",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O13",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "media": 13,
            "government": 7,
            "academic": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "grn-25-introduce-a-right-to-roam-act",
      "party": "Green",
      "policy_title": "Introduce a Right to Roam Act for England",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O15",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 19,
            "government": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "grn-26-enhance-animal-welfare-and-end-harmful",
      "party": "Green",
      "policy_title": "Enhance animal welfare and end harmful practices",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O2",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O3",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O5",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 14,
            "government": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "grn-27-triple-farmer-support-for-nature-friendly-farming",
      "party": "Green",
      "policy_title": "Triple farmer support for nature-friendly farming",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 9,
            "government": 5,
            "academic": 6,
            "institutional": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "grn-28-increase-domestic-food-production-and-promote",
      "party": "Green",
      "policy_title": "Increase domestic food production and promote healthy eating",
      "per_outcome": [
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O7",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 19,
            "government": 2,
            "institutional": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "grn-29-rebalance-power-dynamics-in-the-food",
      "party": "Green",
      "policy_title": "Rebalance power dynamics in the food supply chain",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O2",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "institutional": 3,
            "media": 7,
            "government": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "grn-30-invest-in-early-years-education-and",
      "party": "Green",
      "policy_title": "Invest in early years education and childcare",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O7",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 18,
            "institutional": 3,
            "government": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "grn-31-improve-school-funding-teacher-pay-and",
      "party": "Green",
      "policy_title": "Improve school funding, teacher pay, and infrastructure",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O7",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "institutional": 7,
            "media": 16,
            "government": 4
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "grn-32-reform-school-assessment-and-curriculum",
      "party": "Green",
      "policy_title": "Reform school assessment and curriculum",
      "per_outcome": [
        {
          "outcome": "O7",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 1,
            "media": 9,
            "academic": 2,
            "government": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "grn-33-bring-academies-and-free-schools-into",
      "party": "Green",
      "policy_title": "Bring academies and free schools into local authority control and reform private school status",
      "per_outcome": [
        {
          "outcome": "O11",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O12",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O7",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 12,
            "government": 6,
            "institutional": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "grn-34-restore-maintenance-grants-and-scrap-tuition",
      "party": "Green",
      "policy_title": "Restore maintenance grants and scrap tuition fees for higher education",
      "per_outcome": [
        {
          "outcome": "O11",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "major",
          "confidence": "high"
        },
        {
          "outcome": "O14",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O7",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 5,
            "government": 6,
            "institutional": 9,
            "media": 6
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "grn-35-improve-public-transport-phase-out-fossil",
      "party": "Green",
      "policy_title": "Improve public transport, phase out fossil fuel vehicles, and reduce aviation",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O11",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O14",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "major",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 8,
            "institutional": 11,
            "media": 31,
            "government": 9
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "grn-36-introduce-a-fair-politics-act-and",
      "party": "Green",
      "policy_title": "Introduce a Fair Politics Act and reform democracy",
      "per_outcome": [
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 1,
            "media": 7,
            "government": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "grn-37-defend-human-rights-and-civil-liberties",
      "party": "Green",
      "policy_title": "Defend human rights and civil liberties",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 13,
            "academic": 1,
            "government": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "grn-38-support-self-id-for-trans-and-non-binary",
      "party": "Green",
      "policy_title": "Support self-ID for trans and non-binary people and end spousal veto",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "government": 4,
            "media": 10
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "grn-39-increase-local-government-funding-and-devolved",
      "party": "Green",
      "policy_title": "Increase local government funding and devolved powers",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O3",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O8",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 9,
            "institutional": 5,
            "government": 5
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "grn-40-end-the-hostile-environment-and-create",
      "party": "Green",
      "policy_title": "End the hostile environment and create safe routes to sanctuary",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O12",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O15",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "D1",
          "type": "directional",
          "shift": "toward more open",
          "magnitude": "major",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 8,
            "government": 5,
            "media": 28,
            "academic": 17,
            "institutional": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "grn-41-reform-the-home-office-and-simplify",
      "party": "Green",
      "policy_title": "Reform the Home Office and simplify visa applications",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O13",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O2",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O3",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "D1",
          "type": "directional",
          "shift": "toward more open",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 6,
            "government": 10,
            "academic": 8,
            "media": 12
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "grn-42-invest-in-local-arts-sport-and",
      "party": "Green",
      "policy_title": "Invest in local arts, sport, and culture",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O13",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O15",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O7",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 5,
            "institutional": 6,
            "government": 9,
            "media": 11
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "grn-43-introduce-a-digital-bill-of-rights",
      "party": "Green",
      "policy_title": "Introduce a Digital Bill of Rights and regulate AI",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "government": 5,
            "media": 6,
            "academic": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "grn-44-reform-media-ownership-and-support-local",
      "party": "Green",
      "policy_title": "Reform media ownership and support local news",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O15",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 10,
            "academic": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "grn-45-restore-trust-in-police-and-end",
      "party": "Green",
      "policy_title": "Restore trust in police and end disproportionate policing tactics",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "government": 8,
            "media": 8,
            "academic": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "grn-46-invest-in-criminal-justice-and-reduce",
      "party": "Green",
      "policy_title": "Invest in criminal justice and reduce court backlogs",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "institutional": 5,
            "media": 12,
            "government": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "grn-47-prioritise-restorative-justice-and-rehabilitation-over",
      "party": "Green",
      "policy_title": "Prioritise restorative justice and rehabilitation over short prison sentences",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O12",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 9,
            "government": 6,
            "academic": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "grn-48-end-violence-against-women-and-girls",
      "party": "Green",
      "policy_title": "End violence against women and girls (VAWG)",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 17,
            "government": 4,
            "academic": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "grn-49-support-ukraine-and-advocate-for-reform",
      "party": "Green",
      "policy_title": "Support Ukraine and advocate for reform of European security architecture",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 6,
            "government": 4
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "grn-50-advocate-for-a-permanent-ceasefire-and",
      "party": "Green",
      "policy_title": "Advocate for a permanent ceasefire and political solution in Israel and Palestine",
      "per_outcome": [
        {
          "outcome": "O15",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O5",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "government": 3,
            "media": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "grn-51-increase-overseas-aid-and-climate-finance",
      "party": "Green",
      "policy_title": "Increase overseas aid and climate finance",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "major",
          "confidence": "moderate"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "government": 3,
            "institutional": 2,
            "media": 2,
            "academic": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "grn-52-rejoin-the-european-union",
      "party": "Green",
      "policy_title": "Rejoin the European Union",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O12",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O13",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O14",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O15",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O2",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O5",
          "direction": "negligible",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O6",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O7",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 11,
            "government": 9,
            "media": 19,
            "academic": 7,
            "institutional": 8
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "grn-53-dismantle-nuclear-weapons-and-cancel-trident",
      "party": "Green",
      "policy_title": "Dismantle nuclear weapons and cancel Trident",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "government": 4,
            "media": 9
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-01-strengthen-uk-defence-and-national-security",
      "party": "Labour",
      "policy_title": "Strengthen UK Defence and National Security",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O12",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 18,
            "institutional": 2,
            "government": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-02-create-a-border-security-command-and",
      "party": "Labour",
      "policy_title": "Create a Border Security Command and Reform the Asylum System",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "D1",
          "type": "directional",
          "shift": "toward more controlled",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 14,
            "government": 7,
            "academic": 8,
            "institutional": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-03-implement-strict-fiscal-rules-and-strengthen",
      "party": "Labour",
      "policy_title": "Implement Strict Fiscal Rules and Strengthen the OBR",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "government": 4,
            "institutional": 5,
            "media": 7
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-04-tackle-waste-and-corruption-in-public",
      "party": "Labour",
      "policy_title": "Tackle Waste and Corruption in Public Spending",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O2",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O5",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 20
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-05-reduce-household-costs-and-support-families",
      "party": "Labour",
      "policy_title": "Reduce Household Costs and Support Families",
      "per_outcome": [
        {
          "outcome": "O1",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O11",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O2",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O7",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 6,
            "institutional": 3,
            "media": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-06-close-tax-loopholes-and-modernise-hmrc",
      "party": "Labour",
      "policy_title": "Close Tax Loopholes and Modernise HMRC",
      "per_outcome": [
        {
          "outcome": "O11",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O12",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "institutional": 7,
            "media": 28,
            "academic": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-07-introduce-a-new-industrial-strategy-and",
      "party": "Labour",
      "policy_title": "Introduce a New Industrial Strategy and National Wealth Fund",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 16,
            "academic": 5
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-08-increase-pension-fund-investment-in-uk",
      "party": "Labour",
      "policy_title": "Increase Pension Fund Investment in UK Markets",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O8",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 11,
            "government": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-09-set-business-tax-stability-and-reform",
      "party": "Labour",
      "policy_title": "Set Business Tax Stability and Reform Business Rates",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 32,
            "government": 3,
            "institutional": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-10-accelerate-national-infrastructure-development",
      "party": "Labour",
      "policy_title": "Accelerate National Infrastructure Development",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O13",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O6",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 14,
            "institutional": 4,
            "government": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-11-improve-digital-connectivity",
      "party": "Labour",
      "policy_title": "Improve Digital Connectivity",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O14",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O7",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 10,
            "government": 9
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-12-scrutinise-royal-mail-takeover-bids-and",
      "party": "Labour",
      "policy_title": "Scrutinise Royal Mail Takeover Bids and Explore New Governance Models",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O5",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "government": 2,
            "media": 8,
            "academic": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-13-maintain-roads-tackle-potholes-and-address",
      "party": "Labour",
      "policy_title": "Maintain Roads, Tackle Potholes, and Address Car Insurance Costs",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "high"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "media": 14,
            "manifesto": 3,
            "institutional": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-14-support-electric-vehicle-transition",
      "party": "Labour",
      "policy_title": "Support Electric Vehicle Transition",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O2",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 16,
            "government": 5
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-15-bring-railways-into-public-ownership-and",
      "party": "Labour",
      "policy_title": "Bring Railways into Public Ownership and Reform Bus Services",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O2",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O6",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 5,
            "institutional": 7,
            "media": 21,
            "government": 8,
            "academic": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-16-integrate-local-transport-and-support-sustainable",
      "party": "Labour",
      "policy_title": "Integrate Local Transport and Support Sustainable Aviation",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O14",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O6",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "government": 6,
            "institutional": 2,
            "media": 12
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-17-drive-innovation-regulate-ai-and-support",
      "party": "Labour",
      "policy_title": "Drive Innovation, Regulate AI, and Support Diverse Business Models",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O13",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O14",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "media": 24,
            "manifesto": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-18-support-small-businesses-and-post-offices",
      "party": "Labour",
      "policy_title": "Support Small Businesses and Post Offices, and Address Horizon Scandal",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 22,
            "institutional": 1,
            "government": 4
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-19-build-15-million-new-homes-and",
      "party": "Labour",
      "policy_title": "Build 1.5 Million New Homes and Reform Planning",
      "per_outcome": [
        {
          "outcome": "O1",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O10",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O13",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O14",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O6",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 5,
            "media": 26,
            "institutional": 2,
            "government": 1,
            "academic": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-20-increase-social-and-affordable-housing",
      "party": "Labour",
      "policy_title": "Increase Social and Affordable Housing",
      "per_outcome": [
        {
          "outcome": "O1",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "institutional": 3,
            "media": 7,
            "government": 1,
            "manifesto": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-21-support-first-time-buyers-and-improve-building",
      "party": "Labour",
      "policy_title": "Support First-Time Buyers and Improve Building Standards",
      "per_outcome": [
        {
          "outcome": "O1",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O12",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O6",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 10,
            "government": 5
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-22-deepen-devolution-across-england-and-support",
      "party": "Labour",
      "policy_title": "Deepen Devolution Across England and Support Local Government",
      "per_outcome": [
        {
          "outcome": "O1",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O13",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O7",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 5,
            "government": 11,
            "media": 15,
            "institutional": 4
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-23-reduce-net-migration-and-reform-the",
      "party": "Labour",
      "policy_title": "Reduce Net Migration and Reform the Immigration System",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O3",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O7",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O8",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "D1",
          "type": "directional",
          "shift": "toward more controlled",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 5,
            "media": 12,
            "institutional": 8,
            "academic": 8
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-24-reform-employment-support-and-tackle-economic",
      "party": "Labour",
      "policy_title": "Reform Employment Support and Tackle Economic Inactivity",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O14",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O7",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 5,
            "media": 15,
            "government": 12,
            "institutional": 13
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-25-implement-a-new-deal-for-working",
      "party": "Labour",
      "policy_title": "Implement a New Deal for Working People",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "institutional": 5,
            "media": 23,
            "government": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-26-establish-great-british-energy-and-drive",
      "party": "Labour",
      "policy_title": "Establish Great British Energy and Drive Clean Power by 2030",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "major",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 24,
            "government": 1,
            "institutional": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-27-expand-nuclear-power-and-manage-north",
      "party": "Labour",
      "policy_title": "Expand Nuclear Power and Manage North Sea Oil and Gas Transition",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 6,
            "media": 32,
            "institutional": 8,
            "government": 6
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-28-extend-and-increase-windfall-tax-on",
      "party": "Labour",
      "policy_title": "Extend and Increase Windfall Tax on Oil and Gas Giants",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O2",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 5,
            "media": 17,
            "institutional": 5
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-29-reform-energy-market-regulation-and-upgrade",
      "party": "Labour",
      "policy_title": "Reform Energy Market Regulation and Upgrade the National Grid",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "government": 2,
            "media": 16,
            "institutional": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-30-introduce-british-jobs-bonus-and-address",
      "party": "Labour",
      "policy_title": "Introduce British Jobs Bonus and Address Mineworkers' Pension",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O8",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "high"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 5,
            "media": 20,
            "government": 6,
            "institutional": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-31-warm-homes-plan-for-energy-efficiency",
      "party": "Labour",
      "policy_title": "Warm Homes Plan for Energy Efficiency and Reduced Fuel Poverty",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "academic": 1,
            "media": 12,
            "government": 4,
            "institutional": 7
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-32-introduce-carbon-border-adjustment-mechanism-and",
      "party": "Labour",
      "policy_title": "Introduce Carbon Border Adjustment Mechanism and Green Finance Mandate",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 12,
            "government": 9,
            "institutional": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-33-improve-climate-resilience-and-protect-nature",
      "party": "Labour",
      "policy_title": "Improve Climate Resilience and Protect Nature",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "government": 9,
            "media": 11,
            "institutional": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-34-clean-up-waterways-and-support-british",
      "party": "Labour",
      "policy_title": "Clean Up Waterways and Support British Farmers",
      "per_outcome": [
        {
          "outcome": "O4",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 8,
            "institutional": 1,
            "government": 5,
            "academic": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-35-strengthen-animal-welfare-protections",
      "party": "Labour",
      "policy_title": "Strengthen Animal Welfare Protections",
      "per_outcome": [
        {
          "outcome": "O3",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "high"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 4,
            "government": 4
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-36-restore-neighbourhood-policing-and-tackle-antisocial",
      "party": "Labour",
      "policy_title": "Restore Neighbourhood Policing and Tackle Antisocial Behaviour",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "institutional": 3,
            "media": 8,
            "government": 4
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-37-halve-knife-crime-and-establish-young",
      "party": "Labour",
      "policy_title": "Halve Knife Crime and Establish Young Futures Hubs",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O7",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-38-halve-violence-against-women-and-girls",
      "party": "Labour",
      "policy_title": "Halve Violence Against Women and Girls and Reform Justice System",
      "per_outcome": [
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O7",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 13,
            "academic": 7,
            "government": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-39-raise-police-standards-and-tackle-fraud",
      "party": "Labour",
      "policy_title": "Raise Police Standards and Tackle Fraud",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 11,
            "government": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-40-improve-crime-resolution-justice-for-victims",
      "party": "Labour",
      "policy_title": "Improve Crime Resolution, Justice for Victims, and Prison Reform",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 12,
            "institutional": 4,
            "academic": 3,
            "government": 4
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-41-address-historical-injustices",
      "party": "Labour",
      "policy_title": "Address Historical Injustices",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 18,
            "government": 2,
            "institutional": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-42-reduce-child-poverty-and-reform-universal",
      "party": "Labour",
      "policy_title": "Reduce Child Poverty and Reform Universal Credit",
      "per_outcome": [
        {
          "outcome": "O1",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O12",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O14",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O2",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O7",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 6,
            "government": 5,
            "institutional": 15,
            "media": 10
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-43-protect-state-pension-triple-lock-and",
      "party": "Labour",
      "policy_title": "Protect State Pension Triple Lock and Review Workplace Pensions",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O8",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "institutional": 8,
            "media": 9,
            "government": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-44-reform-private-rented-sector-regulation-and",
      "party": "Labour",
      "policy_title": "Reform Private Rented Sector Regulation and End Leasehold",
      "per_outcome": [
        {
          "outcome": "O1",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 14,
            "government": 6
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-45-end-homelessness-and-support-children-in",
      "party": "Labour",
      "policy_title": "End Homelessness and Support Children in Care",
      "per_outcome": [
        {
          "outcome": "O1",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O10",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O15",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O7",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "media": 11,
            "manifesto": 3,
            "government": 3,
            "institutional": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-46-expand-early-education-and-childcare",
      "party": "Labour",
      "policy_title": "Expand Early Education and Childcare",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O13",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O7",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 5,
            "institutional": 7,
            "media": 17,
            "government": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-47-raise-school-standards-and-recruit-teachers",
      "party": "Labour",
      "policy_title": "Raise School Standards and Recruit Teachers",
      "per_outcome": [
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O7",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 12,
            "government": 2,
            "academic": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-48-reform-school-inspection-and-curriculum",
      "party": "Labour",
      "policy_title": "Reform School Inspection and Curriculum",
      "per_outcome": [
        {
          "outcome": "O7",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 1,
            "media": 8,
            "academic": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-49-improve-support-for-children-with-send",
      "party": "Labour",
      "policy_title": "Improve Support for Children with SEND and Address School Costs",
      "per_outcome": [
        {
          "outcome": "O2",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O7",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 12,
            "institutional": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-50-provide-mental-health-support-in-schools",
      "party": "Labour",
      "policy_title": "Provide Mental Health Support in Schools",
      "per_outcome": [
        {
          "outcome": "O3",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O7",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 9,
            "institutional": 2,
            "academic": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-51-reform-post-16-education-and-apprenticeships",
      "party": "Labour",
      "policy_title": "Reform Post-16 Education and Apprenticeships",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O7",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 20,
            "government": 5,
            "institutional": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-52-improve-access-to-arts-music-and",
      "party": "Labour",
      "policy_title": "Improve Access to Arts, Music, and Sport",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O15",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O7",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "media": 22,
            "academic": 5,
            "manifesto": 4
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-53-enact-socio-economic-duty-and-introduce-race",
      "party": "Labour",
      "policy_title": "Enact Socio-economic Duty and Introduce Race Equality Act",
      "per_outcome": [
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O15",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 28,
            "government": 2,
            "academic": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-54-champion-disabled-peoples-rights-and-ban",
      "party": "Labour",
      "policy_title": "Champion Disabled People's Rights and Ban Conversion Practices",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 22,
            "institutional": 3,
            "government": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-55-cut-nhs-waiting-times-and-modernise",
      "party": "Labour",
      "policy_title": "Cut NHS Waiting Times and Modernise Diagnostics",
      "per_outcome": [
        {
          "outcome": "O3",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 1,
            "media": 7,
            "institutional": 2,
            "government": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-56-boost-life-sciences-innovation-and-patient",
      "party": "Labour",
      "policy_title": "Boost Life Sciences Innovation and Patient Control",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O3",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 14,
            "institutional": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-57-improve-maternity-care-and-healthcare-management",
      "party": "Labour",
      "policy_title": "Improve Maternity Care and Healthcare Management",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O3",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 9,
            "government": 3,
            "academic": 3,
            "institutional": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-58-reform-primary-care-and-establish-neighbourhood",
      "party": "Labour",
      "policy_title": "Reform Primary Care and Establish Neighbourhood Health Centres",
      "per_outcome": [
        {
          "outcome": "O3",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O8",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "institutional": 2,
            "media": 8,
            "government": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-59-implement-a-dentistry-rescue-plan",
      "party": "Labour",
      "policy_title": "Implement a Dentistry Rescue Plan",
      "per_outcome": [
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O3",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "academic": 2,
            "media": 10,
            "institutional": 2,
            "manifesto": 1,
            "government": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-60-create-a-national-care-service-and",
      "party": "Labour",
      "policy_title": "Create a National Care Service and Reform Social Care",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O3",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O8",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 6,
            "media": 30,
            "institutional": 6,
            "government": 4
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-61-reduce-mental-health-waiting-times-and",
      "party": "Labour",
      "policy_title": "Reduce Mental Health Waiting Times and Modernise Legislation",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O3",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "academic": 6,
            "government": 5,
            "media": 4
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-62-implement-preventative-public-health-measures",
      "party": "Labour",
      "policy_title": "Implement Preventative Public Health Measures",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O3",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "high"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 10,
            "government": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-63-reduce-health-inequalities-and-prioritise-womens",
      "party": "Labour",
      "policy_title": "Reduce Health Inequalities and Prioritise Women's Health",
      "per_outcome": [
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O3",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "government": 6,
            "media": 11
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-64-establish-an-ethics-and-integrity-commission",
      "party": "Labour",
      "policy_title": "Establish an Ethics and Integrity Commission and Reform Ministerial Conduct",
      "per_outcome": [
        {
          "outcome": "O15",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 6,
            "government": 4
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-65-modernise-house-of-commons-and-ban",
      "party": "Labour",
      "policy_title": "Modernise House of Commons and Ban Paid Advisory Roles for MPs",
      "per_outcome": [
        {
          "outcome": "O15",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "government": 3,
            "media": 7
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-66-reform-house-of-lords-and-strengthen",
      "party": "Labour",
      "policy_title": "Reform House of Lords and Strengthen Democracy",
      "per_outcome": [
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 1,
            "academic": 1,
            "media": 3,
            "government": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-67-reset-uk-government-relationship-with-devolved",
      "party": "Labour",
      "policy_title": "Reset UK Government Relationship with Devolved Administrations",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O14",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "government": 4,
            "media": 6,
            "institutional": 2,
            "academic": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-68-support-for-veterans-and-the-armed",
      "party": "Labour",
      "policy_title": "Support for Veterans and the Armed Forces",
      "per_outcome": [
        {
          "outcome": "O1",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O3",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "D1",
          "type": "directional",
          "shift": "toward more open",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 6,
            "media": 25,
            "government": 9
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-69-strengthen-defence-industry-and-military-leadership",
      "party": "Labour",
      "policy_title": "Strengthen Defence Industry and Military Leadership",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 15,
            "government": 3,
            "institutional": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-70-support-ukraine-and-tackle-russian-corruption",
      "party": "Labour",
      "policy_title": "Support Ukraine and Tackle Russian Corruption",
      "per_outcome": [
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 1,
            "government": 2,
            "media": 4
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-71-uphold-overseas-territories-sovereignty-and-rights",
      "party": "Labour",
      "policy_title": "Uphold Overseas Territories' Sovereignty and Rights",
      "per_outcome": [
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 4,
            "government": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-72-negotiate-new-trade-agreements-and-sector",
      "party": "Labour",
      "policy_title": "Negotiate New Trade Agreements and Sector Deals",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 8,
            "institutional": 6
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "lab-73-lead-a-clean-power-alliance-and",
      "party": "Labour",
      "policy_title": "Lead a Clean Power Alliance and Modernise International Development",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O5",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O6",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "government": 5,
            "media": 12
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-01-fiscal-responsibility-rule",
      "party": "Liberal Democrat",
      "policy_title": "Fiscal Responsibility Rule",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "government": 3,
            "institutional": 8,
            "media": 5
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-02-increase-hmrc-resources-to-tackle-tax",
      "party": "Liberal Democrat",
      "policy_title": "Increase HMRC Resources to Tackle Tax Avoidance and Evasion",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O14",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 6,
            "institutional": 4,
            "government": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-03-reverse-conservative-bank-tax-cuts-and",
      "party": "Liberal Democrat",
      "policy_title": "Reverse Conservative Bank Tax Cuts and Impose Windfall Tax on Energy Companies",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "institutional": 6,
            "media": 14
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-04-universal-gigabit-broadband-rollout",
      "party": "Liberal Democrat",
      "policy_title": "Universal Gigabit Broadband Rollout",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O13",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O14",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O7",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 5,
            "government": 8,
            "media": 19
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-05-raise-income-tax-personal-allowance",
      "party": "Liberal Democrat",
      "policy_title": "Raise Income Tax Personal Allowance",
      "per_outcome": [
        {
          "outcome": "O11",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O12",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O14",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 5,
            "government": 5,
            "media": 7
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-06-increase-digital-services-tax",
      "party": "Liberal Democrat",
      "policy_title": "Increase Digital Services Tax",
      "per_outcome": [
        {
          "outcome": "O14",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O3",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O7",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 6,
            "government": 8
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-07-reform-capital-gains-tax",
      "party": "Liberal Democrat",
      "policy_title": "Reform Capital Gains Tax",
      "per_outcome": [
        {
          "outcome": "O11",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O12",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O13",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 5,
            "institutional": 12,
            "media": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-08-tax-on-ftse-100-share-buybacks",
      "party": "Liberal Democrat",
      "policy_title": "Tax on FTSE-100 Share Buybacks",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O13",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O14",
          "direction": "negligible",
          "magnitude": "n/a",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O8",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 5,
            "media": 9,
            "government": 5,
            "institutional": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-09-end-retrospective-tax-changes-and-review",
      "party": "Liberal Democrat",
      "policy_title": "End Retrospective Tax Changes and Review IR35",
      "per_outcome": [
        {
          "outcome": "O11",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 1,
            "government": 10,
            "media": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-10-expand-british-business-bank",
      "party": "Liberal Democrat",
      "policy_title": "Expand British Business Bank",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "media": 7,
            "government": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-100-empower-local-authorities-to-end-right",
      "party": "Liberal Democrat",
      "policy_title": "Empower Local Authorities to End Right to Buy",
      "per_outcome": [
        {
          "outcome": "O1",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 1,
            "institutional": 3,
            "media": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-101-end-rough-sleeping-and-scrap-vagrancy",
      "party": "Liberal Democrat",
      "policy_title": "End Rough Sleeping and Scrap Vagrancy Act",
      "per_outcome": [
        {
          "outcome": "O1",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O10",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O12",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 15,
            "government": 4,
            "institutional": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-102-abolish-residential-leaseholds-and-cap-ground",
      "party": "Liberal Democrat",
      "policy_title": "Abolish Residential Leaseholds and Cap Ground Rents",
      "per_outcome": [
        {
          "outcome": "O1",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O10",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 15,
            "government": 9
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-103-rent-to-own-model-for-social",
      "party": "Liberal Democrat",
      "policy_title": "Rent to Own Model for Social Housing",
      "per_outcome": [
        {
          "outcome": "O1",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O14",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O8",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "institutional": 9,
            "media": 9,
            "government": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-104-local-authority-powers-to-control-second",
      "party": "Liberal Democrat",
      "policy_title": "Local Authority Powers to Control Second Homes and Short-Term Lets",
      "per_outcome": [
        {
          "outcome": "O1",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O11",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 7,
            "institutional": 2,
            "government": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-105-make-it-easier-to-switch-to",
      "party": "Liberal Democrat",
      "policy_title": "Make it Easier to Switch to Electric Vehicles",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O14",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 5,
            "media": 15,
            "institutional": 5,
            "government": 4
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-106-freeze-rail-fares-and-simplify-ticketing",
      "party": "Liberal Democrat",
      "policy_title": "Freeze Rail Fares and Simplify Ticketing",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O13",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 13,
            "government": 1,
            "institutional": 5
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-107-extend-rail-electrification-and-improve-stations",
      "party": "Liberal Democrat",
      "policy_title": "Extend Rail Electrification and Improve Stations",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O13",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "media": 26,
            "government": 8,
            "manifesto": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-108-boost-bus-services-and-empower-local",
      "party": "Liberal Democrat",
      "policy_title": "Boost Bus Services and Empower Local Authorities",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O2",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "government": 10,
            "media": 9
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-109-new-nationwide-active-travel-strategy",
      "party": "Liberal Democrat",
      "policy_title": "New Nationwide Active Travel Strategy",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O3",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "government": 9,
            "media": 11,
            "academic": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-11-digital-literacy-target-and-clear-terms",
      "party": "Liberal Democrat",
      "policy_title": "Digital Literacy Target and Clear Terms and Conditions",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O7",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "government": 5,
            "media": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-110-reform-taxation-of-international-flights-and",
      "party": "Liberal Democrat",
      "policy_title": "Reform Taxation of International Flights and Introduce Private Jet Super Tax",
      "per_outcome": [
        {
          "outcome": "O11",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 5,
            "media": 27,
            "institutional": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-111-protect-public-service-broadcasters",
      "party": "Liberal Democrat",
      "policy_title": "Protect Public Service Broadcasters",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O15",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 6,
            "government": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-112-negotiate-free-and-simple-travel-for",
      "party": "Liberal Democrat",
      "policy_title": "Negotiate Free and Simple Travel for Artists to the EU",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 6,
            "government": 3,
            "academic": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-113-boost-sports-participation-and-invest-in",
      "party": "Liberal Democrat",
      "policy_title": "Boost Sports Participation and Invest in Grassroots Facilities",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O15",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O3",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 7,
            "academic": 3,
            "institutional": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-114-independent-regulator-for-football-clubs",
      "party": "Liberal Democrat",
      "policy_title": "Independent Regulator for Football Clubs",
      "per_outcome": [
        {
          "outcome": "O15",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "government": 2,
            "media": 9
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-115-end-hostile-environment-and-tackle-smugglingtrafficking",
      "party": "Liberal Democrat",
      "policy_title": "End Hostile Environment and Tackle Smuggling/Trafficking",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "D1",
          "type": "directional",
          "shift": "toward more open",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "media": 32,
            "government": 5,
            "manifesto": 1,
            "institutional": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-116-transfer-work-visas-and-overseas-student",
      "party": "Liberal Democrat",
      "policy_title": "Transfer Work Visas and Overseas Student Policy from Home Office",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O3",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O8",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "D1",
          "type": "directional",
          "shift": "toward more open",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "media": 18,
            "institutional": 3,
            "academic": 7,
            "manifesto": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-117-scrap-illegal-migration-act-and-rwanda",
      "party": "Liberal Democrat",
      "policy_title": "Scrap Illegal Migration Act and Rwanda Scheme, Uphold Refugee Convention",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O12",
          "gap": "unsourced",
          "gap_label": "analysed \u2014 couldn't verify external evidence"
        },
        {
          "outcome": "O5",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "D1",
          "type": "directional",
          "shift": "toward more open",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-118-tackle-asylum-backlog-and-allow-asylum",
      "party": "Liberal Democrat",
      "policy_title": "Tackle Asylum Backlog and Allow Asylum Seekers to Work",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O12",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "D1",
          "type": "directional",
          "shift": "toward more open",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 5,
            "government": 10,
            "academic": 9,
            "media": 9
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-119-expand-youth-mobility-scheme",
      "party": "Liberal Democrat",
      "policy_title": "Expand Youth Mobility Scheme",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O15",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "government": 5,
            "academic": 4,
            "media": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-12-national-financial-inclusion-strategy",
      "party": "Liberal Democrat",
      "policy_title": "National Financial Inclusion Strategy",
      "per_outcome": [
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O7",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "institutional": 3,
            "government": 9,
            "media": 12,
            "academic": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-120-reverse-unfair-increase-to-family-visa",
      "party": "Liberal Democrat",
      "policy_title": "Reverse Unfair Increase to Family Visa Income Thresholds",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "D1",
          "type": "directional",
          "shift": "toward more open",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "academic": 4,
            "media": 14,
            "government": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-121-repeal-discriminatory-right-to-rent-scheme",
      "party": "Liberal Democrat",
      "policy_title": "Repeal Discriminatory 'Right to Rent' Scheme",
      "per_outcome": [
        {
          "outcome": "O1",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O10",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "D1",
          "type": "directional",
          "shift": "toward more open",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "media": 22,
            "manifesto": 1,
            "government": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-122-end-immigration-detention-of-children-and",
      "party": "Liberal Democrat",
      "policy_title": "End Immigration Detention of Children and Limit Adult Detention",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 8,
            "academic": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-123-champion-human-rights-act",
      "party": "Liberal Democrat",
      "policy_title": "Champion Human Rights Act",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "D1",
          "type": "directional",
          "shift": "toward more open",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "media": 18,
            "government": 4,
            "academic": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-124-comprehensive-race-equality-strategy",
      "party": "Liberal Democrat",
      "policy_title": "Comprehensive Race Equality Strategy",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O3",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O5",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "government": 9,
            "media": 9,
            "academic": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-125-make-misogyny-a-hate-crime",
      "party": "Liberal Democrat",
      "policy_title": "Make Misogyny a Hate Crime",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "government": 1,
            "media": 7,
            "academic": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-126-new-right-to-flexible-working-and",
      "party": "Liberal Democrat",
      "policy_title": "New Right to Flexible Working and Work from Home for Disabled People",
      "per_outcome": [
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 9,
            "academic": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-127-protect-lgbt-rights-and-ban-conversion",
      "party": "Liberal Democrat",
      "policy_title": "Protect LGBT+ Rights and Ban Conversion Therapies",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O3",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "government": 6,
            "media": 7,
            "academic": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-128-scrap-draconian-anti-protest-laws-and-halt",
      "party": "Liberal Democrat",
      "policy_title": "Scrap Draconian Anti-Protest Laws and Halt Facial Recognition Surveillance",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 1,
            "media": 13,
            "government": 7
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-129-new-right-to-affordable-legal-assistance",
      "party": "Liberal Democrat",
      "policy_title": "New Right to Affordable Legal Assistance and Reform Legal Aid",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 12,
            "government": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-13-repair-uk-eu-trading-relationship",
      "party": "Liberal Democrat",
      "policy_title": "Repair UK-EU Trading Relationship",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O13",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 1,
            "institutional": 10,
            "media": 11,
            "academic": 2,
            "government": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-130-introduce-digital-bill-of-rights",
      "party": "Liberal Democrat",
      "policy_title": "Introduce Digital Bill of Rights",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 11,
            "government": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-131-end-gender-price-gap-and-period",
      "party": "Liberal Democrat",
      "policy_title": "End Gender Price Gap and Period Poverty",
      "per_outcome": [
        {
          "outcome": "O2",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 7,
            "government": 6
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-132-reform-gender-recognition-process",
      "party": "Liberal Democrat",
      "policy_title": "Reform Gender Recognition Process",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O15",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "government": 8,
            "media": 10,
            "academic": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-133-improve-diversity-in-workplace-and-public",
      "party": "Liberal Democrat",
      "policy_title": "Improve Diversity in Workplace and Public Life",
      "per_outcome": [
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O7",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 17,
            "government": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-134-new-accessibility-standards-for-public-spaces",
      "party": "Liberal Democrat",
      "policy_title": "New Accessibility Standards for Public Spaces and UN CRPD Incorporation",
      "per_outcome": [
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 5,
            "government": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-135-introduce-proportional-representation-for-mps-and",
      "party": "Liberal Democrat",
      "policy_title": "Introduce Proportional Representation for MPs and Local Councillors",
      "per_outcome": [
        {
          "outcome": "O15",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "major",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "government": 3,
            "media": 7
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-136-strengthen-democratic-rights-and-participation",
      "party": "Liberal Democrat",
      "policy_title": "Strengthen Democratic Rights and Participation",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "media": 6,
            "academic": 3,
            "government": 6
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-137-enshrine-ministerial-code-in-legislation",
      "party": "Liberal Democrat",
      "policy_title": "Enshrine Ministerial Code in Legislation",
      "per_outcome": [
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "media": 5,
            "government": 1,
            "academic": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-138-reform-house-of-lords-with-democratic",
      "party": "Liberal Democrat",
      "policy_title": "Reform House of Lords with Democratic Mandate",
      "per_outcome": [
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 1,
            "media": 3,
            "academic": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-139-transfer-powers-from-westminster-and-whitehall",
      "party": "Liberal Democrat",
      "policy_title": "Transfer Powers from Westminster and Whitehall, Written Federal Constitution",
      "per_outcome": [
        {
          "outcome": "O15",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "government": 2,
            "media": 4
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-14-skills-and-training-levy-and-apprenticeship",
      "party": "Liberal Democrat",
      "policy_title": "Skills and Training Levy and Apprenticeship Reform",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O13",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O7",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 5,
            "media": 18,
            "institutional": 10,
            "government": 4,
            "academic": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-140-cap-donations-to-political-parties",
      "party": "Liberal Democrat",
      "policy_title": "Cap Donations to Political Parties",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 8,
            "government": 1,
            "academic": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-141-strengthen-intelligence-and-security-committee",
      "party": "Liberal Democrat",
      "policy_title": "Strengthen Intelligence and Security Committee",
      "per_outcome": [
        {
          "outcome": "O5",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "government": 2,
            "academic": 2,
            "media": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-142-protect-whistleblowers-with-office-of-the",
      "party": "Liberal Democrat",
      "policy_title": "Protect Whistleblowers with Office of the Whistleblower",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 10
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-143-reverse-conservative-army-cuts-and-increase",
      "party": "Liberal Democrat",
      "policy_title": "Reverse Conservative Army Cuts and Increase Defence Spending",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 1,
            "institutional": 4,
            "government": 3,
            "media": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-144-maintain-nuclear-deterrent-while-pursuing-global",
      "party": "Liberal Democrat",
      "policy_title": "Maintain Nuclear Deterrent While Pursuing Global Disarmament",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "government": 4,
            "institutional": 1,
            "media": 5
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-145-control-arms-exports-to-countries-with",
      "party": "Liberal Democrat",
      "policy_title": "Control Arms Exports to Countries with Poor Human Rights Records",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "government": 3,
            "media": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-146-parliamentary-vote-on-military-action",
      "party": "Liberal Democrat",
      "policy_title": "Parliamentary Vote on Military Action",
      "per_outcome": [
        {
          "outcome": "O5",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "government": 7,
            "media": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-147-strengthen-armed-forces-covenant-and-improve",
      "party": "Liberal Democrat",
      "policy_title": "Strengthen Armed Forces Covenant and Improve MOD Housing",
      "per_outcome": [
        {
          "outcome": "O1",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 8,
            "government": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-148-work-to-counter-global-rise-in",
      "party": "Liberal Democrat",
      "policy_title": "Work to Counter Global Rise in Authoritarianism",
      "per_outcome": [
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "government": 3,
            "media": 5,
            "institutional": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-149-stand-with-ukraine-against-invasion",
      "party": "Liberal Democrat",
      "policy_title": "Stand with Ukraine Against Invasion",
      "per_outcome": [
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "high"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 4,
            "academic": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-15-abolish-business-rates-and-introduce-commercial",
      "party": "Liberal Democrat",
      "policy_title": "Abolish Business Rates and Introduce Commercial Landowner Levy",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "institutional": 6,
            "media": 9,
            "government": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-150-advocate-for-immediate-bilateral-ceasefire-in",
      "party": "Liberal Democrat",
      "policy_title": "Advocate for Immediate Bilateral Ceasefire in Israel-Gaza",
      "per_outcome": [
        {
          "outcome": "O15",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O5",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 2,
            "government": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-151-protect-and-promote-human-rights-globally",
      "party": "Liberal Democrat",
      "policy_title": "Protect and Promote Human Rights Globally",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 5,
            "government": 4
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-152-fund-impartial-bbc-world-service",
      "party": "Liberal Democrat",
      "policy_title": "Fund Impartial BBC World Service",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "government": 3,
            "media": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-16-general-duty-of-care-for-environment",
      "party": "Liberal Democrat",
      "policy_title": "General Duty of Care for Environment and Human Rights in Supply Chains",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 10,
            "government": 4
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-17-promote-employee-ownership-and-company-purpose",
      "party": "Liberal Democrat",
      "policy_title": "Promote Employee Ownership and Company Purpose Reform",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O14",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O6",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 6,
            "academic": 10,
            "government": 7
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-18-extend-public-interest-test-for-company",
      "party": "Liberal Democrat",
      "policy_title": "Extend Public Interest Test for Company Takeovers",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O5",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "government": 8,
            "academic": 1,
            "media": 4,
            "manifesto": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-19-tackle-late-payments-crisis",
      "party": "Liberal Democrat",
      "policy_title": "Tackle Late Payments Crisis",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 11,
            "government": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-20-worker-protection-enforcement-authority",
      "party": "Liberal Democrat",
      "policy_title": "Worker Protection Enforcement Authority",
      "per_outcome": [
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "institutional": 7
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-21-independent-review-for-a-genuine-living",
      "party": "Liberal Democrat",
      "policy_title": "Independent Review for a Genuine Living Wage",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 16,
            "institutional": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-22-modernise-employment-rights-for-the-gig",
      "party": "Liberal Democrat",
      "policy_title": "Modernise Employment Rights for the Gig Economy",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O8",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "media": 7,
            "institutional": 7,
            "government": 7,
            "manifesto": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-23-reform-statutory-sick-pay-ssp",
      "party": "Liberal Democrat",
      "policy_title": "Reform Statutory Sick Pay (SSP)",
      "per_outcome": [
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 17,
            "institutional": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-24-emergency-home-energy-upgrade-programme",
      "party": "Liberal Democrat",
      "policy_title": "Emergency Home Energy Upgrade Programme",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O2",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 19,
            "institutional": 3,
            "government": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-25-rooftop-solar-revolution-and-fair-price",
      "party": "Liberal Democrat",
      "policy_title": "Rooftop Solar Revolution and Fair Price for Electricity",
      "per_outcome": [
        {
          "outcome": "O14",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 10,
            "institutional": 4,
            "government": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-26-90-renewable-electricity-target-by-2030",
      "party": "Liberal Democrat",
      "policy_title": "90% Renewable Electricity Target by 2030",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "major",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "media": 18,
            "institutional": 1,
            "government": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-27-chief-secretary-for-sustainability-and-net",
      "party": "Liberal Democrat",
      "policy_title": "Chief Secretary for Sustainability and Net Zero Delivery Authority",
      "per_outcome": [
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 1,
            "media": 2,
            "institutional": 2,
            "academic": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-28-national-and-local-citizens-assemblies-for",
      "party": "Liberal Democrat",
      "policy_title": "National and Local Citizens' Assemblies for Climate Change",
      "per_outcome": [
        {
          "outcome": "O15",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O6",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "government": 2,
            "media": 9,
            "academic": 5
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-29-restore-international-development-spending-for-climate",
      "party": "Liberal Democrat",
      "policy_title": "Restore International Development Spending for Climate Action",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 6,
            "government": 4
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-30-landlords-to-upgrade-energy-efficiency",
      "party": "Liberal Democrat",
      "policy_title": "Landlords to Upgrade Energy Efficiency",
      "per_outcome": [
        {
          "outcome": "O1",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 11,
            "institutional": 3,
            "government": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-31-social-tariff-for-vulnerable-households-energy",
      "party": "Liberal Democrat",
      "policy_title": "Social Tariff for Vulnerable Households' Energy Bills",
      "per_outcome": [
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "improves",
          "magnitude": "major",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 8,
            "institutional": 1,
            "academic": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-32-decouple-electricity-prices-from-wholesale-gas",
      "party": "Liberal Democrat",
      "policy_title": "Decouple Electricity Prices from Wholesale Gas Price",
      "per_outcome": [
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O2",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 16,
            "government": 5,
            "institutional": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-33-ban-fracking-and-new-coal-mines",
      "party": "Liberal Democrat",
      "policy_title": "Ban Fracking and New Coal Mines",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O2",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 14,
            "academic": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-34-end-fossil-fuel-subsidies-with-just",
      "party": "Liberal Democrat",
      "policy_title": "End Fossil Fuel Subsidies with Just Transition",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O15",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "media": 21,
            "manifesto": 3,
            "government": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-35-regulate-financial-services-for-climate-friendly-investments",
      "party": "Liberal Democrat",
      "policy_title": "Regulate Financial Services for Climate-Friendly Investments",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O8",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 14,
            "government": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-36-implement-carbon-border-adjustment-mechanism",
      "party": "Liberal Democrat",
      "policy_title": "Implement Carbon Border Adjustment Mechanism",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 17,
            "government": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-37-right-to-see-a-gp-within",
      "party": "Liberal Democrat",
      "policy_title": "Right to See a GP Within Seven Days (or 24 Hours Urgent)",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O3",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "media": 4,
            "institutional": 9,
            "manifesto": 1,
            "government": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-38-guarantee-nhs-dentist-access-for-urgent",
      "party": "Liberal Democrat",
      "policy_title": "Guarantee NHS Dentist Access for Urgent Care",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O3",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "government": 3,
            "media": 9,
            "institutional": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-39-improve-early-access-to-mental-health",
      "party": "Liberal Democrat",
      "policy_title": "Improve Early Access to Mental Health Services",
      "per_outcome": [
        {
          "outcome": "O3",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O7",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "media": 9,
            "government": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-40-boost-cancer-survival-rates-and-62-day",
      "party": "Liberal Democrat",
      "policy_title": "Boost Cancer Survival Rates and 62-Day Treatment Guarantee",
      "per_outcome": [
        {
          "outcome": "O3",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 1,
            "government": 3,
            "media": 7,
            "academic": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-41-invest-in-public-health-and-health",
      "party": "Liberal Democrat",
      "policy_title": "Invest in Public Health and 'Health Creation Unit'",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O3",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "media": 10,
            "institutional": 1,
            "government": 3,
            "manifesto": 2,
            "academic": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-42-ban-single-use-vapes-and-restrict-childrens",
      "party": "Liberal Democrat",
      "policy_title": "Ban Single-Use Vapes and Restrict Children's Vaping",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O3",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 13,
            "government": 4
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-43-levy-on-tobacco-company-profits",
      "party": "Liberal Democrat",
      "policy_title": "Levy on Tobacco Company Profits",
      "per_outcome": [
        {
          "outcome": "O3",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 1,
            "media": 1,
            "academic": 1,
            "government": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-44-restrict-junk-food-advertising-and-extend",
      "party": "Liberal Democrat",
      "policy_title": "Restrict Junk Food Advertising and Extend Soft Drinks Levy",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O14",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O2",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O3",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 16,
            "government": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-45-nhs-staff-retention-plan-and-pay",
      "party": "Liberal Democrat",
      "policy_title": "NHS Staff Retention Plan and Pay Review Body Reform",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O3",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "D1",
          "type": "directional",
          "shift": "toward more controlled",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "government": 6,
            "media": 20,
            "institutional": 5
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-46-fix-ambulance-services-crisis",
      "party": "Liberal Democrat",
      "policy_title": "Fix Ambulance Services Crisis",
      "per_outcome": [
        {
          "outcome": "O3",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O8",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "institutional": 6,
            "media": 8
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-47-ten-year-plan-for-nhs-estates-investment",
      "party": "Liberal Democrat",
      "policy_title": "Ten-Year Plan for NHS Estates Investment",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O3",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 8,
            "government": 2,
            "institutional": 4
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-48-new-patients-charter",
      "party": "Liberal Democrat",
      "policy_title": "New Patients' Charter",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O3",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O8",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 7,
            "government": 5,
            "institutional": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-49-implement-infected-blood-inquiry-recommendations",
      "party": "Liberal Democrat",
      "policy_title": "Implement Infected Blood Inquiry Recommendations",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 11,
            "government": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-50-free-personal-care",
      "party": "Liberal Democrat",
      "policy_title": "Free Personal Care",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "major",
          "confidence": "moderate"
        },
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O8",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "government": 6,
            "media": 8,
            "institutional": 1,
            "academic": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-51-social-care-workforce-plan-and-royal",
      "party": "Liberal Democrat",
      "policy_title": "Social Care Workforce Plan and Royal College of Care Workers",
      "per_outcome": [
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O3",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O8",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "media": 15,
            "government": 10,
            "institutional": 7,
            "manifesto": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-52-cross-party-commission-for-social-care-funding",
      "party": "Liberal Democrat",
      "policy_title": "Cross-Party Commission for Social Care Funding",
      "per_outcome": [
        {
          "outcome": "O8",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 1,
            "media": 5,
            "government": 2,
            "institutional": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-53-fair-deal-for-unpaid-carers",
      "party": "Liberal Democrat",
      "policy_title": "Fair Deal for Unpaid Carers",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O8",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "media": 18,
            "academic": 5,
            "government": 4,
            "institutional": 4,
            "manifesto": 4
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-54-dedicated-mental-health-professional-in-every",
      "party": "Liberal Democrat",
      "policy_title": "Dedicated Mental Health Professional in Every School",
      "per_outcome": [
        {
          "outcome": "O3",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O7",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 11,
            "government": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-55-increase-school-and-college-funding-and",
      "party": "Liberal Democrat",
      "policy_title": "Increase School and College Funding and Repair Buildings",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O7",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "government": 2,
            "institutional": 4,
            "media": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-56-tutoring-guarantee-for-disadvantaged-pupils",
      "party": "Liberal Democrat",
      "policy_title": "Tutoring Guarantee for Disadvantaged Pupils",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O7",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "media": 11,
            "government": 4,
            "academic": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-57-invest-in-high-quality-early-years-education",
      "party": "Liberal Democrat",
      "policy_title": "Invest in High-Quality Early Years Education",
      "per_outcome": [
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O7",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "government": 10,
            "media": 5,
            "institutional": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-58-reinstate-maintenance-grants-for-disadvantaged-university",
      "party": "Liberal Democrat",
      "policy_title": "Reinstate Maintenance Grants for Disadvantaged University Students",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O7",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "government": 4,
            "institutional": 1,
            "media": 21
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-59-teacher-workforce-strategy-and-independent-pay",
      "party": "Liberal Democrat",
      "policy_title": "Teacher Workforce Strategy and Independent Pay Review Body",
      "per_outcome": [
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O7",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "institutional": 4,
            "media": 9,
            "academic": 1,
            "manifesto": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-60-reform-ofsted-inspections-and-end-single-word",
      "party": "Liberal Democrat",
      "policy_title": "Reform Ofsted Inspections and End Single-Word Judgements",
      "per_outcome": [
        {
          "outcome": "O7",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 1,
            "government": 1,
            "media": 6
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-61-tackle-special-educational-needs-provision-crisis",
      "party": "Liberal Democrat",
      "policy_title": "Tackle Special Educational Needs Provision Crisis",
      "per_outcome": [
        {
          "outcome": "O7",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "government": 2,
            "institutional": 1,
            "media": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-62-universities-duty-of-care-for-students",
      "party": "Liberal Democrat",
      "policy_title": "Universities Duty of Care for Students and Mental Health Charter",
      "per_outcome": [
        {
          "outcome": "O3",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O7",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "government": 4,
            "media": 6,
            "academic": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-63-extend-free-school-meals-to-all",
      "party": "Liberal Democrat",
      "policy_title": "Extend Free School Meals to All Children in Poverty",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O7",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 17,
            "institutional": 2,
            "academic": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-64-cabinet-minister-for-children-and-young",
      "party": "Liberal Democrat",
      "policy_title": "Cabinet Minister for Children and Young People",
      "per_outcome": [
        {
          "outcome": "O14",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O2",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O3",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O7",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "government": 6,
            "media": 23
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-65-overhaul-parental-leave-and-pay",
      "party": "Liberal Democrat",
      "policy_title": "Overhaul Parental Leave and Pay",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 7,
            "institutional": 5,
            "academic": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-66-return-to-erasmus-plus-programme",
      "party": "Liberal Democrat",
      "policy_title": "Return to Erasmus Plus Programme",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O14",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O7",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "government": 7,
            "media": 8,
            "institutional": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-67-childcare-provider-funding-review-and-career",
      "party": "Liberal Democrat",
      "policy_title": "Childcare Provider Funding Review and Career Strategy",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O2",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O7",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "institutional": 1,
            "media": 19,
            "government": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-68-reform-child-maintenance-service",
      "party": "Liberal Democrat",
      "policy_title": "Reform Child Maintenance Service",
      "per_outcome": [
        {
          "outcome": "O2",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 8,
            "government": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-69-tackle-child-poverty-by-removing-two-child",
      "party": "Liberal Democrat",
      "policy_title": "Tackle Child Poverty by Removing Two-Child Limit and Benefit Cap",
      "per_outcome": [
        {
          "outcome": "O1",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "major",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "improves",
          "magnitude": "major",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O7",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 6,
            "government": 4,
            "academic": 5,
            "institutional": 19,
            "media": 12
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-70-end-deep-poverty-target",
      "party": "Liberal Democrat",
      "policy_title": "End Deep Poverty Target",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O2",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "institutional": 10,
            "media": 5,
            "government": 4
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-71-protect-state-pension-triple-lock",
      "party": "Liberal Democrat",
      "policy_title": "Protect State Pension Triple Lock",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "high"
        },
        {
          "outcome": "O14",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O8",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "institutional": 11,
            "media": 9,
            "government": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-72-compensate-1950s-born-women-waspi",
      "party": "Liberal Democrat",
      "policy_title": "Compensate 1950s-Born Women (WASPI)",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "major",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O8",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "government": 6,
            "media": 11
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-73-reform-personal-independence-payment-pip-assessments",
      "party": "Liberal Democrat",
      "policy_title": "Reform Personal Independence Payment (PIP) Assessments",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O2",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 14,
            "institutional": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-74-restore-community-policing-and-investigate-burglaries",
      "party": "Liberal Democrat",
      "policy_title": "Restore Community Policing and Investigate Burglaries",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O15",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "institutional": 2,
            "media": 6
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-75-invest-in-criminal-justice-system-to",
      "party": "Liberal Democrat",
      "policy_title": "Invest in Criminal Justice System to Tackle Backlogs",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "institutional": 1,
            "media": 7,
            "government": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-76-improve-rehabilitation-and-offender-supervision",
      "party": "Liberal Democrat",
      "policy_title": "Improve Rehabilitation and Offender Supervision",
      "per_outcome": [
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O7",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 1,
            "government": 11,
            "media": 5,
            "academic": 2,
            "institutional": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-77-support-survivors-of-violence-against-women",
      "party": "Liberal Democrat",
      "policy_title": "Support Survivors of Violence Against Women and Girls",
      "per_outcome": [
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 14,
            "government": 3,
            "academic": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-78-create-new-online-crime-agency",
      "party": "Liberal Democrat",
      "policy_title": "Create New Online Crime Agency",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 6,
            "government": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-79-scrap-police-and-crime-commissioners-and",
      "party": "Liberal Democrat",
      "policy_title": "Scrap Police and Crime Commissioners and Introduce Police Boards",
      "per_outcome": [
        {
          "outcome": "O5",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "government": 5,
            "media": 6
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-80-hillsborough-law-statutory-duty-of-candour",
      "party": "Liberal Democrat",
      "policy_title": "Hillsborough Law: Statutory Duty of Candour",
      "per_outcome": [
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 8,
            "government": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-81-public-health-approach-to-youth-violence",
      "party": "Liberal Democrat",
      "policy_title": "Public Health Approach to Youth Violence",
      "per_outcome": [
        {
          "outcome": "O15",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O7",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "government": 9,
            "media": 15,
            "academic": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-82-combat-fraud-and-scams",
      "party": "Liberal Democrat",
      "policy_title": "Combat Fraud and Scams",
      "per_outcome": [
        {
          "outcome": "O2",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 7,
            "government": 4
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-83-improve-cooperation-with-europe-on-cross-border",
      "party": "Liberal Democrat",
      "policy_title": "Improve Cooperation with Europe on Cross-Border Crime",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "D1",
          "type": "directional",
          "shift": "toward more controlled",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 13,
            "government": 4
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-84-end-sewage-scandal-public-benefit-water",
      "party": "Liberal Democrat",
      "policy_title": "End Sewage Scandal: Public Benefit Water Companies and Regulator Reform",
      "per_outcome": [
        {
          "outcome": "O2",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 4,
            "government": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-85-meaningful-and-binding-nature-targets-double",
      "party": "Liberal Democrat",
      "policy_title": "Meaningful and Binding Nature Targets ('Double Nature')",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "major",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "government": 8,
            "media": 6
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-86-plant-60-million-trees-a-year",
      "party": "Liberal Democrat",
      "policy_title": "Plant 60 Million Trees a Year",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "government": 8,
            "media": 12
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-87-clean-air-act-and-air-quality",
      "party": "Liberal Democrat",
      "policy_title": "Clean Air Act and Air Quality Agency",
      "per_outcome": [
        {
          "outcome": "O3",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 14,
            "academic": 4
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-88-strengthen-office-for-environmental-protection-and",
      "party": "Liberal Democrat",
      "policy_title": "Strengthen Office for Environmental Protection and Funding for Agencies",
      "per_outcome": [
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-89-sewage-tax-on-water-company-profits",
      "party": "Liberal Democrat",
      "policy_title": "Sewage Tax on Water Company Profits",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O2",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 9,
            "government": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-90-environmental-rights-act",
      "party": "Liberal Democrat",
      "policy_title": "Environmental Rights Act",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "government": 4,
            "media": 8,
            "manifesto": 1,
            "academic": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-91-protect-30-of-land-and-sea",
      "party": "Liberal Democrat",
      "policy_title": "Protect 30% of Land and Sea Areas by 2030 for Nature Recovery",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "media": 4,
            "government": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-92-deposit-return-scheme-and-eliminate-single-use",
      "party": "Liberal Democrat",
      "policy_title": "Deposit Return Scheme and Eliminate Single-Use Plastics",
      "per_outcome": [
        {
          "outcome": "O2",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "government": 4,
            "academic": 2,
            "media": 7
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-93-national-food-strategy",
      "party": "Liberal Democrat",
      "policy_title": "National Food Strategy",
      "per_outcome": [
        {
          "outcome": "O14",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O2",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O3",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 7,
            "government": 2,
            "academic": 5
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-94-accelerate-environmental-land-management-schemes-with",
      "party": "Liberal Democrat",
      "policy_title": "Accelerate Environmental Land Management Schemes with Extra Funding",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O13",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 19,
            "government": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-95-maintain-high-food-standards-in-trade",
      "party": "Liberal Democrat",
      "policy_title": "Maintain High Food Standards in Trade Deals",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "media": 10,
            "academic": 4,
            "institutional": 4,
            "manifesto": 2,
            "government": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-96-strengthen-groceries-code-adjudicator",
      "party": "Liberal Democrat",
      "policy_title": "Strengthen Groceries Code Adjudicator",
      "per_outcome": [
        {
          "outcome": "O2",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "government": 5,
            "media": 3,
            "institutional": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-97-comprehensive-new-animal-welfare-bill",
      "party": "Liberal Democrat",
      "policy_title": "Comprehensive New Animal Welfare Bill",
      "per_outcome": [
        {
          "outcome": "O2",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O3",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 1,
            "media": 6,
            "government": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-98-increase-housing-supply-to-380000-homes",
      "party": "Liberal Democrat",
      "policy_title": "Increase Housing Supply to 380,000 Homes Annually",
      "per_outcome": [
        {
          "outcome": "O1",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O13",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O6",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "government": 6,
            "institutional": 9,
            "media": 15,
            "academic": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ld-99-fair-deal-for-renters-ban-no-fault",
      "party": "Liberal Democrat",
      "policy_title": "Fair Deal for Renters: Ban No-Fault Evictions and National Landlord Register",
      "per_outcome": [
        {
          "outcome": "O1",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O10",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 14,
            "government": 4
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-01-freeze-non-essential-immigration",
      "party": "Reform UK",
      "policy_title": "Freeze non-essential immigration",
      "per_outcome": [
        {
          "outcome": "O1",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O13",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O14",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O3",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O8",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 7,
            "government": 10,
            "media": 17,
            "academic": 3,
            "institutional": 12
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-02-detain-and-deport-illegal-migrants",
      "party": "Reform UK",
      "policy_title": "Detain and deport illegal migrants",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "worsens",
          "magnitude": "major",
          "confidence": "moderate"
        },
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O5",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "worsens",
          "magnitude": "major",
          "confidence": "moderate"
        },
        {
          "outcome": "D1",
          "type": "directional",
          "shift": "toward more controlled",
          "magnitude": "major",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 5,
            "media": 23,
            "academic": 7,
            "government": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-03-impose-an-employer-immigration-tax",
      "party": "Reform UK",
      "policy_title": "Impose an Employer Immigration Tax",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O13",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 5,
            "media": 24,
            "institutional": 8
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-04-restrict-international-student-visas",
      "party": "Reform UK",
      "policy_title": "Restrict international student visas",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O7",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "D1",
          "type": "directional",
          "shift": "toward more controlled",
          "magnitude": "major",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 19,
            "government": 6,
            "academic": 9,
            "institutional": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-05-impose-5-year-residency-and-employment-requirement",
      "party": "Reform UK",
      "policy_title": "Impose 5-year residency and employment requirement for benefits",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O14",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O3",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 6,
            "media": 15,
            "institutional": 3,
            "academic": 8,
            "government": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-06-immediate-deportation-for-foreign-criminals",
      "party": "Reform UK",
      "policy_title": "Immediate deportation for foreign criminals",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "D1",
          "type": "directional",
          "shift": "toward more controlled",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 23,
            "government": 9,
            "academic": 4,
            "institutional": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-07-halt-interest-payments-on-qe-reserves",
      "party": "Reform UK",
      "policy_title": "Halt interest payments on QE reserves",
      "per_outcome": [
        {
          "outcome": "O1",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O12",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O13",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O2",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 14,
            "government": 7,
            "institutional": 4
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-08-mandate-5-departmental-spending-cuts",
      "party": "Reform UK",
      "policy_title": "Mandate 5% departmental spending cuts",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O3",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O7",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 6,
            "institutional": 9,
            "media": 13,
            "government": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-09-cut-foreign-aid-by-50",
      "party": "Reform UK",
      "policy_title": "Cut foreign aid by 50%",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O6",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 3,
            "government": 4,
            "institutional": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-10-improve-hmrc-tax-collection",
      "party": "Reform UK",
      "policy_title": "Improve HMRC tax collection",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O14",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 6,
            "government": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-100-reaffirm-british-sovereignty-and-reject-international",
      "party": "Reform UK",
      "policy_title": "Reaffirm British sovereignty and reject international influence",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O3",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 18,
            "government": 3,
            "academic": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-101-replace-the-2010-equalities-act-and",
      "party": "Reform UK",
      "policy_title": "Replace the 2010 Equalities Act and scrap DE&I rules",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O13",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O14",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "worsens",
          "magnitude": "major",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 5,
            "media": 19,
            "academic": 3,
            "institutional": 2,
            "government": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-102-propose-a-comprehensive-free-speech-bill",
      "party": "Reform UK",
      "policy_title": "Propose a Comprehensive Free Speech Bill",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O15",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "media": 9,
            "government": 3,
            "manifesto": 2,
            "institutional": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-103-evict-foreign-nationals-from-social-housing",
      "party": "Reform UK",
      "policy_title": "Evict foreign nationals from social housing (three-month rule)",
      "per_outcome": [
        {
          "outcome": "O1",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O10",
          "direction": "worsens",
          "magnitude": "major",
          "confidence": "moderate"
        },
        {
          "outcome": "O15",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "D1",
          "type": "directional",
          "shift": "toward more controlled",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 5,
            "academic": 8,
            "media": 11,
            "institutional": 4
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-103-reform-the-bbc-and-scrap-the",
      "party": "Reform UK",
      "policy_title": "Reform the BBC and scrap the TV licence",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O11",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O12",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O14",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O2",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 6,
            "government": 10,
            "media": 11,
            "institutional": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-104-make-st-georges-and-st-davids",
      "party": "Reform UK",
      "policy_title": "Make St George's and St David's Day public holidays",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O15",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "government": 1,
            "academic": 3,
            "media": 6
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-105-launch-an-anti-corruption-unit-for-westminster",
      "party": "Reform UK",
      "policy_title": "Launch an Anti-Corruption Unit for Westminster",
      "per_outcome": [
        {
          "outcome": "O5",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 4
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-11-raise-income-tax-threshold-to-20000",
      "party": "Reform UK",
      "policy_title": "Raise income tax threshold to \u00a320,000",
      "per_outcome": [
        {
          "outcome": "O11",
          "direction": "improves",
          "magnitude": "major",
          "confidence": "moderate"
        },
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "major",
          "confidence": "moderate"
        },
        {
          "outcome": "O14",
          "direction": "worsens",
          "magnitude": "major",
          "confidence": "high"
        },
        {
          "outcome": "O2",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 17,
            "institutional": 5
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-12-cut-energy-taxes",
      "party": "Reform UK",
      "policy_title": "Cut energy taxes",
      "per_outcome": [
        {
          "outcome": "O11",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "major",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O6",
          "direction": "worsens",
          "magnitude": "major",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 24,
            "government": 1,
            "institutional": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-13-cut-residential-stamp-duty",
      "party": "Reform UK",
      "policy_title": "Cut residential stamp duty",
      "per_outcome": [
        {
          "outcome": "O1",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O11",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "major",
          "confidence": "moderate"
        },
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O14",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 5,
            "media": 20,
            "government": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-14-abolish-vat-tourist-tax",
      "party": "Reform UK",
      "policy_title": "Abolish VAT tourist tax",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O13",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "government": 8,
            "media": 11
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-15-abolish-inheritance-tax-for-estates-under",
      "party": "Reform UK",
      "policy_title": "Abolish inheritance tax for estates under \u00a32 million",
      "per_outcome": [
        {
          "outcome": "O11",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "major",
          "confidence": "moderate"
        },
        {
          "outcome": "O14",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 10,
            "government": 3,
            "institutional": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-16-reduce-corporation-tax-and-raise-profit",
      "party": "Reform UK",
      "policy_title": "Reduce Corporation Tax and raise profit threshold",
      "per_outcome": [
        {
          "outcome": "O11",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "major",
          "confidence": "moderate"
        },
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O14",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 5,
            "media": 15,
            "government": 7,
            "institutional": 6
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-17-abolish-ir35-rules",
      "party": "Reform UK",
      "policy_title": "Abolish IR35 rules",
      "per_outcome": [
        {
          "outcome": "O11",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O14",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 5,
            "media": 26,
            "institutional": 8
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-18-abolish-business-rates-for-high-street",
      "party": "Reform UK",
      "policy_title": "Abolish Business Rates for high street SMEs and introduce Online Delivery Tax",
      "per_outcome": [
        {
          "outcome": "O11",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O14",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 6,
            "institutional": 10,
            "media": 17,
            "government": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-19-lift-the-vat-threshold-to-150000",
      "party": "Reform UK",
      "policy_title": "Lift the VAT threshold to \u00a3150,000",
      "per_outcome": [
        {
          "outcome": "O11",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 5,
            "government": 5,
            "media": 15,
            "institutional": 2,
            "academic": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-20-reform-the-planning-system-to-fast-track",
      "party": "Reform UK",
      "policy_title": "Reform the planning system to fast-track housing and infrastructure on brownfield sites",
      "per_outcome": [
        {
          "outcome": "O1",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O13",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O14",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 10,
            "institutional": 5,
            "government": 1,
            "academic": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-21-slash-red-tape-for-businesses",
      "party": "Reform UK",
      "policy_title": "Slash red tape for businesses",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O13",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O14",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 19,
            "government": 3,
            "institutional": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-22-simplify-the-tax-system",
      "party": "Reform UK",
      "policy_title": "Simplify the tax system",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O2",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 4,
            "government": 3,
            "institutional": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-23-address-nhs-doctor-and-nurse-shortages",
      "party": "Reform UK",
      "policy_title": "Address NHS doctor and nurse shortages",
      "per_outcome": [
        {
          "outcome": "O11",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "major",
          "confidence": "moderate"
        },
        {
          "outcome": "O3",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O8",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 5,
            "government": 5,
            "media": 16,
            "institutional": 9,
            "academic": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-24-increase-use-of-independent-healthcare-capacity",
      "party": "Reform UK",
      "policy_title": "Increase use of independent healthcare capacity",
      "per_outcome": [
        {
          "outcome": "O11",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O14",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O3",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 13,
            "government": 2,
            "institutional": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-25-introduce-nhs-voucher-scheme-for-waiting",
      "party": "Reform UK",
      "policy_title": "Introduce NHS voucher scheme for waiting lists",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O14",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O3",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 6,
            "institutional": 5
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-26-improve-nhs-efficiency-and-cut-waste",
      "party": "Reform UK",
      "policy_title": "Improve NHS efficiency and cut waste",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O3",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "institutional": 3,
            "media": 17,
            "academic": 2,
            "government": 4
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-27-reduce-ae-waiting-times-with-pharmacy",
      "party": "Reform UK",
      "policy_title": "Reduce A&E waiting times with 'Pharmacy First' and tax incentives",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O3",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "government": 1,
            "media": 7
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-28-launch-public-inquiry-into-excess-deaths",
      "party": "Reform UK",
      "policy_title": "Launch public inquiry into excess deaths and vaccine harms",
      "per_outcome": [
        {
          "outcome": "O3",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "government": 6,
            "media": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-29-scrap-net-zero-targets-and-related",
      "party": "Reform UK",
      "policy_title": "Scrap Net Zero targets and related subsidies",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O13",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "worsens",
          "magnitude": "major",
          "confidence": "moderate"
        },
        {
          "outcome": "O6",
          "direction": "worsens",
          "magnitude": "major",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 5,
            "media": 21,
            "academic": 1,
            "government": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-30-unlock-north-sea-oil-gas-and",
      "party": "Reform UK",
      "policy_title": "Unlock North Sea oil, gas, and shale reserves",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O6",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 21,
            "academic": 7
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-31-accelerate-development-of-cleaner-energy-technologies",
      "party": "Reform UK",
      "policy_title": "Accelerate development of cleaner energy technologies",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O13",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O2",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O6",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 5,
            "government": 13,
            "media": 10
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-32-increase-police-numbers-by-40000",
      "party": "Reform UK",
      "policy_title": "Increase police numbers by 40,000",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "institutional": 2,
            "media": 8,
            "government": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-33-implement-zero-tolerance-policing",
      "party": "Reform UK",
      "policy_title": "Implement zero-tolerance policing",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O5",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 19,
            "government": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-34-reform-police-leadership-and-recruitment",
      "party": "Reform UK",
      "policy_title": "Reform police leadership and recruitment",
      "per_outcome": [
        {
          "outcome": "O15",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O5",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "government": 6,
            "media": 10,
            "institutional": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-35-increase-police-presence-and-efficiency-on",
      "party": "Reform UK",
      "policy_title": "Increase police presence and efficiency on the beat",
      "per_outcome": [
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 1,
            "government": 2,
            "media": 3,
            "academic": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-36-end-woke-policing-and-reform-police",
      "party": "Reform UK",
      "policy_title": "End 'woke' policing and reform police oversight",
      "per_outcome": [
        {
          "outcome": "O5",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "government": 4,
            "media": 8,
            "academic": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-37-build-10000-new-detention-places-and",
      "party": "Reform UK",
      "policy_title": "Build 10,000 new detention places and expand prison capacity",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "major",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "government": 4,
            "media": 6,
            "institutional": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-38-urgent-sentencing-review-with-automatic-life",
      "party": "Reform UK",
      "policy_title": "Urgent sentencing review with automatic life imprisonment for repeat violent offenders",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 10,
            "government": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-39-increase-criminal-justice-budget-and-reopen",
      "party": "Reform UK",
      "policy_title": "Increase criminal justice budget and reopen magistrates' courts",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "institutional": 3,
            "media": 5
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-40-change-the-definition-of-hate-crime",
      "party": "Reform UK",
      "policy_title": "Change the definition of hate crime",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "government": 6,
            "media": 7
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-41-reform-the-child-maintenance-service",
      "party": "Reform UK",
      "policy_title": "Reform the Child Maintenance Service",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O5",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 17,
            "institutional": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-42-stop-child-grooming-gangs",
      "party": "Reform UK",
      "policy_title": "Stop child grooming gangs",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O15",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "D1",
          "type": "directional",
          "shift": "toward more controlled",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 5,
            "media": 13,
            "academic": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-43-tackle-youth-crime-with-high-intensity",
      "party": "Reform UK",
      "policy_title": "Tackle youth crime with High Intensity Training Camps",
      "per_outcome": [
        {
          "outcome": "O5",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O7",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 11,
            "institutional": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-44-implement-a-patriotic-curriculum",
      "party": "Reform UK",
      "policy_title": "Implement a patriotic curriculum",
      "per_outcome": [
        {
          "outcome": "O15",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O7",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 9,
            "academic": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-45-ban-transgender-ideology-in-schools-and",
      "party": "Reform UK",
      "policy_title": "Ban transgender ideology in schools and mandate single-sex facilities",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O15",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O7",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "media": 13,
            "government": 6,
            "academic": 4,
            "manifesto": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-46-provide-tax-relief-for-independent-education",
      "party": "Reform UK",
      "policy_title": "Provide tax relief for independent education",
      "per_outcome": [
        {
          "outcome": "O11",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O14",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O7",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 7,
            "government": 4,
            "institutional": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-47-reform-student-loans-and-university-admissions",
      "party": "Reform UK",
      "policy_title": "Reform student loans and university admissions",
      "per_outcome": [
        {
          "outcome": "O11",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O12",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O7",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O8",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 5,
            "institutional": 9,
            "government": 10,
            "media": 4
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-48-cut-funding-to-universities-that-undermine",
      "party": "Reform UK",
      "policy_title": "Cut funding to universities that undermine free speech",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O7",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "government": 3,
            "media": 12,
            "academic": 6
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-49-increase-permanent-exclusions-and-double-pupil",
      "party": "Reform UK",
      "policy_title": "Increase permanent exclusions and double Pupil Referral Units",
      "per_outcome": [
        {
          "outcome": "O5",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O7",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 11,
            "academic": 5,
            "government": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-50-introduce-2-year-undergraduate-courses",
      "party": "Reform UK",
      "policy_title": "Introduce 2-year undergraduate courses",
      "per_outcome": [
        {
          "outcome": "O11",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O2",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O7",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 5,
            "media": 14,
            "academic": 1,
            "institutional": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-51-enforce-a-2-strike-rule-for-job",
      "party": "Reform UK",
      "policy_title": "Enforce a 2-strike rule for job offers for benefit claimants",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O12",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O14",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 6,
            "media": 18,
            "academic": 5,
            "government": 7
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-52-require-face-to-face-assessments-for-benefits",
      "party": "Reform UK",
      "policy_title": "Require face-to-face assessments for benefits",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O2",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 9,
            "government": 4,
            "institutional": 4
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-53-motivate-2-million-people-back-to",
      "party": "Reform UK",
      "policy_title": "Motivate 2 million people back to work",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O13",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O14",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O7",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 6,
            "media": 20,
            "government": 8,
            "institutional": 8
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-54-scrap-eu-regulations",
      "party": "Reform UK",
      "policy_title": "Scrap EU regulations",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O14",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O2",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "worsens",
          "magnitude": "major",
          "confidence": "moderate"
        },
        {
          "outcome": "O6",
          "direction": "worsens",
          "magnitude": "major",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 5,
            "government": 5,
            "media": 19
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-55-abandon-the-windsor-framework",
      "party": "Reform UK",
      "policy_title": "Abandon the Windsor Framework",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O15",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O5",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 5,
            "media": 22,
            "institutional": 2,
            "government": 8
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-56-ensure-independence-for-britains-armed-forces",
      "party": "Reform UK",
      "policy_title": "Ensure independence for Britain's Armed Forces from EU programmes",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O5",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "media": 5,
            "government": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-57-prepare-for-renegotiations-on-the-eu",
      "party": "Reform UK",
      "policy_title": "Prepare for renegotiations on the EU Trade and Cooperation Agreement",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O2",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O6",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "institutional": 3,
            "media": 7,
            "government": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-58-increase-defence-spending-to-3-of",
      "party": "Reform UK",
      "policy_title": "Increase defence spending to 3% of GDP",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "institutional": 3,
            "media": 7,
            "government": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-59-introduce-urgent-pay-review-for-armed",
      "party": "Reform UK",
      "policy_title": "Introduce urgent pay review for armed forces",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 9,
            "government": 7,
            "institutional": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-60-introduce-new-armed-forces-justice-bill",
      "party": "Reform UK",
      "policy_title": "Introduce new Armed Forces Justice Bill",
      "per_outcome": [
        {
          "outcome": "O1",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O5",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "government": 6,
            "media": 8
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-61-recruit-30000-for-the-army",
      "party": "Reform UK",
      "policy_title": "Recruit 30,000 for the army",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "major",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 5,
            "government": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-62-regenerate-britains-defence-manufacturing-and-technology",
      "party": "Reform UK",
      "policy_title": "Regenerate Britain's defence manufacturing and technology",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 16,
            "institutional": 2,
            "government": 3,
            "academic": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-63-reform-defence-procurement",
      "party": "Reform UK",
      "policy_title": "Reform defence procurement",
      "per_outcome": [
        {
          "outcome": "O5",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 1,
            "media": 2,
            "institutional": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-64-provide-free-education-for-military-personnel",
      "party": "Reform UK",
      "policy_title": "Provide free education for military personnel",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O7",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "government": 3,
            "media": 11,
            "academic": 3,
            "institutional": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-65-abolish-the-renters-reform-bill",
      "party": "Reform UK",
      "policy_title": "Abolish the Renters' (Reform) Bill",
      "per_outcome": [
        {
          "outcome": "O1",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O11",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O14",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "government": 6,
            "media": 14,
            "institutional": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-66-reform-social-housing-law-to-prioritise",
      "party": "Reform UK",
      "policy_title": "Reform social housing law to prioritise local people",
      "per_outcome": [
        {
          "outcome": "O1",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O15",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "government": 6,
            "media": 13,
            "academic": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-67-protect-leaseholders-and-simplify-lease-extensions",
      "party": "Reform UK",
      "policy_title": "Protect leaseholders and simplify lease extensions",
      "per_outcome": [
        {
          "outcome": "O1",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O13",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "government": 6,
            "media": 6
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-68-incentivise-use-of-new-construction-technology",
      "party": "Reform UK",
      "policy_title": "Incentivise use of new construction technology",
      "per_outcome": [
        {
          "outcome": "O1",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O13",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 9
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-69-support-marriage-through-the-tax-system",
      "party": "Reform UK",
      "policy_title": "Support marriage through the tax system",
      "per_outcome": [
        {
          "outcome": "O11",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O14",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O2",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 5,
            "media": 12,
            "institutional": 4,
            "government": 4
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-70-provide-choice-for-stay-at-home-parents",
      "party": "Reform UK",
      "policy_title": "Provide choice for stay-at-home parents",
      "per_outcome": [
        {
          "outcome": "O2",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O7",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "government": 3,
            "media": 4
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-71-mandate-single-sex-spaces",
      "party": "Reform UK",
      "policy_title": "Mandate single-sex spaces",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 10,
            "academic": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-72-promote-child-friendly-app-restricted-smartphones-and",
      "party": "Reform UK",
      "policy_title": "Promote child-friendly app restricted smartphones and investigate social media harms",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O3",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "government": 2,
            "academic": 1,
            "media": 4
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-73-review-the-online-safety-bill-regarding",
      "party": "Reform UK",
      "policy_title": "Review the Online Safety Bill regarding free speech",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 8
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-74-scrap-hs2",
      "party": "Reform UK",
      "policy_title": "Scrap HS2",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O6",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "institutional": 2,
            "media": 20
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-75-stop-the-war-on-drivers",
      "party": "Reform UK",
      "policy_title": "Stop the 'war on drivers'",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O5",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O6",
          "direction": "worsens",
          "magnitude": "major",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "government": 8,
            "media": 9,
            "institutional": 1,
            "academic": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-76-accelerate-transport-infrastructure-development",
      "party": "Reform UK",
      "policy_title": "Accelerate transport infrastructure development",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O14",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O6",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 5,
            "media": 16,
            "government": 8,
            "academic": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-77-new-ownership-model-for-critical-national",
      "party": "Reform UK",
      "policy_title": "New ownership model for critical national infrastructure",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "major",
          "confidence": "moderate"
        },
        {
          "outcome": "O13",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O14",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O2",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O5",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O8",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 6,
            "media": 22,
            "academic": 5
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-78-streamline-infrastructure-funding-and-abolish-net",
      "party": "Reform UK",
      "policy_title": "Streamline infrastructure funding and abolish Net Zero objectives",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O6",
          "direction": "worsens",
          "magnitude": "major",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "government": 6,
            "institutional": 3,
            "media": 13,
            "academic": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-79-increase-farming-budget-and-focus-on",
      "party": "Reform UK",
      "policy_title": "Increase farming budget and focus on smaller farms",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O15",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O2",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 6,
            "government": 11,
            "media": 8
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-80-scrap-climate-related-farming-subsidies-and-stop",
      "party": "Reform UK",
      "policy_title": "Scrap climate-related farming subsidies and stop Natural England actions damaging farmers",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O6",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 8,
            "institutional": 2,
            "government": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-81-protect-country-sports",
      "party": "Reform UK",
      "policy_title": "Protect country sports",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O6",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 8
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-82-stop-supermarket-price-fixing-and-support",
      "party": "Reform UK",
      "policy_title": "Stop supermarket price fixing and support direct sales for farmers",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O2",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 18,
            "government": 7
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-83-prioritise-buy-british-for-food-security",
      "party": "Reform UK",
      "policy_title": "Prioritise 'Buy British' for food security",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O14",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O2",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O4",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 6,
            "media": 24,
            "government": 8,
            "institutional": 5
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-84-reduce-red-tape-for-farmers",
      "party": "Reform UK",
      "policy_title": "Reduce red tape for farmers",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O13",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 12,
            "government": 1,
            "institutional": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-85-end-automatic-access-for-eu-fishers",
      "party": "Reform UK",
      "policy_title": "End automatic access for EU fishers to UK waters",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 8,
            "government": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-86-expand-royal-navy-overseas-patrol-squadron",
      "party": "Reform UK",
      "policy_title": "Expand Royal Navy Overseas Patrol Squadron and assess dedicated coast guard",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 7,
            "government": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-87-ban-foreign-supertrawlers-from-uk-waters",
      "party": "Reform UK",
      "policy_title": "Ban foreign supertrawlers from UK waters",
      "per_outcome": [
        {
          "outcome": "O4",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O6",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 7
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-88-rebuild-uk-fish-processing-industry",
      "party": "Reform UK",
      "policy_title": "Rebuild UK fish processing industry",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O13",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O14",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 16,
            "government": 7
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-89-revitalise-the-uks-fishing-fleet",
      "party": "Reform UK",
      "policy_title": "Revitalise the UK's fishing fleet",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O15",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O6",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O7",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "government": 4,
            "media": 12,
            "manifesto": 1
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-90-guarantee-sustainable-fish-stocks",
      "party": "Reform UK",
      "policy_title": "Guarantee sustainable fish stocks",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "negligible",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O4",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O6",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "government": 6,
            "media": 6
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-91-commence-royal-commission-of-inquiry-into",
      "party": "Reform UK",
      "policy_title": "Commence Royal Commission of Inquiry into Social Care",
      "per_outcome": [
        {
          "outcome": "O3",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O8",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 5,
            "government": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-92-stop-offshore-tax-avoidance-by-care",
      "party": "Reform UK",
      "policy_title": "Stop offshore tax avoidance by care home providers",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O14",
          "direction": "improves",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O8",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "institutional": 7,
            "media": 6,
            "government": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-93-review-pension-provision",
      "party": "Reform UK",
      "policy_title": "Review pension provision",
      "per_outcome": [
        {
          "outcome": "O13",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        },
        {
          "outcome": "O8",
          "direction": "too-uncertain",
          "magnitude": "n/a",
          "confidence": "low"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 7,
            "institutional": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-94-end-the-mineworkers-pension-scandal",
      "party": "Reform UK",
      "policy_title": "End the Mineworkers Pension Scandal",
      "per_outcome": [
        {
          "outcome": "O12",
          "direction": "worsens",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O8",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "government": 3,
            "media": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-95-leave-the-european-convention-on-human",
      "party": "Reform UK",
      "policy_title": "Leave the European Convention on Human Rights and reform the Human Rights Act",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "worsens",
          "magnitude": "major",
          "confidence": "moderate"
        },
        {
          "outcome": "O5",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        },
        {
          "outcome": "D1",
          "type": "directional",
          "shift": "toward more controlled",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 4,
            "media": 22,
            "academic": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-96-reform-the-house-of-lords-and",
      "party": "Reform UK",
      "policy_title": "Reform the House of Lords and Civil Service leadership",
      "per_outcome": [
        {
          "outcome": "O9",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 1,
            "media": 4,
            "government": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-97-reform-the-postal-voting-system",
      "party": "Reform UK",
      "policy_title": "Reform the postal voting system",
      "per_outcome": [
        {
          "outcome": "O5",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "moderate"
        },
        {
          "outcome": "O9",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 2,
            "media": 7,
            "government": 2
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-98-introduce-proportional-representation-for-the-house",
      "party": "Reform UK",
      "policy_title": "Introduce Proportional Representation for the House of Commons",
      "per_outcome": [
        {
          "outcome": "O15",
          "direction": "mixed",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "improves",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 1,
            "media": 11,
            "academic": 3
          },
          "advocacy_flag": false
        }
      }
    },
    {
      "policy_id": "ref-99-establish-a-british-bill-of-rights",
      "party": "Reform UK",
      "policy_title": "Establish a British Bill of Rights",
      "per_outcome": [
        {
          "outcome": "O10",
          "direction": "mixed",
          "magnitude": "moderate",
          "confidence": "low"
        },
        {
          "outcome": "O5",
          "direction": "negligible",
          "magnitude": "minor",
          "confidence": "low"
        },
        {
          "outcome": "O9",
          "direction": "worsens",
          "magnitude": "moderate",
          "confidence": "moderate"
        }
      ],
      "meta": {
        "source_balance": {
          "by_type": {
            "manifesto": 3,
            "media": 10,
            "government": 2
          },
          "advocacy_flag": false
        }
      }
    }
  ],
  "default_selected": [
    "O2",
    "O3",
    "O1",
    "O5",
    "O11",
    "D1"
  ],
  "picker_groups": [
    {
      "name": "Your money & the economy",
      "ids": [
        "O2",
        "O11",
        "O4",
        "O13",
        "O14",
        "O12"
      ]
    },
    {
      "name": "Health, home & public services",
      "ids": [
        "O3",
        "O1",
        "O7",
        "O8"
      ]
    },
    {
      "name": "Rights, safety & society",
      "ids": [
        "O5",
        "O9",
        "O10",
        "O15",
        "D1"
      ]
    },
    {
      "name": "Environment",
      "ids": [
        "O6"
      ]
    }
  ]
};
