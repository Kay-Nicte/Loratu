import { useState, useCallback } from 'react';
import { View, Text, StyleSheet, Pressable, Modal, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import * as Haptics from 'expo-haptics';
import { colors, spacing, radius } from '../../constants/theme';
import { useGameStore } from '../../stores/gameStore';
import { CARE_COSTS } from '../../constants/gameConfig';
import { getSpecies } from '../../constants/plants';
import ResourceBar from '../../components/patio/ResourceBar';
import PatioCanvas from '../../components/patio/PatioCanvas';

export default function PatioScreen() {
  const { t } = useTranslation();
  const router = useRouter();
  const resources = useGameStore(s => s.resources);
  const spots = useGameStore(s => s.spots);
  const plants = useGameStore(s => s.plants);
  const inventory = useGameStore(s => s.inventory);
  const placePlant = useGameStore(s => s.placePlant);
  const waterPlants = useGameStore(s => s.waterPlants);
  const fertilizePlants = useGameStore(s => s.fertilizePlants);
  const sunPlants = useGameStore(s => s.sunPlants);

  const [modalSpot, setModalSpot] = useState<number | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2000);
  };

  const hasPlanted = spots.some(s => s.plantId !== null);

  // Unique available species from inventory (not already placed)
  const availableSpecies = useCallback(() => {
    // Count how many of each species are in inventory
    const invCount: Record<string, number> = {};
    inventory.forEach(id => { invCount[id] = (invCount[id] || 0) + 1; });

    // Count how many of each are placed
    const placedCount: Record<string, number> = {};
    plants.forEach(p => {
      if (spots.some(s => s.plantId === p.id)) {
        placedCount[p.speciesId] = (placedCount[p.speciesId] || 0) + 1;
      }
    });

    // Available = in inventory but not yet placed
    const result: Array<{ speciesId: string; count: number }> = [];
    const seen = new Set<string>();
    inventory.forEach(id => {
      if (seen.has(id)) return;
      seen.add(id);
      const free = (invCount[id] || 0);
      if (free > 0) result.push({ speciesId: id, count: free });
    });
    return result;
  }, [inventory, plants, spots]);

  const handleSpotPress = useCallback((spotIndex: number) => {
    const spot = spots[spotIndex];
    if (spot?.plantId) {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      router.push(`/plant/${spot.plantId}`);
    } else {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      setModalSpot(spotIndex);
    }
  }, [spots, router]);

  const handlePlacePlant = (speciesId: string) => {
    if (modalSpot !== null) {
      placePlant(speciesId, modalSpot);
      setModalSpot(null);
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      const species = getSpecies(speciesId);
      if (species) showToast(`🌱 ${t('patio.planted', { name: t(species.nameKey) })}`);
    }
  };

  const handleWater = () => {
    const grew = waterPlants();
    Haptics.impactAsync(grew ? Haptics.ImpactFeedbackStyle.Heavy : Haptics.ImpactFeedbackStyle.Medium);
    showToast(grew ? `🌟 ${t('actions.plantGrew')}` : `💧 ${t('actions.watering')}`);
  };
  const handleFert = () => {
    const grew = fertilizePlants();
    Haptics.impactAsync(grew ? Haptics.ImpactFeedbackStyle.Heavy : Haptics.ImpactFeedbackStyle.Medium);
    showToast(grew ? `🌟 ${t('actions.plantGrew')}` : `🌿 ${t('actions.fertilizing')}`);
  };
  const handleSun = () => {
    const grew = sunPlants();
    Haptics.impactAsync(grew ? Haptics.ImpactFeedbackStyle.Heavy : Haptics.ImpactFeedbackStyle.Medium);
    showToast(grew ? `🌟 ${t('actions.plantGrew')}` : `☀️ ${t('actions.sunning')}`);
  };

  // Temporary emoji map for the selection modal
  const emojiMap: Record<string, string> = {
    geranium: '🌺', cactus: '🌵', lavender: '💜',
    sunflower: '🌻', jasmine: '🤍', bougainvillea: '🌸',
    tulip: '🌷', mushroom: '🍄', bamboo: '🎋', lotus: '🪷',
    olive: '🫒', fern: '🌿', bonsai: '🌲', palm: '🌴',
  };

  return (
    <LinearGradient
      colors={[colors.skyTop, '#B8E0F6', colors.skyBottom]}
      style={styles.container}
    >
      <ResourceBar />

      {/* Patio Canvas */}
      <View style={styles.canvasWrap}>
        <PatioCanvas onSpotPress={handleSpotPress} />
      </View>

      {/* Action buttons */}
      <View style={styles.actions}>
        <Pressable
          style={[styles.ab, (!hasPlanted || resources.water < CARE_COSTS.water.water) && styles.abDisabled]}
          onPress={handleWater}
          disabled={!hasPlanted || resources.water < CARE_COSTS.water.water}
        >
          <Text style={styles.abIcon}>💧</Text>
          <Text style={styles.abLabel}>{t('actions.water')}</Text>
        </Pressable>

        <Pressable
          style={[styles.ab, (!hasPlanted || resources.fertilizer < CARE_COSTS.fertilize.fertilizer) && styles.abDisabled]}
          onPress={handleFert}
          disabled={!hasPlanted || resources.fertilizer < CARE_COSTS.fertilize.fertilizer}
        >
          <Text style={styles.abIcon}>🌿</Text>
          <Text style={styles.abLabel}>{t('actions.fertilize')}</Text>
        </Pressable>

        <Pressable
          style={[styles.ab, (!hasPlanted || resources.sun < CARE_COSTS.sun.sun) && styles.abDisabled]}
          onPress={handleSun}
          disabled={!hasPlanted || resources.sun < CARE_COSTS.sun.sun}
        >
          <Text style={styles.abIcon}>☀️</Text>
          <Text style={styles.abLabel}>{t('actions.sun')}</Text>
        </Pressable>
      </View>

      {/* Plant selection modal */}
      <Modal
        visible={modalSpot !== null}
        transparent
        animationType="slide"
        onRequestClose={() => setModalSpot(null)}
      >
        <Pressable style={styles.modalOverlay} onPress={() => setModalSpot(null)}>
          <View style={styles.modalSheet}>
            <View style={styles.modalHandle} />
            <Text style={styles.modalTitle}>{t('patio.choosePlant')}</Text>

            {availableSpecies().length === 0 ? (
              <Text style={styles.modalEmpty}>{t('patio.noPlants')}</Text>
            ) : (
              <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.invRow}>
                {availableSpecies().map(({ speciesId, count }) => {
                  const species = getSpecies(speciesId);
                  return (
                    <Pressable
                      key={speciesId}
                      style={styles.invCard}
                      onPress={() => handlePlacePlant(speciesId)}
                    >
                      <Text style={styles.invEmoji}>{emojiMap[speciesId] ?? '🌱'}</Text>
                      <Text style={styles.invName}>
                        {species ? t(species.nameKey) : speciesId}
                      </Text>
                      {count > 1 && <Text style={styles.invCount}>x{count}</Text>}
                    </Pressable>
                  );
                })}
              </ScrollView>
            )}
          </View>
        </Pressable>
      </Modal>
      {/* Toast */}
      {toast && (
        <View style={styles.toast}>
          <Text style={styles.toastText}>{toast}</Text>
        </View>
      )}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  canvasWrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.sm,
    paddingTop: spacing.xs,
  },
  ab: {
    backgroundColor: 'rgba(255,253,247,0.92)',
    borderRadius: radius.lg,
    paddingVertical: 10,
    paddingHorizontal: 18,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(0,0,0,0.06)',
    minWidth: 72,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  abDisabled: { opacity: 0.35 },
  abIcon: { fontSize: 24, marginBottom: 2 },
  abLabel: { fontSize: 11, fontWeight: '700', color: colors.textSecondary },

  // Modal
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modalSheet: {
    backgroundColor: colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: spacing.lg,
    paddingBottom: 40,
  },
  modalHandle: {
    width: 40,
    height: 4,
    backgroundColor: '#ddd',
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: spacing.md,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.textPrimary,
    textAlign: 'center',
    marginBottom: spacing.md,
  },
  modalEmpty: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
    paddingVertical: spacing.lg,
  },
  invRow: {
    flexDirection: 'row',
    gap: 12,
    paddingVertical: spacing.sm,
  },
  invCard: {
    backgroundColor: '#F9F6F0',
    borderRadius: radius.lg,
    padding: spacing.md,
    alignItems: 'center',
    minWidth: 90,
    borderWidth: 2,
    borderColor: '#eee',
  },
  invEmoji: { fontSize: 40, marginBottom: 4 },
  invName: { fontSize: 12, fontWeight: '700', color: colors.textPrimary },
  invCount: { fontSize: 10, color: colors.textMuted, marginTop: 2 },

  // Toast
  toast: {
    position: 'absolute',
    top: 100,
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.75)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    zIndex: 999,
  },
  toastText: { color: 'white', fontSize: 13, fontWeight: '700' },
});
