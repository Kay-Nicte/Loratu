import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { colors, spacing } from '../../constants/theme';

export default function PlantDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('patio.plantLevel', { name: id, level: 1 })}</Text>
      {/* TODO: Plant detail with Skia illustration + care actions */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.lg,
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    color: colors.greenDark,
  },
});
