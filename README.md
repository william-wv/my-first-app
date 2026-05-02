## TEMA : Central de Adoção Estelar

# Prática de Implementação 1

Chegou o momento de colocar à prova todos os conhecimentos adquiridos na disciplina até agora. Esta é a Prática de Implementação 1, que certifica você como um aprendiz de nível Júnior no React Native.

Nesta primeira atividade de integração, o desafio é construir a interface funcional de um formulário de entrada de dados. O objetivo não é apenas "desenhar" a tela, mas garantir que ela reaja corretamente aos estados, valide informações em tempo real e gerencie seu próprio ciclo de vida.

---

🚩 O Desafio
Escolha um tema de sua preferência (ex: Cadastro de Pet, Login de Sistema de Finanças, Reserva de Quadra Esportiva, etc.) e desenvolva uma tela de formulário que siga rigorosamente os requisitos técnicos abaixo. A imagem a seguir é um exemplo para inspiração:

Foto exemplo da atividade
🛠️ Requisitos Técnicos Obrigatórios
Cada requisito vale 1 ponto:


1. ScreenWrapper: O componente principal da tela deve ser um ScreenWrapper construído por você (você deve ter ele pronto se entregou todas as atividades), garantindo que o conteúdo seja rolável em telas menores e respeite as áreas seguras (Safe Area).

2. Ciclo de Vida (loading simulado): Utilize um useEffect para exibir um aviso "Sistema Carregado...", ele deve sumir assim que a tela for montada (simule um loading de 2s com timeout).

3. Identidade Visual: A tela deve conter uma Image (logo ou ilustração) que represente a temática escolhida.

4. Componentes Reutilizável FormInput: Você deve criar e utilizar um componente FormInput que receba via props: label, error (mensagem de erro) e os eventos de alteração de texto. O funcionamento deste componente deve ser idêntico ao TextInput, acrescido de label e error.

5. Validação Visual: Caso um campo esteja inválido, o componente FormInput deve exibir a mensagem de erro em um Text com cor destacada.

6. Gerenciamento de Estado (useState): O formulário deve ter pelo menos 3 campos de entrada. O estado deve controlar os valores digitados e a visibilidade de mensagens de erro.

7. Switch: Inclua um Switch no formulário (ex: "Lembrar-me", "Aceito os termos" ou "Modo Noturno").

8. Componente Reutilizável FormButton: Utilize Pressable ou TouchableOpacity para criar um FormButton estilizado (não utilize o componente Button nativo).

9. Efeito de Monitoramento (useEffect): Implemente um useEffect que monitore os campos do formulário e habilite/desabilite o botão de submissão (FormButton).

Exemplo: Validar se a senha tem o número mínimo de caracteres ou se todos os campos obrigatórios foram preenchidos.
 
10. Ação de Submissão (log onSumbit): Ao pressionar o botão de submissão (FormButton), deve ser exibido um log no console com os valores atuais de todos os campos do form, incluindo o Switch (veja item a seguir).
