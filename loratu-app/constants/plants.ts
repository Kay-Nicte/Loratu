import type { PlantSpecies } from '../types/game';

export const PLANT_SPECIES: PlantSpecies[] = [
  // Starter seeds (shopCost = null)
  { id: 'geranium', nameKey: 'plants.geranium', growthRequirements: [30, 60, 100], shopCost: null },
  { id: 'cactus', nameKey: 'plants.cactus', growthRequirements: [20, 50, 90], shopCost: null },
  { id: 'lavender', nameKey: 'plants.lavender', growthRequirements: [30, 60, 100], shopCost: null },
  { id: 'sunflower', nameKey: 'plants.sunflower', growthRequirements: [35, 70, 110], shopCost: null },
  { id: 'jasmine', nameKey: 'plants.jasmine', growthRequirements: [30, 60, 100], shopCost: null },
  { id: 'bougainvillea', nameKey: 'plants.bougainvillea', growthRequirements: [40, 80, 120], shopCost: null },

  // Shop plants
  { id: 'tulip', nameKey: 'plants.tulip', growthRequirements: [25, 55, 95], shopCost: 10 },
  { id: 'mushroom', nameKey: 'plants.mushroom', growthRequirements: [20, 40, 70], shopCost: 8 },
  { id: 'bamboo', nameKey: 'plants.bamboo', growthRequirements: [35, 70, 110], shopCost: 12 },
  { id: 'lotus', nameKey: 'plants.lotus', growthRequirements: [40, 80, 120], shopCost: 15 },
  { id: 'olive', nameKey: 'plants.olive', growthRequirements: [50, 100, 150], shopCost: 20 },
  { id: 'fern', nameKey: 'plants.fern', growthRequirements: [20, 45, 80], shopCost: 6 },
  { id: 'bonsai', nameKey: 'plants.bonsai', growthRequirements: [60, 120, 180], shopCost: 25 },
  { id: 'palm', nameKey: 'plants.palm', growthRequirements: [45, 90, 140], shopCost: 18 },
];

export const STARTER_SPECIES = PLANT_SPECIES.filter(s => s.shopCost === null);
export const SHOP_SPECIES = PLANT_SPECIES.filter(s => s.shopCost !== null);

export function getSpecies(id: string): PlantSpecies | undefined {
  return PLANT_SPECIES.find(s => s.id === id);
}
