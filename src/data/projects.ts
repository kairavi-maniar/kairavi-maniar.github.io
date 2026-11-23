import type { Project } from './types';

/**
 * PROJECTS & CASE STUDIES
 * ------------------------------------------------------------------
 * Each project gets its own page at /projects/<slug>/.
 * To add a project: copy one whole block { ... }, change the `slug`
 * (lowercase-with-hyphens, unique), edit the text, and put its images in
 * src/assets/images/<folder>/ using the file names given in `src`.
 *
 * `categories` must use names from `projectCategories` below.
 * `themes` uses slugs from research.ts; `relatedWriting` uses ids from writing.ts.
 * `todo` lists facts still to be confirmed (shown as editorial notes).
 * Research questions marked as drafts were framed from the project
 * descriptions — please revise them.
 */

export const projectCategories = [
  'Architectural Research',
  'Construction History',
  'Archival Research',
  'Digitisation and Preservation',
  'Digital Heritage',
  'Mapping and Visualisation',
  'Exhibition and Public Engagement',
];

export const projects: Project[] = [
  // ───────────────────────────────────────────── 01
  {
    slug: 'beyond-the-archives-walls',
    number: '01',
    title: 'Beyond the Archive’s Walls',
    subtitle: 'Engaging with the Archival Habitat of Pune Public Works Region',
    shortTitle: 'Beyond the Archive’s Walls',
    categories: ['Architectural Research', 'Archival Research', 'Mapping and Visualisation'],
    themes: ['archives-and-archival-habitats', 'construction-history-and-colonial-public-works', 'mapping-and-spatial-histories'],
    duration: 'To be confirmed',
    institutions: ['Pune Public Works Region (Public Works Department, Pune)'],
    role: 'Researcher',
    summary:
      'A study of the archival habitat of the Pune Public Works Region — understood through its physical spaces, documents, institutional environment, people, and preservation practices.',
    cover: {
      src: 'archival-research/beyond-cover.jpg',
      alt: 'Record room of the Pune Public Works Region archive',
      caption: 'The record room, Pune Public Works Region',
      orientation: 'landscape',
    },
    context: [
      'The Public Works Department was responsible for the design, construction, and maintenance of a large share of public buildings in the Pune region. Its records — drawings, maps, photographs, reports, project files, and administrative documents — accumulated over more than a century of building activity.',
      'The archival material held by the Pune Public Works Region spans approximately 1850–2010. This project looks not only at what these records contain, but at the archive itself: where and how records are kept, the institution that produced and maintains them, and the people and practices that sustain them.',
    ],
    questions: [
      'What constitutes the “archival habitat” of a working Public Works office — its spaces, documents, institution, people, and practices?',
      'How has the PWD campus developed historically, and how is that history inscribed in its records and buildings?',
      'What can a close reading of selected architectural drawings reveal about the wider collection and its institutional context?',
    ],
    methodology: [
      'Survey and documentation of the physical archive and record rooms',
      'Analysis of 23 architectural drawings from the 1910s–1950s, selected from a larger collection of approximately 3,525 drawings',
      'Mapping of the archival habitat at multiple scales — from the campus to the record room',
      'Documentation of the historical development of the PWD campus through maps, timelines, and photographs',
    ],
    roleDetail: ['Research, archival documentation, drawing analysis, and mapping of the archival habitat.'],
    outcomes: [
      'Documentation of archival material spanning approximately 1850–2010: architectural drawings, maps, photographs, reports, project files, and administrative records',
      'Analysis of 23 architectural drawings (1910s–1950s) from a collection of approximately 3,525 drawings',
      'Multi-scale mapping of the archival habitat',
      'A documented history of the development of the PWD campus',
    ],
    sections: [
      {
        id: 'institutional-context',
        number: '01',
        title: 'Institutional Context',
        body: [
          'The Pune Public Works Region sits at the intersection of the built environment and public administration: it has designed, built, and maintained public buildings, and it has documented that work in its own records.',
        ],
        note: 'Add a short history of the Pune Public Works Region in your own words.',
      },
      {
        id: 'physical-archive',
        number: '02',
        title: 'The Physical Archive',
        body: ['Photographs and documentation of the record room and the archival environment.'],
        gallery: [
          { src: 'archival-research/record-room-01.jpg', alt: 'Record room of the Pune Public Works Region', caption: 'Record room', orientation: 'landscape' },
          { src: 'archival-research/record-room-02.jpg', alt: 'Archival storage shelving', caption: 'Storage and shelving', orientation: 'portrait' },
          { src: 'archival-research/record-room-03.jpg', alt: 'Bundles of archival files', caption: 'Archival files', orientation: 'landscape' },
        ],
      },
      {
        id: 'documents',
        number: '03',
        title: 'Documents and Material Evidence',
        body: ['Architectural drawings, photographs, maps, project files, and records — including the 23 drawings from the 1910s–1950s selected for analysis.'],
        stats: [
          { value: 'c. 1850–2010', label: 'Span of archival material' },
          { value: 'c. 3,525', label: 'Architectural drawings in the collection' },
          { value: '23', label: 'Drawings analysed (1910s–1950s)' },
        ],
        gallery: [
          { src: 'archival-research/drawing-01.jpg', alt: 'Architectural drawing from the Pune PWD collection', caption: 'Architectural drawing', ref: 'Ref. —', orientation: 'landscape' },
          { src: 'archival-research/drawing-02.jpg', alt: 'Architectural drawing from the Pune PWD collection', caption: 'Architectural drawing', ref: 'Ref. —', orientation: 'landscape' },
          { src: 'archival-research/project-file-01.jpg', alt: 'Page from a PWD project file', caption: 'Project file', orientation: 'portrait' },
        ],
      },
      {
        id: 'campus',
        number: '04',
        title: 'The Campus as an Archive',
        body: ['Historical and contemporary development of the PWD campus, shown through maps, timelines, and photographs.'],
        gallery: [
          { src: 'maps/pwd-campus-historical.jpg', alt: 'Historical map of the PWD campus', caption: 'Campus — historical map', orientation: 'landscape' },
          { src: 'maps/pwd-campus-contemporary.jpg', alt: 'Contemporary plan of the PWD campus', caption: 'Campus — contemporary plan', orientation: 'landscape' },
          { src: 'research/archival-habitat-diagram.png', alt: 'Diagram mapping the archival habitat at multiple scales', caption: 'Research diagram — the archival habitat at multiple scales', orientation: 'landscape' },
        ],
        note: 'Add a timeline of campus development (dates and building names) when available.',
      },
      {
        id: 'reflections',
        number: '05',
        title: 'Research Reflections',
        body: [
          'Reflections on archival habitats, access, institutional memory, and archival practices.',
        ],
        note: 'Add your reflections here — no conclusions have been written on your behalf.',
      },
    ],
    gallery: [],
    relatedWriting: ['hidden-figures-eahn-2025'],
    relatedExhibitions: ['peoples-buildings-2024'],
    todo: [
      'Project dates (duration)',
      'Institutional affiliation — e.g. whether this was the M.Arch research project at CEPT University — and any supervisor to credit',
      'Your exact role title',
    ],
    featured: true,
  },

  // ───────────────────────────────────────────── 02
  {
    slug: 'poona-pwd-records-eap1678',
    number: '02',
    title: 'Poona Public Works Department Records',
    subtitle: 'Unwritten Ground Realities of Colonial Construction',
    shortTitle: 'Poona PWD Records — EAP1678',
    categories: ['Archival Research', 'Digitisation and Preservation', 'Digital Heritage', 'Construction History'],
    themes: ['digital-heritage-and-preservation', 'construction-history-and-colonial-public-works', 'archives-and-archival-habitats'],
    duration: 'Aug. 2025 – Present',
    institutions: ['British Library — Endangered Archives Programme', 'Public Works Department, Pune'],
    role: 'Co-Applicant and Project Coordinator',
    reference: 'EAP1678',
    summary:
      'A collaborative archival digitisation and research initiative documenting historical Poona Public Works Department records. The project investigates colonial construction practices, administrative procedures, and the ground-level realities of architectural production.',
    cover: {
      src: 'eap1678/cover.jpg',
      alt: 'Large-format architectural drawings from the Poona PWD records being prepared for digitisation',
      caption: 'Poona PWD records — preparation for digitisation',
      orientation: 'landscape',
    },
    context: [
      'The Poona Public Works Department records document more than a century of public building. Drawings, books, journals, and project files record not only designs, but the administrative procedures, specifications, and day-to-day realities through which colonial construction was carried out.',
      'Supported by the British Library’s Endangered Archives Programme (project reference EAP1678), the project digitises these records so that they can be preserved and made accessible, while using them to study the “unwritten ground realities” of colonial construction.',
    ],
    questions: [
      'What do Public Works Department records reveal about colonial construction practices and administrative procedures?',
      'How can the ground-level realities of architectural production be reconstructed from drawings, files, and published PWD literature?',
      'How can an endangered institutional archive be digitised, described, and preserved so that it remains discoverable?',
    ],
    methodology: [
      'Preparatory work and conservation of fragile material',
      'Large-format and camera-based digitisation',
      'Image processing and quality control',
      'Metadata creation using EAP listing templates and Dublin Core mapping',
      'Checksum-verified preservation and storage',
      'Research and training alongside digitisation',
    ],
    roleDetail: [
      'As Co-Applicant and Project Coordinator, I coordinate the digitisation and archival research project.',
    ],
    outcomes: [
      'Digital surrogates and metadata for the Poona PWD collection (in progress)',
      'Preservation copies stored with checksum verification (in progress)',
      'Public access to the digitised collection (planned)',
      'Research, training, and public engagement activities',
    ],
    sections: [
      {
        id: 'collection',
        title: 'The Collection',
        body: ['An overview of the material being digitised.'],
        stats: [
          { value: '3,525', label: 'Architectural drawings' },
          { value: '184', label: 'Books' },
          { value: '200', label: 'Journals' },
          { value: '41', label: 'Project files' },
        ],
      },
      {
        id: 'work-packages',
        title: 'Work Packages',
        list: [
          'Preparatory work and conservation',
          'Digitisation',
          'Image processing and quality control',
          'Metadata creation and cataloguing',
          'Preservation and storage',
          'Research and training',
          'Public engagement and outreach',
        ],
      },
      {
        id: 'workflow',
        title: 'Digitisation Workflow',
        body: ['Select a stage to read how material moves from the record room to public access.'],
        workflow: [
          { title: 'Original archival material', detail: 'Drawings, books, journals, and project files are surveyed, prepared, and conserved where necessary before handling.' },
          { title: 'Digitisation', detail: 'Large-format drawings, fragile items, and bound volumes are captured using scanning and camera-based methods appropriate to each format.' },
          { title: 'Image processing', detail: 'Captures are processed and saved as TIFF preservation masters, with consistent file naming and organisation.' },
          { title: 'Metadata', detail: 'Each item is described using EAP listing templates, with descriptive fields mapped to Dublin Core.' },
          { title: 'Quality control', detail: 'Images and metadata are checked for completeness, legibility, and consistency before files are finalised.' },
          { title: 'Preservation', detail: 'Files are stored with MD5 checksums so that their integrity can be verified over time.' },
          { title: 'Access', detail: 'Digitised material is made available for research and public use, including through an Omeka-based digital archive.' },
        ],
      },
      {
        id: 'technical',
        title: 'Technical Details',
        fields: [
          { label: 'Large-format drawing digitisation', value: 'Capture of oversized architectural drawings.' },
          { label: 'Camera-based digitisation', value: 'For fragile materials unsuitable for scanning.' },
          { label: 'Book and journal scanning', value: 'Capture of bound PWD books and journals.' },
          { label: 'Image processing', value: 'TIFF preservation masters.' },
          { label: 'Resolution and colour management', value: 'Project specification to be added.' },
          { label: 'Metadata standards', value: 'EAP listing templates; Dublin Core mapping.' },
          { label: 'File organisation', value: 'Structured folder hierarchy and file-naming convention.' },
          { label: 'Integrity checking', value: 'MD5 checksum verification.' },
          { label: 'Quality control', value: 'Image and metadata review before delivery.' },
          { label: 'Access platform', value: 'Omeka-based digital archive.' },
        ],
        note: 'Add the project’s specific capture resolution, colour targets, and equipment if you wish to publish them. Do not include passwords, internal administrative data, or staff details.',
      },
      {
        id: 'documentation',
        title: 'Visual Documentation',
        gallery: [
          { src: 'eap1678/scanner-01.jpg', alt: 'Large-format scanner', caption: 'Large-format scanner', orientation: 'landscape' },
          { src: 'eap1678/workstation-01.jpg', alt: 'Digitisation workstation', caption: 'Digitisation workstation', orientation: 'landscape' },
          { src: 'eap1678/drawing-01.jpg', alt: 'Archival drawing from the Poona PWD records', caption: 'Archival drawing', ref: 'EAP1678/—', orientation: 'landscape' },
          { src: 'eap1678/books-journals-01.jpg', alt: 'PWD books and journals', caption: 'Books and journals', orientation: 'portrait' },
          { src: 'eap1678/preservation-materials-01.jpg', alt: 'Preservation materials', caption: 'Preservation materials', orientation: 'landscape' },
          { src: 'eap1678/metadata-example.png', alt: 'Example metadata record', caption: 'Metadata example', orientation: 'landscape' },
          { src: 'eap1678/file-structure.png', alt: 'Digital file structure', caption: 'Digital file structure', orientation: 'landscape' },
          { src: 'eap1678/storage-01.jpg', alt: 'Conservation and storage of records', caption: 'Conservation and storage', orientation: 'portrait' },
        ],
      },
    ],
    gallery: [],
    relatedWriting: ['hidden-figures-eahn-2025', 'economization-patio-2024'],
    links: [],
    todo: [
      'Names of collaborating institutions and the lead applicant, as you would like them credited',
      'Link to the project page on the British Library EAP website (add in contact.projectLinks and here)',
      'Specific capture resolution and colour-management values, if they should be public',
    ],
    featured: true,
  },

  // ───────────────────────────────────────────── 03
  {
    slug: 'town-planning-maharashtra-lantern-slides',
    number: '03',
    title: 'Town Planning Maharashtra',
    subtitle: 'Lantern Slides and Digital Mapping',
    shortTitle: 'Town Planning Maharashtra — Lantern Slides',
    categories: ['Digital Heritage', 'Digitisation and Preservation', 'Mapping and Visualisation'],
    themes: ['mapping-and-spatial-histories', 'digital-heritage-and-preservation'],
    duration: 'To be confirmed',
    institutions: ['To be confirmed'],
    role: 'To be confirmed',
    summary:
      'A digital heritage project documenting and mapping historical town planning lantern slides — connecting digitised photographs with buildings, geographical locations, and structured archival metadata.',
    cover: {
      src: 'lantern-slides/cover.jpg',
      alt: 'Historical town planning lantern slide on a light box',
      caption: 'Town planning lantern slide',
      orientation: 'landscape',
    },
    context: [
      'Lantern slides — photographic images on glass, made for projection — were used to present and teach town planning. Individually, a slide is an image; grouped and located, a set of slides becomes a record of buildings and places.',
      'The working dataset includes approximately 90 projects or buildings, with multiple photographs associated with individual buildings.',
    ],
    questions: [
      'How can individual lantern slides be identified and linked to the buildings and places they depict?',
      'How should metadata be structured so that photographs, buildings, and archival records remain connected?',
      'What does mapping the slides reveal about the spatial patterns of town planning in Maharashtra?',
    ],
    methodology: [
      'Lantern slide documentation',
      'Image digitisation',
      'Image identification and file naming',
      'Metadata development',
      'Building-level grouping of photographs',
      'QGIS mapping with interactive pop-ups',
      'Historical spatial visualisation',
    ],
    roleDetail: ['Role to be added.'],
    outcomes: [
      'A structured dataset of approximately 90 projects/buildings with associated photographs',
      'Building-level grouping of lantern-slide images',
      'A QGIS map with interactive pop-ups linking photographs to locations',
    ],
    sections: [
      {
        id: 'from-slide-to-map',
        title: 'From Slide to Map',
        body: ['How each photograph relates to its building and its archival record.'],
        chain: [
          { title: 'Lantern slide', detail: 'The physical glass slide, documented and handled as an archival object.' },
          { title: 'Digitised image', detail: 'A digital capture, identified and given a consistent file name.' },
          { title: 'Metadata record', detail: 'Structured description linking the image to its source and subject.' },
          { title: 'Building', detail: 'Images of the same building are grouped together — one building, many photographs.' },
          { title: 'Location', detail: 'Each building is placed on the map, with pop-ups showing its photographs and records.' },
        ],
      },
      {
        id: 'metadata',
        title: 'Metadata Example',
        body: ['An illustrative template showing the kinds of fields recorded for each slide. Values are placeholders, not real records.'],
        record: [
          { label: 'Identifier', value: '[slide ID]' },
          { label: 'File name', value: '[file-naming convention]' },
          { label: 'Title', value: '[building / subject]' },
          { label: 'Building group', value: '[building ID]' },
          { label: 'Place', value: '[town / locality]' },
          { label: 'Date', value: '[date, if known]' },
          { label: 'Format', value: 'Lantern slide (glass)' },
          { label: 'Source', value: '[collection / repository]' },
          { label: 'Rights', value: '[rights statement]' },
        ],
        note: 'Replace with a real (non-confidential) metadata example, or upload a screenshot as lantern-slides/metadata-example.png.',
      },
      {
        id: 'digitisation',
        title: 'Before and After Digitisation',
        gallery: [
          { src: 'lantern-slides/before-01.jpg', alt: 'Lantern slide before digitisation', caption: 'Before — physical slide', orientation: 'square' },
          { src: 'lantern-slides/after-01.jpg', alt: 'Digitised lantern slide image', caption: 'After — digitised image', orientation: 'square' },
          { src: 'lantern-slides/metadata-example.png', alt: 'Metadata record for a lantern slide', caption: 'Metadata record', orientation: 'landscape' },
        ],
      },
      {
        id: 'slides',
        title: 'Lantern Slide Gallery',
        gallery: [
          { src: 'lantern-slides/slide-01.jpg', alt: 'Town planning lantern slide', caption: 'Lantern slide', orientation: 'square' },
          { src: 'lantern-slides/slide-02.jpg', alt: 'Town planning lantern slide', caption: 'Lantern slide', orientation: 'square' },
          { src: 'lantern-slides/slide-03.jpg', alt: 'Town planning lantern slide', caption: 'Lantern slide', orientation: 'square' },
          { src: 'lantern-slides/slide-04.jpg', alt: 'Town planning lantern slide', caption: 'Lantern slide', orientation: 'square' },
        ],
      },
      {
        id: 'map',
        title: 'Map of Building Locations',
        mapNote:
          'An interactive map will appear here once the geographical dataset is provided. No building coordinates have been invented.',
        gallery: [
          { src: 'maps/qgis-01.png', alt: 'QGIS screenshot showing mapped buildings', caption: 'QGIS — mapped buildings', orientation: 'landscape' },
          { src: 'maps/qgis-02.png', alt: 'QGIS screenshot of an interactive pop-up', caption: 'QGIS — interactive pop-up', orientation: 'landscape' },
        ],
      },
    ],
    gallery: [],
    relatedWriting: [],
    todo: [
      'Project dates, institutions/partners, and your role',
      'The geographical dataset (for the interactive map)',
      'Image rights/credit line for the lantern slides',
    ],
    featured: true,
  },

  // ───────────────────────────────────────────── 04
  {
    slug: 'on-and-off-the-record',
    number: '04',
    title: 'On and Off the Record?',
    subtitle: 'Reconsidering Archives and Their Habitats in India',
    shortTitle: 'On and Off the Record? — Symposium',
    categories: ['Archival Research', 'Exhibition and Public Engagement'],
    themes: ['archives-and-archival-habitats', 'digital-heritage-and-preservation'],
    duration: 'Dates to be announced',
    institutions: ['Poona PWD Archives', 'Pune Architectural History Archive (PAHA)', 'IISER Pune'],
    role: 'Organisation Coordinator',
    summary:
      'A symposium initiative exploring archives as physical, institutional, social, and digital environments — and questions of cataloguing, metadata, discoverability, access, and archival silences.',
    cover: {
      src: 'symposium/cover.jpg',
      alt: 'Symposium poster for On and Off the Record?',
      caption: 'Symposium — On and Off the Record?',
      orientation: 'landscape',
    },
    context: [
      'Archives are often discussed as collections. This symposium considers them as habitats: the buildings and infrastructures that hold records, the institutions and policies that govern them, the people who keep and use them, and the digital systems through which they are increasingly encountered.',
    ],
    questions: [
      'How do archival infrastructures shape what is kept, catalogued, and found?',
      'What do “archives from below” add to institutional records?',
      'How do people, policies, and user experience affect access and discoverability?',
      'How are digital archives changing the habitats of records?',
    ],
    methodology: ['Symposium organised in collaboration with the Poona PWD Archives, the Pune Architectural History Archive (PAHA), and IISER Pune.'],
    roleDetail: [
      'Organising Chairs: Dr. Pushkar Sohoni and Dr. Sarah Melsens.',
      'Organisation Coordinator: Kairavi Maniar.',
    ],
    outcomes: ['Programme, speakers, and accepted papers will be listed here once announced.'],
    sections: [
      {
        id: 'status',
        title: 'Symposium Details',
        fields: [
          { label: 'Status', value: 'To be confirmed' },
          { label: 'Dates', value: 'To be announced' },
          { label: 'Venue', value: 'To be announced' },
          { label: 'Call for abstracts', value: 'Details to be announced' },
        ],
        note: 'Update status and dates in projects.ts. Do not mark the symposium as completed until it has taken place.',
      },
      {
        id: 'themes',
        title: 'Thematic Framework',
        list: ['Archival Infrastructure', 'Archives from Below', 'People and Policy', 'User Experience', 'Digital Archives'],
      },
      {
        id: 'committee',
        title: 'Organising Committee',
        fields: [
          { label: 'Organising Chair', value: 'Dr. Pushkar Sohoni' },
          { label: 'Organising Chair', value: 'Dr. Sarah Melsens' },
          { label: 'Organisation Coordinator', value: 'Kairavi Maniar' },
        ],
      },
      {
        id: 'programme',
        title: 'Programme, Speakers, and Accepted Papers',
        body: ['The programme, speakers, and accepted papers will be published here.'],
      },
      {
        id: 'symposium-documentation',
        title: 'Exhibition and Documentation',
        gallery: [
          { src: 'symposium/documentation-01.jpg', alt: 'Symposium documentation photograph', caption: 'Documentation', orientation: 'landscape' },
          { src: 'symposium/exhibition-01.jpg', alt: 'Symposium exhibition', caption: 'Exhibition', orientation: 'landscape' },
        ],
      },
    ],
    gallery: [],
    relatedWriting: [],
    todo: ['Symposium dates, venue, and status', 'Call for abstracts link, programme, speakers, and accepted papers'],
    featured: true,
  },

  // ───────────────────────────────────────────── 05
  {
    slug: 'modernization-before-the-modernists',
    number: '05',
    title: 'Modernization Before the Modernists',
    subtitle: 'The Rise of Concrete in Early Twentieth Century India',
    shortTitle: 'Modernization Before the Modernists',
    categories: ['Construction History', 'Architectural Research'],
    themes: ['materials-technology-and-modernisation', 'construction-history-and-colonial-public-works'],
    duration: 'May 2023 – July 2024 (research assistantship)',
    institutions: ['CEPT University', 'Graham Foundation Grant 2019 (awarded to Prof. Gauri Bharat)'],
    role: 'Research Assistant to Prof. Gauri Bharat',
    summary:
      'Research support for the project “Modernization Before the Modernists: The Rise of Concrete in Early Twentieth Century India,” associated with Prof. Gauri Bharat, Program Chair of MAHR, CEPT University, and recipient of the Graham Foundation Grant 2019.',
    cover: {
      src: 'research/concrete-cover.jpg',
      alt: 'Early twentieth-century concrete building in India',
      caption: 'Concrete construction, early twentieth century',
      orientation: 'landscape',
    },
    context: [
      'The project, for which Prof. Gauri Bharat received the Graham Foundation Grant 2019, examines the rise of concrete in early twentieth-century India — a history of materials, construction practices, and modernisation that precedes the arrival of modernist architecture.',
    ],
    questions: [],
    methodology: ['Archival research', 'Documentation', 'Research support on the history of materials, construction practices, and modernisation in India'],
    roleDetail: [
      'I worked as Research Assistant to Prof. Gauri Bharat from May 2023 to July 2024. The role involved archival research, documentation, and research support related to the history of materials, construction practices, and modernization in India.',
    ],
    outcomes: ['Archival research and documentation in support of the project.'],
    sections: [
      {
        id: 'connections',
        title: 'Connections',
        list: [
          'Histories of concrete',
          'Material experimentation',
          'Early twentieth-century construction',
          'Technological transitions',
          'Architectural modernisation',
          'Archival research and documentation',
        ],
      },
    ],
    gallery: [
      { src: 'research/concrete-01.jpg', alt: 'Archival material on concrete construction', caption: 'Archival material', orientation: 'portrait' },
      { src: 'research/concrete-02.jpg', alt: 'Documentation photograph', caption: 'Documentation', orientation: 'landscape' },
    ],
    relatedWriting: ['epistle-2024-facade-aesthetics'],
    todo: ['Link to the project or the Graham Foundation grant page, if desired'],
  },

  // ───────────────────────────────────────────── 06
  {
    slug: 'wittet-begg-construction-culture',
    number: '06',
    title: 'Tracing Construction Culture in British India',
    subtitle: 'George Wittet and John Begg',
    shortTitle: 'Construction Culture: Wittet and Begg',
    categories: ['Construction History', 'Architectural Research'],
    themes: ['construction-history-and-colonial-public-works', 'materials-technology-and-modernisation'],
    duration: 'Jan. 2026 – Present',
    institutions: ['School of Environmental Design and Architecture (SEDA), Navrachna University'],
    role: 'Dissertation Guide, Bachelor of Architecture',
    summary:
      'Academic research guidance for a Bachelor of Architecture dissertation titled “Tracing the Evolution of Construction Culture in British India: Reading George Wittet’s and John Begg’s Works in Bombay and Poona (1900s–1920s).”',
    cover: {
      src: 'architecture/wittet-begg-cover.jpg',
      alt: 'Historical photograph of a building by George Wittet or John Begg',
      caption: 'Bombay / Poona, 1900s–1920s',
      orientation: 'landscape',
    },
    context: [
      'George Wittet and John Begg were architects working in Bombay and Poona in the early twentieth century. Reading their works together offers a way to trace how construction culture in British India evolved during the 1900s–1920s.',
      'This is a student’s Bachelor of Architecture dissertation at SEDA; my role is that of dissertation guide.',
    ],
    questions: [],
    methodology: [],
    roleDetail: ['Guiding the Bachelor of Architecture research project as Dissertation Guide (Jan. 2026 – Present).'],
    outcomes: ['Ongoing.'],
    sections: [
      {
        id: 'case-studies',
        title: 'Buildings and Case Studies',
        body: ['Buildings and case studies will be listed here.'],
      },
      {
        id: 'visual-material',
        title: 'Drawings, Photographs, and Construction Documentation',
        gallery: [
          { src: 'architecture/wittet-begg-drawing-01.jpg', alt: 'Architectural drawing', caption: 'Architectural drawing', orientation: 'landscape' },
          { src: 'architecture/wittet-begg-photo-01.jpg', alt: 'Historical photograph', caption: 'Historical photograph', orientation: 'portrait' },
          { src: 'architecture/wittet-begg-construction-01.jpg', alt: 'Construction documentation', caption: 'Construction documentation', orientation: 'landscape' },
        ],
      },
      {
        id: 'bibliography',
        title: 'Bibliographic References',
        body: ['Selected references will be listed here.'],
      },
    ],
    gallery: [],
    relatedWriting: [],
    todo: [
      'Research questions, case-study buildings, and references — to be added with the student’s agreement',
      'Whether to name the student author (with consent)',
    ],
  },
];
