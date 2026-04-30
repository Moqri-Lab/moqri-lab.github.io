# moqri-lab.github.io

Lab website for the Moqri Lab. Built with plain HTML/CSS/JS — no build tools, no frameworks.

🌐 **Live site:** https://moqri-lab.github.io

---

## Setup (first time)

1. Create a new **public** repo in the `moqri-lab` GitHub organization named exactly:
   ```
   moqri-lab.github.io
   ```
2. Push this folder's contents to the `main` branch.
3. Go to **Settings → Pages** and confirm it's set to deploy from `main` / root.
4. The site will be live at https://moqri-lab.github.io in ~1 minute.

---

## Adding yourself (students & postdocs)

Open `_data/people.js` and add a new entry to the `PEOPLE` array:

```js
{
  name: "Your Name",
  role: "PhD Student",          // see options below
  photo: null,                   // or "assets/photos/your-name.jpg"
  bio: "One or two sentences about your research interests.",
  links: {
    website: "https://yoursite.com",    // optional
    github: "https://github.com/you",   // optional
    twitter: "https://twitter.com/you", // optional
    scholar: "https://scholar.google.com/..."  // optional
  }
}
```

**Role options:**
`"Principal Investigator"` · `"Postdoc"` · `"PhD Student"` · `"Master's Student"` · `"Undergraduate"` · `"Visiting Scholar"` · `"Alumni"`

**Photo:** add a square image (300×300 px recommended) to `assets/photos/` and set `photo: "assets/photos/your-name.jpg"`.

---

## Adding a publication

Open `_data/publications.js` and add an entry:

```js
{
  title: "Your Paper Title",
  authors: "Last F, Moqri S",
  venue: "Journal Name, 2025",
  year: 2025,
  links: {
    doi: "https://doi.org/...",
    biorxiv: "https://biorxiv.org/...",
    github: "https://github.com/moqri-lab/...",
    pdf: "assets/papers/yourpaper.pdf"
  }
}
```

Papers are sorted by year, most recent first.

---

## Adding a research area

Open `_data/research.js` and add an entry:

```js
{
  tag: "Category Label",
  title: "Project or Area Title",
  description: "1–3 sentences describing the project.",
  link: "https://optional-link.com"
}
```

---

## File structure

```
moqri-lab.github.io/
├── index.html          ← Home page
├── research.html       ← Research areas
├── people.html         ← Team members
├── publications.html   ← Papers
├── assets/
│   ├── style.css       ← All styles
│   ├── nav.js          ← Active nav highlighting
│   └── photos/         ← Profile photos go here
├── _data/
│   ├── people.js       ← Edit to add/update team members
│   ├── publications.js ← Edit to add papers
│   └── research.js     ← Edit to add research areas
└── README.md           ← This file
```

---

## Editing the home page

Open `index.html` and update:
- The tagline and description in the `<div class="hero">` section
- Department / affiliation text
- The three quick-link descriptions

---

## Questions?

Open an issue or reach out to the lab.
# moqri-lab.github.io
