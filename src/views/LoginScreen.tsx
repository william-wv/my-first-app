import { StyleSheet, Text, View } from 'react-native';
import ScreenWrapperFullscreen from '../components/screen-wrappers/ScreenWrapperFullscreen';

export default function LoginScreen() {
  return (
    <ScreenWrapperFullscreen center padding={24} gap={16}>
      <Text style={styles.eyebrow}>Painel de Acesso</Text>

      <View style={styles.card}>
        <Text style={styles.title}>Estação Cisne</Text>
        <Text style={styles.subtitle}>Entre com suas credenciais para continuar a missão.</Text>

        <View style={styles.inputBox}>
          <Text style={styles.placeholder}>E-mail da tripulação</Text>
        </View>

        <View style={styles.inputBox}>
          <Text style={styles.placeholder}>Senha de acesso</Text>
        </View>

        <View style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </View>
      </View>
    </ScreenWrapperFullscreen>
  );
}

const styles = StyleSheet.create({
  eyebrow: {
    fontSize: 14,
    fontWeight: '700',
    textTransform: 'uppercase',
    color: '#334155',
    letterSpacing: 1,
  },
  card: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: '#0f172a',
    borderRadius: 20,
    padding: 20,
    gap: 12,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#f8fafc',
  },
  subtitle: {
    fontSize: 14,
    color: '#cbd5e1',
    marginBottom: 8,
  },
  inputBox: {
    backgroundColor: '#1e293b',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 12,
  },
  placeholder: {
    color: '#94a3b8',
    fontSize: 14,
  },
  button: {
    marginTop: 8,
    backgroundColor: '#38bdf8',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  buttonText: {
    color: '#082f49',
    fontSize: 16,
    fontWeight: '700',
  },
});
