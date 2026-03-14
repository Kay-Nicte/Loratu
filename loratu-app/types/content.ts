export type Topic = 'general' | 'language' | 'programming';

export interface QuizQuestion {
  id: string;
  text: Record<string, string>; // { es: "...", en: "..." }
  options: Record<string, string[]>; // { es: [...], en: [...] }
  correctIndex: number;
  explanation: Record<string, string>;
}

export interface LearningPill {
  id: string;
  topic: Topic;
  subtopic: string;
  difficulty: 1 | 2 | 3;
  title: Record<string, string>;
  body: Record<string, string>;
  questions: QuizQuestion[];
}
