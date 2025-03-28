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
  - Bootstrap ou Material UI

## Requisitos

### API (Backend)

1. Criar uma API RESTful para o cadastro e gerenciamento de pessoas. (OK)
2. Utilizar um banco de dados PostgreSQL. (OK)
3. Implementar os seguintes endpoints: 
   - `POST /pessoas`: Criar uma nova pessoa (OK)
   - `GET /pessoas`: Listar todas as pessoas (OK)
   - `PUT /pessoas/:id`: Atualizar informações de uma pessoa (OK)
   - `DELETE /pessoas/:id`: Deletar uma pessoa (OK)
   - `GET /pessoas/cpf/:cpf`: Buscar uma pessoa pelo CPF (OK)
4. Documentar os endpoints utilizando Swagger/OpenAPI. (OK)
5. Garantir uma cobertura mínima de 60% com testes automatizados. (OK)
6. Aplicar boas práticas de desenvolvimento, como SOLID e Clean Code. (OK)

### Interface Web (Frontend)

1. Criar uma interface responsiva utilizando Angular. (OK)
2. A interface deve permitir as seguintes funcionalidades:
   - Cadastro de novas pessoas. (OK)
   - Listagem das pessoas cadastradas. (OK)
   - Atualização dos dados de uma pessoa. (OK)
   - Exclusão de um cadastro. (OK)
   - Busca de uma pessoa pelo CPF. (OK)
3. Implementar um design limpo e intuitivo. (OK)
4. Criar testes unitários para os componentes principais. (OK)