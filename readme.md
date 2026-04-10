# 📱 Atividades de PDM com React Native + Expo

Este repositório contém a implementação das atividades da disciplina, desenvolvidas com **React Native**, **Expo** e **TypeScript**.

## ✅ Atividade atual: Screen Wrappers

O objetivo desta atividade foi criar componentes reutilizáveis para servir como "moldura" das telas do app.

Foram implementados dois wrappers:

### 1. `ScreenWrapperFullscreen`
Usado em telas sem rolagem, com opção de centralizar o conteúdo.

**Props:**
- `children`
- `center?`
- `padding?` com padrão `20`
- `gap?`

### 2. `ScreenWrapperScrollable`
Usado em telas com muito conteúdo, utilizando `ScrollView`.

**Props:**
- `children`
- `padding?` com padrão `20`
- `gap?`
- `onRefresh?`

Também foi utilizado:
- `StatusBar` do `expo-status-bar`
- `SafeAreaView` do `react-native-safe-area-context`
- `RefreshControl` para o efeito de "puxar para atualizar"

---

## 🧪 Telas de demonstração

### `Home.tsx`
Tela usando o wrapper **rolável**, com uma lista de itens dinâmica.

### `LoginScreen.tsx`
Tela usando o wrapper **fullscreen**, com conteúdo centralizado.

No arquivo `App.tsx`, é possível alternar entre os dois exemplos mudando o valor da constante:

```tsx
const showFullscreenExample = false;
```

- `false` → abre a tela `Home`
- `true` → abre a tela `LoginScreen`

---

## 📁 Estrutura principal

```text
src/
├── components/
│   ├── Home.tsx
│   └── screen-wrappers/
│       ├── ScreenWrapperFullscreen.tsx
│       └── ScreenWrapperScrollable.tsx
└── views/
    └── LoginScreen.tsx
```

---

## 🚀 Como executar

### 1. Instalar dependências
```bash
npm install
```

### 2. Rodar o projeto no navegador
```bash
npm run web
```

### 3. Verificar o TypeScript
```bash
npx tsc --noEmit
```

---

## 🎯 Requisitos atendidos

- [x] Configuração da `StatusBar`
- [x] Criação da pasta `components/screen-wrappers/`
- [x] Implementação do `ScreenWrapperFullscreen`
- [x] Implementação do `ScreenWrapperScrollable`
- [x] Uso de props opcionais com valores padrão
- [x] Suporte a rolagem e `onRefresh`
- [x] Integração com `SafeAreaView`

---

## ✅ Atividade 3: useState (Identificação de Visitante)

Esta tela demonstra o uso de estados (`useState`) para criar um fluxo dinâmico de acesso:

- Estado `name` (string, tipado): armazena o nome digitado.
- Estado `accessAuthorized` (boolean, tipado): controla se o acesso foi liberado.
- Formulário com `TextInput` e botão "Solicitar Acesso" (desabilitado se o nome estiver vazio).
- Ao liberar acesso, a tela mostra "Acesso Liberado para: [nome]" e abre automaticamente o site do complexo turístico.
- Botão "Sair" para resetar o fluxo e voltar ao formulário.

**Como testar:**
- No `App.tsx`, deixe `<VisitorAccessScreen />` como tela principal.
- Digite um nome, clique em "Solicitar Acesso" e o site será aberto em uma nova aba.
- Clique em "Sair" para reiniciar o fluxo.

**Requisitos atendidos:**
- [x] Estados tipados explicitamente (`useState<string>`, `useState<boolean>`)
- [x] Validação do input
- [x] Renderização condicional
- [x] Reset de fluxo (bônus)
- [x] Abertura automática do site ao liberar acesso

---

## ✅ Atividade 4: useEffect (Sensor de Estacionamento)

Esta tela simula um sensor de estacionamento e demonstra o uso do hook `useEffect` para controlar o ciclo de vida do componente:

- Ao montar, exibe no console: `📡 Sistema de Sensores Iniciado` e inicia um `setInterval` que loga a cada 2 segundos.
- Estado `distancia` (número) controlado por input e botões.
- Sempre que a distância mudar, se for menor que 20cm, exibe um alerta de perigo.
- Ao desmontar o componente, limpa o intervalo e exibe no console: `📴 Sistema de Sensores Desligado`.
- Layout estilizado e responsivo.

**Como testar:**
- No `App.tsx`, deixe `<ParkingSensorScreen />` como tela principal.
- Veja os logs no console do navegador.
- Ajuste a distância para testar o alerta.
- (Opcional) Implemente um botão no pai para desmontar/remontar o sensor e ver o cleanup.

**Requisitos atendidos:**
- [x] Efeito de montagem (`useEffect` com array vazio)
- [x] Efeito de monitoramento (`useEffect` com dependência)
- [x] Cleanup correto do intervalo
- [x] Alerta condicional
- [x] Interface didática e alinhada ao enunciado

---

## 👨‍💻 Autor
Projeto desenvolvido para fins acadêmicos na disciplina de **Programação para Dispositivos Móveis (PDM)**.