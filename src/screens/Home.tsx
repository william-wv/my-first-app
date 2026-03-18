import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'; 
import { useNavigation } from '@react-navigation/native';
// 👇 1. Importamos a tipagem "AppNavigationProp" que configuramos no types.ts
import { AppNavigationProp } from '../navigation/types';

function Home() {
  const navigation = useNavigation<AppNavigationProp>();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Tela Inicial</Text>

        <TouchableOpacity 
          style={styles.meuBotao} 
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={styles.textoDoBotao}>Ir para Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.anchor}>Ir para Profile (Âncora)</Text>
        </TouchableOpacity>
        
    </View>
  );
}

const styles = StyleSheet.create({
  anchor: {
    color: 'blue',
    marginTop: 20,
    textDecorationLine: 'underline',
  },
  // 👇 Estilos do botão novo
  meuBotao: {
    backgroundColor: '#007BFF', // Azul
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 20,
  },
  textoDoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default Home;