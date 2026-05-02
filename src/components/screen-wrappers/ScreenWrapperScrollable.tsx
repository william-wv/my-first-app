import { useState } from 'react';
import type { ReactNode } from 'react';
import { Platform, RefreshControl, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import StarField from '../StarField';
import { colors } from '../../theme';

type ScreenWrapperScrollableProps = {
  children:    ReactNode;
  padding?:    number;
  gap?:        number;
  onRefresh?:  () => void | Promise<void>;
};

export default function ScreenWrapperScrollable({
  children,
  padding = 20,
  gap     = 0,
  onRefresh,
}: ScreenWrapperScrollableProps) {
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = async () => {
    if (!onRefresh) return;
    setRefreshing(true);
    try {
      await Promise.resolve(onRefresh());
    } finally {
      setRefreshing(false);
    }
  };

  const refreshControl =
    onRefresh && Platform.OS !== 'web' ? (
      <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
    ) : undefined;

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
      <StarField />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[styles.contentContainer, { padding, gap }]}
        refreshControl={refreshControl}
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex:            1,
    backgroundColor: colors.bg,
  },
  contentContainer: {
    flexGrow: 1,
  },
});
