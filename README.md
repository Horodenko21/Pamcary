# Desafio: Desenvolvimento de API e Interface Web

## Descrição

Este projeto consiste no desenvolvimento de uma API pública para a gestão de pessoas e uma interface web para interação com a API.

A API permitirá operações de CRUD (Create, Read, Update, Delete) e consulta por CPF. A interface web permitirá a interação com esses endpoints de forma intuitiva e responsiva.

## Funcionalidades da API

- **Cadastro de uma nova pessoa**
- **Listar todas as pessoas cadastradas**
- **Atualizar informações de uma pessoa**
- **Deletar uma pessoa**
- **Buscar uma pessoa pelo CPF**

## Tecnologias Utilizadas

- **Backend**:
  - Node.js
  - Express
  - PostgreSQL
  - Swagger/OpenAPI para documentação
  - Jest para testes automatizados
  - Sequelize (ORM)
  
- **Frontend**:
  - Angular
  - Bootstrap ou Material UI (opcional)

## Requisitos

### API (Backend)

1. Criar uma API RESTful para o cadastro e gerenciamento de pessoas.
2. Utilizar um banco de dados PostgreSQL.
3. Implementar os seguintes endpoints:
   - `POST /pessoas`: Criar uma nova pessoa
   - `GET /pessoas`: Listar todas as pessoas
   - `PUT /pessoas/:id`: Atualizar informações de uma pessoa
   - `DELETE /pessoas/:id`: Deletar uma pessoa
   - `GET /pessoas/cpf/:cpf`: Buscar uma pessoa pelo CPF
4. Documentar os endpoints utilizando Swagger/OpenAPI.
5. Garantir uma cobertura mínima de 60% com testes automatizados.
6. Aplicar boas práticas de desenvolvimento, como SOLID e Clean Code.

### Interface Web (Frontend)

1. Criar uma interface responsiva utilizando Angular.
2. A interface deve permitir as seguintes funcionalidades:
   - Cadastro de novas pessoas.
   - Listagem das pessoas cadastradas.
   - Atualização dos dados de uma pessoa.
   - Exclusão de um cadastro.
   - Busca de uma pessoa pelo CPF.
3. Implementar um design limpo e intuitivo.
4. Criar testes unitários para os componentes principais.

## Como Rodar o Projeto Localmente

### Backend (API)

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   cd nome-do-repositorio
