import type { PlantGraphics } from './types';

export const jasmineGraphics: PlantGraphics = {
  speciesId: 'jasmine',
  stages: [
    { scale: 0.3, colors: { stem: '#4E7A4E', leaf: '#81C784' } },
    { scale: 0.5, colors: { stem: '#3E6B3E', leaf: '#66BB6A' } },
    { scale: 0.75, colors: { stem: '#2E5A2E', leaf: '#4CAF50', accent: '#A5D6A7' } },
    { scale: 1.0, colors: { stem: '#2E5A2E', leaf: '#4CAF50', flower: '#FFFDE7', accent: '#FFF9C4' } },
  ],
};
