import type { ResearchTheme } from './types';

/**
 * RESEARCH THEMES
 * ------------------------------------------------------------------
 * Each theme gets its own page at /research/<slug>/.
 * relatedProjects → slugs from projects.ts
 * relatedWriting  → ids from writing.ts
 * The introductory essays and questions are drafts written from the
 * research profile and project descriptions — please revise freely.
 */
export const researchThemes: ResearchTheme[] = [
  {
    slug: 'construction-history-and-colonial-public-works',
    number: '01',
    title: 'Construction History and Colonial Public Works',
    short:
      'How the Public Works Department organised, costed, specified, and executed building in the Bombay Presidency — and what its records reveal about construction on the ground.',
    essay: [
      'In late nineteenth- and early twentieth-century British India, a large share of public building passed through the Public Works Department. Its administrative structures — from provincial divisions to standard specifications, estimates, and schedules of rates — shaped not only what was built, but how construction was planned, financed, documented, and checked.',
      'This theme reads architectural production through those systems. It looks at the economisation of construction, at standardisation and rationalisation, and at the gap between administrative procedure and the ground-level realities recorded in drawings, project files, and correspondence. The Poona Public Works Department records, now being digitised through the EAP1678 project, are a central source; the work of architects such as George Wittet and John Begg in Bombay and Poona offers a way to connect institutional systems with individual buildings.',
    ],
    topics: [
      'Public Works Department systems',
      'Colonial administrative structures',
      'Provincial civil works',
      'Economisation of construction',
      'Standardisation and rationalisation',
      'Building specifications',
      'Architectural production',
      'Construction cultures in the Bombay Presidency',
      'Ground-level construction practices',
    ],
    questions: [
      'How did administrative and financial frameworks within the Public Works Department shape provincial civil works?',
      'What can drawings, specifications, and project files tell us about construction practices on the ground?',
      'How were buildings in Bombay and Poona produced between institutional procedure and individual architectural authorship?',
    ],
    relatedProjects: ['poona-pwd-records-eap1678', 'wittet-begg-construction-culture', 'beyond-the-archives-walls'],
    relatedWriting: ['economization-patio-2024', 'hidden-figures-eahn-2025', 'chs-cambridge-2026'],
    relatedExhibitions: ['peoples-buildings-2024'],
    materials: ['Architectural drawings (Poona PWD records)', 'Project files', 'Administrative reports', 'Building specifications and estimates', 'PWD books and journals'],
    gallery: [
      { src: 'architecture/hero-drawing.jpg', alt: 'Ink drawing of the south and north elevations of the Jacob Sassoon Hospital, Poona', caption: 'Jacob Sassoon Hospital, Poona — south and north elevations', orientation: 'landscape' },
      { src: 'research/pwd-offices-bombay.jpg', alt: 'Nineteenth-century photograph of the Public Works Offices, Bombay: a Gothic Revival building with steep roofs and arcaded storeys behind a fountain, with scaffolding on a neighbouring building', caption: 'Public Works Offices, Bombay — nineteenth-century photograph, No. 11', credit: 'Photograph: F. Vicajee & Co., Fort Bombay', orientation: 'landscape' },
      { src: 'research/construction-02.jpg', alt: 'Title page reading “Public Works Department, Bombay. Poona District Specifications. Poona: Printed at the Yeravda Prison Press, 1919”', caption: 'Poona District Specifications, Public Works Department, Bombay (Poona: Yeravda Prison Press, 1919) — title page', orientation: 'portrait' },
      { src: 'research/construction-03.jpg', alt: 'Stone façade of the Central Building, Pune, with arched upper verandahs, round openings, paired columns, and government office signboards', caption: 'Central Building, Dr. Annie Besant Road, Pune — present-day view', orientation: 'landscape' },
      { src: 'eap1678/books-journals-01.jpg', alt: 'Worn cover reading “Government of India, Public Works Department. Forms referred to in the Code of Regulations for the Public Works Department. Fifth Edition … Part I. Calcutta, 1906”', caption: 'Forms referred to in the Code of Regulations for the Public Works Department, 5th ed., Part I (Calcutta, 1906)', orientation: 'portrait' },
      { src: 'research/subordinate-engineers.jpg', alt: 'Printed group photograph of some ninety men in front of an arcaded building, titled “The Association of the Subordinate Service of Engineers, P.W.D. Bombay. Thirty Second Annual Conference, Bombay”', caption: 'The Association of the Subordinate Service of Engineers, P.W.D. Bombay — Thirty-Second Annual Conference, Bombay', orientation: 'landscape' },
    ],
  },
  {
    slug: 'materials-technology-and-modernisation',
    number: '02',
    title: 'Materials, Technology, and Modernisation',
    short:
      'Material histories of the built environment, with a focus on concrete and the technical and administrative processes of early twentieth-century construction in India.',
    essay: [
      'Architectural modernisation in India is often narrated through the arrival of modernist architects. A material history suggests a longer and more distributed story, in which new materials, building technologies, and construction methods were tested, specified, and adopted through technical and administrative processes well before mid-century modernism.',
      'This theme draws on research support for the project “Modernization Before the Modernists: The Rise of Concrete in Early Twentieth Century India,” for which Prof. Gauri Bharat (CEPT University) received the Graham Foundation Grant 2019, and on related interests in material authenticity and architectural expression.',
    ],
    topics: [
      'Concrete in early twentieth-century India',
      'Material histories',
      'Building technologies',
      'Construction methods',
      'Material experimentation',
      'Architectural modernisation',
      'Technical and administrative processes',
    ],
    questions: [
      'How were new materials such as concrete introduced, tested, and adopted in early twentieth-century Indian construction?',
      'What role did technical and administrative processes play in architectural modernisation?',
      'How do material choices relate to architectural expression and authenticity?',
    ],
    relatedProjects: ['modernization-before-the-modernists', 'wittet-begg-construction-culture'],
    relatedWriting: ['epistle-2024-facade-aesthetics'],
    materials: ['Technical journals', 'Construction documentation', 'Historical photographs', 'Building specifications'],
    gallery: [
      { src: 'research/lloyd-dam-1914.jpg', alt: 'Mounted archival photograph of a vast excavation with workers, a pipe carried across the trench, and the curved wall of an older dam behind; captioned “S. No. 9 … Lloyd Dam … Year 1914”', caption: 'Excavation for the Lloyd Dam, showing the pipe carrying water from the old dam over the foundation trench — mounted photograph, 1914', ref: 'S. No. 9', orientation: 'landscape' },
      { src: 'research/lloyd-dam-1922.jpg', alt: 'Printed panoramic photograph of the partly built masonry Lloyd Dam with a row of arched sluices, captioned “The Lloyd Dam at Bhatgar in progress. March, 1922. Up-stream elevation of new dam, from top of old dam”', caption: 'The Lloyd Dam at Bhatgar in progress, March 1922 — up-stream elevation of the new dam, from the top of the old dam', orientation: 'landscape' },
      { src: 'research/lloyd-dam-tablet.jpg', alt: 'Photograph of a tablet recording the Government of Bombay’s appreciation of the Bhor State’s assistance with the Lloyd Dam, whose construction commenced in 1913 and was completed in 1928', caption: 'Tablet recording the co-operation of the Bhor State in building the Lloyd Dam (commenced 1913, completed 1928) — photograph in an album', orientation: 'portrait' },
    ],
  },
  {
    slug: 'archives-and-archival-habitats',
    number: '03',
    title: 'Architectural Archives and Archival Habitats',
    short:
      'Archives as physical, institutional, social, and digital environments — record rooms, infrastructures, people, policies, and silences.',
    essay: [
      'Architectural archives are not neutral containers. Record rooms, storage practices, cataloguing systems, institutional policies, and the people who maintain and use records all shape what survives, what can be found, and what remains silent.',
      'This theme approaches the archive as a habitat: a physical and institutional environment with its own history. It grows out of work on the archival habitat of the Pune Public Works Region and continues through the symposium “On and Off the Record? Reconsidering Archives and Their Habitats in India,” which considers archival infrastructure, archives from below, people and policy, user experience, and digital archives.',
    ],
    topics: [
      'Institutional archives',
      'Physical archival spaces',
      'Record rooms',
      'Archival infrastructures',
      'Records management',
      'People and policies',
      'Archival silences',
      'User experience',
      'Access and discoverability',
    ],
    questions: [
      'How do the physical spaces and institutional environments of archives shape what is preserved and accessible?',
      'Whose labour and agency are recorded — or left unrecorded — in Public Works archives?',
      'How do cataloguing, access, and discoverability affect the histories that can be written from an archive?',
    ],
    relatedProjects: ['beyond-the-archives-walls', 'on-and-off-the-record', 'poona-pwd-records-eap1678'],
    relatedWriting: ['hidden-figures-eahn-2025'],
    relatedExhibitions: ['peoples-buildings-2024'],
    materials: ['Record room photographs', 'Archival storage documentation', 'Campus maps and plans', 'Records-management documents'],
    gallery: [
      { src: 'archival-research/record-room-01.jpg', alt: 'Team members in masks, gloves and hairnets among shelves of bundled files in a dimly lit record room', caption: 'Working among bundled files in the record room', orientation: 'landscape' },
      { src: 'archival-research/record-room-02.jpg', alt: 'A researcher in a mask and nitrile gloves reaching for bundled files on metal shelving, with a colleague working further down the aisle', caption: 'Locating files on the record-room shelves', orientation: 'landscape' },
      { src: 'archival-research/record-room-03.jpg', alt: 'A researcher in a hairnet, mask, apron and gloves lifting a stack of brittle files between crowded shelves', caption: 'Handling a bundle of files in the record room', orientation: 'landscape' },
    ],
  },
  {
    slug: 'digital-heritage-and-preservation',
    number: '04',
    title: 'Digital Heritage, Digitisation, and Preservation',
    short:
      'Digitisation standards, metadata design, digital preservation, and digital access for endangered architectural records.',
    essay: [
      'Digitisation is often presented as a technical step. In practice it involves a chain of decisions — about capture standards, image processing, file naming, metadata, verification, storage, and access — each of which shapes how records will be found and used in the future.',
      'This theme is grounded in the EAP1678 project on the Poona Public Works Department records, supported by the British Library’s Endangered Archives Programme, and in the digitisation and metadata work of the Town Planning Maharashtra lantern-slide project.',
    ],
    topics: [
      'Digitisation standards',
      'Image processing',
      'Metadata design',
      'Dublin Core',
      'Digital preservation',
      'Checksums and file verification',
      'Digital repositories',
      'Omeka',
      'Digital access and discoverability',
    ],
    questions: [
      'How can digitisation workflows balance preservation standards with the realities of fragile, large-format material?',
      'How should metadata be designed so that architectural records remain discoverable and meaningful?',
      'What does it take to preserve and provide access to digital surrogates over the long term?',
    ],
    relatedProjects: ['poona-pwd-records-eap1678', 'town-planning-maharashtra-lantern-slides'],
    relatedWriting: [],
    materials: ['Digitised drawings (TIFF masters)', 'Metadata records', 'Digital file structures', 'Digitisation process photographs'],
    gallery: [
      { src: 'eap1678/workstation-01.jpg', alt: 'A camera on a copy stand between two lights above a digitisation table with a laptop, as three team members prepare material', caption: 'Camera-based digitisation workstation', orientation: 'landscape' },
      { src: 'research/copy-stand-01.jpg', alt: 'Copy stand with a camera between two LED panels; a stereo photograph card lies on the black baseboard while its live view appears on a laptop', caption: 'Copy-stand capture of a stereo photograph, with live view on the laptop', orientation: 'landscape' },
      { src: 'research/camera-copy-stand.jpg', alt: 'Overhead view of a DSLR camera mounted on a copy stand above a small glass object in a black mask on a grid cutting mat', caption: 'Camera on a copy stand, positioned over a small glass object', orientation: 'portrait' },
      { src: 'research/copy-stand-02.jpg', alt: 'Copy stand with two diffused lights; a stereo photograph sits inside a frame on a black board, with a spirit level, cotton gloves and a weight nearby', caption: 'Copy-stand set-up with diffused lighting, spirit level and handling materials', orientation: 'landscape' },
      { src: 'eap1678/qc-colour-target-01.jpg', alt: 'Laptop screen showing the digitised title page of Public Works Department Code, Volume VI, Tables of Salaries, beside a Tiffen colour control patch strip; file name PWDC_049_0001.JPG', caption: 'Image check on screen: Public Works Department Code, Vol. VI, Tables of Salaries (Calcutta, 1884), captured with a colour control target', ref: 'PWDC_049_0001', orientation: 'portrait' },
      { src: 'eap1678/qc-colour-target-02.jpg', alt: 'Laptop screen showing the digitised title page of Public Works Department Code, Volume I, General Regulations, beside a colour control patch strip; file name PWDC_055_0029.JPG', caption: 'Public Works Department Code, Vol. I, General Regulations (Calcutta, 1902), captured with a colour control target', ref: 'PWDC_055_0029', orientation: 'portrait' },
    ],
  },
  {
    slug: 'mapping-and-spatial-histories',
    number: '05',
    title: 'Mapping, Spatial Histories, and Visualisation',
    short:
      'GIS and historical maps as tools for locating, grouping, and interpreting archival sources in space.',
    essay: [
      'Archival photographs, drawings, and records describe places. Mapping them makes spatial relationships visible — between buildings, between images of the same building, and between records and the landscapes they document.',
      'This theme brings GIS into architectural history, using QGIS and historical maps to aggregate material at the level of individual buildings and to interpret archival sources geographically. It is developed through the Town Planning Maharashtra lantern-slide project and through multi-scale mapping of the archival habitat of the Pune Public Works Region.',
    ],
    topics: [
      'GIS for architectural history',
      'Historical photographs and location',
      'Spatial relationships',
      'Building-level data aggregation',
      'QGIS',
      'Historical maps',
      'Geographical interpretation of archival sources',
    ],
    questions: [
      'How can historical photographs be reliably linked to buildings and locations?',
      'What does building-level aggregation of archival material reveal that a catalogue list cannot?',
      'How can mapping support — rather than simplify — the interpretation of archival sources?',
    ],
    relatedProjects: ['town-planning-maharashtra-lantern-slides', 'beyond-the-archives-walls'],
    relatedWriting: [],
    materials: ['Lantern slides', 'Historical maps', 'QGIS project screenshots', 'Campus development maps'],
    gallery: [
      { src: 'maps/qgis-01.png', alt: 'QGIS screenshot of mapped buildings', caption: 'QGIS mapping', orientation: 'landscape' },
      { src: 'maps/historical-map-01.jpg', alt: 'Printed colour plan in an open book showing troop positions around Koregaon village on the Bhima river, with legends, an enlarged plan of the village, and references', caption: 'Plan of the Defence of Koregaon, 1 January 1818 — Govt. Photozincographic Office, Poona, 1880', orientation: 'landscape' },
    ],
  },
];
