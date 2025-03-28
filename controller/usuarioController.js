const usuarioService = require('../service/usuarioService');
const { validateUsuario } = require('../validator/usuarioValidator');

const getAll = async (req, res) => {
    const usuarios = await usuarioService.findAll();
    res.json(usuarios);
};

const create = async (req, res) => {

    const error = validateUsuario(req.body);  
    if (error) return res.status(400).json({ message: error });
  
    const usuario = await usuarioService.create(req.body);
    res.status(201).json(usuario);
};


const update = async (req, res) => {
    const { id } = req.params;
    const usuarioAtualizado = await usuarioService.update(id, req.body);
  
    if (!usuarioAtualizado) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
  
    res.json(usuarioAtualizado);
};

const remove = async (req, res) => {
    const { id } = req.params;
    const usuarioRemovido = await usuarioService.remove(id);
  
    if (!usuarioRemovido) {
      return res.status(404).json({ message: 'Usuário não encontrado' });
    }
  
    res.status(204).send(); // 204 = No Content
};

const getByCpf = async (req, res) => {
    const { cpf } = req.params;
    const usuario = await usuarioService.findByCpf(cpf);
  
    if (!usuario) {
      return res.status(404).json({ message: 'Usuário não encontrado com este CPF' });
    }
  
    res.json(usuario);
};

module.exports = { getAll, create, update, remove, getByCpf };