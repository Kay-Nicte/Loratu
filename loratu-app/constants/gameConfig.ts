import type { Resources } from '../types/game';

/** Number of plant spots in the patio */
export const TOTAL_SPOTS = 12;

/** Number of starter seeds to pick */
export const STARTER_SEED_COUNT = 3;

/** Initial resources given to the player */
export const INITIAL_RESOURCES: Resources = {
  water: 5,
  fertilizer: 3,
  sun: 2,
  points: 0,
};

/** Cost of each care action */
export const CARE_COSTS = {
  water: { water: 3 },
  fertilize: { fertilizer: 2 },
  sun: { sun: 1 },
} as const;

/** Growth points awarded per care action */
export const CARE_GROWTH = {
  water: 15,
  fertilize: 20,
  sun: 10,
} as const;

/** Rewards for quiz performance */
export const QUIZ_REWARDS: Record<string, Resources> = {
  perfect: { water: 6, fertilizer: 4, sun: 3, points: 15 },
  great: { water: 4, fertilizer: 2, sun: 1, points: 8 },
  good: { water: 2, fertilizer: 1, sun: 0, points: 3 },
  none: { water: 0, fertilizer: 0, sun: 0, points: 0 },
};

/** How many questions correct to get each reward tier */
export function getRewardTier(correct: number, total: number): string {
  if (correct === total) return 'perfect';
  if (correct >= total - 1) return 'great';
  if (correct >= 1) return 'good';
  return 'none';
}
