import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { LinearGradient } from 'expo-linear-gradient';
import * as Haptics from 'expo-haptics';
import { colors, spacing, radius } from '../../constants/theme';
import { SHOP_SPECIES } from '../../constants/plants';
import { useGameStore } from '../../stores/gameStore';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useState } from 'react';

export default function ShopScreen() {
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const resources = useGameStore(s => s.resources);
  const shopOwned = useGameStore(s => s.shopOwned);
  const buyPlant = useGameStore(s => s.buyPlant);
  const [toast, setToast] = useState<string | null>(null);

  const emojiMap: Record<string, string> = {
    tulip: '🌷', mushroom: '🍄', bamboo: '🎋', lotus: '🪷',
    olive: '🫒', fern: '🌿', bonsai: '🌲', palm: '🌴',
  };

  const handleBuy = (speciesId: string, cost: number) => {
    const species = SHOP_SPECIES.find(s => s.id === speciesId);
    if (!species) return;

    if (resources.points < cost) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
      setToast(t('shop.needPoints', { cost }));
      setTimeout(() => setToast(null), 2000);
      return;
    }

    const success = buyPlant(speciesId, cost);
    if (success) {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      setToast(`🎉 ${t('shop.bought', { name: t(species.nameKey) })}`);
      setTimeout(() => setToast(null), 2000);
    }
  };

  return (
    <LinearGradient
      colors={[colors.skyTop, colors.skyBottom]}
      style={styles.container}
    >
      <ScrollView
        contentContainerStyle={[styles.scroll, { paddingTop: insets.top + 16 }]}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>{t('shop.title')}</Text>
        <View style={styles.pointsBadge}>
          <Text style={styles.pointsIcon}>⭐</Text>
          <Text style={styles.pointsText}>{resources.points} {t('resources.points')}</Text>
        </View>

        <Text style={styles.sectionLabel}>{t('shop.subtitle')}</Text>

        <View style={styles.grid}>
          {SHOP_SPECIES.map((species) => {
            const owned = shopOwned.includes(species.id);
            const canAfford = resources.points >= (species.shopCost ?? 0);
            return (
              <Pressable
                key={species.id}
                style={[
                  styles.item,
                  owned && styles.itemOwned,
                  !owned && !canAfford && styles.itemExpensive,
                ]}
                onPress={() => !owned && species.shopCost && handleBuy(species.id, species.shopCost)}
                disabled={owned}
              >
                <View style={[styles.itemIconWrap, owned && styles.itemIconOwned]}>
                  <Text style={styles.itemIcon}>{emojiMap[species.id] ?? '🌱'}</Text>
                </View>
                <Text style={styles.itemName}>{t(species.nameKey)}</Text>
                {owned ? (
                  <View style={styles.ownedBadge}>
                    <Text style={styles.ownedText}>✅ {t('shop.owned')}</Text>
                  </View>
                ) : (
                  <View style={[styles.costBadge, !canAfford && styles.costBadgeRed]}>
                    <Text style={styles.costIcon}>⭐</Text>
                    <Text style={[styles.costText, !canAfford && styles.costTextRed]}>
                      {species.shopCost}
                    </Text>
                  </View>
                )}
              </Pressable>
            );
          })}
        </View>
      </ScrollView>

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
  scroll: { padding: spacing.lg, paddingBottom: 40 },
  title: {
    fontSize: 24, fontWeight: '800', color: colors.greenDark,
    textAlign: 'center', marginBottom: spacing.sm,
  },
  pointsBadge: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    gap: 6, marginBottom: spacing.lg,
    backgroundColor: 'rgba(255,255,255,0.7)',
    alignSelf: 'center',
    paddingHorizontal: 20, paddingVertical: 8,
    borderRadius: radius.full,
    borderWidth: 2, borderColor: colors.yellow,
  },
  pointsIcon: { fontSize: 20 },
  pointsText: { fontSize: 16, fontWeight: '800', color: colors.yellowDark },
  sectionLabel: {
    fontSize: 13, color: colors.textSecondary, textAlign: 'center',
    marginBottom: spacing.md,
  },
  grid: {
    flexDirection: 'row', flexWrap: 'wrap',
    justifyContent: 'center', gap: 12,
  },
  item: {
    width: '45%', backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: radius.xl, padding: spacing.md,
    alignItems: 'center', borderWidth: 2.5, borderColor: '#eee',
    shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06, shadowRadius: 8, elevation: 2,
  },
  itemOwned: { borderColor: colors.greenSoft, opacity: 0.7 },
  itemExpensive: { borderColor: '#f0e0e0' },
  itemIconWrap: {
    width: 72, height: 72, borderRadius: 36,
    backgroundColor: '#FFF8F0', justifyContent: 'center', alignItems: 'center',
    marginBottom: spacing.sm,
    borderWidth: 2, borderColor: '#f0e8d8',
  },
  itemIconOwned: { backgroundColor: '#e8ffe8', borderColor: colors.greenSoft },
  itemIcon: { fontSize: 40 },
  itemName: { fontSize: 14, fontWeight: '800', color: colors.textPrimary, marginBottom: 6 },
  ownedBadge: {
    backgroundColor: '#e8ffe8', paddingHorizontal: 12, paddingVertical: 4,
    borderRadius: radius.full,
  },
  ownedText: { fontSize: 11, fontWeight: '700', color: colors.greenDark },
  costBadge: {
    flexDirection: 'row', alignItems: 'center', gap: 4,
    backgroundColor: '#FFF8E0', paddingHorizontal: 12, paddingVertical: 4,
    borderRadius: radius.full,
  },
  costBadgeRed: { backgroundColor: '#FFE8E8' },
  costIcon: { fontSize: 14 },
  costText: { fontSize: 13, fontWeight: '700', color: colors.yellowDark },
  costTextRed: { color: '#C53030' },
  toast: {
    position: 'absolute', top: 100, alignSelf: 'center',
    backgroundColor: 'rgba(0,0,0,0.75)',
    paddingHorizontal: 20, paddingVertical: 10,
    borderRadius: 20, zIndex: 999,
  },
  toastText: { color: 'white', fontSize: 13, fontWeight: '700' },
});
