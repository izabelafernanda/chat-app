# 🚀 Projeto de Chat - PlanetTech

Bem-vindo ao repositório do **Projeto de Chat**! Este projeto foi desenvolvido como parte da avaliação técnica para a vaga de **Analista de Desenvolvimento** na **PlanetTech**. Abaixo, você encontrará todos os detalhes sobre o teste realizado e como rodar o código.

## 📝 Descritivo do Teste

O objetivo deste projeto foi criar uma aplicação simples que simula a funcionalidade de um **chat**. A aplicação é composta por um **backend** que gerencia as mensagens e um **frontend** em React que exibe e envia as mensagens.

### 🛠 Stack Permitida

- **Backend**: Node.js
- **Frontend**: React

### Etapas da Prova

#### a) **Back end**  
Implemente uma API RESTful para gerenciar mensagens de um chat. A API tem as seguintes rotas:

1. **POST /messages**  
   Recebe uma mensagem para salvar no "banco de dados" (simulação usando um array ou arquivo JSON).  
   **Campos esperados no payload**:
   - `id`: Identificador único (UUID ou número auto-incremental)
   - `content`: Conteúdo da mensagem
   - `sender`: Nome do remetente
   - `timestamp`: Data/hora do envio (usa a data atual se não for enviada no payload)

2. **GET /messages**  
   Retorna todas as mensagens salvas, ordenadas pelo `timestamp`.

#### b) **Front end**  
Implemente uma interface para exibir e enviar mensagens:

- A tela inicial deve ser um formulário que pergunte o nome do usuário. Ao preencher o nome e confirmar, o usuário será levado para a tela de chat.
- Na tela de chat, o frontend deve listar todas as mensagens do sistema (ao carregar e a cada 5 segundos).
- Na lista de mensagens:
  - Exibir o nome do remetente, conteúdo da mensagem e data/hora do envio.
  - Caso a mensagem tenha sido enviada por um remetente com o nome idêntico ao nome do usuário logado, exibir a mensagem com um destaque (indicando que foi enviada e não recebida).
- O usuário deve ter um campo de texto para o envio de mensagens.
- Sempre que uma mensagem for enviada, deve-se buscar a lista atualizada de todas as mensagens.

---

## 🛠 Como Rodar o Projeto

### 🔧 Pré-requisitos

- **Node.js** (versão 16 ou superior)
- **npm** (gerenciador de pacotes do Node.js)
- **React** (usado no frontend)

### Passos para Rodar o Backend

1. Navegue até a pasta do **backend**:

    ```bash
    cd backend
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Inicie o servidor do **backend**:

    ```bash
    npm start
    ```

    O backend estará disponível em `http://localhost:3000` 🚀.

### Passos para Rodar o Frontend

1. Navegue até a pasta do **frontend**:

    ```bash
    cd frontend
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Inicie o servidor do **frontend**:

    ```bash
    npm run dev
    ```

    O frontend estará disponível em `http://localhost:5173` 🌐.

### 🔄 Interação entre Frontend e Backend

- O **Frontend** (React) faz requisições HTTP para o **Backend** (Node.js com Express) usando **Axios**.
- O **Backend** oferece duas rotas principais:
  - **POST /messages**: Para enviar novas mensagens.
  - **GET /messages**: Para obter todas as mensagens do chat.

---

## ✨ Funcionalidades

- **🌟 Mensagens Destacadas**: As mensagens enviadas pelo usuário logado são destacadas com uma cor de fundo diferente e um asterisco.
- **🔄 Atualização Automática**: As mensagens são automaticamente atualizadas a cada 5 segundos para garantir uma experiência de chat em tempo real.
- **💬 Enviar e Receber Mensagens**: O usuário pode enviar mensagens e visualizar as respostas em tempo real.

---

## 📸 Resultados Visuais

Abaixo, você pode ver os resultados visuais da aplicação em funcionamento.

### Tela Inicial:

![image](https://github.com/user-attachments/assets/9c534b71-baaa-47ed-b33e-80a99c7cdc0e)

### Tela de Chat:


---

## 📧 Contato

Se você tiver dúvidas ou sugestões, não hesite em entrar em contato!

- E-mail: [seuemail@exemplo.com](mailto:seuemail@exemplo.com)
- LinkedIn: [Seu LinkedIn](https://www.linkedin.com/in/seuperfil)

---
