import type { Achievement } from './types';

/**
 * ACHIEVEMENTS & PROFESSIONAL DEVELOPMENT
 * group: 'academic' | 'other' | 'development'
 * Wording follows the CV exactly.
 */
export const achievements: Achievement[] = [
  // Academic achievements
  {
    id: 'cept-excellence',
    group: 'academic',
    title: 'CEPT Excellence Award',
    date: 'M.Arch',
    institution: 'CEPT University',
    detail: 'Awarded for M. Arch in History and Research at CEPT University.',
  },
  {
    id: 'best-research-project-2024',
    group: 'academic',
    title: 'Best Research Project Award',
    date: '2024',
    institution: 'CEPT University',
    detail: 'Received in Semester IV, Second Year 2024, for M. Arch in Architectural History and Research at CEPT University.',
  },
  {
    id: 'best-studio-2023',
    group: 'academic',
    title: 'Best Studio Award',
    date: '2023',
    institution: 'CEPT University',
    detail: 'Received in Semester III, Second Year 2023, for M. Arch in History and Research at CEPT University.',
  },
  {
    id: 'best-studio-2022',
    group: 'academic',
    title: 'Best Studio Award',
    date: '2022',
    institution: 'CEPT University',
    detail: 'Received in Semester II, First Year 2022, for M. Arch in History and Research at CEPT University.',
  },
  {
    id: 'best-foundation-studio-2022',
    group: 'academic',
    title: 'Best Foundation Studio',
    date: '2022',
    institution: 'CEPT University',
    detail: 'Received in Semester I, First Year 2022, for M. Arch in History and Research at CEPT University.',
  },
  {
    id: 'nuv-excellence-2017',
    group: 'academic',
    title: 'NUV Excellence Award',
    date: '2017',
    institution: 'SEDA, Navrachna University',
    detail: 'Received in Semester V, Third Year 2017, for B. Arch at SEDA, Navrachna University.',
  },

  // Other achievements
  {
    id: 'sah-emerging-scholars',
    group: 'other',
    title: 'Committee Member, Emerging Scholars Committee',
    date: 'Apr. 2025 – Sept. 2025',
    institution: 'Society of Architectural Historians: Historic Interiors Affiliate Group',
    detail:
      'Served as a committee member of the Emerging Scholars Committee of the Society of Architectural Historians: Historic Interiors Affiliate Group.',
  },
  {
    id: 'sah-opler-grant',
    group: 'other',
    title: 'Society of Architectural Historians Opler Membership Grant',
    date: 'Nov. 2024',
    institution: 'Society of Architectural Historians',
    detail: 'Received the Opler Membership Grant for Emerging Professionals from the Society of Architectural Historians.',
  },
  {
    id: 'epistle-prize-2024',
    group: 'other',
    title: 'Epistle Writing Prize 2024',
    date: 'July 2024',
    detail:
      'The essay titled “Facade Aesthetics over Material Authenticity: Decoding Pastiche in Modern India Bureaucratic Structures” was shortlisted in Category 2.',
  },

  // Professional development
  {
    id: 'program-ambassador',
    group: 'development',
    title: 'Program Ambassador, M. Arch in History and Research, CEPT University',
    date: '2023 – 2025',
    institution: 'CEPT University',
    detail: 'Served as Program Ambassador for the M. Arch in History and Research program at CEPT University.',
  },
  {
    id: 'archiving-workshop-2022',
    group: 'development',
    title: 'Architectural Archiving Workshop, CEPT Archives',
    date: 'Sept. 30 – Oct. 1, 2022',
    institution: 'CEPT Archives, Ahmedabad',
    detail: 'Participated in the Architectural Archiving Workshop conducted by CEPT Archives, Ahmedabad.',
  },
  {
    id: 'harvardx-gsd1x',
    group: 'development',
    title: 'GSD1x: The Architectural Imagination, HarvardX',
    date: 'May 21, 2017',
    institution: 'HarvardX',
    detail: 'Completed the online course of study titled The Architectural Imagination, offered by HarvardX.',
  },
];

export const achievementGroups = [
  { id: 'academic', title: 'Academic Achievements' },
  { id: 'other', title: 'Other Achievements' },
  { id: 'development', title: 'Professional Development' },
] as const;
