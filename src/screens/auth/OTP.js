import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { theme } from '../../styles/theme';

export default function OTP({ navigation }) {
  const [otp, setOtp] = useState('');

  const handleVerify = () => {
    navigation.navigate('ResetPassword');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.content}
      >
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color={theme.colors.text} />
          </TouchableOpacity>
        </View>

        <View style={styles.body}>
          <Text style={styles.title}>Verification</Text>
          <Text style={styles.subtitle}>Enter the 4-digit code sent to your email address.</Text>

          <View style={styles.form}>
            <Input
              placeholder="0000"
              value={otp}
              onChangeText={setOtp}
              keyboardType="number-pad"
              maxLength={4}
              style={{ textAlign: 'center', fontSize: 24, letterSpacing: 8 }}
            />

            <Button 
              title="Verify Code" 
              onPress={handleVerify} 
              style={styles.btn}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
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
  },
  header: {
    padding: theme.spacing.md,
  },
  backButton: {
    padding: theme.spacing.sm,
    alignSelf: 'flex-start',
  },
  body: {
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
    lineHeight: 24,
  },
  form: {
    marginTop: theme.spacing.md,
  },
  btn: {
    marginTop: theme.spacing.xl,
  },
});
