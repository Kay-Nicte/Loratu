import { getLang } from './i18n';

export type Topic = 'general' | 'language' | 'programming';

interface Localized {
  es: string;
  en: string;
}

interface LocalizedArr {
  es: string[];
  en: string[];
}

export interface Question {
  id: string;
  text: Localized;
  options: LocalizedArr;
  correctIndex: number;
  explanation: Localized;
}

export interface LearningPill {
  id: string;
  topic: Topic;
  subtopic: string;
  difficulty: number;
  title: Localized;
  body: Localized;
  questions: Question[];
}

// Helper to get localized string
export function loc(l: Localized): string {
  return l[getLang()];
}
export function locArr(l: LocalizedArr): string[] {
  return l[getLang()];
}

// ---- All 17 pills ----
const ALL_PILLS: Record<Topic, LearningPill[]> = {
  general: [
    {
      id: 'gen-hist-001', topic: 'general', subtopic: 'history', difficulty: 1,
      title: { es: 'La Gran Muralla China', en: 'The Great Wall of China' },
      body: {
        es: 'La Gran Muralla China tiene mas de 21.000 km de longitud. Fue construida principalmente durante la Dinastia Ming (1368-1644). Contrariamente al mito popular, no puede verse desde el espacio a simple vista.',
        en: 'The Great Wall of China stretches over 21,000 km. It was mainly built during the Ming Dynasty (1368-1644). Contrary to popular myth, it cannot be seen from space with the naked eye.',
      },
      questions: [
        { id: 'gen-hist-001-q1', text: { es: 'Cuantos km mide la Gran Muralla China?', en: 'How many km is the Great Wall of China?' }, options: { es: ['5.000 km', '21.000 km', '10.000 km', '50.000 km'], en: ['5,000 km', '21,000 km', '10,000 km', '50,000 km'] }, correctIndex: 1, explanation: { es: 'Mide mas de 21.000 km en total.', en: 'It stretches over 21,000 km in total.' } },
        { id: 'gen-hist-001-q2', text: { es: 'Que dinastia la construyo mayoritariamente?', en: 'Which dynasty built most of it?' }, options: { es: ['Han', 'Tang', 'Ming', 'Qing'], en: ['Han', 'Tang', 'Ming', 'Qing'] }, correctIndex: 2, explanation: { es: 'La Dinastia Ming (1368-1644) construyo la mayor parte.', en: 'The Ming Dynasty (1368-1644) built the majority.' } },
        { id: 'gen-hist-001-q3', text: { es: 'Se ve desde el espacio a simple vista?', en: 'Can it be seen from space with the naked eye?' }, options: { es: ['Si', 'No', 'Solo de noche', 'Solo en invierno'], en: ['Yes', 'No', 'Only at night', 'Only in winter'] }, correctIndex: 1, explanation: { es: 'Es un mito popular. No se ve desde el espacio.', en: "It's a popular myth. It can't be seen from space." } },
      ],
    },
    {
      id: 'gen-hist-002', topic: 'general', subtopic: 'history', difficulty: 1,
      title: { es: 'Antiguo Egipto', en: 'Ancient Egypt' },
      body: {
        es: 'La civilizacion del Antiguo Egipto duro mas de 3.000 anos. La Gran Piramide de Giza fue la estructura mas alta del mundo durante casi 4.000 anos. Los egipcios usaban el rio Nilo como fuente de vida y escribian con jeroglificos.',
        en: 'Ancient Egyptian civilization lasted over 3,000 years. The Great Pyramid of Giza was the tallest structure in the world for nearly 4,000 years. Egyptians relied on the Nile River and wrote using hieroglyphics.',
      },
      questions: [
        { id: 'gen-hist-002-q1', text: { es: 'Cuantos anos duro el Antiguo Egipto?', en: 'How many years did Ancient Egypt last?' }, options: { es: ['500 anos', '1.000 anos', '3.000 anos', '5.000 anos'], en: ['500 years', '1,000 years', '3,000 years', '5,000 years'] }, correctIndex: 2, explanation: { es: 'Duro mas de 3.000 anos.', en: 'It lasted over 3,000 years.' } },
        { id: 'gen-hist-002-q2', text: { es: 'Que rio era fundamental?', en: 'Which river was essential?' }, options: { es: ['Eufrates', 'Nilo', 'Tigris', 'Amazonas'], en: ['Euphrates', 'Nile', 'Tigris', 'Amazon'] }, correctIndex: 1, explanation: { es: 'El Nilo era la fuente de vida de Egipto.', en: 'The Nile was the lifeblood of Egypt.' } },
        { id: 'gen-hist-002-q3', text: { es: 'Que sistema de escritura usaban?', en: 'What writing system did they use?' }, options: { es: ['Cuneiforme', 'Alfabeto', 'Jeroglificos', 'Runico'], en: ['Cuneiform', 'Alphabet', 'Hieroglyphics', 'Runic'] }, correctIndex: 2, explanation: { es: 'Usaban jeroglificos, un sistema de simbolos pictograficos.', en: 'They used hieroglyphics, a system of pictographic symbols.' } },
      ],
    },
    {
      id: 'gen-hist-003', topic: 'general', subtopic: 'history', difficulty: 2,
      title: { es: 'El Imperio Romano', en: 'The Roman Empire' },
      body: {
        es: 'El Imperio Romano duro desde el 27 a.C. hasta el 476 d.C. en Occidente. Su capital era Roma, y en su maxima extension abarcaba desde Britania hasta Mesopotamia. Los romanos construyeron calzadas, acueductos y el Coliseo.',
        en: 'The Roman Empire lasted from 27 BC to 476 AD in the West. Its capital was Rome, and at its peak it stretched from Britain to Mesopotamia. Romans built roads, aqueducts, and the Colosseum.',
      },
      questions: [
        { id: 'gen-hist-003-q1', text: { es: 'En que ano cayo el Imperio Romano de Occidente?', en: 'When did the Western Roman Empire fall?' }, options: { es: ['300 d.C.', '476 d.C.', '1000 d.C.', '200 a.C.'], en: ['300 AD', '476 AD', '1000 AD', '200 BC'] }, correctIndex: 1, explanation: { es: 'Cayo en el 476 d.C.', en: 'It fell in 476 AD.' } },
        { id: 'gen-hist-003-q2', text: { es: 'Cual era la capital del Imperio?', en: "What was the Empire's capital?" }, options: { es: ['Atenas', 'Roma', 'Cartago', 'Alejandria'], en: ['Athens', 'Rome', 'Carthage', 'Alexandria'] }, correctIndex: 1, explanation: { es: 'Roma era la capital del imperio.', en: 'Rome was the capital of the empire.' } },
        { id: 'gen-hist-003-q3', text: { es: 'Que gran anfiteatro construyeron los romanos?', en: 'What great amphitheater did the Romans build?' }, options: { es: ['Partenon', 'Coliseo', 'Alhambra', 'Panteon'], en: ['Parthenon', 'Colosseum', 'Alhambra', 'Pantheon'] }, correctIndex: 1, explanation: { es: 'El Coliseo de Roma, construido en el siglo I d.C.', en: 'The Colosseum in Rome, built in the 1st century AD.' } },
      ],
    },
    {
      id: 'gen-sci-001', topic: 'general', subtopic: 'science', difficulty: 1,
      title: { es: 'El Sistema Solar', en: 'The Solar System' },
      body: {
        es: 'Nuestro Sistema Solar tiene 8 planetas. Pluton fue reclasificado como planeta enano en 2006. El mas grande es Jupiter y el mas pequeno Mercurio. La Tierra es el tercer planeta desde el Sol.',
        en: 'Our Solar System has 8 planets. Pluto was reclassified as a dwarf planet in 2006. The largest is Jupiter and the smallest is Mercury. Earth is the third planet from the Sun.',
      },
      questions: [
        { id: 'gen-sci-001-q1', text: { es: 'Cuantos planetas tiene el Sistema Solar?', en: 'How many planets are in the Solar System?' }, options: { es: ['7', '8', '9', '10'], en: ['7', '8', '9', '10'] }, correctIndex: 1, explanation: { es: 'Tiene 8 planetas desde que Pluton fue reclasificado.', en: 'It has 8 planets since Pluto was reclassified.' } },
        { id: 'gen-sci-001-q2', text: { es: 'Cual es el planeta mas grande?', en: 'Which is the largest planet?' }, options: { es: ['Saturno', 'Urano', 'Jupiter', 'Neptuno'], en: ['Saturn', 'Uranus', 'Jupiter', 'Neptune'] }, correctIndex: 2, explanation: { es: 'Jupiter es con diferencia el planeta mas grande.', en: 'Jupiter is by far the largest planet.' } },
        { id: 'gen-sci-001-q3', text: { es: 'Posicion de la Tierra desde el Sol?', en: "Earth's position from the Sun?" }, options: { es: ['1a', '2a', '3a', '4a'], en: ['1st', '2nd', '3rd', '4th'] }, correctIndex: 2, explanation: { es: 'La Tierra es el tercer planeta.', en: 'Earth is the third planet.' } },
      ],
    },
    {
      id: 'gen-sci-002', topic: 'general', subtopic: 'science', difficulty: 1,
      title: { es: 'El Cuerpo Humano', en: 'The Human Body' },
      body: {
        es: 'El cuerpo humano adulto tiene 206 huesos. El corazon late unas 100.000 veces al dia. El cerebro usa el 20% de la energia. El hueso mas largo es el femur y el mas pequeno el estribo del oido.',
        en: 'The adult human body has 206 bones. The heart beats about 100,000 times a day. The brain uses 20% of our energy. The longest bone is the femur and the smallest is the stapes in the ear.',
      },
      questions: [
        { id: 'gen-sci-002-q1', text: { es: 'Cuantos huesos tiene un adulto?', en: 'How many bones does an adult have?' }, options: { es: ['150', '206', '300', '180'], en: ['150', '206', '300', '180'] }, correctIndex: 1, explanation: { es: 'Un adulto tiene 206 huesos.', en: 'An adult has 206 bones.' } },
        { id: 'gen-sci-002-q2', text: { es: 'Latidos del corazon al dia?', en: 'Heartbeats per day?' }, options: { es: ['10.000', '50.000', '100.000', '200.000'], en: ['10,000', '50,000', '100,000', '200,000'] }, correctIndex: 2, explanation: { es: 'El corazon late unas 100.000 veces al dia.', en: 'The heart beats about 100,000 times per day.' } },
        { id: 'gen-sci-002-q3', text: { es: 'Cual es el hueso mas largo?', en: 'What is the longest bone?' }, options: { es: ['Humero', 'Tibia', 'Femur', 'Radio'], en: ['Humerus', 'Tibia', 'Femur', 'Radius'] }, correctIndex: 2, explanation: { es: 'El femur, en el muslo, es el mas largo.', en: 'The femur, in the thigh, is the longest.' } },
      ],
    },
    {
      id: 'gen-sci-003', topic: 'general', subtopic: 'science', difficulty: 2,
      title: { es: 'El Agua', en: 'Water' },
      body: {
        es: 'El agua cubre el 71% de la superficie terrestre, pero solo el 2.5% es agua dulce. El agua es la unica sustancia natural que existe en tres estados: solido (hielo), liquido y gas (vapor). Su formula quimica es H2O.',
        en: "Water covers 71% of Earth's surface, but only 2.5% is freshwater. Water is the only natural substance that exists in three states: solid (ice), liquid, and gas (steam). Its chemical formula is H2O.",
      },
      questions: [
        { id: 'gen-sci-003-q1', text: { es: 'Que porcentaje de la Tierra cubre el agua?', en: "What percentage of Earth's surface does water cover?" }, options: { es: ['50%', '60%', '71%', '85%'], en: ['50%', '60%', '71%', '85%'] }, correctIndex: 2, explanation: { es: 'El agua cubre aproximadamente el 71%.', en: 'Water covers approximately 71%.' } },
        { id: 'gen-sci-003-q2', text: { es: 'Cual es la formula del agua?', en: 'What is the formula for water?' }, options: { es: ['CO2', 'H2O', 'O2', 'NaCl'], en: ['CO2', 'H2O', 'O2', 'NaCl'] }, correctIndex: 1, explanation: { es: 'H2O: dos atomos de hidrogeno y uno de oxigeno.', en: 'H2O: two hydrogen atoms and one oxygen atom.' } },
        { id: 'gen-sci-003-q3', text: { es: 'Cuanta agua de la Tierra es dulce?', en: "How much of Earth's water is freshwater?" }, options: { es: ['2.5%', '10%', '25%', '50%'], en: ['2.5%', '10%', '25%', '50%'] }, correctIndex: 0, explanation: { es: 'Solo el 2.5% del agua es dulce.', en: 'Only 2.5% of water is freshwater.' } },
      ],
    },
    {
      id: 'gen-geo-001', topic: 'general', subtopic: 'geography', difficulty: 1,
      title: { es: 'Los Continentes', en: 'The Continents' },
      body: {
        es: 'La Tierra tiene 7 continentes: Asia (el mas grande), Africa, America del Norte, America del Sur, Antartida, Europa y Oceania (el mas pequeno). Asia alberga al 60% de la poblacion mundial.',
        en: "Earth has 7 continents: Asia (the largest), Africa, North America, South America, Antarctica, Europe, and Oceania (the smallest). Asia is home to 60% of the world's population.",
      },
      questions: [
        { id: 'gen-geo-001-q1', text: { es: 'Cuantos continentes hay?', en: 'How many continents are there?' }, options: { es: ['5', '6', '7', '8'], en: ['5', '6', '7', '8'] }, correctIndex: 2, explanation: { es: 'Hay 7 continentes en la Tierra.', en: 'There are 7 continents on Earth.' } },
        { id: 'gen-geo-001-q2', text: { es: 'Cual es el continente mas grande?', en: 'Which is the largest continent?' }, options: { es: ['Africa', 'Europa', 'Asia', 'America'], en: ['Africa', 'Europe', 'Asia', 'America'] }, correctIndex: 2, explanation: { es: 'Asia es el continente mas grande.', en: 'Asia is the largest continent.' } },
        { id: 'gen-geo-001-q3', text: { es: 'Que % de la poblacion vive en Asia?', en: 'What % of the population lives in Asia?' }, options: { es: ['30%', '45%', '60%', '80%'], en: ['30%', '45%', '60%', '80%'] }, correctIndex: 2, explanation: { es: 'Asia alberga al 60% de la poblacion mundial.', en: "Asia is home to 60% of the world's population." } },
      ],
    },
    {
      id: 'gen-geo-002', topic: 'general', subtopic: 'geography', difficulty: 1,
      title: { es: 'Los Oceanos', en: 'The Oceans' },
      body: {
        es: 'Hay 5 oceanos: Pacifico (el mas grande y profundo), Atlantico, Indico, Antartico y Artico (el mas pequeno). El Pacifico es mas grande que toda la superficie terrestre junta.',
        en: 'There are 5 oceans: Pacific (the largest and deepest), Atlantic, Indian, Southern, and Arctic (the smallest). The Pacific is larger than all the land surface combined.',
      },
      questions: [
        { id: 'gen-geo-002-q1', text: { es: 'Cuantos oceanos hay?', en: 'How many oceans are there?' }, options: { es: ['3', '4', '5', '7'], en: ['3', '4', '5', '7'] }, correctIndex: 2, explanation: { es: 'Hay 5 oceanos.', en: 'There are 5 oceans.' } },
        { id: 'gen-geo-002-q2', text: { es: 'Cual es el oceano mas grande?', en: 'Which is the largest ocean?' }, options: { es: ['Atlantico', 'Pacifico', 'Indico', 'Artico'], en: ['Atlantic', 'Pacific', 'Indian', 'Arctic'] }, correctIndex: 1, explanation: { es: 'El Pacifico es el mas grande y profundo.', en: 'The Pacific is the largest and deepest.' } },
        { id: 'gen-geo-002-q3', text: { es: 'Cual es el mas pequeno?', en: 'Which is the smallest?' }, options: { es: ['Antartico', 'Indico', 'Atlantico', 'Artico'], en: ['Southern', 'Indian', 'Atlantic', 'Arctic'] }, correctIndex: 3, explanation: { es: 'El Artico es el oceano mas pequeno.', en: 'The Arctic is the smallest ocean.' } },
      ],
    },
    {
      id: 'gen-art-001', topic: 'general', subtopic: 'arts', difficulty: 1,
      title: { es: 'La Mona Lisa', en: 'The Mona Lisa' },
      body: {
        es: 'La Mona Lisa fue pintada por Leonardo da Vinci entre 1503 y 1519. Esta en el Museo del Louvre en Paris. Su sonrisa misteriosa ha fascinado al mundo durante siglos. El cuadro es sorprendentemente pequeno: solo 77 x 53 cm.',
        en: 'The Mona Lisa was painted by Leonardo da Vinci between 1503 and 1519. It hangs in the Louvre Museum in Paris. Her mysterious smile has fascinated the world for centuries. The painting is surprisingly small: only 77 x 53 cm.',
      },
      questions: [
        { id: 'gen-art-001-q1', text: { es: 'Quien pinto la Mona Lisa?', en: 'Who painted the Mona Lisa?' }, options: { es: ['Miguel Angel', 'Leonardo da Vinci', 'Rafael', 'Botticelli'], en: ['Michelangelo', 'Leonardo da Vinci', 'Raphael', 'Botticelli'] }, correctIndex: 1, explanation: { es: 'Leonardo da Vinci la pinto entre 1503 y 1519.', en: 'Leonardo da Vinci painted it between 1503 and 1519.' } },
        { id: 'gen-art-001-q2', text: { es: 'En que museo esta?', en: 'In which museum is it displayed?' }, options: { es: ['El Prado', 'El Louvre', 'Uffizi', 'British Museum'], en: ['The Prado', 'The Louvre', 'Uffizi', 'British Museum'] }, correctIndex: 1, explanation: { es: 'Esta en el Museo del Louvre en Paris.', en: "It's in the Louvre Museum in Paris." } },
        { id: 'gen-art-001-q3', text: { es: 'Que hace famosa a la Mona Lisa?', en: 'What makes the Mona Lisa famous?' }, options: { es: ['Su tamano enorme', 'Su sonrisa misteriosa', 'Sus colores brillantes', 'Su marco de oro'], en: ['Its huge size', 'Her mysterious smile', 'Its bright colors', 'Its gold frame'] }, correctIndex: 1, explanation: { es: 'Su sonrisa misteriosa ha fascinado durante siglos.', en: 'Her mysterious smile has fascinated people for centuries.' } },
      ],
    },
    {
      id: 'gen-art-002', topic: 'general', subtopic: 'arts', difficulty: 2,
      title: { es: 'La Musica Clasica', en: 'Classical Music' },
      body: {
        es: 'Beethoven compuso 9 sinfonias y quedo completamente sordo antes de terminar la ultima. Mozart escribio su primera composicion a los 5 anos. Bach es considerado el padre de la musica occidental. Vivaldi compuso "Las Cuatro Estaciones".',
        en: 'Beethoven composed 9 symphonies and went completely deaf before finishing the last one. Mozart wrote his first composition at age 5. Bach is considered the father of Western music. Vivaldi composed "The Four Seasons".',
      },
      questions: [
        { id: 'gen-art-002-q1', text: { es: 'Cuantas sinfonias compuso Beethoven?', en: 'How many symphonies did Beethoven compose?' }, options: { es: ['5', '7', '9', '12'], en: ['5', '7', '9', '12'] }, correctIndex: 2, explanation: { es: 'Beethoven compuso 9 sinfonias.', en: 'Beethoven composed 9 symphonies.' } },
        { id: 'gen-art-002-q2', text: { es: 'A que edad compuso Mozart por primera vez?', en: 'At what age did Mozart first compose?' }, options: { es: ['3 anos', '5 anos', '8 anos', '10 anos'], en: ['3 years', '5 years', '8 years', '10 years'] }, correctIndex: 1, explanation: { es: 'Mozart escribio su primera obra a los 5 anos.', en: 'Mozart wrote his first composition at age 5.' } },
        { id: 'gen-art-002-q3', text: { es: 'Quien compuso "Las Cuatro Estaciones"?', en: 'Who composed "The Four Seasons"?' }, options: { es: ['Bach', 'Mozart', 'Vivaldi', 'Beethoven'], en: ['Bach', 'Mozart', 'Vivaldi', 'Beethoven'] }, correctIndex: 2, explanation: { es: 'Vivaldi compuso "Las Cuatro Estaciones".', en: 'Vivaldi composed "The Four Seasons".' } },
      ],
    },
  ],
  language: [
    {
      id: 'lang-en-001', topic: 'language', subtopic: 'english', difficulty: 1,
      title: { es: 'Phrasal Verbs Esenciales', en: 'Essential Phrasal Verbs' },
      body: {
        es: 'Los phrasal verbs son combinaciones de verbo + preposicion muy comunes en ingles:\n\n- Give up: Rendirse\n- Look up: Buscar (en diccionario)\n- Run into: Encontrarse por casualidad\n- Put off: Posponer',
        en: 'Phrasal verbs are common verb + preposition combinations in English:\n\n- Give up: To quit, surrender\n- Look up: To search (in a dictionary)\n- Run into: To meet by chance\n- Put off: To postpone',
      },
      questions: [
        { id: 'lang-en-001-q1', text: { es: 'Que significa "give up"?', en: 'What does "give up" mean?' }, options: { es: ['Dar arriba', 'Rendirse', 'Buscar', 'Aparecer'], en: ['Give upward', 'Surrender/quit', 'Search', 'Show up'] }, correctIndex: 1, explanation: { es: '"Give up" = rendirse, dejar de intentar.', en: '"Give up" means to surrender or stop trying.' } },
        { id: 'lang-en-001-q2', text: { es: 'Que significa "I ran into my friend"?', en: 'What does "I ran into my friend" mean?' }, options: { es: ['Corri hacia mi amigo', 'Le empuje', 'Me lo encontre por casualidad', 'Le llame'], en: ['I ran toward my friend', 'I pushed my friend', 'I met my friend by chance', 'I called my friend'] }, correctIndex: 2, explanation: { es: '"Run into" = encontrarse con alguien por casualidad.', en: '"Run into" means to meet someone unexpectedly.' } },
        { id: 'lang-en-001-q3', text: { es: 'Que significa "put off the meeting"?', en: 'What does "put off the meeting" mean?' }, options: { es: ['Cancelar la reunion', 'Posponer la reunion', 'Organizar la reunion', 'Asistir a la reunion'], en: ['Cancel the meeting', 'Postpone the meeting', 'Organize the meeting', 'Attend the meeting'] }, correctIndex: 1, explanation: { es: '"Put off" = posponer, aplazar.', en: '"Put off" means to postpone or delay.' } },
      ],
    },
    {
      id: 'lang-en-002', topic: 'language', subtopic: 'english', difficulty: 1,
      title: { es: 'False Friends', en: 'False Friends' },
      body: {
        es: 'Los false friends son palabras que parecen iguales en ingles y espanol pero significan cosas distintas:\n\n- Embarrassed: avergonzado (NO embarazada)\n- Actually: en realidad (NO actualmente)\n- Library: biblioteca (NO libreria)\n- Sympathetic: comprensivo (NO simpatico)',
        en: 'False friends are words that look similar in English and Spanish but mean different things:\n\n- Embarrassed: ashamed (NOT pregnant/embarazada)\n- Actually: in fact (NOT currently/actualmente)\n- Library: a place with books (NOT a bookshop/libreria)\n- Sympathetic: understanding (NOT nice/simpatico)',
      },
      questions: [
        { id: 'lang-en-002-q1', text: { es: 'Que significa "I\'m embarrassed"?', en: 'What does "I\'m embarrassed" mean in Spanish?' }, options: { es: ['Estoy embarazada', 'Estoy avergonzado/a', 'Estoy cansado/a', 'Estoy feliz'], en: ["I'm pregnant", "I'm ashamed", "I'm tired", "I'm happy"] }, correctIndex: 1, explanation: { es: '"Embarrassed" = avergonzado, NO embarazada.', en: '"Embarrassed" means ashamed, NOT pregnant.' } },
        { id: 'lang-en-002-q2', text: { es: 'Que significa "actually" en espanol?', en: 'What is the correct translation of "actually"?' }, options: { es: ['Actualmente', 'Ahora', 'En realidad', 'Por fin'], en: ['Currently', 'Right now', 'In fact', 'Finally'] }, correctIndex: 2, explanation: { es: '"Actually" = en realidad, NO actualmente.', en: '"Actually" means "in fact", NOT "currently".' } },
        { id: 'lang-en-002-q3', text: { es: 'Que es una "library"?', en: 'What is a "library" (in Spanish context)?' }, options: { es: ['Libreria', 'Biblioteca', 'Libre', 'Libro'], en: ['Bookshop', 'Library/Biblioteca', 'Free', 'Book'] }, correctIndex: 1, explanation: { es: '"Library" = biblioteca. Libreria = bookshop.', en: '"Library" is a biblioteca, not a bookshop (libreria).' } },
      ],
    },
    {
      id: 'lang-en-003', topic: 'language', subtopic: 'english', difficulty: 2,
      title: { es: 'Conectores en Ingles', en: 'English Connectors' },
      body: {
        es: 'Los conectores unen ideas en ingles:\n\n- However: Sin embargo\n- Therefore: Por lo tanto\n- Although: Aunque\n- Moreover: Ademas\n- Nevertheless: No obstante',
        en: 'Connectors link ideas in English:\n\n- However: But/Nevertheless\n- Therefore: As a result\n- Although: Even though\n- Moreover: In addition\n- Nevertheless: Despite that',
      },
      questions: [
        { id: 'lang-en-003-q1', text: { es: 'Que significa "however"?', en: 'What does "however" mean?' }, options: { es: ['Como sea', 'Sin embargo', 'Ademas', 'Por lo tanto'], en: ['Whatever', 'Nevertheless/But', 'Moreover', 'Therefore'] }, correctIndex: 1, explanation: { es: '"However" = sin embargo.', en: '"However" means "nevertheless" or "but".' } },
        { id: 'lang-en-003-q2', text: { es: 'Que significa "therefore"?', en: 'What does "therefore" mean?' }, options: { es: ['Para eso', 'Sin embargo', 'Por lo tanto', 'Aunque'], en: ['For that', 'However', 'As a result', 'Although'] }, correctIndex: 2, explanation: { es: '"Therefore" = por lo tanto.', en: '"Therefore" means "as a result" or "consequently".' } },
        { id: 'lang-en-003-q3', text: { es: 'Que significa "although"?', en: 'What does "although" mean?' }, options: { es: ['Tambien', 'Aunque', 'Ademas', 'Entonces'], en: ['Also', 'Even though', 'Moreover', 'Then'] }, correctIndex: 1, explanation: { es: '"Although" = aunque.', en: '"Although" means "even though".' } },
      ],
    },
    {
      id: 'lang-es-001', topic: 'language', subtopic: 'spanish', difficulty: 1,
      title: { es: 'Expresiones Coloquiales', en: 'Spanish Slang Expressions' },
      body: {
        es: 'Expresiones muy usadas en espanol:\n\n- "Mola": Esta genial (Espana)\n- "Flipar": Sorprenderse mucho\n- "Currar": Trabajar\n- "Tio/Tia": Amigo/a (informal)',
        en: 'Common Spanish expressions:\n\n- "Mola": That\'s cool (Spain)\n- "Flipar": To be amazed/shocked\n- "Currar": To work\n- "Tio/Tia": Dude/Friend (informal)',
      },
      questions: [
        { id: 'lang-es-001-q1', text: { es: 'Que significa "mola"?', en: 'What does "mola" mean?' }, options: { es: ['Es feo', 'Esta genial', 'Es caro', 'Esta roto'], en: ["It's ugly", "It's cool", "It's expensive", "It's broken"] }, correctIndex: 1, explanation: { es: '"Mola" = esta genial, es guay.', en: '"Mola" means something is cool/awesome.' } },
        { id: 'lang-es-001-q2', text: { es: 'Que significa "currar"?', en: 'What does "currar" mean?' }, options: { es: ['Correr', 'Cocinar', 'Trabajar', 'Dormir'], en: ['To run', 'To cook', 'To work', 'To sleep'] }, correctIndex: 2, explanation: { es: '"Currar" = trabajar (coloquial).', en: '"Currar" means to work (slang).' } },
        { id: 'lang-es-001-q3', text: { es: 'Que significa "flipar"?', en: 'What does "flipar" mean?' }, options: { es: ['Saltar', 'Sorprenderse mucho', 'Caerse', 'Enfadarse'], en: ['To jump', 'To be amazed', 'To fall', 'To get angry'] }, correctIndex: 1, explanation: { es: '"Flipar" = sorprenderse mucho, alucinar.', en: '"Flipar" means to be amazed or shocked.' } },
      ],
    },
    {
      id: 'lang-es-002', topic: 'language', subtopic: 'spanish', difficulty: 2,
      title: { es: 'Ser vs Estar', en: 'Ser vs Estar' },
      body: {
        es: 'Ambos significan "to be" pero se usan diferente:\n\n- SER: identidad, origen, profesion, caracteristicas permanentes. "Soy medico", "Es alto"\n- ESTAR: estado temporal, ubicacion, emociones. "Estoy cansado", "Esta en Madrid"\n\nTruco: si puede cambiar -> ESTAR. Si es permanente -> SER.',
        en: 'Both mean "to be" but are used differently:\n\n- SER: identity, origin, profession, permanent traits. "Soy medico" (I\'m a doctor), "Es alto" (He\'s tall)\n- ESTAR: temporary states, location, emotions. "Estoy cansado" (I\'m tired), "Esta en Madrid" (She\'s in Madrid)\n\nTrick: if it can change -> ESTAR. If permanent -> SER.',
      },
      questions: [
        { id: 'lang-es-002-q1', text: { es: '"Estoy cansado" usa ESTAR porque:', en: '"Estoy cansado" uses ESTAR because:' }, options: { es: ['Es mi profesion', 'Es un estado temporal', 'Es mi origen', 'Es mi personalidad'], en: ["It's my profession", "It's a temporary state", "It's my origin", "It's my personality"] }, correctIndex: 1, explanation: { es: 'Estar cansado es temporal, puede cambiar.', en: 'Being tired is temporary, it can change.' } },
        { id: 'lang-es-002-q2', text: { es: '"Soy espanol" usa SER porque:', en: '"Soy espanol" uses SER because:' }, options: { es: ['Es temporal', 'Es una ubicacion', 'Es una identidad/origen', 'Es una emocion'], en: ["It's temporary", "It's a location", "It's identity/origin", "It's an emotion"] }, correctIndex: 2, explanation: { es: 'La nacionalidad es identidad permanente -> SER.', en: 'Nationality is permanent identity -> SER.' } },
        { id: 'lang-es-002-q3', text: { es: '"El cafe esta caliente" usa:', en: '"El cafe esta caliente" uses:' }, options: { es: ['SER', 'ESTAR', 'Ambos', 'Ninguno'], en: ['SER', 'ESTAR', 'Both', 'Neither'] }, correctIndex: 1, explanation: { es: 'El cafe puede enfriarse -> estado temporal -> ESTAR.', en: 'Coffee can cool down -> temporary state -> ESTAR.' } },
      ],
    },
  ],
  programming: [
    {
      id: 'code-js-001', topic: 'programming', subtopic: 'javascript', difficulty: 1,
      title: { es: 'JavaScript: Arrays', en: 'JavaScript: Arrays' },
      body: {
        es: 'Un array es una lista de valores:\n\nconst plantas = ["rosa", "cactus", "girasol"];\n\nMetodos clave:\n- .push(): anade al final\n- .pop(): elimina el ultimo\n- .length: numero de elementos\n- .map(): transforma cada elemento',
        en: 'An array is a list of values:\n\nconst plants = ["rose", "cactus", "sunflower"];\n\nKey methods:\n- .push(): adds to the end\n- .pop(): removes the last\n- .length: number of elements\n- .map(): transforms each element',
      },
      questions: [
        { id: 'code-js-001-q1', text: { es: 'Que hace .push() en un array?', en: 'What does .push() do to an array?' }, options: { es: ['Elimina el primero', 'Anade al final', 'Ordena', 'Busca'], en: ['Removes the first', 'Adds to the end', 'Sorts', 'Searches'] }, correctIndex: 1, explanation: { es: '.push() anade un elemento al final del array.', en: '.push() adds an element to the end of the array.' } },
        { id: 'code-js-001-q2', text: { es: 'Como obtener el numero de elementos?', en: 'How to get the number of elements?' }, options: { es: ['.count()', '.size', '.length', '.total'], en: ['.count()', '.size', '.length', '.total'] }, correctIndex: 2, explanation: { es: '.length devuelve el numero de elementos.', en: '.length returns the number of elements.' } },
        { id: 'code-js-001-q3', text: { es: 'Que hace .map()?', en: 'What does .map() do?' }, options: { es: ['Ordena', 'Elimina duplicados', 'Transforma cada elemento', 'Filtra'], en: ['Sorts', 'Removes duplicates', 'Transforms each element', 'Filters'] }, correctIndex: 2, explanation: { es: '.map() crea un nuevo array transformando cada elemento.', en: '.map() creates a new array by transforming each element.' } },
      ],
    },
    {
      id: 'code-js-002', topic: 'programming', subtopic: 'javascript', difficulty: 1,
      title: { es: 'CSS Flexbox', en: 'CSS Flexbox' },
      body: {
        es: 'Flexbox es un sistema de layout en CSS para alinear elementos:\n\n- display: flex: activa flexbox\n- justify-content: alinea en eje horizontal\n- align-items: alinea en eje vertical\n- flex-direction: row (fila) o column (columna)',
        en: 'Flexbox is a CSS layout system for aligning elements:\n\n- display: flex: activates flexbox\n- justify-content: aligns on horizontal axis\n- align-items: aligns on vertical axis\n- flex-direction: row or column',
      },
      questions: [
        { id: 'code-js-002-q1', text: { es: 'Que propiedad activa flexbox?', en: 'Which property activates flexbox?' }, options: { es: ['layout: flex', 'display: flex', 'position: flex', 'flex: true'], en: ['layout: flex', 'display: flex', 'position: flex', 'flex: true'] }, correctIndex: 1, explanation: { es: 'display: flex activa el modo flexbox.', en: 'display: flex activates flexbox mode.' } },
        { id: 'code-js-002-q2', text: { es: 'justify-content alinea en:', en: 'justify-content aligns on:' }, options: { es: ['Eje vertical', 'Eje horizontal', 'Ambos', 'Ninguno'], en: ['Vertical axis', 'Horizontal axis', 'Both', 'Neither'] }, correctIndex: 1, explanation: { es: 'justify-content controla el eje horizontal (main axis).', en: 'justify-content controls the horizontal (main) axis.' } },
        { id: 'code-js-002-q3', text: { es: 'Que valor hace una columna?', en: 'Which value creates a column?' }, options: { es: ['row', 'horizontal', 'column', 'vertical'], en: ['row', 'horizontal', 'column', 'vertical'] }, correctIndex: 2, explanation: { es: 'flex-direction: column dispone en columna.', en: 'flex-direction: column arranges items in a column.' } },
      ],
    },
    {
      id: 'code-js-003', topic: 'programming', subtopic: 'python', difficulty: 1,
      title: { es: 'Variables en Python', en: 'Python Variables' },
      body: {
        es: 'En Python no necesitas declarar el tipo de variable:\n\n- nombre = "Ana": string\n- edad = 25: integer\n- precio = 9.99: float\n- activo = True: boolean (con mayuscula!)',
        en: "In Python you don't need to declare variable types:\n\n- name = \"Ana\": string\n- age = 25: integer\n- price = 9.99: float\n- active = True: boolean (capitalized!)",
      },
      questions: [
        { id: 'code-js-003-q1', text: { es: 'Necesitas declarar el tipo en Python?', en: 'Do you need to declare types in Python?' }, options: { es: ['Si, siempre', 'No', 'Solo strings', 'Solo numeros'], en: ['Yes, always', 'No', 'Only strings', 'Only numbers'] }, correctIndex: 1, explanation: { es: 'Python infiere el tipo automaticamente.', en: 'Python infers types automatically.' } },
        { id: 'code-js-003-q2', text: { es: 'Booleano verdadero en Python?', en: 'Boolean true in Python?' }, options: { es: ['true', 'TRUE', 'True', '1'], en: ['true', 'TRUE', 'True', '1'] }, correctIndex: 2, explanation: { es: 'En Python es True con T mayuscula.', en: "In Python it's True with a capital T." } },
        { id: 'code-js-003-q3', text: { es: 'precio = 9.99 es tipo:', en: 'price = 9.99 is type:' }, options: { es: ['int', 'string', 'float', 'double'], en: ['int', 'string', 'float', 'double'] }, correctIndex: 2, explanation: { es: 'Un numero con decimales es float.', en: 'A number with decimals is a float.' } },
      ],
    },
    {
      id: 'code-css-001', topic: 'programming', subtopic: 'css', difficulty: 1,
      title: { es: 'Selectores CSS', en: 'CSS Selectors' },
      body: {
        es: 'Los selectores indican a que elementos aplicar estilos:\n\n- .clase: selecciona por clase\n- #id: selecciona por ID (unico)\n- elemento: selecciona por etiqueta (p, div, h1)\n- elemento > hijo: selecciona hijos directos',
        en: 'Selectors tell CSS which elements to style:\n\n- .class: selects by class\n- #id: selects by ID (unique)\n- element: selects by tag (p, div, h1)\n- element > child: selects direct children',
      },
      questions: [
        { id: 'code-css-001-q1', text: { es: 'Que simbolo selecciona por clase?', en: 'Which symbol selects by class?' }, options: { es: ['#', '.', '@', '&'], en: ['#', '.', '@', '&'] }, correctIndex: 1, explanation: { es: 'El punto (.) selecciona por clase.', en: 'The dot (.) selects by class.' } },
        { id: 'code-css-001-q2', text: { es: 'Que simbolo selecciona por ID?', en: 'Which symbol selects by ID?' }, options: { es: ['.', '#', '*', '~'], en: ['.', '#', '*', '~'] }, correctIndex: 1, explanation: { es: 'El hash (#) selecciona por ID.', en: 'The hash (#) selects by ID.' } },
        { id: 'code-css-001-q3', text: { es: 'Un ID debe ser unico en la pagina?', en: 'Should an ID be unique on the page?' }, options: { es: ['No', 'Si', 'Depende', 'Solo en HTML5'], en: ['No', 'Yes', 'Depends', 'Only in HTML5'] }, correctIndex: 1, explanation: { es: 'Cada ID debe ser unico en el documento.', en: 'Each ID must be unique in the document.' } },
      ],
    },
    {
      id: 'code-css-002', topic: 'programming', subtopic: 'css', difficulty: 2,
      title: { es: 'CSS Grid', en: 'CSS Grid' },
      body: {
        es: 'CSS Grid es un sistema de layout bidimensional:\n\n- display: grid: activa grid\n- grid-template-columns: define columnas\n- grid-template-rows: define filas\n- gap: espacio entre celdas\n\nEjemplo: grid-template-columns: 1fr 1fr 1fr -> 3 columnas iguales.',
        en: 'CSS Grid is a two-dimensional layout system:\n\n- display: grid: activates grid\n- grid-template-columns: defines columns\n- grid-template-rows: defines rows\n- gap: space between cells\n\nExample: grid-template-columns: 1fr 1fr 1fr -> 3 equal columns.',
      },
      questions: [
        { id: 'code-css-002-q1', text: { es: 'Que activa CSS Grid?', en: 'What activates CSS Grid?' }, options: { es: ['display: flex', 'display: grid', 'layout: grid', 'grid: true'], en: ['display: flex', 'display: grid', 'layout: grid', 'grid: true'] }, correctIndex: 1, explanation: { es: 'display: grid activa el sistema de grid.', en: 'display: grid activates the grid system.' } },
        { id: 'code-css-002-q2', text: { es: 'Que significa "1fr 1fr 1fr"?', en: 'What does "1fr 1fr 1fr" mean?' }, options: { es: ['1 columna', '2 columnas', '3 columnas iguales', '3 filas'], en: ['1 column', '2 columns', '3 equal columns', '3 rows'] }, correctIndex: 2, explanation: { es: '1fr 1fr 1fr = 3 columnas de igual tamano.', en: '1fr 1fr 1fr = 3 equal-sized columns.' } },
        { id: 'code-css-002-q3', text: { es: 'Que propiedad define el espacio entre celdas?', en: 'Which property defines space between cells?' }, options: { es: ['margin', 'padding', 'gap', 'spacing'], en: ['margin', 'padding', 'gap', 'spacing'] }, correctIndex: 2, explanation: { es: 'gap define el espacio entre celdas del grid.', en: 'gap defines the space between grid cells.' } },
      ],
    },
  ],
};

export function getPillsByTopic(topic: Topic): LearningPill[] {
  return ALL_PILLS[topic] ?? [];
}

export function getRandomPill(topic: Topic, completedIds: string[]): LearningPill | null {
  const pills = ALL_PILLS[topic] ?? [];
  const available = pills.filter(p => !completedIds.includes(p.id));
  if (available.length === 0) {
    if (pills.length === 0) return null;
    return pills[Math.floor(Math.random() * pills.length)];
  }
  return available[Math.floor(Math.random() * available.length)];
}
