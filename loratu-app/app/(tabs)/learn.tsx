import { useState, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../constants/theme';
import { useGameStore } from '../../stores/gameStore';
import { useLearningStore } from '../../stores/learningStore';
import { getRandomPill } from '../../content';
import { getRewardTier, QUIZ_REWARDS } from '../../constants/gameConfig';
import type { Topic } from '../../types/content';
import type { Resources } from '../../types/game';
import TopicPicker from '../../components/learning/TopicPicker';
import PillCard from '../../components/learning/PillCard';
import QuizCard from '../../components/learning/QuizCard';
import ResultsCard from '../../components/learning/ResultsCard';

type Phase = 'topic' | 'pill' | 'quiz' | 'results';

export default function LearnScreen() {
  const router = useRouter();
  const addResources = useGameStore(s => s.addResources);

  const {
    currentPill, quizIndex, score, completedPillIds,
    setTopic, setPill, answerCorrect, answerWrong, nextQuestion, finishQuiz, resetQuiz,
  } = useLearningStore();

  const [phase, setPhase] = useState<Phase>('topic');
  const [finalRewards, setFinalRewards] = useState<Resources>({ water: 0, fertilizer: 0, sun: 0, points: 0 });

  const handleTopicSelect = useCallback((topic: Topic) => {
    setTopic(topic);
    const pill = getRandomPill(topic, completedPillIds);
    if (pill) {
      setPill(pill);
      setPhase('pill');
    }
  }, [completedPillIds, setTopic, setPill]);

  const handleStartQuiz = useCallback(() => {
    setPhase('quiz');
  }, []);

  const handleAnswer = useCallback((correct: boolean) => {
    if (correct) answerCorrect();
    else answerWrong();
  }, [answerCorrect, answerWrong]);

  const handleNext = useCallback(() => {
    const total = currentPill?.questions.length ?? 0;
    if (quizIndex + 1 >= total) {
      // Quiz finished
      const finalScore = useLearningStore.getState().score;
      const tier = getRewardTier(finalScore, total);
      const rewards = QUIZ_REWARDS[tier] as Resources;
      setFinalRewards(rewards);
      addResources(rewards);
      finishQuiz();
      setPhase('results');
    } else {
      nextQuestion();
    }
  }, [currentPill, quizIndex, addResources, finishQuiz, nextQuestion]);

  const handleGoToGarden = useCallback(() => {
    resetQuiz();
    setPhase('topic');
    router.navigate('/(tabs)/patio');
  }, [resetQuiz, router]);

  const handleLearnMore = useCallback(() => {
    resetQuiz();
    setPhase('topic');
  }, [resetQuiz]);

  return (
    <LinearGradient
      colors={[colors.skyTop, colors.skyBottom]}
      style={styles.container}
    >
      {phase === 'topic' && (
        <View style={styles.fill}>
          <TopicPicker onSelect={handleTopicSelect} />
        </View>
      )}

      {phase === 'pill' && currentPill && (
        <PillCard pill={currentPill} onStartQuiz={handleStartQuiz} />
      )}

      {phase === 'quiz' && currentPill && (
        <QuizCard
          key={`q-${quizIndex}`}
          question={currentPill.questions[quizIndex]}
          questionIndex={quizIndex}
          totalQuestions={currentPill.questions.length}
          onAnswer={handleAnswer}
          onNext={handleNext}
        />
      )}

      {phase === 'results' && (
        <ResultsCard
          score={useLearningStore.getState().score}
          total={currentPill?.questions.length ?? 0}
          rewards={finalRewards}
          onGoToGarden={handleGoToGarden}
          onLearnMore={handleLearnMore}
        />
      )}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 60 },
  fill: { flex: 1 },
});
