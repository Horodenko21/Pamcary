const express = require('express');
const router = express.Router();
const usuarioController = require('../controller/usuarioController');

/**
 * @swagger
 * /pessoas:
 *   get:
 *     summary: Lista todos os usuários
 *     tags: [Usuario]
 *     responses:
 *       200:
 *         description: Lista de usuários
 */
router.get('/pessoas', usuarioController.getAll);

/**
 * @swagger
 * /pessoas:
 *   post:
 *     summary: Cria um novo usuário
 *     tags: [Usuario]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuario'
 *     responses:
 *       201:
 *         description: Usuario criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 *       400:
 *         description: Campos obrigatórios faltando
 */
router.post('/pessoas', usuarioController.create);

/**
 * @swagger
 * /pessoas/{id}:
 *   put:
 *     summary: Atualiza um usuário pelo ID
 *     tags: [Usuario]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Usuario'
 *     responses:
 *       200:
 *         description: Usuario atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 *       404:
 *         description: Usuario nao encontrado
 */
router.put('/pessoas/:id', usuarioController.update);

/**
 * @swagger
 * /pessoas/{id}:
 *   delete:
 *     summary: Remove um usuario pelo ID
 *     tags: [Usuario]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do usuario
 *     responses:
 *       204:
 *         description: Usuario removido com sucesso
 *       404:
 *         description: Usuario nao encontrado
 */
router.delete('/pessoas/:id', usuarioController.remove);

/**
 * @swagger
 * /pessoas/cpf/{cpf}:
 *   get:
 *     summary: Busca um usuário pelo CPF
 *     tags: [Usuario]
 *     parameters:
 *       - in: path
 *         name: cpf
 *         required: true
 *         schema:
 *           type: string
 *         description: CPF do usuário
 *     responses:
 *       200:
 *         description: Usuário encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 *       404:
 *         description: Usuário não encontrado
 */
router.get('/pessoas/cpf/:cpf', usuarioController.getByCpf);

/**
 * @swagger
 * components:
 *   schemas:
 *     Usuario:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *         - cpf
 *       properties:
 *         id:
 *           type: integer
 *         name:
 *           type: string
 *         email:
 *           type: string
 *         password:
 *           type: string
 *         cpf:
 *           type: string
 */

module.exports = router;
