import { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useTranslation } from 'react-i18next';
import * as Haptics from 'expo-haptics';
import { colors, spacing, radius } from '../../constants/theme';
import type { QuizQuestion } from '../../types/content';

interface Props {
  question: QuizQuestion;
  questionIndex: number;
  totalQuestions: number;
  onAnswer: (correct: boolean) => void;
  onNext: () => void;
}

const LETTERS = ['A', 'B', 'C', 'D'];

export default function QuizCard({ question, questionIndex, totalQuestions, onAnswer, onNext }: Props) {
  const { i18n, t } = useTranslation();
  const lang = i18n.language === 'en' ? 'en' : 'es';
  const [answered, setAnswered] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const handleAnswer = (idx: number) => {
    if (answered) return;
    setAnswered(true);
    setSelectedIdx(idx);
    const correct = idx === question.correctIndex;
    if (correct) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    } else {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
    }
    onAnswer(correct);
  };

  const isCorrect = selectedIdx === question.correctIndex;
  const options = question.options[lang] ?? question.options['es'];

  return (
    <View style={styles.container}>
      {/* Progress dots */}
      <View style={styles.dots}>
        {Array.from({ length: totalQuestions }).map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              i < questionIndex && styles.dotDone,
              i === questionIndex && styles.dotCurrent,
            ]}
          />
        ))}
      </View>

      {/* Question */}
      <View style={styles.questionCard}>
        <Text style={styles.qNum}>
          {t('learn.question', { current: questionIndex + 1, total: totalQuestions })}
        </Text>
        <Text style={styles.qText}>{question.text[lang]}</Text>
      </View>

      {/* Options */}
      <View style={styles.options}>
        {options.map((opt, idx) => {
          const isThisCorrect = answered && idx === question.correctIndex;
          const isThisWrong = answered && idx === selectedIdx && idx !== question.correctIndex;

          return (
            <Pressable
              key={idx}
              style={[styles.option, isThisCorrect && styles.optCorrect, isThisWrong && styles.optWrong]}
              onPress={() => handleAnswer(idx)}
              disabled={answered}
            >
              <View style={[styles.optLetter, isThisCorrect && styles.letterCorrect, isThisWrong && styles.letterWrong]}>
                <Text style={styles.letterText}>{LETTERS[idx]}</Text>
              </View>
              <Text style={styles.optText}>{opt}</Text>
            </Pressable>
          );
        })}
      </View>

      {/* Feedback */}
      {answered && (
        <View style={[styles.feedback, isCorrect ? styles.fbCorrect : styles.fbWrong]}>
          <Text style={styles.fbIcon}>{isCorrect ? '🎉' : '😿'}</Text>
          <View style={styles.fbContent}>
            <Text style={styles.fbTitle}>
              {isCorrect ? t('learn.correct') : t('learn.incorrect')}
            </Text>
            <Text style={styles.fbExplanation}>{question.explanation[lang]}</Text>
          </View>
        </View>
      )}

      {/* Next button */}
      {answered && (
        <Pressable style={styles.nextBtn} onPress={onNext}>
          <Text style={styles.nextText}>{t('learn.next')} →</Text>
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.lg,
    gap: spacing.md,
  },
  dots: { flexDirection: 'row', justifyContent: 'center', gap: 6 },
  dot: { width: 12, height: 12, borderRadius: 6, backgroundColor: '#ddd' },
  dotDone: { backgroundColor: colors.greenMid },
  dotCurrent: {
    backgroundColor: colors.yellowDark,
    transform: [{ scale: 1.3 }],
    shadowColor: colors.yellowDark,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  questionCard: {
    backgroundColor: '#f7faff',
    borderWidth: 2.5,
    borderColor: colors.blue,
    borderRadius: radius.lg,
    padding: spacing.lg,
  },
  qNum: {
    fontSize: 10, fontWeight: '700', textTransform: 'uppercase',
    letterSpacing: 1, color: colors.blueDark, marginBottom: 6,
  },
  qText: { fontSize: 16, fontWeight: '700', color: colors.textPrimary, lineHeight: 24 },
  options: { gap: 8 },
  option: {
    flexDirection: 'row', alignItems: 'center', gap: 10,
    backgroundColor: colors.white, borderWidth: 2.5, borderColor: '#e0e0e0',
    borderRadius: radius.md, padding: 12,
  },
  optCorrect: { backgroundColor: '#e8ffee', borderColor: colors.greenMid },
  optWrong: { backgroundColor: '#fff0f3', borderColor: colors.pinkDark },
  optLetter: {
    width: 26, height: 26, borderRadius: 13, backgroundColor: '#eee',
    justifyContent: 'center', alignItems: 'center',
  },
  letterCorrect: { backgroundColor: colors.greenMid },
  letterWrong: { backgroundColor: colors.pinkDark },
  letterText: { fontSize: 11, fontWeight: '800', color: '#555' },
  optText: { fontSize: 14, fontWeight: '600', color: colors.textPrimary, flex: 1 },
  feedback: {
    flexDirection: 'row', alignItems: 'flex-start', gap: 10,
    borderRadius: radius.md, padding: spacing.md,
    borderWidth: 2,
  },
  fbCorrect: { backgroundColor: '#e8ffee', borderColor: colors.greenSoft },
  fbWrong: { backgroundColor: '#fff0f3', borderColor: colors.pink },
  fbIcon: { fontSize: 22 },
  fbContent: { flex: 1 },
  fbTitle: { fontSize: 14, fontWeight: '800', marginBottom: 4 },
  fbExplanation: { fontSize: 13, color: colors.textSecondary, lineHeight: 20 },
  nextBtn: {
    backgroundColor: colors.greenMid,
    paddingVertical: 14,
    borderRadius: radius.md,
    alignItems: 'center',
    shadowColor: colors.greenDark,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 0,
    elevation: 3,
  },
  nextText: { color: 'white', fontSize: 16, fontWeight: '800' },
});
