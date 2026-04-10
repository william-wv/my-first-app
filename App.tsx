import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './src/components/Home';
import LoginScreen from './src/views/LoginScreen';

export default function App() {
  const showFullscreenExample = false;

  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      {showFullscreenExample ? <LoginScreen /> : <Home />}
    </SafeAreaProvider>
  );
}