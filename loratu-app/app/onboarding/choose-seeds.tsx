import { useState } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, spacing, radius } from '../../constants/theme';
import { STARTER_SPECIES } from '../../constants/plants';
import { STARTER_SEED_COUNT } from '../../constants/gameConfig';
import { useGameStore } from '../../stores/gameStore';

export default function ChooseSeedsScreen() {
  const router = useRouter();
  const { t } = useTranslation();
  const completeOnboarding = useGameStore(s => s.completeOnboarding);
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (speciesId: string) => {
    if (selected.includes(speciesId)) {
      setSelected(selected.filter(s => s !== speciesId));
    } else if (selected.length < STARTER_SEED_COUNT) {
      setSelected([...selected, speciesId]);
    }
  };

  const handleStart = () => {
    if (selected.length !== STARTER_SEED_COUNT) return;
    completeOnboarding(selected);
    router.replace('/(tabs)/patio');
  };

  // Temporary emoji map until Skia graphics are ready
  const emojiMap: Record<string, string> = {
    geranium: '🌺', cactus: '🌵', lavender: '💜',
    sunflower: '🌻', jasmine: '🤍', bougainvillea: '🌸',
  };

  return (
    <LinearGradient
      colors={[colors.skyTop, colors.skyBottom]}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>{t('onboarding.chooseSeeds')}</Text>
        <Text style={styles.counter}>
          {selected.length} / {STARTER_SEED_COUNT}
        </Text>

        <View style={styles.grid}>
          {STARTER_SPECIES.map((species) => {
            const isSelected = selected.includes(species.id);
            return (
              <Pressable
                key={species.id}
                style={[styles.card, isSelected && styles.cardSelected]}
                onPress={() => toggle(species.id)}
              >
                <Text style={styles.cardEmoji}>{emojiMap[species.id] ?? '🌱'}</Text>
                <Text style={styles.cardName}>{t(species.nameKey)}</Text>
              </Pressable>
            );
          })}
        </View>

        <Pressable
          style={[
            styles.button,
            selected.length !== STARTER_SEED_COUNT && styles.buttonDisabled,
          ]}
          onPress={handleStart}
          disabled={selected.length !== STARTER_SEED_COUNT}
        >
          <Text style={styles.buttonText}>{t('onboarding.start')}</Text>
        </Pressable>

        <Text style={styles.hint}>{t('onboarding.pickExactly')}</Text>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: {
    padding: spacing.lg,
    paddingTop: 80,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.greenDark,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  counter: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.textSecondary,
    marginBottom: spacing.lg,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 12,
    marginBottom: spacing.xl,
  },
  card: {
    width: 140,
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: radius.lg,
    padding: spacing.md,
    alignItems: 'center',
    borderWidth: 2.5,
    borderColor: 'transparent',
  },
  cardSelected: {
    borderColor: colors.greenMid,
    backgroundColor: 'rgba(168,213,162,0.3)',
  },
  cardEmoji: {
    fontSize: 48,
    marginBottom: spacing.sm,
  },
  cardName: {
    fontSize: 14,
    fontWeight: '800',
    color: colors.textPrimary,
  },
  button: {
    backgroundColor: colors.greenMid,
    paddingVertical: 16,
    paddingHorizontal: 48,
    borderRadius: radius.lg,
    shadowColor: colors.greenDark,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 0,
    elevation: 4,
    marginBottom: spacing.md,
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
    shadowColor: '#aaa',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '800',
    textAlign: 'center',
  },
  hint: {
    fontSize: 12,
    color: colors.textMuted,
  },
});
