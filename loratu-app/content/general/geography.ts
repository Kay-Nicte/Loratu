import type { LearningPill } from '../../types/content';

export const geographyPills: LearningPill[] = [
  {
    id: 'gen-geo-001',
    topic: 'general',
    subtopic: 'geography',
    difficulty: 1,
    title: { es: 'Los Continentes', en: 'The Continents' },
    body: {
      es: 'La Tierra tiene 7 continentes: Asia (el más grande), África, América del Norte, América del Sur, Antártida, Europa y Oceanía (el más pequeño). Asia alberga al 60% de la población mundial.',
      en: "Earth has 7 continents: Asia (the largest), Africa, North America, South America, Antarctica, Europe, and Oceania (the smallest). Asia is home to 60% of the world's population.",
    },
    questions: [
      {
        id: 'gen-geo-001-q1',
        text: { es: '¿Cuántos continentes hay?', en: 'How many continents are there?' },
        options: { es: ['5', '6', '7', '8'], en: ['5', '6', '7', '8'] },
        correctIndex: 2,
        explanation: { es: 'Hay 7 continentes en la Tierra.', en: 'There are 7 continents on Earth.' },
      },
      {
        id: 'gen-geo-001-q2',
        text: { es: '¿Cuál es el continente más grande?', en: 'Which is the largest continent?' },
        options: { es: ['África', 'Europa', 'Asia', 'América'], en: ['Africa', 'Europe', 'Asia', 'America'] },
        correctIndex: 2,
        explanation: { es: 'Asia es el continente más grande.', en: 'Asia is the largest continent.' },
      },
      {
        id: 'gen-geo-001-q3',
        text: { es: '¿Qué % de la población vive en Asia?', en: 'What % of the population lives in Asia?' },
        options: { es: ['30%', '45%', '60%', '80%'], en: ['30%', '45%', '60%', '80%'] },
        correctIndex: 2,
        explanation: { es: 'Asia alberga al 60% de la población mundial.', en: "Asia is home to 60% of the world's population." },
      },
    ],
  },
  {
    id: 'gen-geo-002',
    topic: 'general',
    subtopic: 'geography',
    difficulty: 1,
    title: { es: 'Los Océanos', en: 'The Oceans' },
    body: {
      es: 'Hay 5 océanos: Pacífico (el más grande y profundo), Atlántico, Índico, Antártico y Ártico (el más pequeño). El Pacífico es más grande que toda la superficie terrestre junta.',
      en: "There are 5 oceans: Pacific (the largest and deepest), Atlantic, Indian, Southern, and Arctic (the smallest). The Pacific is larger than all the land surface combined.",
    },
    questions: [
      {
        id: 'gen-geo-002-q1',
        text: { es: '¿Cuántos océanos hay?', en: 'How many oceans are there?' },
        options: { es: ['3', '4', '5', '7'], en: ['3', '4', '5', '7'] },
        correctIndex: 2,
        explanation: { es: 'Hay 5 océanos.', en: 'There are 5 oceans.' },
      },
      {
        id: 'gen-geo-002-q2',
        text: { es: '¿Cuál es el océano más grande?', en: 'Which is the largest ocean?' },
        options: { es: ['Atlántico', 'Pacífico', 'Índico', 'Ártico'], en: ['Atlantic', 'Pacific', 'Indian', 'Arctic'] },
        correctIndex: 1,
        explanation: { es: 'El Pacífico es el más grande y profundo.', en: 'The Pacific is the largest and deepest.' },
      },
      {
        id: 'gen-geo-002-q3',
        text: { es: '¿Cuál es el más pequeño?', en: 'Which is the smallest?' },
        options: { es: ['Antártico', 'Índico', 'Atlántico', 'Ártico'], en: ['Southern', 'Indian', 'Atlantic', 'Arctic'] },
        correctIndex: 3,
        explanation: { es: 'El Ártico es el océano más pequeño.', en: 'The Arctic is the smallest ocean.' },
      },
    ],
  },
];
