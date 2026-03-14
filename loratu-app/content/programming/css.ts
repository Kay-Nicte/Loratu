import type { LearningPill } from '../../types/content';

export const cssPills: LearningPill[] = [
  {
    id: 'code-css-001',
    topic: 'programming',
    subtopic: 'css',
    difficulty: 1,
    title: { es: 'Selectores CSS', en: 'CSS Selectors' },
    body: {
      es: 'Los selectores indican a qué elementos aplicar estilos:\n\n• .clase → selecciona por clase\n• #id → selecciona por ID (único)\n• elemento → selecciona por etiqueta (p, div, h1)\n• elemento > hijo → selecciona hijos directos',
      en: 'Selectors tell CSS which elements to style:\n\n• .class → selects by class\n• #id → selects by ID (unique)\n• element → selects by tag (p, div, h1)\n• element > child → selects direct children',
    },
    questions: [
      {
        id: 'code-css-001-q1',
        text: { es: '¿Qué símbolo selecciona por clase?', en: 'Which symbol selects by class?' },
        options: { es: ['#', '.', '@', '&'], en: ['#', '.', '@', '&'] },
        correctIndex: 1,
        explanation: { es: 'El punto (.) selecciona por clase.', en: 'The dot (.) selects by class.' },
      },
      {
        id: 'code-css-001-q2',
        text: { es: '¿Qué símbolo selecciona por ID?', en: 'Which symbol selects by ID?' },
        options: { es: ['.', '#', '*', '~'], en: ['.', '#', '*', '~'] },
        correctIndex: 1,
        explanation: { es: 'El hash (#) selecciona por ID.', en: 'The hash (#) selects by ID.' },
      },
      {
        id: 'code-css-001-q3',
        text: { es: '¿Un ID debe ser único en la página?', en: 'Should an ID be unique on the page?' },
        options: { es: ['No', 'Sí', 'Depende', 'Solo en HTML5'], en: ['No', 'Yes', 'Depends', 'Only in HTML5'] },
        correctIndex: 1,
        explanation: { es: 'Cada ID debe ser único en el documento.', en: 'Each ID must be unique in the document.' },
      },
    ],
  },
  {
    id: 'code-css-002',
    topic: 'programming',
    subtopic: 'css',
    difficulty: 2,
    title: { es: 'CSS Grid', en: 'CSS Grid' },
    body: {
      es: 'CSS Grid es un sistema de layout bidimensional:\n\n• display: grid → activa grid\n• grid-template-columns → define columnas\n• grid-template-rows → define filas\n• gap → espacio entre celdas\n\nEjemplo: grid-template-columns: 1fr 1fr 1fr → 3 columnas iguales.',
      en: 'CSS Grid is a two-dimensional layout system:\n\n• display: grid → activates grid\n• grid-template-columns → defines columns\n• grid-template-rows → defines rows\n• gap → space between cells\n\nExample: grid-template-columns: 1fr 1fr 1fr → 3 equal columns.',
    },
    questions: [
      {
        id: 'code-css-002-q1',
        text: { es: '¿Qué activa CSS Grid?', en: 'What activates CSS Grid?' },
        options: { es: ['display: flex', 'display: grid', 'layout: grid', 'grid: true'], en: ['display: flex', 'display: grid', 'layout: grid', 'grid: true'] },
        correctIndex: 1,
        explanation: { es: 'display: grid activa el sistema de grid.', en: 'display: grid activates the grid system.' },
      },
      {
        id: 'code-css-002-q2',
        text: { es: '¿Qué significa "1fr 1fr 1fr"?', en: 'What does "1fr 1fr 1fr" mean?' },
        options: { es: ['1 columna', '2 columnas', '3 columnas iguales', '3 filas'], en: ['1 column', '2 columns', '3 equal columns', '3 rows'] },
        correctIndex: 2,
        explanation: { es: '1fr 1fr 1fr = 3 columnas de igual tamaño.', en: '1fr 1fr 1fr = 3 equal-sized columns.' },
      },
      {
        id: 'code-css-002-q3',
        text: { es: '¿Qué propiedad define el espacio entre celdas?', en: 'Which property defines space between cells?' },
        options: { es: ['margin', 'padding', 'gap', 'spacing'], en: ['margin', 'padding', 'gap', 'spacing'] },
        correctIndex: 2,
        explanation: { es: 'gap define el espacio entre celdas del grid.', en: 'gap defines the space between grid cells.' },
      },
    ],
  },
];
