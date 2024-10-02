# Gerenciamento de Livros

## Descrição do Projeto

O **Gerenciamento de Livros** é uma aplicação web desenvolvida para facilitar a organização e o controle de uma biblioteca pessoal. Utilizando tecnologias modernas, como Node.js e Express no backend, e React no frontend, esta aplicação permite que os usuários realizem operações de CRUD (Criar, Ler, Atualizar e Deletar) em livros, proporcionando uma experiência de usuário intuitiva e eficiente.

## Demonstração

Assista à aplicação em ação através do link a seguir: [Demonstração do Front-end](https://www.youtube.com/watch?v=c6i3oArnbqg).

## Tecnologias Utilizadas

- **Frontend**:
  - [React](https://reactjs.org/)
  - HTML5
  - CSS3
  - [Bootstrap](https://getbootstrap.com/)
- **Backend**:
  - [Node.js](https://nodejs.org/)
  - [Express](https://expressjs.com/)
  - [MongoDB](https://www.mongodb.com/) (com MongoDB Compass)
- **Ferramentas**:
  - [Postman](https://www.postman.com/) (para testes de API)

## Pré-requisitos

Para executar este projeto, você precisará dos seguintes componentes instalados:

- Node.js (versão 14 ou superior)
- MongoDB (ou MongoDB Compass)
- Git

## Instalação

### Backend

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/mrmessiaspg/gerenciamento-livros
   cd gerenciamento-livros
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Inicie o MongoDB**:
   - Abra um terminal e execute:
   ```bash
   mongod
   ```

4. **Inicie o servidor**:
   ```bash
   npm start
   ```

### Frontend

1. **Navegue até o diretório do frontend**:
   ```bash
   cd ../frontend
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Inicie a aplicação React**:
   ```bash
   npm start
   ```

## Estrutura do Projeto

```plaintext
gerenciamento-livros/
├── backend/
│   ├── src/
│   │   ├── index.js         # Arquivo principal do backend
│   │   ├── routes/
│   │   │   └── bookRoutes.js # Rotas para gerenciar livros
│   │   └── models/
│   │       └── Book.js       # Modelo do livro
│   └── package.json
└── frontend/
    ├── src/
    │   ├── components/      # Componentes React
    │   ├── App.js           # Componente principal
    │   └── index.js         # Ponto de entrada da aplicação
    └── package.json
```

## Funcionalidades

- **Listagem de Livros**: Permite visualizar todos os livros cadastrados.
- **Adicionar Novo Livro**: Formulário para adicionar livros ao banco de dados.
- **Editar Livro**: Atualiza informações de livros existentes.
- **Excluir Livro**: Remove livros do banco de dados.

## Testes de API

Utilize o [Postman](https://www.postman.com/) para testar os seguintes endpoints da API:

- **GET** `/api/books`: Retorna uma lista de todos os livros.
- **POST** `/api/books`: Adiciona um novo livro ao banco de dados.
- **PUT** `/api/books/:id`: Atualiza um livro existente.
- **DELETE** `/api/books/:id`: Remove um livro do banco de dados.

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para fazer um fork deste repositório, implementar melhorias ou correções, e abrir um pull request.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).