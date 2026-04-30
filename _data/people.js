// ============================================================
//  PEOPLE DATA  —  _data/people.js
//
//  To add yourself:
//  1. Copy one of the entries below and add it to the array.
//  2. Set your role to one of:
//       "Principal Investigator" | "Postdoc" | "PhD Student" |
//       "Master's Student" | "Undergraduate" | "Visiting Scholar" | "Alumni"
//  3. Photo: add your image to assets/photos/ (square, ~300×300 px)
//     and set photo: "assets/photos/your-name.jpg"
//     OR leave photo: null for initials avatar.
//  4. Links: include only what you have (website, github, twitter, scholar).
// ============================================================

const PEOPLE = [
  {
    name: "Mahdi Moqri",
    role: "Principal Investigator",
    photo: "assets/photos/mahdi-moqri.jpg",             // replace with "assets/photos/mahdi-moqri.jpg"
    bio: "Dr. Mahdi Moqri is a faculty member at Harvard Medical School and an independent investigator at the Division of Genetics as well as the Endocrinology, Diabetes, and Metabolism. His research integrates omics, bioinformatics, and computational methods to uncover the molecular mechanisms of aging and to develop new approaches for early detection and prevention of age-related diseases. Dr. Moqri co-directs the Biomarkers of Aging Consortium (agingconsortium.org), where he leads efforts to develop blood-based biomarkers of aging using large-scale omics datasets and longitudinal biobank resources. He completed his postdoctoral fellowship at Stanford University in the Snyder Lab, and his formal training is in computer science and informatics.",
    links: {
      website: "https://www.moqri.com",
      Linkedin: "https://www.linkedin.com/in/mahdi-moqri/",
      github: "https://github.com/moqri",
      scholar: "https://scholar.google.com/citations?hl=en&user=Lj-0SNIAAAAJ&view_op=list_works&sortby=pubdate"
    }
  },

  // ── Example PhD student entry (remove or replace) ──────────
  // {
  //   name: "Jane Doe",
  //   role: "PhD Student",
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
