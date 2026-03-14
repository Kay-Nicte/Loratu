export interface Plant {
  id: string;
  speciesId: string;
  stage: number; // 0=seed, 1=sprout, 2=young, 3=bloom
  growthPts: number;
  spotIndex: number | null; // null = in inventory, not placed
}

export interface PlantSpecies {
  id: string;
  nameKey: string; // i18n key
  growthRequirements: [number, number, number]; // thresholds for stage 1, 2, 3
  shopCost: number | null; // null = starter seed, not in shop
}

export interface Resources {
  water: number;
  fertilizer: number;
  sun: number;
  points: number;
}

export interface SpotState {
  plantId: string | null;
}

export interface GameState {
  plants: Plant[];
  inventory: string[]; // speciesIds available but not yet placed
  resources: Resources;
  spots: SpotState[];
  shopOwned: string[]; // speciesIds purchased
  streak: number;
  lastPlayDate: string | null;
  onboardingDone: boolean;
}
