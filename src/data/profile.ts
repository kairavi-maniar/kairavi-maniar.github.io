/**
 * PROFILE & SITE SETTINGS
 * ------------------------------------------------------------------
 * Your name, biography, contact details and global switches.
 * Edit the text between quotes; keep the quotes and commas.
 */

export const site = {
  name: 'Kairavi Maniar',
  title: 'Architectural Historian | Researcher | Project Coordinator, EAP1678 Digitization Project',
  /** The same description split into parts (used in the header and footer). */
  titleParts: ['Architectural Historian', 'Researcher', 'Project Coordinator, EAP1678 Digitization Project'],
  location: 'Pune, India',
  url: 'https://kairavi-maniar.github.io',
  description:
    'Kairavi Maniar is an architectural historian and researcher working on construction history, colonial public works, architectural archives, and digital heritage in India.',

  /**
   * Editorial notes (dashed boxes marked "To confirm") flag information
   * that still needs checking. Set to `false` before the final launch to
   * hide them from visitors. Image placeholders remain until images are added.
   */
  showEditorialNotes: false,
};

/**
 * CONTACT
 * Leave a value as '' (empty) to hide it everywhere on the site —
 * no empty or broken links are ever shown.
 * Telephone numbers are intentionally NOT stored here; add one only if you
 * want it public, and set `showPhone: true`.
 */
export const contact = {
  // Confirmed for public display (Nov 2026).
  email: 'kairavimaniar24@gmail.com',
  showEmail: true,
  phone: '',
  showPhone: false,
  linkedin: '', // e.g. 'https://www.linkedin.com/in/your-handle'
  googleScholar: '', // e.g. 'https://scholar.google.com/citations?user=XXXX'
  orcid: '', // e.g. 'https://orcid.org/0000-0000-0000-0000'
  academia: '', // optional, e.g. Academia.edu profile
  github: 'https://github.com/kairavi-maniar',
  /** Relevant project websites, e.g. the EAP1678 page on the British Library site. */
  projectLinks: [
    // { label: 'EAP1678 — British Library Endangered Archives Programme', url: 'https://eap.bl.uk/project/EAP1678' },
  ] as { label: string; url: string }[],
};

/**
 * CV download. The button appears automatically once a file exists at
 * public/documents/CV_Kairavi.pdf (upload a version WITHOUT phone numbers).
 */
export const cv = {
  pdf: '/documents/CV_Kairavi.pdf',
  showDownload: true,
};

/** HOME PAGE HERO */
export const hero = {
  heading: 'Tracing the histories of buildings, construction, and the archives that preserve them.',
  paragraph:
    'I am an architectural historian and researcher interested in construction history, colonial public works, architectural archives, and digital heritage. My work explores the material, institutional, and documentary dimensions of architectural production in India.',
  image: {
    src: 'architecture/hero-drawing.jpg',
    alt: 'Historical architectural drawing from the Poona Public Works Department records',
    caption: 'Hero image — a historical architectural drawing or archival photograph',
    credit: 'Credit line to be added',
    orientation: 'portrait' as const,
  },
};

/** Portrait (optional). Add src/assets/images/profile/portrait.jpg to show it on the About page. */
export const portrait = {
  src: 'profile/portrait.jpg',
  alt: 'Kairavi Maniar speaking at a CEPT University lectern',
  caption: 'Speaking at CEPT University',
  orientation: 'portrait' as const,
};

/** RESEARCH PROFILE — used on Home, About and the CV. */
export const researchProfile = {
  /** The single paragraph from the CV (used on the CV page). */
  cvSummary:
    'Architectural historian and researcher working at the intersection of architectural archives, colonial construction cultures, Public Works Department records, and the material histories of the built environment in India. My research interests focus on construction history, archival methodologies, and mapping-based approaches to studying architectural production in late nineteenth- and early twentieth-century British India.',
  /** The longer profile (used on the About page). */
  paragraphs: [
    'I am an architectural historian and researcher working at the intersection of architectural archives, colonial construction cultures, Public Works Department records, and the material histories of the built environment in India.',
    'My research interests focus on construction history, archival methodologies, and mapping-based approaches to studying architectural production in late nineteenth- and early twentieth-century British India.',
    'My work brings together historical research, archival documentation, architectural analysis, digitisation, metadata development, and spatial visualisation. I am particularly interested in understanding how buildings were produced, documented, administered, and preserved, and how archival records help us reconstruct the histories of architectural and construction practices.',
  ],
  /** Short introduction for the home page. */
  short:
    'Trained as an architect at SEDA, Navrachna University, and as an architectural historian at CEPT University, I work with Public Works Department records, architectural drawings, and institutional archives to study how buildings in British India were produced, administered, and documented — and how such records are themselves preserved and made accessible today.',
};

/**
 * RESEARCH PHILOSOPHY (About page) — DRAFT.
 * Written only from the research interests stated in the profile above.
 * Please rewrite in your own words.
 */
export const philosophy = {
  isDraft: true,
  paragraphs: [
    'A building is rarely documented only as a finished object. It also appears in estimates, specifications, drawings, correspondence, and administrative files — records produced by the institutions that commissioned, built, and maintained it.',
    'My work moves between these registers: the architectural object, the construction processes that produced it, the documentary evidence that records it, and the institutional histories that shaped both the building and its archive. Reading them together makes it possible to ask how architecture was produced and administered, and who and what the records include or leave out.',
  ],
};

/** WORKING METHODS (About page). */
export const methods: { title: string; detail: string }[] = [
  { title: 'Archival research', detail: 'Locating, reading, and contextualising institutional records, especially Public Works Department collections.' },
  { title: 'Historical document analysis', detail: 'Reading reports, project files, specifications, and administrative correspondence as historical evidence.' },
  { title: 'Architectural drawing analysis', detail: 'Studying historical plans, sections, and elevations as records of design and construction.' },
  { title: 'Field documentation', detail: 'Recording buildings, sites, and archival spaces through photography and on-site documentation.' },
  { title: 'Digitisation', detail: 'Capturing drawings, books, journals, and files using scanning and camera-based methods.' },
  { title: 'Metadata and cataloguing', detail: 'Developing structured descriptions — including Dublin Core mapping — for archival discovery.' },
  { title: 'Digital preservation', detail: 'File organisation, checksum verification, and long-term storage of digital surrogates.' },
  { title: 'GIS and mapping', detail: 'Using QGIS and historical maps to locate and spatially interpret archival material.' },
  { title: 'Exhibition curation', detail: 'Translating archival research into public exhibitions with institutional partners.' },
  { title: 'Academic writing and teaching', detail: 'Conference papers, research writing, studio teaching, and research guidance.' },
];
