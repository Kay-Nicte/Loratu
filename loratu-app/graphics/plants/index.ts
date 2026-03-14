import type { PlantGraphics } from './types';
import { geraniumGraphics } from './geranium';
import { cactusGraphics } from './cactus';
import { lavenderGraphics } from './lavender';
import { sunflowerGraphics } from './sunflower';
import { jasmineGraphics } from './jasmine';
import { bougainvilleaGraphics } from './bougainvillea';
import { tulipGraphics } from './tulip';
import { oliveGraphics } from './olive';

const PLANT_GRAPHICS_MAP: Record<string, PlantGraphics> = {
  geranium: geraniumGraphics,
  cactus: cactusGraphics,
  lavender: lavenderGraphics,
  sunflower: sunflowerGraphics,
  jasmine: jasmineGraphics,
  bougainvillea: bougainvilleaGraphics,
  tulip: tulipGraphics,
  olive: oliveGraphics,
};

export function getPlantGraphics(speciesId: string): PlantGraphics | undefined {
  return PLANT_GRAPHICS_MAP[speciesId];
}

export { type PlantGraphics, type PlantStageGraphic, type PlantStageColors } from './types';
