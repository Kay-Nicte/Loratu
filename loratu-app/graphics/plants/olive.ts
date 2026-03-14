import type { PlantGraphics } from './types';

export const oliveGraphics: PlantGraphics = {
  speciesId: 'olive',
  stages: [
    { scale: 0.3, colors: { stem: '#5D4037', leaf: '#8D6E63' } },
    { scale: 0.5, colors: { stem: '#4E342E', leaf: '#6D4C41' } },
    { scale: 0.75, colors: { stem: '#3E2723', leaf: '#78909C', accent: '#90A4AE' } },
    { scale: 1.0, colors: { stem: '#3E2723', leaf: '#78909C', flower: '#7CB342', accent: '#AED581' } },
  ],
};
