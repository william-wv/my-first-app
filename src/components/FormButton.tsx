import React from 'react';
import { Pressable, StyleSheet, Text, ViewStyle } from 'react-native';
import { colors, radius } from '../theme';

type FormButtonProps = {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  style?: ViewStyle | ViewStyle[];
};

export default function FormButton({ title, onPress, disabled, style }: FormButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={!!disabled}
      style={({ pressed }) => [
        styles.button,
        disabled ? styles.disabled : null,
        pressed  ? styles.pressed  : null,
        style as any,
      ]}
    >
      <Text style={[styles.text, disabled && styles.textDisabled]}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.accent,
    paddingVertical:   13,
    paddingHorizontal: 16,
    borderRadius:      radius.md,
    alignItems:        'center',
    shadowColor:       colors.accent,
    shadowOpacity:     0.55,
    shadowRadius:      10,
    elevation:         6,
  },
  disabled: {
    backgroundColor: colors.disabledBg,
    shadowOpacity:   0,
    elevation:       0,
  },
  pressed: {
    opacity: 0.8,
  },
  text: {
    color:      '#fff',
    fontWeight: '700',
    fontSize:   16,
  },
  textDisabled: {
    color: colors.textMuted,
  },
});
