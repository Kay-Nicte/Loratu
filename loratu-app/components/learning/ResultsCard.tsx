import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useTranslation } from 'react-i18next';
import { colors, spacing, radius } from '../../constants/theme';
import type { Resources } from '../../types/game';

interface Props {
  score: number;
  total: number;
  rewards: Resources;
  onGoToGarden: () => void;
  onLearnMore: () => void;
}

export default function ResultsCard({ score, total, rewards, onGoToGarden, onLearnMore }: Props) {
  const { t } = useTranslation();
  const perfect = score === total;
  const emoji = perfect ? '🏆' : score >= total - 1 ? '🌟' : score >= 1 ? '👍' : '😿';
  const titleKey = perfect ? 'perfect' : score >= total - 1 ? 'almost' : score >= 1 ? 'good' : 'keepTrying';

  const hasRewards = rewards.water > 0 || rewards.fertilizer > 0 || rewards.sun > 0 || rewards.points > 0;

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>{emoji}</Text>
      <Text style={styles.title}>{t(`learn.${titleKey}`)}</Text>
      <Text style={styles.score}>
        {t('learn.correctCount', { count: score, total })}
      </Text>

      {hasRewards ? (
        <View style={styles.rewards}>
          {rewards.water > 0 && (
            <View style={styles.rewardItem}>
              <Text style={styles.rewardIcon}>💧</Text>
              <Text style={styles.rewardText}>+{rewards.water}</Text>
            </View>
          )}
          {rewards.fertilizer > 0 && (
            <View style={styles.rewardItem}>
              <Text style={styles.rewardIcon}>🌿</Text>
              <Text style={styles.rewardText}>+{rewards.fertilizer}</Text>
            </View>
          )}
          {rewards.sun > 0 && (
            <View style={styles.rewardItem}>
              <Text style={styles.rewardIcon}>☀️</Text>
              <Text style={styles.rewardText}>+{rewards.sun}</Text>
            </View>
          )}
          {rewards.points > 0 && (
            <View style={styles.rewardItem}>
              <Text style={styles.rewardIcon}>⭐</Text>
              <Text style={styles.rewardText}>+{rewards.points}</Text>
            </View>
          )}
        </View>
      ) : (
        <Text style={styles.noRewards}>{t('learn.noRewards')} 😿</Text>
      )}

      <View style={styles.buttons}>
        <Pressable style={styles.btnGreen} onPress={onGoToGarden}>
          <Text style={styles.btnGreenText}>🌺 {t('learn.backToGarden')}</Text>
        </Pressable>
        <Pressable style={styles.btnYellow} onPress={onLearnMore}>
          <Text style={styles.btnYellowText}>📚 {t('learn.learnMore')}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.xl,
  },
  emoji: { fontSize: 72, marginBottom: spacing.md },
  title: { fontSize: 26, fontWeight: '800', color: colors.textPrimary, marginBottom: spacing.xs },
  score: { fontSize: 15, color: colors.textSecondary, marginBottom: spacing.lg },
  rewards: {
    flexDirection: 'row', gap: 10, flexWrap: 'wrap',
    justifyContent: 'center', marginBottom: spacing.xl,
  },
  rewardItem: {
    flexDirection: 'row', alignItems: 'center', gap: 5,
    backgroundColor: colors.white, borderRadius: radius.md,
    padding: 10, paddingHorizontal: 14,
    borderWidth: 2, borderColor: '#eee',
  },
  rewardIcon: { fontSize: 18 },
  rewardText: { fontSize: 14, fontWeight: '700', color: colors.textPrimary },
  noRewards: { fontSize: 14, color: colors.textSecondary, marginBottom: spacing.xl },
  buttons: { width: '100%', gap: spacing.sm },
  btnGreen: {
    backgroundColor: colors.greenMid,
    paddingVertical: 14, borderRadius: radius.md,
    alignItems: 'center',
    shadowColor: colors.greenDark,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3, shadowRadius: 0, elevation: 3,
  },
  btnGreenText: { color: 'white', fontSize: 16, fontWeight: '800' },
  btnYellow: {
    backgroundColor: colors.yellow,
    paddingVertical: 14, borderRadius: radius.md,
    alignItems: 'center',
    shadowColor: colors.yellowDark,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3, shadowRadius: 0, elevation: 3,
  },
  btnYellowText: { color: '#5a4000', fontSize: 16, fontWeight: '800' },
});
