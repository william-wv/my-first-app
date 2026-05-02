import type { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type ScreenWrapperFullscreenProps = {
  children: ReactNode;
  center?: boolean;
  padding?: number;
  gap?: number;
};

export default function ScreenWrapperFullscreen({
  children,
  center = false,
  padding = 20,
  gap = 0,
}: ScreenWrapperFullscreenProps) {
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <View style={[styles.container, { padding, gap }, center && styles.centered]}>
        {children}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#e2e8f0',
  },
  container: {
    flex: 1,
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
