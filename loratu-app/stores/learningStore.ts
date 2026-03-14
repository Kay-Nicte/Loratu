import { create } from 'zustand';
import type { Topic, LearningPill } from '../types/content';

interface LearningState {
  currentTopic: Topic | null;
  currentPill: LearningPill | null;
  quizIndex: number;
  score: number;
  quizFinished: boolean;
  completedPillIds: string[];
}

interface LearningActions {
  setTopic: (topic: Topic) => void;
  setPill: (pill: LearningPill) => void;
  answerCorrect: () => void;
  answerWrong: () => void;
  nextQuestion: () => void;
  finishQuiz: () => void;
  resetQuiz: () => void;
}

export const useLearningStore = create<LearningState & LearningActions>()((set, get) => ({
  currentTopic: null,
  currentPill: null,
  quizIndex: 0,
  score: 0,
  quizFinished: false,
  completedPillIds: [],

  setTopic: (topic) => set({ currentTopic: topic }),

  setPill: (pill) => set({
    currentPill: pill,
    quizIndex: 0,
    score: 0,
    quizFinished: false,
  }),

  answerCorrect: () => set(s => ({ score: s.score + 1 })),
  answerWrong: () => {},

  nextQuestion: () => {
    const state = get();
    const total = state.currentPill?.questions.length ?? 0;
    if (state.quizIndex + 1 >= total) {
      set({ quizFinished: true });
    } else {
      set({ quizIndex: state.quizIndex + 1 });
    }
  },

  finishQuiz: () => {
    const state = get();
    if (state.currentPill) {
      set({
        completedPillIds: [...state.completedPillIds, state.currentPill.id],
        quizFinished: true,
      });
    }
  },

  resetQuiz: () => set({
    currentTopic: null,
    currentPill: null,
    quizIndex: 0,
    score: 0,
    quizFinished: false,
  }),
}));
