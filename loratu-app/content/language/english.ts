import type { LearningPill } from '../../types/content';

export const englishPills: LearningPill[] = [
  {
    id: 'lang-en-001',
    topic: 'language',
    subtopic: 'english',
    difficulty: 1,
    title: { es: 'Phrasal Verbs Esenciales', en: 'Essential Phrasal Verbs' },
    body: {
      es: 'Los phrasal verbs son combinaciones de verbo + preposición muy comunes en inglés:\n\n• Give up → Rendirse\n• Look up → Buscar (en diccionario)\n• Run into → Encontrarse por casualidad\n• Put off → Posponer',
      en: 'Phrasal verbs are common verb + preposition combinations in English:\n\n• Give up → To quit, surrender\n• Look up → To search (in a dictionary)\n• Run into → To meet by chance\n• Put off → To postpone',
    },
    questions: [
      {
        id: 'lang-en-001-q1',
        text: { es: "¿Qué significa 'give up'?", en: "What does 'give up' mean?" },
        options: { es: ['Dar arriba', 'Rendirse', 'Buscar', 'Aparecer'], en: ['Give upward', 'Surrender/quit', 'Search', 'Show up'] },
        correctIndex: 1,
        explanation: { es: "'Give up' = rendirse, dejar de intentar.", en: "'Give up' means to surrender or stop trying." },
      },
      {
        id: 'lang-en-001-q2',
        text: { es: "¿Qué significa 'I ran into my friend'?", en: "What does 'I ran into my friend' mean?" },
        options: {
          es: ['Corrí hacia mi amigo', 'Le empujé', 'Me lo encontré por casualidad', 'Le llamé'],
          en: ['I ran toward my friend', 'I pushed my friend', 'I met my friend by chance', 'I called my friend'],
        },
        correctIndex: 2,
        explanation: { es: "'Run into' = encontrarse con alguien por casualidad.", en: "'Run into' means to meet someone unexpectedly." },
      },
      {
        id: 'lang-en-001-q3',
        text: { es: "¿Qué significa 'put off the meeting'?", en: "What does 'put off the meeting' mean?" },
        options: {
          es: ['Cancelar la reunión', 'Posponer la reunión', 'Organizar la reunión', 'Asistir a la reunión'],
          en: ['Cancel the meeting', 'Postpone the meeting', 'Organize the meeting', 'Attend the meeting'],
        },
        correctIndex: 1,
        explanation: { es: "'Put off' = posponer, aplazar.", en: "'Put off' means to postpone or delay." },
      },
    ],
  },
  {
    id: 'lang-en-002',
    topic: 'language',
    subtopic: 'english',
    difficulty: 1,
    title: { es: 'False Friends', en: 'False Friends' },
    body: {
      es: 'Los false friends son palabras que parecen iguales en inglés y español pero significan cosas distintas:\n\n• Embarrassed → avergonzado (NO embarazada)\n• Actually → en realidad (NO actualmente)\n• Library → biblioteca (NO librería)\n• Sympathetic → comprensivo (NO simpático)',
      en: 'False friends are words that look similar in English and Spanish but mean different things:\n\n• Embarrassed → ashamed (NOT pregnant/embarazada)\n• Actually → in fact (NOT currently/actualmente)\n• Library → a place with books (NOT a bookshop/librería)\n• Sympathetic → understanding (NOT nice/simpático)',
    },
    questions: [
      {
        id: 'lang-en-002-q1',
        text: { es: "¿Qué significa 'I'm embarrassed'?", en: "What does 'I'm embarrassed' mean in Spanish?" },
        options: {
          es: ['Estoy embarazada', 'Estoy avergonzado/a', 'Estoy cansado/a', 'Estoy feliz'],
          en: ['I\'m pregnant', 'I\'m ashamed', 'I\'m tired', 'I\'m happy'],
        },
        correctIndex: 1,
        explanation: { es: "'Embarrassed' = avergonzado, NO embarazada.", en: "'Embarrassed' means ashamed, NOT pregnant." },
      },
      {
        id: 'lang-en-002-q2',
        text: { es: "¿Qué significa 'actually' en español?", en: "What is the correct translation of 'actually'?" },
        options: { es: ['Actualmente', 'Ahora', 'En realidad', 'Por fin'], en: ['Currently', 'Right now', 'In fact', 'Finally'] },
        correctIndex: 2,
        explanation: { es: "'Actually' = en realidad, NO actualmente.", en: "'Actually' means 'in fact', NOT 'currently'." },
      },
      {
        id: 'lang-en-002-q3',
        text: { es: "¿Qué es una 'library'?", en: "What is a 'library' (in Spanish context)?" },
        options: { es: ['Librería', 'Biblioteca', 'Libre', 'Libro'], en: ['Bookshop', 'Library/Biblioteca', 'Free', 'Book'] },
        correctIndex: 1,
        explanation: { es: "'Library' = biblioteca. Librería = bookshop.", en: "'Library' is a biblioteca, not a bookshop (librería)." },
      },
    ],
  },
  {
    id: 'lang-en-003',
    topic: 'language',
    subtopic: 'english',
    difficulty: 2,
    title: { es: 'Conectores en Inglés', en: 'English Connectors' },
    body: {
      es: 'Los conectores unen ideas en inglés:\n\n• However → Sin embargo\n• Therefore → Por lo tanto\n• Although → Aunque\n• Moreover → Además\n• Nevertheless → No obstante',
      en: 'Connectors link ideas in English:\n\n• However → But/Nevertheless\n• Therefore → As a result\n• Although → Even though\n• Moreover → In addition\n• Nevertheless → Despite that',
    },
    questions: [
      {
        id: 'lang-en-003-q1',
        text: { es: "¿Qué significa 'however'?", en: "What does 'however' mean?" },
        options: { es: ['Como sea', 'Sin embargo', 'Además', 'Por lo tanto'], en: ['Whatever', 'Nevertheless/But', 'Moreover', 'Therefore'] },
        correctIndex: 1,
        explanation: { es: "'However' = sin embargo.", en: "'However' means 'nevertheless' or 'but'." },
      },
      {
        id: 'lang-en-003-q2',
        text: { es: "¿Qué significa 'therefore'?", en: "What does 'therefore' mean?" },
        options: { es: ['Para eso', 'Sin embargo', 'Por lo tanto', 'Aunque'], en: ['For that', 'However', 'As a result', 'Although'] },
        correctIndex: 2,
        explanation: { es: "'Therefore' = por lo tanto.", en: "'Therefore' means 'as a result' or 'consequently'." },
      },
      {
        id: 'lang-en-003-q3',
        text: { es: "¿Qué significa 'although'?", en: "What does 'although' mean?" },
        options: { es: ['También', 'Aunque', 'Además', 'Entonces'], en: ['Also', 'Even though', 'Moreover', 'Then'] },
        correctIndex: 1,
        explanation: { es: "'Although' = aunque.", en: "'Although' means 'even though'." },
      },
    ],
  },
];
