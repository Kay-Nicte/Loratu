import type { LearningPill } from '../../types/content';

export const javascriptPills: LearningPill[] = [
  {
    id: 'code-js-001',
    topic: 'programming',
    subtopic: 'javascript',
    difficulty: 1,
    title: { es: 'JavaScript: Arrays', en: 'JavaScript: Arrays' },
    body: {
      es: 'Un array es una lista de valores:\n\nconst plantas = [\"🌸\", \"🌵\", \"🌻\"];\n\nMétodos clave:\n• .push() → añade al final\n• .pop() → elimina el último\n• .length → número de elementos\n• .map() → transforma cada elemento',
      en: 'An array is a list of values:\n\nconst plants = [\"🌸\", \"🌵\", \"🌻\"];\n\nKey methods:\n• .push() → adds to the end\n• .pop() → removes the last\n• .length → number of elements\n• .map() → transforms each element',
    },
    questions: [
      {
        id: 'code-js-001-q1',
        text: { es: '¿Qué hace .push() en un array?', en: 'What does .push() do to an array?' },
        options: {
          es: ['Elimina el primero', 'Añade al final', 'Ordena', 'Busca'],
          en: ['Removes the first', 'Adds to the end', 'Sorts', 'Searches'],
        },
        correctIndex: 1,
        explanation: { es: '.push() añade un elemento al final del array.', en: '.push() adds an element to the end of the array.' },
      },
      {
        id: 'code-js-001-q2',
        text: { es: '¿Cómo obtener el número de elementos?', en: 'How to get the number of elements?' },
        options: { es: ['.count()', '.size', '.length', '.total'], en: ['.count()', '.size', '.length', '.total'] },
        correctIndex: 2,
        explanation: { es: '.length devuelve el número de elementos.', en: '.length returns the number of elements.' },
      },
      {
        id: 'code-js-001-q3',
        text: { es: '¿Qué hace .map()?', en: 'What does .map() do?' },
        options: {
          es: ['Ordena', 'Elimina duplicados', 'Transforma cada elemento', 'Filtra'],
          en: ['Sorts', 'Removes duplicates', 'Transforms each element', 'Filters'],
        },
        correctIndex: 2,
        explanation: { es: '.map() crea un nuevo array transformando cada elemento.', en: '.map() creates a new array by transforming each element.' },
      },
    ],
  },
  {
    id: 'code-js-002',
    topic: 'programming',
    subtopic: 'javascript',
    difficulty: 1,
    title: { es: 'CSS Flexbox', en: 'CSS Flexbox' },
    body: {
      es: 'Flexbox es un sistema de layout en CSS para alinear elementos:\n\n• display: flex → activa flexbox\n• justify-content → alinea en eje horizontal\n• align-items → alinea en eje vertical\n• flex-direction → row (fila) o column (columna)',
      en: 'Flexbox is a CSS layout system for aligning elements:\n\n• display: flex → activates flexbox\n• justify-content → aligns on horizontal axis\n• align-items → aligns on vertical axis\n• flex-direction → row or column',
    },
    questions: [
      {
        id: 'code-js-002-q1',
        text: { es: '¿Qué propiedad activa flexbox?', en: 'Which property activates flexbox?' },
        options: { es: ['layout: flex', 'display: flex', 'position: flex', 'flex: true'], en: ['layout: flex', 'display: flex', 'position: flex', 'flex: true'] },
        correctIndex: 1,
        explanation: { es: 'display: flex activa el modo flexbox.', en: 'display: flex activates flexbox mode.' },
      },
      {
        id: 'code-js-002-q2',
        text: { es: 'justify-content alinea en:', en: 'justify-content aligns on:' },
        options: { es: ['Eje vertical', 'Eje horizontal', 'Ambos', 'Ninguno'], en: ['Vertical axis', 'Horizontal axis', 'Both', 'Neither'] },
        correctIndex: 1,
        explanation: { es: 'justify-content controla el eje horizontal (main axis).', en: 'justify-content controls the horizontal (main) axis.' },
      },
      {
        id: 'code-js-002-q3',
        text: { es: '¿Qué valor hace una columna?', en: 'Which value creates a column?' },
        options: { es: ['row', 'horizontal', 'column', 'vertical'], en: ['row', 'horizontal', 'column', 'vertical'] },
        correctIndex: 2,
        explanation: { es: 'flex-direction: column dispone en columna.', en: 'flex-direction: column arranges items in a column.' },
      },
    ],
  },
  {
    id: 'code-js-003',
    topic: 'programming',
    subtopic: 'python',
    difficulty: 1,
    title: { es: 'Variables en Python', en: 'Python Variables' },
    body: {
      es: 'En Python no necesitas declarar el tipo de variable:\n\n• nombre = \"Ana\" → string\n• edad = 25 → integer\n• precio = 9.99 → float\n• activo = True → boolean (¡con mayúscula!)',
      en: "In Python you don't need to declare variable types:\n\n• name = \"Ana\" → string\n• age = 25 → integer\n• price = 9.99 → float\n• active = True → boolean (capitalized!)",
    },
    questions: [
      {
        id: 'code-js-003-q1',
        text: { es: '¿Necesitas declarar el tipo en Python?', en: 'Do you need to declare types in Python?' },
        options: { es: ['Sí, siempre', 'No', 'Solo strings', 'Solo números'], en: ['Yes, always', 'No', 'Only strings', 'Only numbers'] },
        correctIndex: 1,
        explanation: { es: 'Python infiere el tipo automáticamente.', en: 'Python infers types automatically.' },
      },
      {
        id: 'code-js-003-q2',
        text: { es: '¿Booleano verdadero en Python?', en: 'Boolean true in Python?' },
        options: { es: ['true', 'TRUE', 'True', '1'], en: ['true', 'TRUE', 'True', '1'] },
        correctIndex: 2,
        explanation: { es: 'En Python es True con T mayúscula.', en: 'In Python it\'s True with a capital T.' },
      },
      {
        id: 'code-js-003-q3',
        text: { es: 'precio = 9.99 es tipo:', en: 'price = 9.99 is type:' },
        options: { es: ['int', 'string', 'float', 'double'], en: ['int', 'string', 'float', 'double'] },
        correctIndex: 2,
        explanation: { es: 'Un número con decimales es float.', en: 'A number with decimals is a float.' },
      },
    ],
  },
];
