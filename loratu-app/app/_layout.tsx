import { useEffect } from 'react';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import '../i18n';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="onboarding/welcome" />
      <Stack.Screen name="onboarding/choose-seeds" />
      <Stack.Screen name="(tabs)" />
      <Stack.Screen
        name="plant/[id]"
        options={{ presentation: 'modal' }}
      />
    </Stack>
  );
}
