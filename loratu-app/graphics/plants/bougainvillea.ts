import type { PlantGraphics } from './types';

export const bougainvilleaGraphics: PlantGraphics = {
  speciesId: 'bougainvillea',
  stages: [
    { scale: 0.3, colors: { stem: '#5D4037', leaf: '#6B8E23' } },
    { scale: 0.55, colors: { stem: '#4E342E', leaf: '#558B2F' } },
    { scale: 0.75, colors: { stem: '#3E2723', leaf: '#33691E', accent: '#F48FB1' } },
    { scale: 1.0, colors: { stem: '#3E2723', leaf: '#33691E', flower: '#E91E63', accent: '#F06292' } },
  ],
};
