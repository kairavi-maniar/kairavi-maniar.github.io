import type { Exhibition } from './types';

/** EXHIBITIONS & CURATORIAL WORK — newest first. */
export const exhibitions: Exhibition[] = [
  {
    id: 'jaigarh-2024',
    number: 'EX-02',
    title: 'Jaigarh: A Stimulus for the Evolution of the Jaipur Landscape',
    dates: '28–29 December 2024',
    sortDate: '2024-12-28',
    place: 'Jaigarh, Jaipur, India',
    role: 'Exhibition Curator with Riyaz Tayyibji',
    collaborators: ['MAHR, CEPT University', 'CHC, Center for Heritage Conservation', 'JPCT, Jaigarh Public Charitable Trust'],
    context: 'Presented as part of the Jaigarh Literature Festival.',
    overview:
      'Curated the exhibition in collaboration with MAHR, CEPT University; CHC, Center for Heritage Conservation; and JPCT, Jaigarh Public Charitable Trust. The exhibition was presented as part of the Jaigarh Literature Festival and explored Jaigarh’s role in shaping the evolution of the Jaipur landscape.',
    cover: {
      src: 'exhibitions/jaigarh-cover.jpg',
      alt: 'Exhibition view, Jaigarh: A Stimulus for the Evolution of the Jaipur Landscape',
      caption: 'Exhibition view — Jaigarh, December 2024',
      orientation: 'landscape',
    },
    gallery: [
      { src: 'exhibitions/jaigarh-01.jpg', alt: 'Exhibition installation at Jaigarh', caption: 'Exhibition installation', orientation: 'landscape' },
      { src: 'exhibitions/jaigarh-02.jpg', alt: 'Exhibition panel', caption: 'Exhibition panel', orientation: 'portrait' },
      { src: 'exhibitions/jaigarh-03.jpg', alt: 'Interpretive material on the Jaipur landscape', caption: 'Interpretive material', orientation: 'landscape' },
    ],
    documentation: ['Exhibition photographs', 'Curatorial documentation', 'Interpretive material'],
    themes: [],
  },
  {
    id: 'peoples-buildings-2024',
    number: 'EX-01',
    title: 'People’s Buildings: Tracing Pune’s Architectural Past',
    dates: '22–23 January 2024',
    sortDate: '2024-01-22',
    place: 'Pune, Maharashtra, India',
    role: 'Exhibition Curator with Dr. Sarah Melsens',
    collaborators: ['Public Works Department Pune', 'CEPT University'],
    overview:
      'Curated the exhibition in collaboration with the Public Works Department Pune and CEPT University. The exhibition traced Pune’s architectural past through public buildings, institutional histories, and archival material.',
    cover: {
      src: 'exhibitions/peoples-buildings-cover.jpg',
      alt: 'Exhibition view, People’s Buildings: Tracing Pune’s Architectural Past',
      caption: 'Exhibition view — Pune, January 2024',
      orientation: 'landscape',
    },
    gallery: [
      { src: 'exhibitions/peoples-buildings-01.jpg', alt: 'Exhibition photograph', caption: 'Exhibition photograph', orientation: 'landscape' },
      { src: 'exhibitions/peoples-buildings-02.jpg', alt: 'Exhibition panel and display design', caption: 'Panels and display design', orientation: 'portrait' },
      { src: 'exhibitions/peoples-buildings-03.jpg', alt: 'Architectural drawing displayed in the exhibition', caption: 'Architectural drawing on display', orientation: 'landscape' },
      { src: 'exhibitions/peoples-buildings-04.jpg', alt: 'Historical photograph displayed in the exhibition', caption: 'Historical photograph on display', orientation: 'portrait' },
    ],
    documentation: ['Exhibition photographs', 'Panels and display designs', 'Architectural drawings', 'Historical photographs', 'Exhibition captions', 'Curatorial notes'],
    themes: ['archives-and-archival-habitats', 'construction-history-and-colonial-public-works'],
  },
];
