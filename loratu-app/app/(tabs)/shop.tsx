import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { useTranslation } from 'react-i18next';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, spacing, radius } from '../../constants/theme';
import { SHOP_SPECIES } from '../../constants/plants';
import { useGameStore } from '../../stores/gameStore';

export default function ShopScreen() {
  const { t } = useTranslation();
  const resources = useGameStore(s => s.resources);
  const shopOwned = useGameStore(s => s.shopOwned);
  const buyPlant = useGameStore(s => s.buyPlant);

  // Temporary emoji map
  const emojiMap: Record<string, string> = {
    tulip: '🌷', mushroom: '🍄', bamboo: '🎋', lotus: '🪷',
    olive: '🫒', fern: '🌿', bonsai: '🌲', palm: '🌴',
  };

  return (
    <LinearGradient
      colors={[colors.skyTop, colors.skyBottom]}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>{t('shop.title')}</Text>
        <Text style={styles.subtitle}>
          {t('shop.subtitle')} • ⭐ {resources.points}
        </Text>

        <View style={styles.grid}>
          {SHOP_SPECIES.map((species) => {
            const owned = shopOwned.includes(species.id);
            return (
              <Pressable
                key={species.id}
                style={[styles.item, owned && styles.itemOwned]}
                onPress={() => {
                  if (!owned && species.shopCost) {
                    buyPlant(species.id, species.shopCost);
                  }
                }}
                disabled={owned}
              >
                <Text style={styles.itemIcon}>{emojiMap[species.id] ?? '🌱'}</Text>
                <Text style={styles.itemName}>{t(species.nameKey)}</Text>
                {owned ? (
                  <Text style={styles.itemOwned}>✅ {t('shop.owned')}</Text>
                ) : (
                  <Text style={styles.itemCost}>⭐ {species.shopCost}</Text>
                )}
              </Pressable>
            );
          })}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: {
    padding: spacing.lg,
    paddingTop: 80,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.greenDark,
    textAlign: 'center',
    marginBottom: spacing.xs,
  },
  subtitle: {
    fontSize: 13,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: spacing.lg,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 12,
  },
  item: {
    width: '45%',
    backgroundColor: 'rgba(255,255,255,0.85)',
    borderRadius: radius.lg,
    padding: spacing.md,
    alignItems: 'center',
    borderWidth: 2.5,
    borderColor: '#eee',
  },
  itemOwned: {
    opacity: 0.5,
    borderColor: colors.greenSoft,
    fontSize: 11,
    color: colors.greenDark,
    fontWeight: '700',
    marginTop: 4,
  },
  itemIcon: { fontSize: 40, marginBottom: spacing.sm },
  itemName: { fontSize: 13, fontWeight: '800', color: colors.textPrimary },
  itemCost: { fontSize: 12, color: colors.textSecondary, marginTop: 4 },
});
