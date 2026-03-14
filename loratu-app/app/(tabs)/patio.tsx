import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useTranslation } from 'react-i18next';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, spacing, radius } from '../../constants/theme';
import { useGameStore } from '../../stores/gameStore';
import { CARE_COSTS } from '../../constants/gameConfig';
import ResourceBar from '../../components/patio/ResourceBar';

export default function PatioScreen() {
  const { t } = useTranslation();
  const resources = useGameStore(s => s.resources);
  const spots = useGameStore(s => s.spots);
  const plants = useGameStore(s => s.plants);
  const waterPlants = useGameStore(s => s.waterPlants);
  const fertilizePlants = useGameStore(s => s.fertilizePlants);
  const sunPlants = useGameStore(s => s.sunPlants);

  const hasPlanted = spots.some(s => s.plantId !== null);

  return (
    <LinearGradient
      colors={[colors.skyTop, colors.skyBottom]}
      style={styles.container}
    >
      <ResourceBar />

      {/* Patio area — placeholder until Skia is wired */}
      <View style={styles.patioArea}>
        <View style={styles.patio}>
          <View style={styles.wallTop}>
            <View style={styles.archRow}>
              {[0, 1, 2, 3, 4].map(i => (
                <View key={i} style={styles.arch} />
              ))}
            </View>
          </View>
          <View style={styles.floor}>
            {/* Fountain placeholder */}
            <View style={styles.fountain}>
              <Text style={styles.fountainText}>⛲</Text>
            </View>

            {/* Spot placeholders */}
            <Text style={styles.placeholderText}>
              {t('patio.tapToPlant')}
            </Text>
            <Text style={styles.spotCount}>
              {plants.length} / {spots.length} {t('tabs.patio').toLowerCase()}
            </Text>
          </View>
        </View>
      </View>

      {/* Action buttons */}
      <View style={styles.actions}>
        <Pressable
          style={[styles.actionBtn, !hasPlanted && styles.actionDisabled]}
          onPress={() => waterPlants()}
          disabled={!hasPlanted || resources.water < CARE_COSTS.water.water}
        >
          <Text style={styles.actionIcon}>💧</Text>
          <Text style={styles.actionLabel}>{t('actions.water')}</Text>
          <Text style={styles.actionCost}>-{CARE_COSTS.water.water}💧</Text>
        </Pressable>

        <Pressable
          style={[styles.actionBtn, !hasPlanted && styles.actionDisabled]}
          onPress={() => fertilizePlants()}
          disabled={!hasPlanted || resources.fertilizer < CARE_COSTS.fertilize.fertilizer}
        >
          <Text style={styles.actionIcon}>🌿</Text>
          <Text style={styles.actionLabel}>{t('actions.fertilize')}</Text>
          <Text style={styles.actionCost}>-{CARE_COSTS.fertilize.fertilizer}🌿</Text>
        </Pressable>

        <Pressable
          style={[styles.actionBtn, !hasPlanted && styles.actionDisabled]}
          onPress={() => sunPlants()}
          disabled={!hasPlanted || resources.sun < CARE_COSTS.sun.sun}
        >
          <Text style={styles.actionIcon}>☀️</Text>
          <Text style={styles.actionLabel}>{t('actions.sun')}</Text>
          <Text style={styles.actionCost}>-{CARE_COSTS.sun.sun}☀️</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  patioArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.md,
  },
  patio: {
    width: '100%',
    maxWidth: 400,
    aspectRatio: 1,
    borderRadius: radius.lg,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 8,
  },
  wallTop: {
    height: 50,
    backgroundColor: colors.wall,
    borderBottomWidth: 3,
    borderBottomColor: colors.wallShadow,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  archRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  arch: {
    width: 40,
    height: 30,
    borderWidth: 3,
    borderBottomWidth: 0,
    borderColor: colors.terra,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'rgba(135,206,235,0.3)',
  },
  floor: {
    flex: 1,
    backgroundColor: colors.tileWhite,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.lg,
  },
  fountain: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.fountain,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.md,
    borderWidth: 3,
    borderColor: colors.wallShadow,
  },
  fountainText: { fontSize: 36 },
  placeholderText: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.textSecondary,
    textAlign: 'center',
  },
  spotCount: {
    fontSize: 12,
    color: colors.textMuted,
    marginTop: spacing.xs,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    padding: spacing.md,
    paddingBottom: spacing.sm,
  },
  actionBtn: {
    backgroundColor: 'rgba(255,253,247,0.92)',
    borderRadius: radius.lg,
    padding: spacing.sm,
    paddingHorizontal: spacing.md,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(0,0,0,0.08)',
    minWidth: 70,
  },
  actionDisabled: { opacity: 0.35 },
  actionIcon: { fontSize: 22 },
  actionLabel: { fontSize: 10, fontWeight: '700', color: colors.textSecondary },
  actionCost: { fontSize: 9, color: colors.textMuted },
});
