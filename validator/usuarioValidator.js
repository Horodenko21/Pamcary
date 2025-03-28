const validateUsuario = (data) => {
    const { name, email, password, cpf } = data;
    if (!name || !email || !password || !cpf) {
      return 'Campos obrigatórios faltando.';
    }
    return null;
  };
  
  module.exports = { validateUsuario };
  