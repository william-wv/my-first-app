import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors, radius } from '../theme';

type Props = {
  label: string;
  value: boolean;
  onChange: (v: boolean) => void;
};

export default function FormCheckbox({ label, value, onChange }: Props) {
  return (
    <Pressable
      style={({ pressed }) => [styles.row, pressed && styles.pressed]}
      onPress={() => onChange(!value)}
      accessibilityRole="checkbox"
      accessibilityState={{ checked: value }}
    >
      {/* TODO: customize box and boxChecked to seu gosto galáctico!
          Sugestões: mudar borderRadius, adicionar shadowColor, trocar a cor do check ✓ */}
      <View style={[styles.box, value && styles.boxChecked]}>
        {value && <Text style={styles.check}>✓</Text>}
      </View>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection:  'row',
    alignItems:     'center',
    gap:            12,
    paddingVertical: 4,
  },
  pressed: {
    opacity: 0.7,
  },

  // TODO: é aqui que mora o visual do checkbox — tente mudar estas propriedades!
  box: {
    width:           22,
    height:          22,
    borderRadius:    radius.sm,
    borderWidth:     2,
    borderColor:     colors.accentLight,
    alignItems:      'center',
    justifyContent:  'center',
    backgroundColor: 'transparent',
  },
  boxChecked: {
    backgroundColor: colors.accent,
    borderColor:     colors.accent,
  },

  check: {
    color:      '#fff',
    fontSize:   13,
    fontWeight: '700',
  },
  label: {
    flex:       1,
    fontSize:   15,
    color:      colors.textPrimary,
    fontWeight: '500',
  },
});
