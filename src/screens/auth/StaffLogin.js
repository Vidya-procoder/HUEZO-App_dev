import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { theme } from '../../styles/theme';

export default function StaffLogin({ navigation }) {
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!employeeId || !password) {
      setError('Please fill all fields');
      return;
    }
    setError('');
    // Simple validation bypass
    navigation.replace('StaffTabs');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scroll}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
              <Ionicons name="arrow-back" size={24} color={theme.colors.text} />
            </TouchableOpacity>
          </View>

          <View style={styles.content}>
            <Text style={styles.title}>Staff Portal</Text>
            <Text style={styles.subtitle}>Sign in with your employee ID</Text>

            <View style={styles.form}>
              <Input
                label="Employee ID"
                placeholder="Enter your ID"
                value={employeeId}
                onChangeText={setEmployeeId}
                autoCapitalize="none"
              />
              
              <Input
                label="Password"
                placeholder="Enter your password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                error={error}
              />

              <TouchableOpacity 
                style={styles.forgotPassword}
                onPress={() => navigation.navigate('ForgotPassword')}
              >
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
              </TouchableOpacity>

              <Button 
                title="Login" 
                onPress={handleLogin} 
                style={styles.loginBtn}
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  scroll: {
    flexGrow: 1,
  },
  header: {
    padding: theme.spacing.md,
  },
  backButton: {
    padding: theme.spacing.sm,
    alignSelf: 'flex-start',
  },
  content: {
    flex: 1,
    padding: theme.spacing.xl,
  },
  title: {
    ...theme.typography.h1,
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  subtitle: {
    ...theme.typography.body,
    color: theme.colors.textLight,
    marginBottom: theme.spacing.xl,
  },
  form: {
    marginTop: theme.spacing.md,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: theme.spacing.sm,
    marginBottom: theme.spacing.xl,
  },
  forgotPasswordText: {
    ...theme.typography.body,
    fontWeight: '600',
    color: theme.colors.primary,
  },
  loginBtn: {
    marginTop: theme.spacing.md,
  },
});
