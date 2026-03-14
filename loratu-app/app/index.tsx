import { Redirect } from 'expo-router';
import { useGameStore } from '../stores/gameStore';

export default function Index() {
  const onboardingDone = useGameStore(s => s.onboardingDone);

  if (onboardingDone) {
    return <Redirect href="/(tabs)/patio" />;
  }

  return <Redirect href="/onboarding/welcome" />;
}
