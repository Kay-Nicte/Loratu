import type { PlantGraphics } from './types';

export const lavenderGraphics: PlantGraphics = {
  speciesId: 'lavender',
  stages: [
    { scale: 0.3, colors: { stem: '#6D8B74', leaf: '#87A96B' } },
    { scale: 0.5, colors: { stem: '#5F7A61', leaf: '#7CB342' } },
    { scale: 0.75, colors: { stem: '#4A6741', leaf: '#6B8E5A', accent: '#B39DDB' } },
    { scale: 1.0, colors: { stem: '#4A6741', leaf: '#6B8E5A', flower: '#7E57C2', accent: '#CE93D8' } },
  ],
};
