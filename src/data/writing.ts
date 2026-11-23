import type { WritingItem, WritingType } from './types';

/**
 * WRITING, PUBLICATIONS & PRESENTATIONS
 * ------------------------------------------------------------------
 * type: 'presentation'  → Conference Presentations
 *       'writing'       → Research Writing
 *       'contribution'  → Publications and Contributions
 *       'ongoing'       → Ongoing Papers
 * To add an item, copy one block, give it a new unique `id`, and edit.
 */
export const writing: WritingItem[] = [
  {
    id: 'hidden-figures-eahn-2025',
    type: 'presentation',
    title:
      'Hidden Figures in the Archives: Reconstructing Subaltern Agency and Operational Practices in the Public Works Colonial and Post-Colonial Pune',
    event: 'EAHN Thematic Conference: Microhistories of Architecture',
    venue: 'ETH Zurich',
    date: '12–15 June 2025',
    sortDate: '2025-06-12',
    format: 'In-person',
    status: 'Invited presentation',
    description:
      'The presentation examined archival traces, subaltern agency, and operational practices within Public Works contexts in colonial and post-colonial Pune.',
    themes: ['archives-and-archival-habitats', 'construction-history-and-colonial-public-works'],
    projects: ['beyond-the-archives-walls', 'poona-pwd-records-eap1678'],
  },
  {
    id: 'economization-patio-2024',
    type: 'presentation',
    title:
      'The Birth of Economization in the Public Works Department of Colonial India: A Study on Economic Dimensions in Provincial Civil Works in Nineteenth Century',
    event: 'PATIO: Platform for Architectural Transfers in the Indian Ocean Rim',
    theme: 'Institutions: Colonial and Postcolonial',
    date: '11 July 2024',
    sortDate: '2024-07-11',
    format: 'Virtual',
    status: 'Invited presentation',
    description:
      'The presentation focused on the emergence of economic frameworks within the Public Works Department and their influence on provincial civil works in nineteenth-century colonial India.',
    themes: ['construction-history-and-colonial-public-works'],
  },
  {
    id: 'epistle-2024-facade-aesthetics',
    type: 'writing',
    title: 'Facade Aesthetics over Material Authenticity: Decoding Pastiche in Modern India Bureaucratic Structures',
    author: 'Kairavi Maniar',
    event: 'Epistle Writing Prize 2024',
    date: 'July 2024',
    sortDate: '2024-07-01',
    status: 'Shortlisted in Category 2',
    description: 'Essay shortlisted in Category 2 of the Epistle Writing Prize 2024.',
    themes: ['materials-technology-and-modernisation'],
  },
  {
    id: 'junagadh-thesis-2020',
    type: 'writing',
    title: 'Understanding Gateways as an Urban Artefact: Taking the Case Study of Medieval Fortified City Junagadh',
    author: 'Kairavi Maniar',
    event: 'Undergraduate B.Arch. Thesis',
    venue: 'School of Environmental Design and Architecture (SEDA), Navrachna University',
    date: '2020',
    sortDate: '2020-06-01',
    status: 'Unpublished undergraduate B.Arch. thesis',
    description: 'Maniar, Kairavi. Understanding Gateways as an Urban Artefact: Taking the Case Study of Medieval Fortified City Junagadh. Undergraduate B.Arch. thesis, unpublished, 2020.',
    notes: ['Details about Junagadh gates from this thesis were later used in an essay by John Wainer (see Publications and Contributions).'],
    themes: [],
  },
  {
    id: 'wainer-girinagar-contribution',
    type: 'contribution',
    title: '“Some Important Features of Junagadh City”',
    author: 'John Wainer',
    event: 'In Girinagar: Junagadh and Mount Girnar — One of the Most Ancient and Sacred Sites of India (Kindle edition)',
    date: '',
    sortDate: '2020-06-02',
    status: 'Contribution of thesis material to another author’s essay',
    description:
      'Details about Junagadh gates from my undergraduate thesis were published in John Wainer’s essay “Some Important Features of Junagadh City.”',
    notes: [
      'The essay is authored by John Wainer. My contribution is the documentation of Junagadh gates from my B.Arch. thesis (2020), on which the published details draw.',
    ],
    themes: [],
  },
  {
    id: 'chs-cambridge-2026',
    type: 'ongoing',
    title: 'Paper for the 12th Construction History Society Conference',
    event: '12th Construction History Society Conference',
    venue: 'Queens’ College, Cambridge',
    date: '25–26 September 2026 (dates as listed in the CV)',
    sortDate: '2026-09-25',
    status: 'Abstract conditionally accepted; full paper submission under review (as recorded in the CV)',
    description:
      'The abstract was conditionally accepted, and the full paper submission was under review at the time the CV was prepared.',
    themes: ['construction-history-and-colonial-public-works'],
    image: {
      src: 'research/chs-cambridge-2026.jpg',
      alt: 'A speaker at a Queens’ College lectern on a dark stage, beneath a projected slide of a handwritten Comparative Statement from the Poona PWD Archives, beside a Construction History Society banner',
      caption: '12th Construction History Society Conference, Queens’ College, Cambridge',
      orientation: 'landscape',
    },
    needsConfirmation:
      'These conference dates are now in the past. Please confirm the paper title, whether the paper was presented, and any publication status before this entry is published. Until confirmed, it is not described as presented or published.',
  },
];

export const writingTypes: { id: WritingType; label: string }[] = [
  { id: 'presentation', label: 'Conference Presentations' },
  { id: 'writing', label: 'Research Writing' },
  { id: 'contribution', label: 'Publications and Contributions' },
  { id: 'ongoing', label: 'Ongoing Papers' },
];
