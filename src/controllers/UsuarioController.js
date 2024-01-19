const usuarioRepository = require('../repositorys/UsuarioRepository');

async function buscarTodos(req, res) {
  try {
    const usuarios = await usuarioRepository.buscarTodos();
    res.json(usuarios);
  } catch (error) {
    res.status(500).json({ error: 'Ocorreu um erro ao buscar todos os usuários' });
  }
}

async function buscarPorId(req, res) {
  const id = req.params.id;
  try {
    const usuario = await usuarioRepository.buscarPorId(id);
    res.json(usuario);
  } catch (error) {
    res.status(500).json({ error: 'Ocorreu um erro ao buscar o usuário pelo ID' });
  }
}

async function criarUsuario(req, res) {
  const novoUsuario = req.body;
  try {
    const novoId = await usuarioRepository.criarUsuario(novoUsuario);
    res.json({ novoId });
  } catch (error) {
    res.status(500).json({ error: 'Ocorreu um erro ao criar um novo usuário' });
  }
}

async function atualizarUsuario(req, res) {
  const id = req.params.id;
  const novosDetalhes = req.body;
  try {
    const sucesso = await usuarioRepository.atualizarUsuario(id, novosDetalhes);
    if (sucesso) {
      res.json({ mensagem: 'Usuário atualizado com sucesso' });
    } else {
      res.status(404).json({ error: 'Usuário não encontrado ou nenhum dado foi alterado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Ocorreu um erro ao atualizar o usuário' });
  }
}

async function apagarUsuario(req, res) {
  const id = req.params.id;
  try {
    const sucesso = await usuarioRepository.apagarUsuario(id);
    if (sucesso) {
      res.json({ mensagem: 'Usuário apagado com sucesso' });
    } else {
      res.status(404).json({ error: 'Usuário não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Ocorreu um erro ao apagar o usuário' });
  }
}

module.exports = {
  buscarTodos,
  buscarPorId,
  criarUsuario,
  atualizarUsuario,
  apagarUsuario
};