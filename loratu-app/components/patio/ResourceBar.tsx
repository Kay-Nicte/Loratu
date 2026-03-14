import { View, Text, StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useGameStore } from '../../stores/gameStore';
import { colors, spacing, radius } from '../../constants/theme';

function ResourcePill({ icon, value }: { icon: string; value: number }) {
  return (
    <View style={styles.pill}>
      <Text style={styles.pillIcon}>{icon}</Text>
      <Text style={styles.pillValue}>{value}</Text>
    </View>
  );
}

export default function ResourceBar() {
  const insets = useSafeAreaInsets();
  const resources = useGameStore(s => s.resources);

  return (
    <View style={[styles.bar, { paddingTop: insets.top + 8 }]}>
      <ResourcePill icon="💧" value={resources.water} />
      <ResourcePill icon="🌿" value={resources.fertilizer} />
      <ResourcePill icon="☀️" value={resources.sun} />
      <ResourcePill icon="⭐" value={resources.points} />
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    flexDirection: 'row',
    gap: 6,
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.sm,
  },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: 'rgba(255,253,247,0.9)',
    borderRadius: radius.full,
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderWidth: 1.5,
    borderColor: 'rgba(0,0,0,0.06)',
  },
  pillIcon: { fontSize: 16 },
  pillValue: { fontSize: 13, fontWeight: '700', color: colors.textPrimary },
});
