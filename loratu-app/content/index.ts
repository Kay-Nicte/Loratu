import type { LearningPill, Topic } from '../types/content';
import { historyPills } from './general/history';
import { sciencePills } from './general/science';
import { geographyPills } from './general/geography';
import { artsPills } from './general/arts';
import { englishPills } from './language/english';
import { spanishPills } from './language/spanish';
import { javascriptPills } from './programming/javascript';
import { cssPills } from './programming/css';

const ALL_PILLS: Record<Topic, LearningPill[]> = {
  general: [...historyPills, ...sciencePills, ...geographyPills, ...artsPills],
  language: [...englishPills, ...spanishPills],
  programming: [...javascriptPills, ...cssPills],
};

export function getPillsByTopic(topic: Topic): LearningPill[] {
  return ALL_PILLS[topic] ?? [];
}

export function getRandomPill(topic: Topic, completedIds: string[]): LearningPill | null {
  const pills = ALL_PILLS[topic] ?? [];
  const available = pills.filter(p => !completedIds.includes(p.id));
  if (available.length === 0) {
    if (pills.length === 0) return null;
    return pills[Math.floor(Math.random() * pills.length)];
  }
  return available[Math.floor(Math.random() * available.length)];
}

export function getPillCount(topic: Topic): number {
  return (ALL_PILLS[topic] ?? []).length;
}
