/**
 * Shared shapes for every content file in /src/data.
 * You normally never need to edit this file — it simply describes
 * which fields each kind of entry may have.
 */

/**
 * An image (photograph, drawing, map, scan…).
 *
 * `src` is the file path *inside* `src/assets/images/`,
 * e.g. 'eap1678/digitisation-workstation.jpg'.
 * If that file does not exist yet, the site shows a neutral, labelled
 * placeholder telling you exactly where to put it. Drop the file in with
 * that name and it appears automatically (resized and optimised).
 */
export interface ImageItem {
  src: string;
  /** Describes the image for screen-reader users. */
  alt: string;
  /** Visible caption. */
  caption: string;
  /** Copyright / credit line, e.g. 'Courtesy Pune PWD Archives'. */
  credit?: string;
  /** Archival reference / accession number shown in monospace. */
  ref?: string;
  /** Helps the placeholder take a sensible shape. */
  orientation?: 'landscape' | 'portrait' | 'square';
}

export interface LinkItem {
  label: string;
  url: string;
}

/** A flexible section inside a project case study. */
export interface ProjectSection {
  id: string;
  number?: string;
  title: string;
  body?: string[];
  list?: string[];
  /** Two-column label/value list (e.g. technical details). */
  fields?: { label: string; value: string }[];
  /** Numbered steps; rendered as an interactive workflow diagram. */
  workflow?: { title: string; detail: string }[];
  /** Simple chain diagram (e.g. slide → image → record → building → map). */
  chain?: { title: string; detail: string }[];
  /** Statistic tiles. */
  stats?: { value: string; label: string }[];
  /** Illustrative record (metadata template) rendered as a catalogue card. */
  record?: { label: string; value: string }[];
  /** Map placeholder text — shown until a real dataset is supplied. */
  mapNote?: string;
  gallery?: ImageItem[];
  /** Editorial note (visible only while `showEditorialNotes` is true in site.ts). */
  note?: string;
}

export interface Project {
  slug: string;
  number: string;
  title: string;
  subtitle?: string;
  shortTitle: string;
  categories: string[];
  /** Slugs of related research themes (see research.ts). */
  themes: string[];
  duration: string;
  institutions: string[];
  role: string;
  reference?: string;
  summary: string;
  cover: ImageItem;
  context: string[];
  questions: string[];
  methodology: string[];
  roleDetail: string[];
  outcomes: string[];
  sections: ProjectSection[];
  gallery: ImageItem[];
  /** IDs from writing.ts */
  relatedWriting: string[];
  /** IDs from exhibitions.ts */
  relatedExhibitions?: string[];
  links?: LinkItem[];
  /** Items still to be confirmed — shown as editorial notes. */
  todo: string[];
  featured?: boolean;
}

export interface ResearchTheme {
  slug: string;
  number: string;
  title: string;
  short: string;
  essay: string[];
  topics: string[];
  questions: string[];
  relatedProjects: string[];
  relatedWriting: string[];
  relatedExhibitions?: string[];
  materials: string[];
  gallery: ImageItem[];
}

export type ExperienceKind = 'practice' | 'teaching' | 'research' | 'coordination' | 'guidance';

export interface Experience {
  id: string;
  role: string;
  organisation: string;
  place: string;
  /** For sorting: YYYY-MM */
  start: string;
  end?: string;
  /** Exactly as it should appear, e.g. 'Jan. 2026 – Present' */
  dates: string;
  description: string;
  kind: ExperienceKind;
  /** Timeline phase id (see timeline.ts). */
  phase: string;
  /** Optional project slug for cross-linking. */
  project?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  place: string;
  dates: string;
  start: string;
  phase: string;
}

export type WritingType = 'presentation' | 'writing' | 'contribution' | 'ongoing';

export interface WritingItem {
  id: string;
  type: WritingType;
  title: string;
  /** Who wrote it (use to distinguish other authors' work). */
  author?: string;
  event?: string;
  theme?: string;
  venue?: string;
  date: string;
  /** For sorting: YYYY-MM-DD */
  sortDate: string;
  format?: string;
  status?: string;
  description: string;
  /** Extra explanatory lines. */
  notes?: string[];
  /** Slugs of research themes. */
  themes: string[];
  projects?: string[];
  links?: LinkItem[];
  /** Must be confirmed before publishing — shown as an editorial flag. */
  needsConfirmation?: string;
}

export interface Exhibition {
  id: string;
  number: string;
  title: string;
  dates: string;
  sortDate: string;
  place: string;
  role: string;
  collaborators: string[];
  context?: string;
  overview: string;
  cover: ImageItem;
  gallery: ImageItem[];
  /** Spaces reserved for future documentation. */
  documentation: string[];
  themes: string[];
}

export interface Achievement {
  id: string;
  title: string;
  date: string;
  detail: string;
  group: 'academic' | 'other' | 'development';
  institution?: string;
}
