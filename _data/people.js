// ============================================================
//  PEOPLE DATA  —  _data/people.js
//
//  To add yourself:
//  1. Copy one of the entries below and add it to the array.
//  2. Set your role to one of:
//       "Principal Investigator" | "Postdoc" | "Gradute Student" | "Visiting Scholar" |
//       "Master's Student" | "Undergraduate" | "Visiting Scholar" | "Alumni"
//  3. Photo: add your image to assets/photos/ (square, ~300×300 px)
//     and set photo: "assets/photos/your-name.jpg"
//     OR leave photo: null for initials avatar.
//  4. Links: include only what you have (website, github, twitter, scholar).
// ============================================================

const PEOPLE = [
  {
    name: "Mahdi Moqri, PhD, MBA",
    role: "Principal Investigator",
    photo: "assets/photos/mahdi-moqri.jpg",
    email: "mmoqri@bwh.harvard.edu",
    bio: "Dr. Mahdi Moqri is a Harvard Medical School faculty member who researches the molecular mechanisms of aging using computational and omics approaches. He focuses on developing blood-based biomarkers for early detection of age-related diseases and co-directs the Biomarkers of Aging Consortium. He trained in computer science and informatics, and completed his postdoc at Stanford's Snyder Lab.",
    links: {
      website: "https://www.moqri.com",
      linkedin: "https://www.linkedin.com/in/mahdi-moqri/",
      github: "https://github.com/moqri",
      scholar: "https://scholar.google.com/citations?hl=en&user=Lj-0SNIAAAAJ"
    }
  },

  {
    name: "Mohammad Fili, PhD",
    role: "Postdoc",
    photo: "assets/photos/mohammad-fili.jpg",
    email: "mfili@bwh.harvard.edu",
    bio: "Dr. Mohammad Fili is a researcher in healthcare data analytics, with a focus on aging, cognition, and neurodegenerative diseases. His work lies at the intersection of clinical data science, artificial intelligence, machine learning, statistical and mathematical modeling, and optimization. His research uses large-scale electronic health records and biobank data to study disease progression, predict aging-related outcomes, and identify risk factors associated with cognitive aging and neurodegeneration. He develops and applies computational and machine-learning methods to generate clinically meaningful insights that support data-driven approaches to neurological and cognitive health.",
    links: {
      linkedin: "https://www.linkedin.com/in/mohammadfili/",
      github: "https://github.com/m-fili",
      scholar: "https://scholar.google.com/citations?user=CcxTlXcAAAAJ&hl=en&inst=7575085548378563675"
    }
  },

  {
    name: "Yinjie Wu",
    role: "Gradute Student",
    photo: "assets/photos/yinjie-wu.png",
    email: "yinjiewu@hsph.harvard.edu",
    bio: "Yinjie Wu is a computational biology and quantitative genetics student at Harvard T.H. Chan School of Public Health. He trained in computer science and biology at McGill University before beginning his graduate work at Harvard. His current work uses large-scale omics and population datasets to study biological aging, with a focus on epigenetic biomarkers, long-read sequencing, and computational approaches for interpreting age-related molecular change.",
    links: {
      linkedin: "https://www.linkedin.com/in/yinjie-wu-752b85322/"
    }
  },

  {
    name: "Robbe Neirynck, MSc",
    role: "Visiting Scholar",
    photo: "assets/photos/robbe-neirynck.jpg",
    email: "Robbe.Neirynck@UGent.be",
    bio: "Robbe Neirynck, MSc, is a bioscience engineer trained in bioinformatics and biostatistics at Ghent University, Belgium. As a PhD researcher, he combines large-scale omics and population datasets with computational and statistical methods to investigate markers of biological aging. His work aims to support non-invasive, dynamic monitoring of organ health and improve early prediction of chronic and age-related disease risk. He currently focuses mainly on blood-based proteomic models.",
    links: {
      linkedin: "https://www.linkedin.com/in/robbeneirynck1/",
      github: "https://github.com/RobbeNeirynck",
      scholar: "https://scholar.google.com/citations?user=RQweptoAAAAJ&hl=en"
    }
  }

  // ── Example PhD student entry (remove or replace) ──────────
  // {
  //   name: "Jane Doe",
  //   role: "Graduate Student",
  //   photo: null,
  //   bio: "Interested in aging clocks and multi-omics integration.",
  //   links: {
  //     website: "https://janedoe.com",
  //     github: "https://github.com/janedoe",
  //     twitter: "https://twitter.com/janedoe",
  //     scholar: "#"
  //   }
  // },
];
