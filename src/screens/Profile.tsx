import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

// Tipagem local das rotas que saem desta tela
type RootStackParamList = {
  Detalhes: undefined;
};

function Profile() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      
      {/* 👤 Avatar Genérico (usando uma imagem da internet como exemplo) */}
      <Image 
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/149/149071.png' }} 
        style={styles.avatar} 
      />
      
      {/* 📝 Informações do Usuário */}
      <Text style={styles.name}>Usuário Genérico</Text>
      <Text style={styles.email}>usuario@exemplo.com.br</Text>

      {/* 🚀 Botão Principal (Navega para Detalhes) */}
      <TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Detalhes')}
      >
        <Text style={styles.buttonText}>Ver Detalhes da Conta</Text>
      </TouchableOpacity>

      {/* 🚪 Botão Secundário (Sair) */}
      <TouchableOpacity 
        style={styles.logoutButton}
        onPress={() => console.log('Sair pressionado')}
      >
        <Text style={styles.logoutText}>Sair</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: '#F8F9FA', // Fundo levemente cinza
    padding: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60, // Deixa a imagem redonda
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#007BFF', // Borda azul ao redor da foto
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoutButton: {
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FF3B30', // Vermelho para indicar ação destrutiva
  },
  logoutText: {
    color: '#FF3B30',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

export default Profile;