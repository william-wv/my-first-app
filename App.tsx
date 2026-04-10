import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './src/components/Home';
import LoginScreen from './src/views/LoginScreen';
import VisitorAccessScreen from './src/views/VisitorAccessScreen';
import ParkingSensorScreen from './src/views/ParkingSensorScreen';

export default function App() {
  const showFullscreenExample = false;

  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      {/* <LoginScreen /> */}
      {/* <Home /> */}
      {/* <VisitorAccessScreen /> */}
      <ParkingSensorScreen />
    </SafeAreaProvider>
  );
}