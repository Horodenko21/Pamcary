const request = require('supertest');
const app = require('../index');
const { sequelize, Usuario } = require('../models');

let usuarioCriado;

beforeAll(async () => {
  await sequelize.sync({ force: true }); // Limpa e recria o banco para testes
});

afterAll(async () => {
  await sequelize.close();
});

describe('Testes da API de Pessoas', () => {
  test('Deve criar uma pessoa (POST /pessoas)', async () => {
    const response = await request(app)
      .post('/pessoas')
      .send({
        name: 'Carlos',
        email: 'carlos@email.com',
        password: '123456',
        cpf: '11122233344'
      });

    expect(response.statusCode).toBe(201);
    expect(response.body.name).toBe('Carlos');
    usuarioCriado = response.body;
  });

  test('Deve listar pessoas (GET /pessoas)', async () => {
    const response = await request(app).get('/pessoas');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
    expect(response.body.length).toBeGreaterThan(0);
  });

  test('Deve buscar pessoa por CPF (GET /pessoas/cpf/:cpf)', async () => {
    const response = await request(app).get(`/pessoas/cpf/${usuarioCriado.cpf}`);
    expect(response.statusCode).toBe(200);
    expect(response.body.email).toBe('carlos@email.com');
  });

  test('Deve retornar 404 para CPF inexistente', async () => {
    const response = await request(app).get('/pessoas/cpf/99999999999');
    expect(response.statusCode).toBe(404);
  });

  test('Deve atualizar uma pessoa (PUT /pessoas/:id)', async () => {
    const response = await request(app)
      .put(`/pessoas/${usuarioCriado.id}`)
      .send({
        name: 'Carlos Atualizado',
        email: 'novo@email.com',
        password: '654321',
        cpf: '11122233344'
      });

    expect(response.statusCode).toBe(200);
    expect(response.body.name).toBe('Carlos Atualizado');
  });

  test('Deve deletar uma pessoa (DELETE /pessoas/:id)', async () => {
    const response = await request(app).delete(`/pessoas/${usuarioCriado.id}`);
    expect(response.statusCode).toBe(204);
  });

  test('Deve retornar 404 ao deletar pessoa inexistente', async () => {
    const response = await request(app).delete(`/pessoas/99999`);
    expect(response.statusCode).toBe(404);
  });
});
