/**
 * Sound effects placeholder.
 * TODO: Add actual audio files in assets/sounds/ and wire with expo-audio.
 * For now, haptics provide the tactile feedback.
 */

let soundEnabled = true;

export function setSoundEnabled(enabled: boolean) {
  soundEnabled = enabled;
}

export function isSoundEnabled(): boolean {
  return soundEnabled;
}

/** Placeholder — will play actual sounds when audio assets are added */
export async function playSound(_type: 'correct' | 'wrong' | 'water' | 'grow' | 'buy' | 'plant') {
  if (!soundEnabled) return;
  // TODO: implement with expo-audio when sound files are ready
}
