const repository = require('../repositorys/RamalRepository')


async function buscarTodos(req, res) {
  try {
    const resultado = await repository.buscarTodos();
    res.json(resultado);
  } catch (error) {
    res.status(500).json({ error: 'Ocorreu um erro ao buscar todos os registros' });
  }
}
async function buscarPorId(req, res) {
  const id = req.params.id; // Supondo que o id seja passado como parâmetro na requisição
  try {
    const resultado = await repository.buscarPorId(id);
    res.json(resultado);
  } catch (error) {
    res.status(500).json({ error: 'Ocorreu um erro ao buscar o registro pelo ID' });
  }
}

async function criarRamal(req, res) {
  const novoRamal = req.body; // Supondo que os dados do novo ramal sejam enviados no corpo da requisição
  try {
    const novoId = await repository.criarRamal(novoRamal);
    res.json(res.status(201).json({ error: 'Ramal Inserido com sucesso' }));
  } catch (error) {
    res.status(500).json({ error: 'Ocorreu um erro ao criar um novo ramal' });
  }
}

async function atualizarRamal(req, res) {
  const id = req.params.id; // Supondo que o id do ramal a ser atualizado seja passado como parâmetro na requisição
  const novosDetalhes = req.body; // Supondo que os novos detalhes do ramal sejam enviados no corpo da requisição
  try {
    const sucesso = await repository.atualizarRamal(id, novosDetalhes);
    if (sucesso) {
      res.json({ mensagem: 'Ramal atualizado com sucesso' });
    } else {
      res.status(404).json({ error: 'Ramal não encontrado ou nenhum dado foi alterado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Ocorreu um erro ao atualizar o ramal' });
  }
}

async function apagarRamal(req, res) {
  const id = req.params.id; // Supondo que o id do ramal a ser apagado seja passado como parâmetro na requisição
  try {
    const sucesso = await repository.apagarRamal(id);
    if (sucesso) {
      res.json({ mensagem: 'Ramal apagado com sucesso' });
    } else {
      res.status(404).json({ error: 'Ramal não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Ocorreu um erro ao apagar o ramal' });
  }
}

module.exports = {
  buscarTodos,
  buscarPorId,
  criarRamal,
  atualizarRamal,
  apagarRamal
};