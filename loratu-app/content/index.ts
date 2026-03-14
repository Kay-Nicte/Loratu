import type { LearningPill, Topic } from '../types/content';
import { historyPills } from './general/history';
import { sciencePills } from './general/science';
import { geographyPills } from './general/geography';
import { englishPills } from './language/english';
import { javascriptPills } from './programming/javascript';

const ALL_PILLS: Record<Topic, LearningPill[]> = {
  general: [...historyPills, ...sciencePills, ...geographyPills],
  language: [...englishPills],
  programming: [...javascriptPills],
};

/** Get all pills for a topic */
export function getPillsByTopic(topic: Topic): LearningPill[] {
  return ALL_PILLS[topic] ?? [];
}

/** Get a random pill for a topic, avoiding already completed ones */
export function getRandomPill(topic: Topic, completedIds: string[]): LearningPill | null {
  const pills = ALL_PILLS[topic] ?? [];
  const available = pills.filter(p => !completedIds.includes(p.id));

  if (available.length === 0) {
    // All completed — allow repeats
    if (pills.length === 0) return null;
    return pills[Math.floor(Math.random() * pills.length)];
  }

  return available[Math.floor(Math.random() * available.length)];
}

/** Total pill count per topic */
export function getPillCount(topic: Topic): number {
  return (ALL_PILLS[topic] ?? []).length;
}
