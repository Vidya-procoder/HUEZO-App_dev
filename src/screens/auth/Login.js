import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import Button from '../../components/Button';
import { theme } from '../../styles/theme';

export default function Login({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>HUEZO</Text>
          <Text style={styles.subtitle}>Welcome to Premium Manufacturing</Text>
        </View>

        <View style={styles.buttons}>
          <Button 
            title="Login to Account" 
            onPress={() => navigation.navigate('RoleSelection')} 
          />
          <Button 
            title="Create New Account" 
            type="outline" 
            onPress={() => {}} 
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    flex: 1,
    padding: theme.spacing.xl,
    justifyContent: 'space-around',
  },
  header: {
    alignItems: 'center',
    marginTop: theme.spacing.xxl,
  },
  title: {
    ...theme.typography.h1,
    color: theme.colors.primary,
    fontSize: 40,
    letterSpacing: 2,
    marginBottom: theme.spacing.sm,
  },
  subtitle: {
    ...theme.typography.body,
    color: theme.colors.textLight,
  },
  buttons: {
    width: '100%',
  },
});
