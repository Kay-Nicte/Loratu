import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useTranslation } from 'react-i18next';
import { colors, spacing, radius } from '../../constants/theme';
import type { LearningPill, Topic } from '../../types/content';

interface Props {
  pill: LearningPill;
  onStartQuiz: () => void;
}

const headerColors: Record<Topic, [string, string]> = {
  general: ['#fffacd', '#ffe066'],
  language: ['#daeeff', '#b3d9ff'],
  programming: ['#eedcff', '#d4aaff'],
};

const catLabels: Record<Topic, { es: string; en: string }> = {
  general: { es: '🌍 Cultura General', en: '🌍 General Knowledge' },
  language: { es: '🗣️ Idiomas', en: '🗣️ Languages' },
  programming: { es: '💻 Programación', en: '💻 Programming' },
};

export default function PillCard({ pill, onStartQuiz }: Props) {
  const { i18n } = useTranslation();
  const lang = i18n.language === 'en' ? 'en' : 'es';
  const { t } = useTranslation();

  const [c1, c2] = headerColors[pill.topic];
  const cat = catLabels[pill.topic][lang];

  return (
    <View style={styles.container}>
      <View style={[styles.header, { backgroundColor: c1 }]}>
        <Text style={styles.headerCat}>{cat}</Text>
        <Text style={styles.headerTitle}>{pill.title[lang]}</Text>
      </View>

      <ScrollView style={styles.body} contentContainerStyle={styles.bodyContent}>
        <Text style={styles.bodyText}>{pill.body[lang]}</Text>
      </ScrollView>

      <View style={styles.footer}>
        <Pressable style={styles.button} onPress={onStartQuiz}>
          <Text style={styles.buttonText}>✏️ {t('learn.answerQuestions')}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cardBg,
    borderRadius: radius.xl,
    overflow: 'hidden',
    marginHorizontal: spacing.md,
    marginVertical: spacing.sm,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 4,
  },
  header: {
    padding: spacing.lg,
    paddingBottom: spacing.md,
  },
  headerCat: {
    fontSize: 11, fontWeight: '700', textTransform: 'uppercase',
    letterSpacing: 1, opacity: 0.6, marginBottom: 4,
  },
  headerTitle: {
    fontSize: 20, fontWeight: '800', color: colors.textPrimary,
  },
  body: { flex: 1 },
  bodyContent: {
    padding: spacing.lg,
  },
  bodyText: {
    fontSize: 15, lineHeight: 26, color: colors.textPrimary,
  },
  footer: {
    padding: spacing.lg,
    paddingTop: spacing.sm,
  },
  button: {
    backgroundColor: colors.yellow,
    paddingVertical: 14,
    borderRadius: radius.md,
    alignItems: 'center',
    shadowColor: colors.yellowDark,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 0,
    elevation: 3,
  },
  buttonText: {
    fontSize: 16, fontWeight: '800', color: '#5a4000',
  },
});
