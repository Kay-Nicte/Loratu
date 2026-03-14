import type { LearningPill } from '../../types/content';

export const sciencePills: LearningPill[] = [
  {
    id: 'gen-sci-001',
    topic: 'general',
    subtopic: 'science',
    difficulty: 1,
    title: { es: 'El Sistema Solar', en: 'The Solar System' },
    body: {
      es: 'Nuestro Sistema Solar tiene 8 planetas. Plutón fue reclasificado como planeta enano en 2006. El más grande es Júpiter y el más pequeño Mercurio. La Tierra es el tercer planeta desde el Sol.',
      en: 'Our Solar System has 8 planets. Pluto was reclassified as a dwarf planet in 2006. The largest is Jupiter and the smallest is Mercury. Earth is the third planet from the Sun.',
    },
    questions: [
      {
        id: 'gen-sci-001-q1',
        text: { es: '¿Cuántos planetas tiene el Sistema Solar?', en: 'How many planets are in the Solar System?' },
        options: { es: ['7', '8', '9', '10'], en: ['7', '8', '9', '10'] },
        correctIndex: 1,
        explanation: { es: 'Tiene 8 planetas desde que Plutón fue reclasificado.', en: 'It has 8 planets since Pluto was reclassified.' },
      },
      {
        id: 'gen-sci-001-q2',
        text: { es: '¿Cuál es el planeta más grande?', en: 'Which is the largest planet?' },
        options: { es: ['Saturno', 'Urano', 'Júpiter', 'Neptuno'], en: ['Saturn', 'Uranus', 'Jupiter', 'Neptune'] },
        correctIndex: 2,
        explanation: { es: 'Júpiter es con diferencia el planeta más grande.', en: 'Jupiter is by far the largest planet.' },
      },
      {
        id: 'gen-sci-001-q3',
        text: { es: '¿Posición de la Tierra desde el Sol?', en: "Earth's position from the Sun?" },
        options: { es: ['1ª', '2ª', '3ª', '4ª'], en: ['1st', '2nd', '3rd', '4th'] },
        correctIndex: 2,
        explanation: { es: 'La Tierra es el tercer planeta.', en: 'Earth is the third planet.' },
      },
    ],
  },
  {
    id: 'gen-sci-002',
    topic: 'general',
    subtopic: 'science',
    difficulty: 1,
    title: { es: 'El Cuerpo Humano', en: 'The Human Body' },
    body: {
      es: 'El cuerpo humano adulto tiene 206 huesos. El corazón late unas 100.000 veces al día. El cerebro usa el 20% de la energía. El hueso más largo es el fémur y el más pequeño el estribo del oído.',
      en: 'The adult human body has 206 bones. The heart beats about 100,000 times a day. The brain uses 20% of our energy. The longest bone is the femur and the smallest is the stapes in the ear.',
    },
    questions: [
      {
        id: 'gen-sci-002-q1',
        text: { es: '¿Cuántos huesos tiene un adulto?', en: 'How many bones does an adult have?' },
        options: { es: ['150', '206', '300', '180'], en: ['150', '206', '300', '180'] },
        correctIndex: 1,
        explanation: { es: 'Un adulto tiene 206 huesos.', en: 'An adult has 206 bones.' },
      },
      {
        id: 'gen-sci-002-q2',
        text: { es: '¿Latidos del corazón al día?', en: 'Heartbeats per day?' },
        options: { es: ['10.000', '50.000', '100.000', '200.000'], en: ['10,000', '50,000', '100,000', '200,000'] },
        correctIndex: 2,
        explanation: { es: 'El corazón late unas 100.000 veces al día.', en: 'The heart beats about 100,000 times per day.' },
      },
      {
        id: 'gen-sci-002-q3',
        text: { es: '¿Cuál es el hueso más largo?', en: 'What is the longest bone?' },
        options: { es: ['Húmero', 'Tibia', 'Fémur', 'Radio'], en: ['Humerus', 'Tibia', 'Femur', 'Radius'] },
        correctIndex: 2,
        explanation: { es: 'El fémur, en el muslo, es el más largo.', en: 'The femur, in the thigh, is the longest.' },
      },
    ],
  },
  {
    id: 'gen-sci-003',
    topic: 'general',
    subtopic: 'science',
    difficulty: 2,
    title: { es: 'El Agua', en: 'Water' },
    body: {
      es: 'El agua cubre el 71% de la superficie terrestre, pero solo el 2.5% es agua dulce. El agua es la única sustancia natural que existe en tres estados: sólido (hielo), líquido y gas (vapor). Su fórmula química es H₂O.',
      en: "Water covers 71% of Earth's surface, but only 2.5% is freshwater. Water is the only natural substance that exists in three states: solid (ice), liquid, and gas (steam). Its chemical formula is H₂O.",
    },
    questions: [
      {
        id: 'gen-sci-003-q1',
        text: { es: '¿Qué porcentaje de la Tierra cubre el agua?', en: "What percentage of Earth's surface does water cover?" },
        options: { es: ['50%', '60%', '71%', '85%'], en: ['50%', '60%', '71%', '85%'] },
        correctIndex: 2,
        explanation: { es: 'El agua cubre aproximadamente el 71%.', en: 'Water covers approximately 71%.' },
      },
      {
        id: 'gen-sci-003-q2',
        text: { es: '¿Cuál es la fórmula del agua?', en: 'What is the formula for water?' },
        options: { es: ['CO₂', 'H₂O', 'O₂', 'NaCl'], en: ['CO₂', 'H₂O', 'O₂', 'NaCl'] },
        correctIndex: 1,
        explanation: { es: 'H₂O: dos átomos de hidrógeno y uno de oxígeno.', en: 'H₂O: two hydrogen atoms and one oxygen atom.' },
      },
      {
        id: 'gen-sci-003-q3',
        text: { es: '¿Cuánta agua de la Tierra es dulce?', en: 'How much of Earth\'s water is freshwater?' },
        options: { es: ['2.5%', '10%', '25%', '50%'], en: ['2.5%', '10%', '25%', '50%'] },
        correctIndex: 0,
        explanation: { es: 'Solo el 2.5% del agua es dulce.', en: 'Only 2.5% of water is freshwater.' },
      },
    ],
  },
];
