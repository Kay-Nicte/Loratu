import type { LearningPill } from '../../types/content';

export const spanishPills: LearningPill[] = [
  {
    id: 'lang-es-001',
    topic: 'language',
    subtopic: 'spanish',
    difficulty: 1,
    title: { es: 'Expresiones Coloquiales', en: 'Spanish Slang Expressions' },
    body: {
      es: 'Expresiones muy usadas en español:\n\n• "Mola" → Está genial (España)\n• "Flipar" → Sorprenderse mucho\n• "Currar" → Trabajar\n• "Tío/Tía" → Amigo/a (informal)',
      en: 'Common Spanish expressions:\n\n• "Mola" → That\'s cool (Spain)\n• "Flipar" → To be amazed/shocked\n• "Currar" → To work\n• "Tío/Tía" → Dude/Friend (informal)',
    },
    questions: [
      {
        id: 'lang-es-001-q1',
        text: { es: '¿Qué significa "mola"?', en: 'What does "mola" mean?' },
        options: { es: ['Es feo', 'Está genial', 'Es caro', 'Está roto'], en: ["It's ugly", "It's cool", "It's expensive", "It's broken"] },
        correctIndex: 1,
        explanation: { es: '"Mola" = está genial, es guay.', en: '"Mola" means something is cool/awesome.' },
      },
      {
        id: 'lang-es-001-q2',
        text: { es: '¿Qué significa "currar"?', en: 'What does "currar" mean?' },
        options: { es: ['Correr', 'Cocinar', 'Trabajar', 'Dormir'], en: ['To run', 'To cook', 'To work', 'To sleep'] },
        correctIndex: 2,
        explanation: { es: '"Currar" = trabajar (coloquial).', en: '"Currar" means to work (slang).' },
      },
      {
        id: 'lang-es-001-q3',
        text: { es: '¿Qué significa "flipar"?', en: 'What does "flipar" mean?' },
        options: { es: ['Saltar', 'Sorprenderse mucho', 'Caerse', 'Enfadarse'], en: ['To jump', 'To be amazed', 'To fall', 'To get angry'] },
        correctIndex: 1,
        explanation: { es: '"Flipar" = sorprenderse mucho, alucinar.', en: '"Flipar" means to be amazed or shocked.' },
      },
    ],
  },
  {
    id: 'lang-es-002',
    topic: 'language',
    subtopic: 'spanish',
    difficulty: 2,
    title: { es: 'Ser vs Estar', en: 'Ser vs Estar' },
    body: {
      es: 'Ambos significan "to be" pero se usan diferente:\n\n• SER: identidad, origen, profesión, características permanentes. "Soy médico", "Es alto"\n• ESTAR: estado temporal, ubicación, emociones. "Estoy cansado", "Está en Madrid"\n\nTruco: si puede cambiar → ESTAR. Si es permanente → SER.',
      en: 'Both mean "to be" but are used differently:\n\n• SER: identity, origin, profession, permanent traits. "Soy médico" (I\'m a doctor), "Es alto" (He\'s tall)\n• ESTAR: temporary states, location, emotions. "Estoy cansado" (I\'m tired), "Está en Madrid" (She\'s in Madrid)\n\nTrick: if it can change → ESTAR. If permanent → SER.',
    },
    questions: [
      {
        id: 'lang-es-002-q1',
        text: { es: '"Estoy cansado" usa ESTAR porque:', en: '"Estoy cansado" uses ESTAR because:' },
        options: { es: ['Es mi profesión', 'Es un estado temporal', 'Es mi origen', 'Es mi personalidad'], en: ["It's my profession", "It's a temporary state", "It's my origin", "It's my personality"] },
        correctIndex: 1,
        explanation: { es: 'Estar cansado es temporal, puede cambiar.', en: 'Being tired is temporary, it can change.' },
      },
      {
        id: 'lang-es-002-q2',
        text: { es: '"Soy español" usa SER porque:', en: '"Soy español" uses SER because:' },
        options: { es: ['Es temporal', 'Es una ubicación', 'Es una identidad/origen', 'Es una emoción'], en: ["It's temporary", "It's a location", "It's identity/origin", "It's an emotion"] },
        correctIndex: 2,
        explanation: { es: 'La nacionalidad es identidad permanente → SER.', en: 'Nationality is permanent identity → SER.' },
      },
      {
        id: 'lang-es-002-q3',
        text: { es: '"El café está caliente" usa:', en: '"El café está caliente" uses:' },
        options: { es: ['SER', 'ESTAR', 'Ambos', 'Ninguno'], en: ['SER', 'ESTAR', 'Both', 'Neither'] },
        correctIndex: 1,
        explanation: { es: 'El café puede enfriarse → estado temporal → ESTAR.', en: 'Coffee can cool down → temporary state → ESTAR.' },
      },
    ],
  },
];
