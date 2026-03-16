import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { theme } from '../../styles/theme';
import Button from '../../components/Button';
import Input from '../../components/Input';

export default function CreateOrder({ navigation }) {
  const [step, setStep] = useState(1);
  const [orderType, setOrderType] = useState(null); // 'private' or 'white'

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
    else {
      // Submit order logic
      navigation.navigate('Orders');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.progressContainer}>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${(step / 3) * 100}%` }]} />
        </View>
        <Text style={styles.stepText}>Step {step} of 3</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {step === 1 && (
          <View>
            <Text style={styles.title}>Customer Details</Text>
            <Text style={styles.subtitle}>Select an existing customer or create a new one.</Text>
            
            <Input label="Customer Search" placeholder="Search by name or email" />
            <Text style={{ textAlign: 'center', marginVertical: theme.spacing.sm }}>OR</Text>
            <Input label="New Customer Name" placeholder="Enter company or person name" />
            <Input label="Email Address" placeholder="Contact email" keyboardType="email-address" />
            <Input label="Phone Number" placeholder="Contact number" keyboardType="phone-pad" />
          </View>
        )}

        {step === 2 && (
          <View>
            <Text style={styles.title}>Order Classification</Text>
            
            <TouchableOpacity 
              style={[styles.optionCard, orderType === 'private' && styles.optionCardActive]}
              onPress={() => setOrderType('private')}
            >
              <Ionicons name="cut" size={32} color={orderType === 'private' ? theme.colors.primary : theme.colors.textLight} />
              <View style={styles.optionTextContainer}>
                <Text style={[styles.optionTitle, orderType === 'private' && styles.textActive]}>Private Label</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.optionCard, orderType === 'white' && styles.optionCardActive]}
              onPress={() => setOrderType('white')}
            >
              <Ionicons name="shirt" size={32} color={orderType === 'white' ? theme.colors.primary : theme.colors.textLight} />
              <View style={styles.optionTextContainer}>
                <Text style={[styles.optionTitle, orderType === 'white' && styles.textActive]}>White Label</Text>
              </View>
            </TouchableOpacity>

            <View style={{ marginTop: theme.spacing.lg }}>
              <Input label="Fabric Requirements" placeholder="Fabric, GSM, Colors" multiline numberOfLines={3} style={{ height: 80, textAlignVertical: 'top' }} />
            </View>
          </View>
        )}

        {step === 3 && (
          <View>
            <Text style={styles.title}>Review & Create</Text>
            <View style={styles.summaryCard}>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Customer</Text>
                <Text style={styles.summaryValue}>New Customer</Text>
              </View>
              <View style={styles.divider} />
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Type</Text>
                <Text style={styles.summaryValue}>{orderType === 'private' ? 'Private Label' : 'White Label'}</Text>
              </View>
              <View style={styles.divider} />
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Initial Status</Text>
                <Text style={styles.summaryValue}>Pending Review</Text>
              </View>
            </View>
            <Text style={styles.notice}>This will create an order draft and notify the customer if applicable.</Text>
          </View>
        )}
      </ScrollView>

      <View style={styles.footer}>
        {step > 1 && (
          <Button 
            title="Back" 
            type="outline" 
            style={styles.backBtn} 
            onPress={() => setStep(step - 1)} 
          />
        )}
        <Button 
          title={step === 3 ? "Create Order Draft" : "Next"} 
          style={styles.nextBtn} 
          onPress={handleNext} 
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  progressContainer: {
    padding: theme.spacing.md,
    backgroundColor: theme.colors.card,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  progressBar: {
    height: 6,
    backgroundColor: theme.colors.border,
    borderRadius: 3,
    marginBottom: theme.spacing.xs,
  },
  progressFill: {
    height: '100%',
    backgroundColor: theme.colors.primary,
    borderRadius: 3,
  },
  stepText: {
    ...theme.typography.caption,
    textAlign: 'center',
  },
  content: {
    padding: theme.spacing.xl,
  },
  title: {
    ...theme.typography.h2,
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  subtitle: {
    ...theme.typography.body,
    color: theme.colors.textLight,
    marginBottom: theme.spacing.lg,
  },
  optionCard: {
    flexDirection: 'row',
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.md,
    borderWidth: 2,
    borderColor: 'transparent',
    marginBottom: theme.spacing.md,
    alignItems: 'center',
  },
  optionCardActive: {
    borderColor: theme.colors.primary,
    backgroundColor: '#FAF0F0',
  },
  optionTextContainer: {
    marginLeft: theme.spacing.md,
    flex: 1,
  },
  optionTitle: {
    ...theme.typography.h3,
    color: theme.colors.text,
  },
  textActive: {
    color: theme.colors.primary,
  },
  summaryCard: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
    marginBottom: theme.spacing.lg,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: theme.spacing.sm,
  },
  summaryLabel: {
    ...theme.typography.body,
    color: theme.colors.textLight,
  },
  summaryValue: {
    ...theme.typography.body,
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    backgroundColor: theme.colors.border,
    marginVertical: theme.spacing.xs,
  },
  notice: {
    ...theme.typography.caption,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  footer: {
    flexDirection: 'row',
    padding: theme.spacing.md,
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
    backgroundColor: theme.colors.background,
  },
  backBtn: {
    flex: 1,
    marginRight: theme.spacing.md,
  },
  nextBtn: {
    flex: 2,
  },
});
