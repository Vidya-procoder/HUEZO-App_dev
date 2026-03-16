import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../../styles/theme';

export default function Splash({ navigation }) {
  useEffect(() => {
    // Simulate loading/initialization
    const timer = setTimeout(() => {
      navigation.replace('Onboarding');
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>HUEZO</Text>
      <Text style={styles.tagline}>Premium Clothing App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    ...theme.typography.h1,
    fontSize: 48,
    color: theme.colors.background,
    letterSpacing: 4,
  },
  tagline: {
    ...theme.typography.body,
    color: theme.colors.background,
    marginTop: theme.spacing.md,
    opacity: 0.8,
  },
});
