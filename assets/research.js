// ============================================================
//  RESEARCH DATA  —  _data/research.js
//
//  To add a research area or project:
//  1. Copy an entry and fill in the fields.
//  2. tag: short label shown in the badge (e.g. "Computational Biology")
//  3. title: project or area name
//  4. description: 1–3 sentence summary
//  5. link (optional): URL to a paper, repo, or project page
// ============================================================

const RESEARCH = [
  // ── Example entry (remove or replace) ─────────────────────
  // {
  //   tag: "Aging Biology",
  //   title: "Biological Age Clocks",
  //   description: "We develop multi-omics aging clocks that integrate epigenomic, transcriptomic, and proteomic data to measure biological age with high resolution.",
  //   link: null
  // },
  {
    tag: "Biomarkers of Aging",
    title: "Biomarkers of Aging",
    description:'Moqri Lab is a founding member of the <a href="https://www.agingconsortium.org/" target="_blank">Biomarkers of Aging Consortium</a>, establishing reliable biomarkers of aging for longevity interventions.',
    link: null,
      funding: [
    { name: "Proactive Solutions for Prolonging Resilience (PROSPR)", link: "https://arpa-h.gov/explore-funding/programs/prospr" },
    { name: "Finding Aging biomarkers by Searching existing Trials (FAST)", link: "https://www.afar.org/fast-initiativem" }
  ]
  },
  {
    tag: "Biomarkers of Alzheimer's",
    title: "Biomarkers of Alzheimer's",
    description:
      'Moqri Lab build and validate blood-based multi-omic biomarkers for <a href="https://www.agingconsortium.org/brain-aging" target="_blank">Brain Aging</a> and early detection of Alzheimer\'s.',
    link: null,
      funding: [
    { name: "Proteogenomic Biomarkers for Early Detection of Alzheimer’s Disease", link: "https://curealz.org/research/foundational/biomarkers-diagnostics-studies-of-risk-resilience/proteogenomic-biomarkers-for-early-detection-of-alzheimers-disease/" }
  ]
  },
  {
    tag: "AI for Patient Outcomes",
    title: "AI for Patient Outcomes",
    description:
      'Moqri Lab is using large-scale Electronic Health Records (EHR) data and multi-omics data from <a href="https://www.massgeneralbrigham.org/en/research-and-innovation/participate-in-research/biobank/for-researchers" target="_blank">MGB Biobank</a> to predict patient outcomes and prevent functional decline.',
    link: null,
      funding: [
    { name: "MATCH: Advanced Machine Learning AlgoriThm for Compatible Human Leukocyte Antigen", link: "https://arpa-h.gov/explore-funding/awards/4241" }
  ]
  }
];


