import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import { Linking } from 'react-native';
import ScreenWrapperFullscreen from '../components/screen-wrappers/ScreenWrapperFullscreen';

export default function VisitorAccessScreen() {
  // Estado para armazenar o nome digitado
  const [name, setName] = useState<string>('');
  // Estado para controlar se o acesso foi autorizado
  const [accessAuthorized, setAccessAuthorized] = useState<boolean>(false);

  // Função para resetar o fluxo (bônus)
  const handleLogout = () => {
    setAccessAuthorized(false);
    setName('');
  };

  // Função para liberar acesso e abrir o site
  const handleAuthorize = () => {
    setAccessAuthorized(true);
    Linking.openURL('https://www.debug.app.br/'); // Altere para o site desejado
  };

  return (
    <ScreenWrapperFullscreen center gap={20}>
      {!accessAuthorized ? (
        <View style={styles.formBox}>
          <Text style={styles.title}>Identificação de Visitante</Text>
          <Text style={styles.subtitle}>Informe seu nome completo para solicitar acesso ao complexo turístico.</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome completo"
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
            autoFocus
          />
          <Button
            title="Solicitar Acesso"
            onPress={handleAuthorize}
            disabled={name.trim().length === 0}
          />
        </View>
      ) : (
        <View style={styles.successBox}>
          <Text style={styles.successTitle}>Acesso Liberado para:</Text>
          <Text style={styles.successName}>{name}</Text>
          <Button title="Sair" onPress={handleLogout} color="#ef4444" />
        </View>
      )}
    </ScreenWrapperFullscreen>
  );
}

const styles = StyleSheet.create({
  formBox: {
    width: 320,
    backgroundColor: '#f1f5f9',
    borderRadius: 16,
    padding: 24,
    gap: 16,
    alignItems: 'stretch',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#334155',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    paddingVertical: 12,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#0f172a',
    marginBottom: 8,
  },
  successBox: {
    width: 320,
    backgroundColor: '#dcfce7',
    borderRadius: 16,
    padding: 24,
    gap: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  successTitle: {
    fontSize: 18,
    color: '#166534',
    fontWeight: '700',
  },
  successName: {
    fontSize: 22,
    color: '#166534',
    fontWeight: '700',
    marginBottom: 12,
  },
});
