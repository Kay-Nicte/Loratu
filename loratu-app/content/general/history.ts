import type { LearningPill } from '../../types/content';

export const historyPills: LearningPill[] = [
  {
    id: 'gen-hist-001',
    topic: 'general',
    subtopic: 'history',
    difficulty: 1,
    title: { es: 'La Gran Muralla China', en: 'The Great Wall of China' },
    body: {
      es: 'La Gran Muralla China tiene más de 21.000 km de longitud. Fue construida principalmente durante la Dinastía Ming (1368–1644). Contrariamente al mito popular, no puede verse desde el espacio a simple vista.',
      en: 'The Great Wall of China stretches over 21,000 km. It was mainly built during the Ming Dynasty (1368–1644). Contrary to popular myth, it cannot be seen from space with the naked eye.',
    },
    questions: [
      {
        id: 'gen-hist-001-q1',
        text: { es: '¿Cuántos km mide la Gran Muralla China?', en: 'How many km is the Great Wall of China?' },
        options: { es: ['5.000 km', '21.000 km', '10.000 km', '50.000 km'], en: ['5,000 km', '21,000 km', '10,000 km', '50,000 km'] },
        correctIndex: 1,
        explanation: { es: 'Mide más de 21.000 km en total.', en: 'It stretches over 21,000 km in total.' },
      },
      {
        id: 'gen-hist-001-q2',
        text: { es: '¿Qué dinastía la construyó mayoritariamente?', en: 'Which dynasty built most of it?' },
        options: { es: ['Han', 'Tang', 'Ming', 'Qing'], en: ['Han', 'Tang', 'Ming', 'Qing'] },
        correctIndex: 2,
        explanation: { es: 'La Dinastía Ming (1368–1644) construyó la mayor parte.', en: 'The Ming Dynasty (1368–1644) built the majority.' },
      },
      {
        id: 'gen-hist-001-q3',
        text: { es: '¿Se ve desde el espacio a simple vista?', en: 'Can it be seen from space with the naked eye?' },
        options: { es: ['Sí', 'No', 'Solo de noche', 'Solo en invierno'], en: ['Yes', 'No', 'Only at night', 'Only in winter'] },
        correctIndex: 1,
        explanation: { es: 'Es un mito popular. No se ve desde el espacio.', en: "It's a popular myth. It can't be seen from space." },
      },
    ],
  },
  {
    id: 'gen-hist-002',
    topic: 'general',
    subtopic: 'history',
    difficulty: 1,
    title: { es: 'Antiguo Egipto', en: 'Ancient Egypt' },
    body: {
      es: 'La civilización del Antiguo Egipto duró más de 3.000 años. La Gran Pirámide de Giza fue la estructura más alta del mundo durante casi 4.000 años. Los egipcios usaban el río Nilo como fuente de vida y escribían con jeroglíficos.',
      en: 'Ancient Egyptian civilization lasted over 3,000 years. The Great Pyramid of Giza was the tallest structure in the world for nearly 4,000 years. Egyptians relied on the Nile River and wrote using hieroglyphics.',
    },
    questions: [
      {
        id: 'gen-hist-002-q1',
        text: { es: '¿Cuántos años duró el Antiguo Egipto?', en: 'How many years did Ancient Egypt last?' },
        options: { es: ['500 años', '1.000 años', '3.000 años', '5.000 años'], en: ['500 years', '1,000 years', '3,000 years', '5,000 years'] },
        correctIndex: 2,
        explanation: { es: 'Duró más de 3.000 años.', en: 'It lasted over 3,000 years.' },
      },
      {
        id: 'gen-hist-002-q2',
        text: { es: '¿Qué río era fundamental?', en: 'Which river was essential?' },
        options: { es: ['Éufrates', 'Nilo', 'Tigris', 'Amazonas'], en: ['Euphrates', 'Nile', 'Tigris', 'Amazon'] },
        correctIndex: 1,
        explanation: { es: 'El Nilo era la fuente de vida de Egipto.', en: 'The Nile was the lifeblood of Egypt.' },
      },
      {
        id: 'gen-hist-002-q3',
        text: { es: '¿Qué sistema de escritura usaban?', en: 'What writing system did they use?' },
        options: { es: ['Cuneiforme', 'Alfabeto', 'Jeroglíficos', 'Rúnico'], en: ['Cuneiform', 'Alphabet', 'Hieroglyphics', 'Runic'] },
        correctIndex: 2,
        explanation: { es: 'Usaban jeroglíficos, un sistema de símbolos pictográficos.', en: 'They used hieroglyphics, a system of pictographic symbols.' },
      },
    ],
  },
  {
    id: 'gen-hist-003',
    topic: 'general',
    subtopic: 'history',
    difficulty: 2,
    title: { es: 'El Imperio Romano', en: 'The Roman Empire' },
    body: {
      es: 'El Imperio Romano duró desde el 27 a.C. hasta el 476 d.C. en Occidente. Su capital era Roma, y en su máxima extensión abarcaba desde Britania hasta Mesopotamia. Los romanos construyeron calzadas, acueductos y el Coliseo.',
      en: 'The Roman Empire lasted from 27 BC to 476 AD in the West. Its capital was Rome, and at its peak it stretched from Britain to Mesopotamia. Romans built roads, aqueducts, and the Colosseum.',
    },
    questions: [
      {
        id: 'gen-hist-003-q1',
        text: { es: '¿En qué año cayó el Imperio Romano de Occidente?', en: 'When did the Western Roman Empire fall?' },
        options: { es: ['300 d.C.', '476 d.C.', '1000 d.C.', '200 a.C.'], en: ['300 AD', '476 AD', '1000 AD', '200 BC'] },
        correctIndex: 1,
        explanation: { es: 'Cayó en el 476 d.C.', en: 'It fell in 476 AD.' },
      },
      {
        id: 'gen-hist-003-q2',
        text: { es: '¿Cuál era la capital del Imperio?', en: "What was the Empire's capital?" },
        options: { es: ['Atenas', 'Roma', 'Cartago', 'Alejandría'], en: ['Athens', 'Rome', 'Carthage', 'Alexandria'] },
        correctIndex: 1,
        explanation: { es: 'Roma era la capital del imperio.', en: 'Rome was the capital of the empire.' },
      },
      {
        id: 'gen-hist-003-q3',
        text: { es: '¿Qué gran anfiteatro construyeron los romanos?', en: 'What great amphitheater did the Romans build?' },
        options: { es: ['Partenón', 'Coliseo', 'Alhambra', 'Panteón'], en: ['Parthenon', 'Colosseum', 'Alhambra', 'Pantheon'] },
        correctIndex: 1,
        explanation: { es: 'El Coliseo de Roma, construido en el siglo I d.C.', en: 'The Colosseum in Rome, built in the 1st century AD.' },
      },
    ],
  },
];
