import type { LearningPill } from '../../types/content';

export const artsPills: LearningPill[] = [
  {
    id: 'gen-art-001',
    topic: 'general',
    subtopic: 'arts',
    difficulty: 1,
    title: { es: 'La Mona Lisa', en: 'The Mona Lisa' },
    body: {
      es: 'La Mona Lisa fue pintada por Leonardo da Vinci entre 1503 y 1519. Está en el Museo del Louvre en París. Su sonrisa misteriosa ha fascinado al mundo durante siglos. El cuadro es sorprendentemente pequeño: solo 77 × 53 cm.',
      en: 'The Mona Lisa was painted by Leonardo da Vinci between 1503 and 1519. It hangs in the Louvre Museum in Paris. Her mysterious smile has fascinated the world for centuries. The painting is surprisingly small: only 77 × 53 cm.',
    },
    questions: [
      {
        id: 'gen-art-001-q1',
        text: { es: '¿Quién pintó la Mona Lisa?', en: 'Who painted the Mona Lisa?' },
        options: { es: ['Miguel Ángel', 'Leonardo da Vinci', 'Rafael', 'Botticelli'], en: ['Michelangelo', 'Leonardo da Vinci', 'Raphael', 'Botticelli'] },
        correctIndex: 1,
        explanation: { es: 'Leonardo da Vinci la pintó entre 1503 y 1519.', en: 'Leonardo da Vinci painted it between 1503 and 1519.' },
      },
      {
        id: 'gen-art-001-q2',
        text: { es: '¿En qué museo está?', en: 'In which museum is it displayed?' },
        options: { es: ['El Prado', 'El Louvre', 'Uffizi', 'British Museum'], en: ['The Prado', 'The Louvre', 'Uffizi', 'British Museum'] },
        correctIndex: 1,
        explanation: { es: 'Está en el Museo del Louvre en París.', en: "It's in the Louvre Museum in Paris." },
      },
      {
        id: 'gen-art-001-q3',
        text: { es: '¿Qué hace famosa a la Mona Lisa?', en: 'What makes the Mona Lisa famous?' },
        options: { es: ['Su tamaño enorme', 'Su sonrisa misteriosa', 'Sus colores brillantes', 'Su marco de oro'], en: ['Its huge size', 'Her mysterious smile', 'Its bright colors', 'Its gold frame'] },
        correctIndex: 1,
        explanation: { es: 'Su sonrisa misteriosa ha fascinado durante siglos.', en: 'Her mysterious smile has fascinated people for centuries.' },
      },
    ],
  },
  {
    id: 'gen-art-002',
    topic: 'general',
    subtopic: 'arts',
    difficulty: 2,
    title: { es: 'La Música Clásica', en: 'Classical Music' },
    body: {
      es: 'Beethoven compuso 9 sinfonías y quedó completamente sordo antes de terminar la última. Mozart escribió su primera composición a los 5 años. Bach es considerado el padre de la música occidental. Vivaldi compuso "Las Cuatro Estaciones".',
      en: 'Beethoven composed 9 symphonies and went completely deaf before finishing the last one. Mozart wrote his first composition at age 5. Bach is considered the father of Western music. Vivaldi composed "The Four Seasons".',
    },
    questions: [
      {
        id: 'gen-art-002-q1',
        text: { es: '¿Cuántas sinfonías compuso Beethoven?', en: 'How many symphonies did Beethoven compose?' },
        options: { es: ['5', '7', '9', '12'], en: ['5', '7', '9', '12'] },
        correctIndex: 2,
        explanation: { es: 'Beethoven compuso 9 sinfonías.', en: 'Beethoven composed 9 symphonies.' },
      },
      {
        id: 'gen-art-002-q2',
        text: { es: '¿A qué edad compuso Mozart por primera vez?', en: 'At what age did Mozart first compose?' },
        options: { es: ['3 años', '5 años', '8 años', '10 años'], en: ['3 years', '5 years', '8 years', '10 years'] },
        correctIndex: 1,
        explanation: { es: 'Mozart escribió su primera obra a los 5 años.', en: 'Mozart wrote his first composition at age 5.' },
      },
      {
        id: 'gen-art-002-q3',
        text: { es: '¿Quién compuso "Las Cuatro Estaciones"?', en: 'Who composed "The Four Seasons"?' },
        options: { es: ['Bach', 'Mozart', 'Vivaldi', 'Beethoven'], en: ['Bach', 'Mozart', 'Vivaldi', 'Beethoven'] },
        correctIndex: 2,
        explanation: { es: 'Vivaldi compuso "Las Cuatro Estaciones".', en: 'Vivaldi composed "The Four Seasons".' },
      },
    ],
  },
];
