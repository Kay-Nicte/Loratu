import { Tabs } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../constants/theme';

function TabIcon({ emoji, focused }: { emoji: string; focused: boolean }) {
  return (
    <View style={[styles.iconWrap, focused && styles.iconFocused]}>
      <Text style={styles.iconText}>{emoji}</Text>
    </View>
  );
}

export default function TabLayout() {
  const { t } = useTranslation();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: colors.greenDark,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarLabelStyle: styles.tabLabel,
      }}
    >
      <Tabs.Screen
        name="patio"
        options={{
          title: t('tabs.patio'),
          tabBarIcon: ({ focused }) => <TabIcon emoji="🏡" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="learn"
        options={{
          title: t('tabs.learn'),
          tabBarIcon: ({ focused }) => <TabIcon emoji="📚" focused={focused} />,
        }}
      />
      <Tabs.Screen
        name="shop"
        options={{
          title: t('tabs.shop'),
          tabBarIcon: ({ focused }) => <TabIcon emoji="🛍️" focused={focused} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.white,
    borderTopWidth: 2,
    borderTopColor: colors.greenSoft,
    height: 65,
    paddingBottom: 8,
    paddingTop: 4,
  },
  tabLabel: {
    fontSize: 10,
    fontWeight: '700',
  },
  iconWrap: {
    padding: 4,
  },
  iconFocused: {
    transform: [{ scale: 1.15 }],
  },
  iconText: {
    fontSize: 24,
  },
});
