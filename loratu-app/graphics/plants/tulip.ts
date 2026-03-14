import type { PlantGraphics } from './types';

export const tulipGraphics: PlantGraphics = {
  speciesId: 'tulip',
  stages: [
    { scale: 0.3, colors: { stem: '#558B2F', leaf: '#7CB342' } },
    { scale: 0.5, colors: { stem: '#33691E', leaf: '#689F38' } },
    { scale: 0.75, colors: { stem: '#33691E', leaf: '#558B2F', accent: '#AED581' } },
    { scale: 1.0, colors: { stem: '#33691E', leaf: '#558B2F', flower: '#EF5350', accent: '#FFCDD2' } },
  ],
};
