import type { Experience } from './types';

/**
 * PROFESSIONAL EXPERIENCE — newest first.
 * Dates and designations are exactly as in the CV.
 * `phase` places the entry in the About-page timeline (see timeline.ts).
 * `kind: 'teaching' | 'guidance'` entries also appear on the Teaching page.
 */
export const experience: Experience[] = [
  {
    id: 'dissertation-guide-seda',
    role: 'Dissertation Guide, Bachelor of Architecture',
    organisation: 'School of Environmental Design and Architecture',
    place: 'Vadodara, India',
    start: '2026-01',
    dates: 'Jan. 2026 – Present',
    description:
      'Guiding a Bachelor of Architecture research project titled “Tracing the Evolution of Construction Culture in British India: Reading George Wittet’s and John Begg’s Works in Bombay and Poona (1900s–1920s).”',
    kind: 'guidance',
    phase: 'archives',
    project: 'wittet-begg-construction-culture',
  },
  {
    id: 'eap1678-coordinator',
    role: 'Co-Applicant and Project Coordinator',
    organisation: 'EAP1678 Digitization Project',
    place: 'Pune, India',
    start: '2025-08',
    dates: 'Aug. 2025 – Present',
    description:
      'Coordinating the digitization and archival research project titled “Poona Public Works Department Records: Unwritten Ground Realities of Colonial Construction.” The project engages with Public Works Department records to examine colonial construction practices, administrative procedures, and ground-level realities of architectural production.',
    kind: 'coordination',
    phase: 'archives',
    project: 'poona-pwd-records-eap1678',
  },
  {
    id: 'ta-cept-architecture-2025',
    role: 'Teaching Associate',
    organisation: 'Faculty of Architecture, CEPT University',
    place: 'Ahmedabad, India',
    start: '2025-01',
    end: '2025-04',
    dates: 'Jan. 2025 – Apr. 2025',
    description:
      'Supported academic teaching, studio discussions, research guidance, and course-related coordination within the Faculty of Architecture.',
    kind: 'teaching',
    phase: 'academic',
  },
  {
    id: 'ta-cept-arch-design-2024',
    role: 'Teaching Associate',
    organisation: 'Faculty of Architecture and Design, CEPT University',
    place: 'Ahmedabad, India',
    start: '2024-08',
    end: '2024-11',
    dates: 'Aug. 2024 – Nov. 2024',
    description:
      'Assisted in teaching and academic coordination for architecture and design coursework, contributing to studio pedagogy, student reviews, and research-based learning processes.',
    kind: 'teaching',
    phase: 'academic',
  },
  {
    id: 'ra-gauri-bharat',
    role: 'Research Assistant',
    organisation: 'Research Assistant to Prof. Gauri Bharat, CEPT University',
    place: 'Ahmedabad, India',
    start: '2023-05',
    end: '2024-07',
    dates: 'May 2023 – July 2024',
    description:
      'Worked as Research Assistant to Prof. Gauri Bharat, Program Chair of MAHR, CEPT University, and recipient of the Graham Foundation Grant 2019 for the project “Modernization Before the Modernists: The Rise of Concrete in Early Twentieth Century India.” The role involved archival research, documentation, and research support related to the history of materials, construction practices, and modernization in India.',
    kind: 'research',
    phase: 'academic',
    project: 'modernization-before-the-modernists',
  },
  {
    id: 'ta-cept-design-2023',
    role: 'Teaching Associate',
    organisation: 'Faculty of Design, CEPT University',
    place: 'Ahmedabad, India',
    start: '2023-01',
    end: '2023-05',
    dates: 'Jan. 2023 – May 2023',
    description:
      'Contributed to teaching support, student engagement, and academic coordination for design-related courses at CEPT University.',
    kind: 'teaching',
    phase: 'academic',
  },
  {
    id: 'visiting-ta-2022',
    role: 'Visiting Teaching Assistant',
    organisation: 'Faculty of Architecture',
    place: 'Vadodara, India',
    start: '2022-03',
    end: '2022-06',
    dates: 'Mar. 2022 – June 2022',
    description:
      'Assisted with architectural teaching, studio reviews, and academic support for undergraduate architecture students.',
    kind: 'teaching',
    phase: 'transition',
  },
  {
    id: 'studio-nira',
    role: 'Junior Architect',
    organisation: 'Studio Ni.Ra.',
    place: 'Vadodara, India',
    start: '2021-05',
    end: '2022-05',
    dates: 'May 2021 – May 2022',
    description:
      'Worked on architectural design, documentation, drawings, and project coordination as part of a professional architectural practice.',
    kind: 'practice',
    phase: 'practice',
  },
  {
    id: 'landscape-india',
    role: 'Junior Architect',
    organisation: 'Landscape India: M/s Prabhakar B. Bhagwat',
    place: 'Ahmedabad, India',
    start: '2020-11',
    end: '2021-04',
    dates: 'Nov. 2020 – Apr. 2021',
    description:
      'Contributed to architectural and landscape-related professional work, including design development, documentation, and project assistance.',
    kind: 'practice',
    phase: 'practice',
  },
  {
    id: 'hundredhands',
    role: 'Winter Intern',
    organisation: 'HundredHands',
    place: 'Bangalore, India',
    start: '2019-12',
    dates: '2019',
    description:
      'Completed a winter internship involving architectural practice exposure, design assistance, and professional documentation.',
    kind: 'practice',
    phase: 'practice',
  },
];

export const kindLabels: Record<string, string> = {
  practice: 'Practice',
  teaching: 'Teaching',
  research: 'Research',
  coordination: 'Project coordination',
  guidance: 'Research guidance',
};
