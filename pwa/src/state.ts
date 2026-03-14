import { INITIAL_RESOURCES, TOTAL_SPOTS, getSpecies, type Resources, type Plant } from './config';

export interface GameState {
  plants: Plant[];
  inventory: string[];
  resources: Resources;
  spots: Array<{ plantId: string | null }>;
  shopOwned: string[];
  completedPills: string[];
  onboardingDone: boolean;
}

const STORAGE_KEY = 'loratu-game';
let nextPlantId = 1;

let state: GameState = {
  plants: [],
  inventory: [],
  resources: { ...INITIAL_RESOURCES },
  spots: Array.from({ length: TOTAL_SPOTS }, () => ({ plantId: null })),
  shopOwned: [],
  completedPills: [],
  onboardingDone: false,
};

type Listener = () => void;
const listeners: Listener[] = [];

export function subscribe(fn: Listener): void {
  listeners.push(fn);
}

function notify(): void {
  save();
  for (const fn of listeners) fn();
}

function save(): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function load(): void {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as GameState;
      state = parsed;
      // find max plant id
      for (const p of state.plants) {
        const num = parseInt(p.id.replace('plant-', ''), 10);
        if (num >= nextPlantId) nextPlantId = num + 1;
      }
    }
  } catch { /* ignore */ }
}

export function getState(): GameState {
  return state;
}

export function completeOnboarding(starterSpeciesIds: string[]): void {
  state = { ...state, inventory: [...starterSpeciesIds], onboardingDone: true };
  notify();
}

export function placePlant(speciesId: string, spotIndex: number): void {
  const invIdx = state.inventory.indexOf(speciesId);
  if (invIdx === -1) return;

  const id = `plant-${nextPlantId++}`;
  const plant: Plant = { id, speciesId, stage: 0, growthPts: 0, spotIndex };

  const newInventory = [...state.inventory];
  newInventory.splice(invIdx, 1);
  const newSpots = [...state.spots];
  newSpots[spotIndex] = { plantId: id };

  state = { ...state, plants: [...state.plants, plant], inventory: newInventory, spots: newSpots };
  notify();
}

function growPlants(pts: number): boolean {
  let grew = false;
  const plants = state.plants.map(p => ({ ...p }));
  for (const plant of plants) {
    const isPlaced = state.spots.some(s => s.plantId === plant.id);
    if (!isPlaced || plant.stage >= 3) continue;
    plant.growthPts += pts;
    const species = getSpecies(plant.speciesId);
    if (!species) continue;
    const threshold = species.growthRequirements[plant.stage];
    if (plant.growthPts >= threshold) {
      plant.stage++;
      plant.growthPts = 0;
      grew = true;
    }
  }
  state = { ...state, plants };
  return grew;
}

export function waterPlants(): boolean {
  if (state.resources.water < 3) return false;
  state = { ...state, resources: { ...state.resources, water: state.resources.water - 3 } };
  const grew = growPlants(15);
  notify();
  return grew;
}

export function fertilizePlants(): boolean {
  if (state.resources.fertilizer < 2) return false;
  state = { ...state, resources: { ...state.resources, fertilizer: state.resources.fertilizer - 2 } };
  const grew = growPlants(20);
  notify();
  return grew;
}

export function sunPlants(): boolean {
  if (state.resources.sun < 1) return false;
  state = { ...state, resources: { ...state.resources, sun: state.resources.sun - 1 } };
  const grew = growPlants(10);
  notify();
  return grew;
}

export function addResources(r: Partial<Resources>): void {
  state = {
    ...state,
    resources: {
      water: state.resources.water + (r.water ?? 0),
      fertilizer: state.resources.fertilizer + (r.fertilizer ?? 0),
      sun: state.resources.sun + (r.sun ?? 0),
      points: state.resources.points + (r.points ?? 0),
    },
  };
  notify();
}

export function buyPlant(speciesId: string, cost: number): boolean {
  if (state.resources.points < cost) return false;
  if (state.shopOwned.includes(speciesId)) return false;
  state = {
    ...state,
    resources: { ...state.resources, points: state.resources.points - cost },
    shopOwned: [...state.shopOwned, speciesId],
    inventory: [...state.inventory, speciesId],
  };
  notify();
  return true;
}

export function addCompletedPill(id: string): void {
  if (!state.completedPills.includes(id)) {
    state = { ...state, completedPills: [...state.completedPills, id] };
    notify();
  }
}

export function resetGame(): void {
  nextPlantId = 1;
  state = {
    plants: [],
    inventory: [],
    resources: { ...INITIAL_RESOURCES },
    spots: Array.from({ length: TOTAL_SPOTS }, () => ({ plantId: null })),
    shopOwned: [],
    completedPills: [],
    onboardingDone: false,
  };
  notify();
}
