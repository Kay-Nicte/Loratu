import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useTranslation } from 'react-i18next';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, spacing, radius } from '../../constants/theme';

export default function LearnScreen() {
  const { t } = useTranslation();

  return (
    <LinearGradient
      colors={[colors.skyTop, colors.skyBottom]}
      style={styles.container}
    >
      <View style={styles.content}>
        <Text style={styles.title}>{t('learn.title')}</Text>

        <Pressable style={[styles.topicCard, styles.topicGen]}>
          <Text style={styles.topicIcon}>🌍</Text>
          <View>
            <Text style={styles.topicName}>{t('learn.general')}</Text>
            <Text style={styles.topicDesc}>{t('learn.generalDesc')}</Text>
          </View>
        </Pressable>

        <Pressable style={[styles.topicCard, styles.topicLang]}>
          <Text style={styles.topicIcon}>🗣️</Text>
          <View>
            <Text style={styles.topicName}>{t('learn.language')}</Text>
            <Text style={styles.topicDesc}>{t('learn.languageDesc')}</Text>
          </View>
        </Pressable>

        <Pressable style={[styles.topicCard, styles.topicCode]}>
          <Text style={styles.topicIcon}>💻</Text>
          <View>
            <Text style={styles.topicName}>{t('learn.programming')}</Text>
            <Text style={styles.topicDesc}>{t('learn.programmingDesc')}</Text>
          </View>
        </Pressable>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: {
    flex: 1,
    padding: spacing.lg,
    paddingTop: 80,
    gap: 12,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: colors.greenDark,
    textAlign: 'center',
    marginBottom: spacing.md,
  },
  topicCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    backgroundColor: 'rgba(255,255,255,0.85)',
    borderRadius: radius.lg,
    padding: spacing.md,
    borderWidth: 2.5,
    borderColor: 'transparent',
  },
  topicGen: { borderColor: colors.yellow },
  topicLang: { borderColor: colors.blue },
  topicCode: { borderColor: colors.purple },
  topicIcon: { fontSize: 32 },
  topicName: { fontSize: 16, fontWeight: '800', color: colors.textPrimary },
  topicDesc: { fontSize: 12, color: colors.textSecondary, marginTop: 2 },
});
