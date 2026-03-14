import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { zustandStorage } from '../utils/storage';
import type { GameState, Plant, Resources } from '../types/game';
import { INITIAL_RESOURCES, TOTAL_SPOTS, CARE_COSTS, CARE_GROWTH } from '../constants/gameConfig';
import { getSpecies } from '../constants/plants';

interface GameActions {
  completeOnboarding: (starterSpeciesIds: string[]) => void;
  placePlant: (speciesId: string, spotIndex: number) => void;
  addResources: (resources: Partial<Resources>) => void;
  waterPlants: () => boolean;
  fertilizePlants: () => boolean;
  sunPlants: () => boolean;
  buyPlant: (speciesId: string, cost: number) => boolean;
  reset: () => void;
}

const initialState: GameState = {
  plants: [],
  inventory: [],
  resources: { ...INITIAL_RESOURCES },
  spots: Array.from({ length: TOTAL_SPOTS }, () => ({ plantId: null })),
  shopOwned: [],
  streak: 0,
  lastPlayDate: null,
  onboardingDone: false,
};

let nextPlantId = 1;

function growPlants(plants: Plant[], spots: Array<{ plantId: string | null }>, pts: number): boolean {
  let grew = false;
  for (const plant of plants) {
    const isPlaced = spots.some(s => s.plantId === plant.id);
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
  return grew;
}

export const useGameStore = create<GameState & GameActions>()(
  persist(
    (set, get) => ({
      ...initialState,

      completeOnboarding: (starterSpeciesIds) => {
        set({
          inventory: [...starterSpeciesIds],
          onboardingDone: true,
        });
      },

      placePlant: (speciesId, spotIndex) => {
        const state = get();
        const invIdx = state.inventory.indexOf(speciesId);
        if (invIdx === -1) return;

        const id = `plant-${nextPlantId++}`;
        const plant: Plant = {
          id,
          speciesId,
          stage: 0,
          growthPts: 0,
          spotIndex,
        };

        const newInventory = [...state.inventory];
        newInventory.splice(invIdx, 1);

        const newSpots = [...state.spots];
        newSpots[spotIndex] = { plantId: id };

        set({
          plants: [...state.plants, plant],
          inventory: newInventory,
          spots: newSpots,
        });
      },

      addResources: (resources) => {
        const state = get();
        set({
          resources: {
            water: state.resources.water + (resources.water ?? 0),
            fertilizer: state.resources.fertilizer + (resources.fertilizer ?? 0),
            sun: state.resources.sun + (resources.sun ?? 0),
            points: state.resources.points + (resources.points ?? 0),
          },
        });
      },

      waterPlants: () => {
        const state = get();
        if (state.resources.water < CARE_COSTS.water.water) return false;
        const plants = state.plants.map(p => ({ ...p }));
        const grew = growPlants(plants, state.spots, CARE_GROWTH.water);
        set({
          plants,
          resources: {
            ...state.resources,
            water: state.resources.water - CARE_COSTS.water.water,
          },
        });
        return grew;
      },

      fertilizePlants: () => {
        const state = get();
        if (state.resources.fertilizer < CARE_COSTS.fertilize.fertilizer) return false;
        const plants = state.plants.map(p => ({ ...p }));
        const grew = growPlants(plants, state.spots, CARE_GROWTH.fertilize);
        set({
          plants,
          resources: {
            ...state.resources,
            fertilizer: state.resources.fertilizer - CARE_COSTS.fertilize.fertilizer,
          },
        });
        return grew;
      },

      sunPlants: () => {
        const state = get();
        if (state.resources.sun < CARE_COSTS.sun.sun) return false;
        const plants = state.plants.map(p => ({ ...p }));
        const grew = growPlants(plants, state.spots, CARE_GROWTH.sun);
        set({
          plants,
          resources: {
            ...state.resources,
            sun: state.resources.sun - CARE_COSTS.sun.sun,
          },
        });
        return grew;
      },

      buyPlant: (speciesId, cost) => {
        const state = get();
        if (state.resources.points < cost) return false;
        if (state.shopOwned.includes(speciesId)) return false;
        set({
          resources: {
            ...state.resources,
            points: state.resources.points - cost,
          },
          shopOwned: [...state.shopOwned, speciesId],
          inventory: [...state.inventory, speciesId],
        });
        return true;
      },

      reset: () => {
        nextPlantId = 1;
        set(initialState);
      },
    }),
    {
      name: 'loratu-game',
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);
