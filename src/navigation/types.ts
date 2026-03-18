import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RouteProp } from '@react-navigation/native';

// 1. Defina todas as telas do seu App aqui
export type RootStackParamList = {
  Home: undefined; // "undefined" significa que a tela Home não precisa receber parâmetros
  Profile: undefined;
  Details: { id: number; title: string }; // Exemplo: A tela Details precisa receber um ID e um Título
};

// 2. Tipagem para usar no hook useNavigation()
export type AppNavigationProp = NativeStackNavigationProp<RootStackParamList>;

// 3. (Recomendado) Isso faz o autocompletar do VS Code funcionar no app inteiro automaticamente
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}