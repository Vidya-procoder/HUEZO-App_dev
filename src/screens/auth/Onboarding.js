import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import Button from '../../components/Button';
import { theme } from '../../styles/theme';

const { width } = Dimensions.get('window');

const slides = [
  { id: 1, title: 'Choose Style', description: 'Explore premium styles to jumpstart your brand.' },
  { id: 2, title: 'Production', description: 'High-quality production matching your standards.' },
  { id: 3, title: 'Get Your Order', description: 'Fast and reliable delivery right to your door.' },
];

export default function Onboarding({ navigation }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      navigation.replace('Login');
    }
  };

  const handleSkip = () => {
    navigation.replace('Login');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.slideContainer}>
        {/* Placeholder for illustration */}
        <View style={styles.illustrationPlaceholder} />
        
        <Text style={styles.title}>{slides[currentIndex].title}</Text>
        <Text style={styles.description}>{slides[currentIndex].description}</Text>
      </View>

      <View style={styles.footer}>
        <View style={styles.dotsContainer}>
          {slides.map((_, index) => (
            <View 
              key={index} 
              style={[styles.dot, currentIndex === index && styles.activeDot]} 
            />
          ))}
        </View>
        
        <View style={styles.buttonContainer}>
          <Button 
            title="Skip" 
            type="outline" 
            style={styles.btn} 
            onPress={handleSkip} 
          />
          <View style={{ width: theme.spacing.md }} />
          <Button 
            title={currentIndex === slides.length - 1 ? "Start" : "Next"} 
            style={styles.btn} 
            onPress={handleNext} 
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
  slideContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing.xl,
  },
  illustrationPlaceholder: {
    width: width * 0.6,
    height: width * 0.6,
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.round,
    marginBottom: theme.spacing.xxl,
  },
  title: {
    ...theme.typography.h2,
    color: theme.colors.primary,
    marginBottom: theme.spacing.md,
    textAlign: 'center',
  },
  description: {
    ...theme.typography.body,
    color: theme.colors.textLight,
    textAlign: 'center',
    lineHeight: 24,
  },
  footer: {
    padding: theme.spacing.xl,
    paddingBottom: theme.spacing.xxl,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: theme.spacing.xl,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: theme.colors.border,
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: theme.colors.primary,
    width: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  btn: {
    flex: 1,
  },
});
