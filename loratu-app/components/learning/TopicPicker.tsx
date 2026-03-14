import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useTranslation } from 'react-i18next';
import { colors, spacing, radius } from '../../constants/theme';
import type { Topic } from '../../types/content';

interface Props {
  onSelect: (topic: Topic) => void;
}

const topics: Array<{ key: Topic; icon: string; color: string }> = [
  { key: 'general', icon: '🌍', color: colors.yellow },
  { key: 'language', icon: '🗣️', color: colors.blue },
  { key: 'programming', icon: '💻', color: colors.purple },
];

export default function TopicPicker({ onSelect }: Props) {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('learn.title')}</Text>
      <View style={styles.list}>
        {topics.map(topic => (
          <Pressable
            key={topic.key}
            style={[styles.card, { borderColor: topic.color }]}
            onPress={() => onSelect(topic.key)}
          >
            <Text style={styles.icon}>{topic.icon}</Text>
            <View style={styles.info}>
              <Text style={styles.name}>{t(`learn.${topic.key}`)}</Text>
              <Text style={styles.desc}>{t(`learn.${topic.key}Desc`)}</Text>
            </View>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: spacing.lg, gap: spacing.md },
  title: {
    fontSize: 22, fontWeight: '800', color: colors.greenDark,
    textAlign: 'center', marginBottom: spacing.sm,
  },
  list: { gap: 12 },
  card: {
    flexDirection: 'row', alignItems: 'center', gap: 14,
    backgroundColor: 'rgba(255,255,255,0.85)',
    borderRadius: radius.lg, padding: spacing.md,
    borderWidth: 2.5,
  },
  icon: { fontSize: 32 },
  info: { flex: 1 },
  name: { fontSize: 16, fontWeight: '800', color: colors.textPrimary },
  desc: { fontSize: 12, color: colors.textSecondary, marginTop: 2 },
});
