import { useEffect, useState } from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native';

function ParkingSensor() {
  const [distancia, setDistancia] = useState<number>(50);

  useEffect(() => {
    console.log('📡 Sistema de Sensores Iniciado');
    const interval = setInterval(() => {
      console.log('⏱️ Sensor ativo...');
    }, 2000);
    return () => {
      clearInterval(interval);
      console.log('📴 Sistema de Sensores Desligado');
    };
  }, []);

  // Aguarda o usuário parar de digitar antes de validar (debounce)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (distancia < 20) {
        Alert.alert('⚠️ PERIGO: Muito Próximo!');
      }
    }, 800);
    // O cleanup cancela o timer se o usuário ainda estiver digitando
    return () => clearTimeout(timer);
  }, [distancia]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', gap: 16, backgroundColor: '#ffffff' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#111827' }}>Sensor de Estacionamento</Text>
      <Text style={{ color: '#111827' }}>Distância (cm):</Text>
      <TextInput
        style={{ borderWidth: 1, borderColor: '#ccc', padding: 8, width: 100, textAlign: 'center', color: '#111827', backgroundColor: '#ffffff' }}
        keyboardType="numeric"
        value={distancia.toString()}
        onChangeText={t => setDistancia(Number(t) || 0)}
      />
      <Text style={{ fontSize: 32, color: '#111827' }}>{distancia} cm</Text>
    </View>
  );
}

export default function ParkingSensorScreen() {
  const [show, setShow] = useState(true);
  return (
    <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
      <Button title={show ? 'Desligar Sensor' : 'Ligar Sensor'} onPress={() => setShow(s => !s)} />
      {show && <ParkingSensor />}
    </View>
  );
}
