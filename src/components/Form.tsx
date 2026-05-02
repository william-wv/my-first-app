import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import FormInput from './FormInput';
import FormButton from './FormButton';
import FormCheckbox from './FormCheckbox';
import { colors, radius } from '../theme';

export default function Form() {
  const [loadingNoticeVisible, setLoadingNoticeVisible] = useState(true);

  const [adopterName,      setAdopterName]      = useState('');
  const [starName,         setStarName]         = useState('');
  const [message,          setMessage]          = useState('');
  const [wantsCertificate, setWantsCertificate] = useState(false);

  const [errors,  setErrors]  = useState<{ adopterName?: string; starName?: string; message?: string }>({});
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoadingNoticeVisible(false), 2000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const newErrors: typeof errors = {};
    if (!adopterName.trim())                       newErrors.adopterName = 'Informe seu nome.';
    if (!starName.trim())                          newErrors.starName    = 'Dê um nome para sua estrela.';
    if (!message.trim() || message.length < 5)    newErrors.message     = 'Mensagem muito curta.';
    setErrors(newErrors);
    setIsValid(Object.keys(newErrors).length === 0);
  }, [adopterName, starName, message]);

  function handleSubmit() {
    console.log('Formulário enviado:', { adopterName, starName, message, wantsCertificate });
  }

  return (
    <View style={styles.container}>
      {loadingNoticeVisible ? (
        <Text style={styles.loadingNotice}>✦ Conectando à galáxia...</Text>
      ) : null}

      <View style={styles.header}>
        {/* <Image source={require('../../assets/icon.png')} style={styles.logo} /> */}
        <View style={styles.headerTextWrap}>
          <Text style={styles.title}>Central de Adoção Estelar</Text>
          <Text style={styles.subtitle}>Adote uma estrela e deixe sua marca no universo!</Text>
        </View>
      </View>

      <View style={styles.fields}>
        <FormInput
          label="Seu nome"
          value={adopterName}
          onChangeText={setAdopterName}
          error={errors.adopterName}
          placeholder="Ex: Maria das Estrelas"
        />
        <FormInput
          label="Nome da estrela"
          value={starName}
          onChangeText={setStarName}
          error={errors.starName}
          placeholder="Ex: Polaris"
        />
        <FormInput
          label="Mensagem especial"
          value={message}
          onChangeText={setMessage}
          error={errors.message}
          placeholder="Ex: Para sempre brilhando no meu coração"
        />
      </View>

      <View style={styles.divider} />

      <FormCheckbox
        label="Quero receber certificado digital"
        value={wantsCertificate}
        onChange={setWantsCertificate}
      />

      <FormButton
        title="✦ Adotar estrela"
        onPress={handleSubmit}
        disabled={!isValid || loadingNoticeVisible}
        style={{ marginTop: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    borderRadius:    radius.lg,
    padding:         20,
    borderWidth:     1,
    borderColor:     colors.surfaceBorder,
    shadowColor:     colors.accent,
    shadowOpacity:   0.2,
    shadowRadius:    16,
    elevation:       4,
    gap:             16,
  },
  loadingNotice: {
    color:      colors.accentLight,
    fontWeight: 'bold',
    textAlign:  'center',
  },
  header: {
    flexDirection: 'row',
    alignItems:    'center',
    gap:           12,
  },
  logo: {
    width:        44,
    height:       44,
    borderRadius: radius.sm,
    opacity:      0.9,
  },
  headerTextWrap: {
    flex: 1,
  },
  title: {
    fontSize:   17,
    fontWeight: 'bold',
    color:      colors.gold,
  },
  subtitle: {
    fontSize: 13,
    color:    colors.textSecondary,
    marginTop: 2,
  },
  fields: {
    gap: 14,
  },
  divider: {
    height:          1,
    backgroundColor: colors.surfaceBorder,
    marginVertical:  2,
  },
});
