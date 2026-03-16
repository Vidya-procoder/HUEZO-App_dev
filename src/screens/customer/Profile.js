import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../../styles/theme';
import Button from '../../components/Button';

export default function Profile({ navigation }) {
  const handleLogout = () => {
    // Navigate strictly back to Login stack
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  const renderOption = (icon, title) => (
    <TouchableOpacity style={styles.optionRow}>
      <View style={styles.optionIcon}>
        <Ionicons name={icon} size={24} color={theme.colors.text} />
      </View>
      <Text style={styles.optionTitle}>{title}</Text>
      <Ionicons name="chevron-forward" size={24} color={theme.colors.textLight} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>JD</Text>
          </View>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.email}>john.doe@brand.com</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account Settings</Text>
          <View style={styles.optionsContainer}>
            {renderOption('person-outline', 'Personal Information')}
            {renderOption('business-outline', 'Company Details')}
            {renderOption('card-outline', 'Payment Methods')}
            {renderOption('location-outline', 'Shipping Addresses')}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences</Text>
          <View style={styles.optionsContainer}>
            {renderOption('notifications-outline', 'Push Notifications')}
            {renderOption('lock-closed-outline', 'Privacy & Security')}
            {renderOption('help-circle-outline', 'Help & Support')}
          </View>
        </View>

        <Button 
          title="Log Out" 
          type="outline" 
          onPress={handleLogout} 
          style={styles.logoutBtn} 
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  content: {
    padding: theme.spacing.lg,
  },
  header: {
    alignItems: 'center',
    marginBottom: theme.spacing.xxl,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing.md,
  },
  avatarText: {
    ...theme.typography.h1,
    color: theme.colors.background,
  },
  name: {
    ...theme.typography.h2,
    color: theme.colors.text,
  },
  email: {
    ...theme.typography.body,
    color: theme.colors.textLight,
  },
  section: {
    marginBottom: theme.spacing.xl,
  },
  sectionTitle: {
    ...theme.typography.h3,
    color: theme.colors.text,
    marginBottom: theme.spacing.md,
  },
  optionsContainer: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.lg,
    borderWidth: 1,
    borderColor: theme.colors.border,
    overflow: 'hidden',
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  optionIcon: {
    marginRight: theme.spacing.md,
  },
  optionTitle: {
    flex: 1,
    ...theme.typography.body,
    color: theme.colors.text,
  },
  logoutBtn: {
    marginTop: theme.spacing.lg,
    marginBottom: theme.spacing.xxl,
  },
});
