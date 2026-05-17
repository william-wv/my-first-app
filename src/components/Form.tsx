import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import FormInput from './FormInput';
import FormButton from './FormButton';
import FormCheckbox from './FormCheckbox';

type FormErrors = {
  nome?: string;
  estrela?: string;
  mensagem?: string;
};

export default function Form() {
  // Estado de carregamento
  const [sistemaCarregado, setSistemaCarregado] = useState(false);
  const [avisoVisivel, setAvisoVisivel] = useState(false);

  // Campos do formulário
  const [nome, setNome] = useState('');
  const [estrela, setEstrela] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [certificado, setCertificado] = useState(false);

  // Validação
  const [erros, setErros] = useState<FormErrors>({});
  const [botaoHabilitado, setBotaoHabilitado] = useState(false);

  // Ciclo de vida: executa uma vez ao montar o componente (array vazio)
  useEffect(() => {
    const timer = setTimeout(() => {
      setSistemaCarregado(true);
      setAvisoVisivel(true);         
      setTimeout(() => setAvisoVisivel(false), 2000); 
    }, 2000);
    return () => clearTimeout(timer); 
  }, []);

  // Monitora os campos e habilita/desabilita o botão
  useEffect(() => {
    const novosErros: FormErrors = {};

    if (!nome.trim()) {
      novosErros.nome = 'Informe seu nome.';
    }
    if (!estrela.trim()) {
      novosErros.estrela = 'Dê um nome para sua estrela.';
    }
    if (mensagem.trim().length < 5) {
      novosErros.mensagem = 'Mensagem muito curta (mínimo 5 caracteres).';
    }

    setErros(novosErros);
    setBotaoHabilitado(Object.keys(novosErros).length === 0);
  }, [nome, estrela, mensagem]);

  // Log ao submeter o formulário
  function handleSubmit() {
    console.log('Formulário enviado:', { nome, estrela, mensagem, certificado });
  }

  return (
    <View style={styles.container}>

      {avisoVisivel && (
        <Text style={styles.loading}>Sistema Carregado...</Text>
      )}

      <Image
        source={require('../../assets/icon.png')}
        style={styles.logo}
      />

      <Text style={styles.titulo}>Central de Adoção Estelar</Text>
      <Text style={styles.subtitulo}>Adote uma estrela e deixe sua marca no universo!</Text>

      <FormInput
        label="Seu nome"
        value={nome}
        onChangeText={setNome}
        error={erros.nome}
        placeholder="Ex: Maria das Estrelas"
      />

      <FormInput
        label="Nome da estrela"
        value={estrela}
        onChangeText={setEstrela}
        error={erros.estrela}
        placeholder="Ex: Polaris"
      />

      <FormInput
        label="Mensagem especial"
        value={mensagem}
        onChangeText={setMensagem}
        error={erros.mensagem}
        placeholder="Ex: Para sempre brilhando no meu coração"
      />

      <FormCheckbox
        label="Quero receber certificado digital"
        value={certificado}
        onChange={setCertificado}
      />

      <FormButton
        title="Adotar estrela"
        onPress={handleSubmit}
        disabled={!botaoHabilitado || !sistemaCarregado}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    gap: 16,
  },
  loading: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  subtitulo: {
    fontSize: 14,
    textAlign: 'center',
    color: '#fff',
  },
});
