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
            <Text style={styles.title}>Select Service Type</Text>
            
            <TouchableOpacity 
              style={[styles.optionCard, orderType === 'private' && styles.optionCardActive]}
              onPress={() => setOrderType('private')}
            >
              <Ionicons name="cut" size={32} color={orderType === 'private' ? theme.colors.primary : theme.colors.textLight} />
              <View style={styles.optionTextContainer}>
                <Text style={[styles.optionTitle, orderType === 'private' && styles.textActive]}>Private Label</Text>
                <Text style={styles.optionDesc}>Custom designs built from scratch to your exact specifications.</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.optionCard, orderType === 'white' && styles.optionCardActive]}
              onPress={() => setOrderType('white')}
            >
              <Ionicons name="shirt" size={32} color={orderType === 'white' ? theme.colors.primary : theme.colors.textLight} />
              <View style={styles.optionTextContainer}>
                <Text style={[styles.optionTitle, orderType === 'white' && styles.textActive]}>White Label</Text>
                <Text style={styles.optionDesc}>Choose from our ready-made styles and add your branding.</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}

        {step === 2 && (
          <View>
            <Text style={styles.title}>Fabric Sourcing</Text>
            <Text style={styles.subtitle}>Tell us about the fabric you're looking for.</Text>
            
            <Input label="Fabric Composition (e.g. 100% Cotton)" placeholder="Enter composition" />
            <Input label="GSM (Weight)" placeholder="e.g. 200 GSM" keyboardType="numeric" />
            <Input label="Color Requirements" placeholder="Pantone codes or descriptions" />
            <Input label="Estimated Quantity" placeholder="Number of units" keyboardType="numeric" />
          </View>
        )}

        {step === 3 && (
          <View>
            <Text style={styles.title}>Order Summary</Text>
            <View style={styles.summaryCard}>
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Type</Text>
                <Text style={styles.summaryValue}>{orderType === 'private' ? 'Private Label' : 'White Label'}</Text>
              </View>
              <View style={styles.divider} />
              <View style={styles.summaryRow}>
                <Text style={styles.summaryLabel}>Status</Text>
                <Text style={styles.summaryValue}>Pending Review</Text>
              </View>
              {/* Additional summary fields would go here */}
            </View>
            <Text style={styles.notice}>Our team will review your requirements and provide a detailed quote within 24 hours.</Text>
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
          title={step === 3 ? "Submit Request" : "Next"} 
          style={styles.nextBtn} 
          onPress={handleNext} 
          disabled={step === 1 && !orderType}
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
    marginBottom: theme.spacing.xl,
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
    marginBottom: 4,
  },
  optionDesc: {
    ...theme.typography.caption,
    lineHeight: 20,
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
