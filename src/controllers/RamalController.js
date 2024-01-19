



function async buscarTodos(req, res) => {
    try {
      const resultado = await SeuModelo.find();
      res.json(resultado);
    } catch (error) {
      res.status(500).json({ error: 'Ocorreu um erro ao buscar todos os registros' });
    }
  };


  module.exports = {
    buscarTodos
  };