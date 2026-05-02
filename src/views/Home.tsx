import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScreenWrapperScrollable from '../components/screen-wrappers/ScreenWrapperScrollable';
import Form from '../components/Form';
import { colors } from '../theme';

export default function Home() {
  const headerContent = (
    <Text style={styles.subtitle}>
      Que tal adotar uma estrela? 
    </Text>
  );

  return (
    <ScreenWrapperScrollable padding={20} gap={16}>
      <Text style={styles.title}>💫 Olá, Galáctico!</Text>
      {headerContent}
      <View style={styles.listContainer}>
        <Form />
      </View>
    </ScreenWrapperScrollable>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize:    28,
    fontWeight:  '700',
    color:       colors.gold,
    marginBottom: 4,
    marginTop:   12,
  },
  subtitle: {
    fontSize:    16,
    color:       colors.textSecondary,
    marginBottom: 20,
  },
  listContainer: {
    gap: 16,
  },
});
