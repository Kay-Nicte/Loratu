import { useCallback } from 'react';
import { useGameStore } from '../stores/gameStore';
import { getSpecies } from '../constants/plants';

export interface PlantProgress {
  plantId: string;
  speciesId: string;
  stage: number;
  growthPts: number;
  nextThreshold: number;
  progressPercent: number;
  isMaxStage: boolean;
}

/** Returns growth info for all placed plants */
export function usePlantProgress(): PlantProgress[] {
  const plants = useGameStore(s => s.plants);
  const spots = useGameStore(s => s.spots);

  return plants
    .filter(p => spots.some(s => s.plantId === p.id))
    .map(p => {
      const species = getSpecies(p.speciesId);
      const isMax = p.stage >= 3;
      const threshold = isMax
        ? 1
        : (species?.growthRequirements[p.stage] ?? 100);
      const percent = isMax ? 100 : Math.min(100, Math.round((p.growthPts / threshold) * 100));

      return {
        plantId: p.id,
        speciesId: p.speciesId,
        stage: p.stage,
        growthPts: p.growthPts,
        nextThreshold: threshold,
        progressPercent: percent,
        isMaxStage: isMax,
      };
    });
}

/** Returns the plant placed in a specific spot */
export function usePlantAtSpot(spotIndex: number) {
  const plants = useGameStore(s => s.plants);
  const spots = useGameStore(s => s.spots);
  const spot = spots[spotIndex];
  if (!spot?.plantId) return null;
  return plants.find(p => p.id === spot.plantId) ?? null;
}
