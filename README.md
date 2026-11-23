# Kairavi Maniar — Portfolio

Personal academic portfolio of Kairavi Maniar, architectural historian and researcher.
Live at **https://kairavi-maniar.github.io**.

Built with [Astro](https://astro.build) as a static site. No tracking, no analytics, no advertising.

---

## How the site is organised

All **content** lives in `src/data/`. Pages and components only display that content,
so you rarely need to touch anything else.

| File | What it holds |
| --- | --- |
| `src/data/profile.ts` | Name, biography, hero text, research philosophy, methods, **contact links**, CV PDF setting, editorial-notes switch |
| `src/data/education.ts` | Degrees |
| `src/data/experience.ts` | Professional experience (also feeds the timeline, Teaching page, and CV) |
| `src/data/timeline.ts` | The four phases of the About-page timeline |
| `src/data/research.ts` | The five research themes |
| `src/data/projects.ts` | The six projects / case studies and the project categories |
| `src/data/writing.ts` | Presentations, research writing, contributions, ongoing papers |
| `src/data/exhibitions.ts` | Exhibitions and curatorial work |
| `src/data/achievements.ts` | Awards, other achievements, professional development |
| `src/data/cv.ts` | How the online CV is assembled (edit here to change the CV only) |
| `src/data/navigation.ts` | Main menu labels and order |
| `src/assets/images/…` | All images (photographs, drawings, maps, scans) |
| `public/documents/CV_Kairavi.pdf` | Downloadable CV |

Image checklist: see [IMAGES.md](IMAGES.md).

Pages: Home · About · Research (+ one page per theme) · Projects (+ one page per project) ·
Writing & Presentations · Exhibitions · Teaching · Achievements · CV · Contact · Search.

---

## Editing content — quick guide

Edit files directly on GitHub (open the file → pencil icon → **Commit changes**). The site
rebuilds and goes live automatically in about two minutes. Keep the quotes `'…'` and commas.

### Change the biography
`src/data/profile.ts` → `researchProfile` (profile text), `hero` (home-page heading),
`philosophy` (research philosophy — currently a draft; set `isDraft: false` once rewritten).

### Add images and captions
1. Each image slot shows a hatched placeholder with a path, for example
   `src/assets/images/eap1678/scanner-01.jpg`.
2. Upload a file with **exactly that name** into that folder (on GitHub: open the folder →
   **Add file → Upload files**). JPG, PNG or WebP. Large files are fine; the site resizes them.
3. Edit the caption, credit and alt text in the data file where that `src` appears
   (e.g. `projects.ts`). `alt` describes the image for screen-reader users; `credit` is the
   copyright line; `ref` is an archival reference number.

Images are never cropped: drawings and documents keep their full proportions and open in a
full-screen viewer (arrow keys to browse, Esc to close).

### Add a new project
1. Open `src/data/projects.ts`, copy a whole project block `{ … },`, paste it into the list.
2. Change `slug` (lowercase-with-hyphens; it becomes the URL `/projects/<slug>/`), `number`,
   titles, text, and `categories` (choose from `projectCategories` at the top).
3. Link it to research themes with `themes: ['archives-and-archival-habitats', …]`.
4. Add its images to `src/assets/images/<folder>/` using the names in its `src` fields.
   The project appears on the Projects page, in search, and on related theme pages automatically.

### Add a research theme
Copy a block in `src/data/research.ts`, give it a new `slug` and `number`, and list related
projects (`relatedProjects`) and writing (`relatedWriting`) by their ids.

### Add a conference presentation or publication
Copy a block in `src/data/writing.ts` and set `type`:
`'presentation'`, `'writing'`, `'contribution'` or `'ongoing'`. Give it a unique `id`.
It appears on the Writing page (with filters), in search, and on the CV (presentations).

### Update the CV
- **Online CV**: it is built from the data files, so updating `experience.ts`, `writing.ts`,
  etc. updates the CV too. To change the CV alone, edit `src/data/cv.ts`.
- **PDF**: upload the CV as `public/documents/CV_Kairavi.pdf` (exact name). The **Download CV PDF**
  button appears automatically once the file exists. Use a version **without phone numbers** —
  everything in this repository is public. To hide the button anyway, set `cv.showDownload: false`
  in `profile.ts`. To update it later, upload a new file with the same name.

### Contact links
`src/data/profile.ts` → `contact`. Paste full URLs for LinkedIn, Google Scholar and ORCID.
Empty values are hidden everywhere — no broken links appear. Telephone numbers are not shown
unless you add one and set `showPhone: true`.

### Editorial notes ("To confirm" boxes)
Dashed boxes flag information that needs checking. When everything is confirmed, set
`showEditorialNotes: false` in `src/data/profile.ts` to hide them all.

---

## Running locally

Requires Node.js 22.23 or later (24 recommended).

```bash
npm install
npm run dev        # live preview at http://localhost:4321
npm run build      # production build into dist/
npm run preview    # preview the production build
```

## Deployment (GitHub Pages)

The site deploys automatically from the `main` branch via `.github/workflows/deploy.yml`.

One-time setup: repository **Settings → Pages → Build and deployment → Source: GitHub Actions**.
The repository must be named `kairavi-maniar.github.io` for the site to be served at the
root URL. (If you ever use a different repository name, set `base: '/<repo-name>'` in
`astro.config.mjs`.)

Each push to `main` triggers a build; progress is visible under the repository's **Actions** tab.

## Themes

**Archive Mode** (light, default) and **Reading Room Mode** (dark). The toggle is in the header;
the visitor's choice is remembered between pages. Colours are defined as tokens at the top of
`src/styles/global.css`. Small text uses slightly darker variants of terracotta (`#8E4E3A`) and
olive (`#5C604A`) than the brief's swatches so that it meets WCAG AA contrast on ivory.
