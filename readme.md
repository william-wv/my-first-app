# 📱 App de Estudos - Navegação e Tipagem Completa com React Native

Este é um projeto de estudo prático focado em dominar a criação de interfaces, rotas de navegação (React Navigation) e tipagem estática (TypeScript) no ecossistema **React Native + Expo**.

## 🚀 Tecnologias Utilizadas

* **React Native & Expo:** Framework e plataforma de desenvolvimento mobile.
* **React Navigation (Native Stack):** Gerenciamento da pilha de navegação entre telas.
* **TypeScript:** Prevenção de erros com tipagem rigorosa de rotas e parâmetros.

---

## 🛠️ Como rodar o projeto do zero

Se você clonou este projeto ou está recriando do zero, siga os passos abaixo:

### 1. Instalação das dependências
Além do padrão do Expo, este projeto exige as bibliotecas de navegação. Rode no terminal:

```bash
# Instala as dependências base do projeto
npm install

# Instala o React Navigation e dependências do Expo
npm install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context

# Instala o Native Stack (Navegação em Pilha)
npm install @react-navigation/native-stack


📁 raiz-do-projeto/
 ├── 📁 src/
 │    ├── 📁 navigation/   
 │    │    └── 📄 types.ts      # Tipagem das rotas
 │    │
 │    └── 📁 screens/      
 │         ├── 📄 Home.tsx      # Tela inicial
 │         └── 📄 Profile.tsx   # Tela de perfil do usuário
 │
 ├── 📄 App.tsx                 # Arquivo principal que gerencia as rotas
 └── 📄 tsconfig.json           # Configuração do compilador