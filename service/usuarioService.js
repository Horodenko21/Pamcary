const { Usuario } = require('../models');

const findAll = async () => {
    return await Usuario.findAll();
};

const create = async (data) => {
    return await Usuario.create(data);
};

const update = async (id, data) => {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) return null;
  
    await usuario.update(data);
    return usuario;
};

const remove = async (id) => {
    const usuario = await Usuario.findByPk(id);
    if (!usuario) return null;
  
    await usuario.destroy();
    return usuario;
};

const findByCpf = async (cpf) => {
    return await Usuario.findOne({ where: { cpf } });
};

module.exports = { findAll, create, update, remove, findByCpf };  