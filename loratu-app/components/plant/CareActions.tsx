import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useTranslation } from 'react-i18next';
import * as Haptics from 'expo-haptics';
import { colors, spacing, radius } from '../../constants/theme';
import { useGameStore } from '../../stores/gameStore';
import { CARE_COSTS } from '../../constants/gameConfig';

interface Props {
  onAction: (type: 'water' | 'fertilize' | 'sun', grew: boolean) => void;
}

export default function CareActions({ onAction }: Props) {
  const { t } = useTranslation();
  const resources = useGameStore(s => s.resources);
  const waterPlants = useGameStore(s => s.waterPlants);
  const fertilizePlants = useGameStore(s => s.fertilizePlants);
  const sunPlants = useGameStore(s => s.sunPlants);

  const handle = (type: 'water' | 'fertilize' | 'sun') => {
    let grew = false;
    if (type === 'water') grew = waterPlants();
    else if (type === 'fertilize') grew = fertilizePlants();
    else grew = sunPlants();

    Haptics.impactAsync(
      grew ? Haptics.ImpactFeedbackStyle.Heavy : Haptics.ImpactFeedbackStyle.Light
    );
    onAction(type, grew);
  };

  const actions = [
    {
      type: 'water' as const,
      icon: '💧',
      label: t('actions.water'),
      cost: CARE_COSTS.water.water,
      unit: '💧',
      disabled: resources.water < CARE_COSTS.water.water,
      color: '#E3F2FD',
      borderColor: colors.blueDark,
    },
    {
      type: 'fertilize' as const,
      icon: '🌿',
      label: t('actions.fertilize'),
      cost: CARE_COSTS.fertilize.fertilizer,
      unit: '🌿',
      disabled: resources.fertilizer < CARE_COSTS.fertilize.fertilizer,
      color: '#E8F5E9',
      borderColor: colors.greenMid,
    },
    {
      type: 'sun' as const,
      icon: '☀️',
      label: t('actions.sun'),
      cost: CARE_COSTS.sun.sun,
      unit: '☀️',
      disabled: resources.sun < CARE_COSTS.sun.sun,
      color: '#FFF8E1',
      borderColor: colors.yellowDark,
    },
  ];

  return (
    <View style={styles.container}>
      {actions.map(a => (
        <Pressable
          key={a.type}
          style={[
            styles.btn,
            { backgroundColor: a.color, borderColor: a.borderColor },
            a.disabled && styles.disabled,
          ]}
          onPress={() => handle(a.type)}
          disabled={a.disabled}
        >
          <Text style={styles.icon}>{a.icon}</Text>
          <Text style={styles.label}>{a.label}</Text>
          <Text style={styles.cost}>-{a.cost}{a.unit}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 14,
    borderRadius: radius.lg,
    borderWidth: 2,
    gap: 2,
  },
  disabled: { opacity: 0.35 },
  icon: { fontSize: 28 },
  label: { fontSize: 12, fontWeight: '700', color: colors.textPrimary },
  cost: { fontSize: 10, color: colors.textMuted },
});
