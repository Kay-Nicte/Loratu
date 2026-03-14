import type { PlantGraphics } from './types';

export const cactusGraphics: PlantGraphics = {
  speciesId: 'cactus',
  stages: [
    { scale: 0.3, colors: { stem: '#2E7D32', leaf: '#43A047' } },
    { scale: 0.5, colors: { stem: '#2E7D32', leaf: '#388E3C' } },
    { scale: 0.75, colors: { stem: '#1B5E20', leaf: '#2E7D32', accent: '#A5D6A7' } },
    { scale: 1.0, colors: { stem: '#1B5E20', leaf: '#2E7D32', flower: '#F48FB1', accent: '#C8E6C9' } },
  ],
};
