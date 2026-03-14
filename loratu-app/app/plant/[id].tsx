import { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, spacing, radius } from '../../constants/theme';
import { useGameStore } from '../../stores/gameStore';
import PlantInfo from '../../components/plant/PlantInfo';
import CareActions from '../../components/plant/CareActions';

export default function PlantDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const { t } = useTranslation();
  const plants = useGameStore(s => s.plants);
  const plant = plants.find(p => p.id === id);

  const [message, setMessage] = useState<string | null>(null);

  if (!plant) {
    return (
      <View style={styles.container}>
        <Text style={styles.empty}>Plant not found</Text>
      </View>
    );
  }

  const handleAction = (type: 'water' | 'fertilize' | 'sun', grew: boolean) => {
    if (grew) {
      setMessage(t('actions.plantGrew'));
    } else {
      const msgs = {
        water: t('actions.watering'),
        fertilize: t('actions.fertilizing'),
        sun: t('actions.sunning'),
      };
      setMessage(msgs[type]);
    }
    setTimeout(() => setMessage(null), 2000);
  };

  return (
    <LinearGradient
      colors={[colors.skyTop, colors.skyBottom]}
      style={styles.container}
    >
      {/* Close handle */}
      <View style={styles.handleRow}>
        <View style={styles.handle} />
      </View>

      <PlantInfo plant={plant} />

      {/* Toast message */}
      {message && (
        <View style={styles.toast}>
          <Text style={styles.toastText}>{message}</Text>
        </View>
      )}

      <CareActions onAction={handleAction} />

      <Pressable style={styles.closeBtn} onPress={() => router.back()}>
        <Text style={styles.closeBtnText}>{t('learn.backToGarden')}</Text>
      </Pressable>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 40,
  },
  empty: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: 100,
  },
  handleRow: {
    alignItems: 'center',
    paddingTop: 12,
    paddingBottom: 4,
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: 'rgba(0,0,0,0.15)',
    borderRadius: 2,
  },
  toast: {
    alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.75)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: radius.full,
    marginVertical: spacing.sm,
  },
  toastText: {
    color: 'white',
    fontSize: 13,
    fontWeight: '700',
  },
  closeBtn: {
    marginHorizontal: spacing.lg,
    marginTop: 'auto',
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
  closeBtnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '800',
  },
});
