import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, spacing, radius } from '../../constants/theme';

export default function WelcomeScreen() {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <LinearGradient
      colors={[colors.skyTop, colors.skyBottom]}
      style={styles.container}
    >
      <View style={styles.content}>
        {/* TODO: Replace with Skia illustration */}
        <View style={styles.iconPlaceholder}>
          <Text style={styles.iconText}>🌿</Text>
        </View>

        <Text style={styles.title}>{t('onboarding.welcome')}</Text>
        <Text style={styles.subtitle}>{t('onboarding.subtitle')}</Text>

        <Pressable
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
          onPress={() => router.push('/onboarding/choose-seeds')}
        >
          <Text style={styles.buttonText}>{t('onboarding.start')}</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: spacing.lg,
  },
  content: {
    alignItems: 'center',
    maxWidth: 340,
  },
  iconPlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'rgba(255,255,255,0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.xl,
  },
  iconText: {
    fontSize: 64,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.greenDark,
    textAlign: 'center',
    marginBottom: spacing.sm,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: spacing.xxl,
  },
  button: {
    backgroundColor: colors.greenMid,
    paddingVertical: 16,
    paddingHorizontal: 48,
    borderRadius: radius.lg,
    shadowColor: colors.greenDark,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 0,
    elevation: 4,
  },
  buttonPressed: {
    transform: [{ translateY: 2 }],
    shadowOffset: { width: 0, height: 2 },
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '800',
  },
});
