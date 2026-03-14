import type { PlantGraphics } from './types';

export const geraniumGraphics: PlantGraphics = {
  speciesId: 'geranium',
  stages: [
    // Stage 0: Seed — tiny sprout
    {
      scale: 0.3,
      colors: { stem: '#6B8E23', leaf: '#8FBC8F' },
    },
    // Stage 1: Sprout — small stem with leaves
    {
      scale: 0.55,
      colors: { stem: '#558B2F', leaf: '#7CB342' },
    },
    // Stage 2: Young — fuller plant
    {
      scale: 0.75,
      colors: { stem: '#33691E', leaf: '#689F38', accent: '#8BC34A' },
    },
    // Stage 3: Bloom — full red geranium flowers
    {
      scale: 1.0,
      colors: { stem: '#33691E', leaf: '#4CAF50', flower: '#E53935', accent: '#FF5252' },
    },
  ],
};
