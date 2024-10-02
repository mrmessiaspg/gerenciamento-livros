# Gerenciamento de Livros

Este projeto é uma aplicação web para gerenciamento de livros, utilizando Node.js e Express no backend, e React no frontend. A aplicação permite adicionar, visualizar, editar e excluir livros.

## Tecnologias Utilizadas

- **Frontend**: 
  - React
  - HTML
  - CSS
  - Bootstrap
- **Backend**: 
  - Node.js
  - Express
  - MongoDB (com MongoDB Compass)
- **Ferramentas**:
  - Postman (para testes de API)

## Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [MongoDB](https://www.mongodb.com/try/download/community) (ou MongoDB Compass)
- [Git](https://git-scm.com/)

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

- **Listagem de Livros**: Visualiza todos os livros cadastrados.
- **Adicionar Novo Livro**: Formulário para adicionar livros ao banco de dados.
- **Editar Livro**: Atualiza informações de livros existentes.
- **Excluir Livro**: Remove livros do banco de dados.

## Testes de API

- Utilize o [Postman](https://www.postman.com/) para testar os endpoints da API:
  - **GET** `/api/books`: Lista todos os livros.
  - **POST** `/api/books`: Adiciona um novo livro.
  - **PUT** `/api/books/:id`: Edita um livro existente.
  - **DELETE** `/api/books/:id`: Remove um livro.

## Vídeo de Demonstração

Veja a aplicação em ação: [Demonstração do Front-end](https://www.youtube.com/watch?v=c6i3oArnbqg).

## Contribuições

Sinta-se à vontade para contribuir! Faça um fork deste repositório e envie suas melhorias.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
