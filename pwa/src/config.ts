// ---- Types ----
export interface Resources {
  water: number;
  fertilizer: number;
  sun: number;
  points: number;
}

export interface PlantSpecies {
  id: string;
  nameKey: string;
  growthRequirements: [number, number, number];
  shopCost: number | null;
  color: string;       // primary flower/feature color
  flowerColor: string; // bloom color
}

export interface Plant {
  id: string;
  speciesId: string;
  stage: number; // 0=seed,1=sprout,2=young,3=bloom
  growthPts: number;
  spotIndex: number;
}

// ---- Constants ----
export const TOTAL_SPOTS = 12;
export const STARTER_SEED_COUNT = 3;

export const INITIAL_RESOURCES: Resources = {
  water: 5, fertilizer: 3, sun: 2, points: 0,
};

export const CARE_COSTS = {
  water: { water: 3 },
  fertilize: { fertilizer: 2 },
  sun: { sun: 1 },
} as const;

export const CARE_GROWTH = {
  water: 15,
  fertilize: 20,
  sun: 10,
} as const;

export const QUIZ_REWARDS: Record<string, Resources> = {
  perfect: { water: 6, fertilizer: 4, sun: 3, points: 15 },
  great: { water: 4, fertilizer: 2, sun: 1, points: 8 },
  good: { water: 2, fertilizer: 1, sun: 0, points: 3 },
  none: { water: 0, fertilizer: 0, sun: 0, points: 0 },
};

export function getRewardTier(correct: number, total: number): string {
  if (correct === total) return 'perfect';
  if (correct >= total - 1) return 'great';
  if (correct >= 1) return 'good';
  return 'none';
}

// ---- Plants with visual data ----
export const PLANT_SPECIES: PlantSpecies[] = [
  { id: 'geranium', nameKey: 'plants.geranium', growthRequirements: [30, 60, 100], shopCost: null, color: '#276749', flowerColor: '#FF85A1' },
  { id: 'cactus', nameKey: 'plants.cactus', growthRequirements: [20, 50, 90], shopCost: null, color: '#6DBF67', flowerColor: '#FFE066' },
  { id: 'lavender', nameKey: 'plants.lavender', growthRequirements: [30, 60, 100], shopCost: null, color: '#276749', flowerColor: '#D4AAFF' },
  { id: 'sunflower', nameKey: 'plants.sunflower', growthRequirements: [35, 70, 110], shopCost: null, color: '#276749', flowerColor: '#FFE066' },
  { id: 'jasmine', nameKey: 'plants.jasmine', growthRequirements: [30, 60, 100], shopCost: null, color: '#276749', flowerColor: '#FFFDF7' },
  { id: 'bougainvillea', nameKey: 'plants.bougainvillea', growthRequirements: [40, 80, 120], shopCost: null, color: '#276749', flowerColor: '#FF85A1' },
  { id: 'tulip', nameKey: 'plants.tulip', growthRequirements: [25, 55, 95], shopCost: 10, color: '#276749', flowerColor: '#FF85A1' },
  { id: 'mushroom', nameKey: 'plants.mushroom', growthRequirements: [20, 40, 70], shopCost: 8, color: '#BD7B4F', flowerColor: '#FFB3C6' },
  { id: 'bamboo', nameKey: 'plants.bamboo', growthRequirements: [35, 70, 110], shopCost: 12, color: '#6DBF67', flowerColor: '#A8D5A2' },
  { id: 'lotus', nameKey: 'plants.lotus', growthRequirements: [40, 80, 120], shopCost: 15, color: '#276749', flowerColor: '#FFB3C6' },
  { id: 'olive', nameKey: 'plants.olive', growthRequirements: [50, 100, 150], shopCost: 20, color: '#276749', flowerColor: '#A8D5A2' },
  { id: 'fern', nameKey: 'plants.fern', growthRequirements: [20, 45, 80], shopCost: 6, color: '#6DBF67', flowerColor: '#A8D5A2' },
  { id: 'bonsai', nameKey: 'plants.bonsai', growthRequirements: [60, 120, 180], shopCost: 25, color: '#8B5E3C', flowerColor: '#6DBF67' },
  { id: 'palm', nameKey: 'plants.palm', growthRequirements: [45, 90, 140], shopCost: 18, color: '#276749', flowerColor: '#A8D5A2' },
];

export const STARTER_SPECIES = PLANT_SPECIES.filter(s => s.shopCost === null);
export const SHOP_SPECIES = PLANT_SPECIES.filter(s => s.shopCost !== null);

export function getSpecies(id: string): PlantSpecies | undefined {
  return PLANT_SPECIES.find(s => s.id === id);
}

// ---- Spot positions ----
export const SPOT_POSITIONS: Array<{ xPercent: number; yPercent: number }> = [
  { xPercent: 35, yPercent: 30 },
  { xPercent: 62, yPercent: 30 },
  { xPercent: 35, yPercent: 62 },
  { xPercent: 62, yPercent: 62 },
  { xPercent: 18, yPercent: 22 },
  { xPercent: 78, yPercent: 22 },
  { xPercent: 18, yPercent: 72 },
  { xPercent: 78, yPercent: 72 },
  { xPercent: 10, yPercent: 46 },
  { xPercent: 88, yPercent: 46 },
  { xPercent: 48, yPercent: 12 },
  { xPercent: 48, yPercent: 82 },
];

export const STAGE_NAMES = ['plant.seed', 'plant.sprout', 'plant.young', 'plant.bloom'];
