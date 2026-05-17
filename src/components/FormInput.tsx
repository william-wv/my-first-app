import React from 'react';
import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';
import { colors, radius } from '../theme';

type FormInputProps = {
  label?: string;
  error?: string | null;
  value: string;
  onChangeText: (text: string) => void;
} & TextInputProps;

export default function FormInput({
  label,
  error,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  keyboardType,
  ...rest
}: FormInputProps) {
  return (
    <View style={styles.wrapper}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <TextInput
        style={[styles.input, error ? styles.inputError : null]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.textMuted}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        {...rest}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    gap: 6,
  },
  label: {
    fontSize:   14,
    color:      colors.accentLight,
    fontWeight: '600',
  },
  input: {
    borderWidth:       1,
    borderColor:       colors.inputBorder,
    borderRadius:      radius.sm,
    paddingHorizontal: 12,
    paddingVertical:   10,
    backgroundColor:   colors.inputBg,
    fontSize:          16,
    color:             colors.textPrimary,
  },
  inputError: {
    borderColor: colors.error,
  },
  errorText: {
    color:      colors.error,
    fontSize:   13,
    fontWeight: '600',
  },
});
