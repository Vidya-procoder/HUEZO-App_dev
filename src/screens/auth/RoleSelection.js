import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../../styles/theme';

export default function RoleSelection({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color={theme.colors.text} />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Select Role</Text>
        <Text style={styles.subtitle}>Please select your account type to continue.</Text>

        <View style={styles.roleContainer}>
          <TouchableOpacity 
            style={styles.roleCard}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('CustomerLogin')}
          >
            <View style={[styles.iconContainer, { backgroundColor: '#F0E6E6' }]}>
              <Ionicons name="person" size={32} color={theme.colors.primary} />
            </View>
            <Text style={styles.roleTitle}>Customer</Text>
            <Text style={styles.roleDescription}>Manage your orders and styles</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.roleCard}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('StaffLogin')}
          >
            <View style={[styles.iconContainer, { backgroundColor: '#E6F0E6' }]}>
              <Ionicons name="briefcase" size={32} color="#2E7D32" />
            </View>
            <Text style={styles.roleTitle}>Staff</Text>
            <Text style={styles.roleDescription}>Manage customer orders</Text>
          </TouchableOpacity>
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
  header: {
    padding: theme.spacing.md,
  },
  backButton: {
    padding: theme.spacing.sm,
  },
  content: {
    flex: 1,
    padding: theme.spacing.xl,
    paddingTop: theme.spacing.md,
  },
  title: {
    ...theme.typography.h1,
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  subtitle: {
    ...theme.typography.body,
    color: theme.colors.textLight,
    marginBottom: theme.spacing.xxl,
  },
  roleContainer: {
    gap: theme.spacing.lg,
  },
  roleCard: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: theme.colors.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing.md,
  },
  roleTitle: {
    ...theme.typography.h3,
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  roleDescription: {
    ...theme.typography.caption,
    textAlign: 'center',
  },
});
