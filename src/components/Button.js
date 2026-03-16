import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { theme } from '../styles/theme';

export default function Button({ title, onPress, type = 'primary', style, textStyle, disabled }) {
  const isPrimary = type === 'primary';
  const isOutline = type === 'outline';

  return (
    <TouchableOpacity
      style={[
        styles.button,
        isPrimary && styles.primary,
        isOutline && styles.outline,
        disabled && styles.disabled,
        style,
      ]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
    >
      <Text
        style={[
          styles.text,
          isPrimary && styles.primaryText,
          isOutline && styles.outlineText,
          textStyle,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.xl,
    borderRadius: theme.borderRadius.round, // rounded buttons per requirements
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: theme.spacing.sm,
  },
  primary: {
    backgroundColor: theme.colors.primary,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    fontSize: theme.typography.body.fontSize,
    fontWeight: 'bold',
  },
  primaryText: {
    color: '#FFFFFF',
  },
  outlineText: {
    color: theme.colors.primary,
  },
});
