/**
 * ONLINE CV
 * ------------------------------------------------------------------
 * The online CV (/cv/) is assembled from the other data files, so an
 * update to experience.ts, writing.ts, exhibitions.ts, etc. appears on the
 * CV automatically. To change the CV *only* (without changing the rest of
 * the site), edit the sections below — e.g. replace `items: ...` with your
 * own list of { title, sub, date, place, desc } entries.
 *
 * The downloadable PDF is separate: replace public/documents/CV_Kairavi.pdf.
 */
import { researchProfile } from './profile';
import { education } from './education';
import { experience } from './experience';
import { achievements } from './achievements';
import { writing } from './writing';
import { exhibitions } from './exhibitions';

export interface CvItem {
  title: string;
  sub?: string;
  date?: string;
  place?: string;
  desc?: string;
  flag?: string;
}
export interface CvSection {
  id: string;
  title: string;
  text?: string;
  items?: CvItem[];
}

const presentations = writing.filter((w) => w.type === 'presentation').sort((a, b) => b.sortDate.localeCompare(a.sortDate));
const upcoming = writing.filter((w) => w.type === 'ongoing');

export const cvSections: CvSection[] = [
  { id: 'profile', title: 'Research Profile', text: researchProfile.cvSummary },
  {
    id: 'education',
    title: 'Education',
    items: education.map((e) => ({ title: e.degree, sub: e.institution, date: e.dates, place: e.place })),
  },
  {
    id: 'experience',
    title: 'Professional Experience',
    items: experience.map((e) => ({ title: e.role, sub: e.organisation, date: e.dates, place: e.place, desc: e.description })),
  },
  {
    id: 'academic-achievements',
    title: 'Academic Achievements',
    items: achievements.filter((a) => a.group === 'academic').map((a) => ({ title: a.title, desc: a.detail })),
  },
  {
    id: 'presentations',
    title: 'Invited Presentations',
    items: presentations.map((w) => ({
      title: w.event ?? '',
      sub: w.theme ?? w.venue,
      date: w.date,
      place: w.format,
      desc: `Presented “${w.title}.” ${w.description}`,
    })),
  },
  {
    id: 'curatorial',
    title: 'Curatorial Experience',
    items: [...exhibitions]
      .sort((a, b) => a.sortDate.localeCompare(b.sortDate))
      .map((e) => ({ title: e.title, sub: e.role, date: e.dates, place: e.place, desc: e.overview })),
  },
  {
    id: 'other-achievements',
    title: 'Other Achievements',
    items: achievements.filter((a) => a.group === 'other').map((a) => ({ title: a.title, date: a.date, desc: a.detail })),
  },
  {
    id: 'upcoming',
    title: 'Upcoming or Recent Presentations',
    items: upcoming.map((w) => ({
      title: w.event ?? w.title,
      sub: w.venue,
      date: w.date,
      desc: w.description,
      flag: w.needsConfirmation,
    })),
  },
  {
    id: 'development',
    title: 'Professional Development',
    items: achievements.filter((a) => a.group === 'development').map((a) => ({ title: a.title, date: a.date, desc: a.detail })),
  },
  {
    id: 'contributions',
    title: 'Research Contribution',
    items: [
      {
        title: 'Undergraduate B.Arch. Thesis, Unpublished',
        date: '2020',
        desc: 'Maniar, Kairavi. Understanding Gateways as an Urban Artefact: Taking the Case Study of Medieval Fortified City Junagadh.',
      },
      {
        title: 'Contribution to John Wainer’s essay',
        desc: 'Details about Junagadh gates from the undergraduate thesis were published in John Wainer’s essay, “Some Important Features of Junagadh City,” in Girinagar: Junagadh and Mount Girnar - One of the Most Ancient and Sacred Sites of India, Kindle edition.',
      },
    ],
  },
];
