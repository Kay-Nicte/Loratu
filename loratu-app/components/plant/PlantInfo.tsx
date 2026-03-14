import { View, Text, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { colors, spacing, radius } from '../../constants/theme';
import { getSpecies } from '../../constants/plants';
import type { Plant } from '../../types/game';

interface Props {
  plant: Plant;
}

const STAGE_LABELS_ES = ['Semilla', 'Brote', 'Joven', 'Florecida'];
const STAGE_LABELS_EN = ['Seed', 'Sprout', 'Young', 'Blooming'];

export default function PlantInfo({ plant }: Props) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language === 'en' ? 'en' : 'es';
  const species = getSpecies(plant.speciesId);
  const stageLabels = lang === 'en' ? STAGE_LABELS_EN : STAGE_LABELS_ES;
  const isMax = plant.stage >= 3;
  const threshold = isMax ? 1 : (species?.growthRequirements[plant.stage] ?? 100);
  const percent = isMax ? 100 : Math.min(100, Math.round((plant.growthPts / threshold) * 100));

  // Temp emoji
  const emojiMap: Record<string, string> = {
    geranium: '🌺', cactus: '🌵', lavender: '💜', sunflower: '🌻',
    jasmine: '🤍', bougainvillea: '🌸', tulip: '🌷', mushroom: '🍄',
    bamboo: '🎋', lotus: '🪷', olive: '🫒', fern: '🌿', bonsai: '🌲', palm: '🌴',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>{emojiMap[plant.speciesId] ?? '🌱'}</Text>
      <Text style={styles.name}>{species ? t(species.nameKey) : plant.speciesId}</Text>
      <Text style={styles.stage}>{stageLabels[Math.min(plant.stage, 3)]}</Text>

      {/* Progress bar */}
      <View style={styles.progressWrap}>
        <View style={styles.progressBg}>
          <View style={[styles.progressFill, { width: `${percent}%` }]} />
        </View>
        <Text style={styles.progressText}>
          {isMax ? '✨ MAX' : `${plant.growthPts} / ${threshold}`}
        </Text>
      </View>

      {/* Stars */}
      <Text style={styles.stars}>
        {'⭐'.repeat(Math.min(plant.stage + 1, 4))}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', padding: spacing.lg },
  emoji: { fontSize: 64, marginBottom: spacing.sm },
  name: { fontSize: 22, fontWeight: '800', color: colors.textPrimary },
  stage: { fontSize: 14, color: colors.textSecondary, marginTop: 2, marginBottom: spacing.md },
  progressWrap: { width: '100%', alignItems: 'center', gap: 6 },
  progressBg: {
    width: '80%', height: 12, backgroundColor: '#eee',
    borderRadius: 6, overflow: 'hidden',
  },
  progressFill: {
    height: '100%', backgroundColor: colors.greenMid,
    borderRadius: 6,
  },
  progressText: { fontSize: 12, fontWeight: '700', color: colors.textMuted },
  stars: { fontSize: 18, marginTop: spacing.md },
});
