const express=  require('express');
const router = express.Router();

const CarroController = require('./controllers/CarroController')

router.get('/carros',CarroController.buscarTodos);
router.get('/carros/:id',CarroController.buscarPorId);
router.post('/inserir-carro',CarroController.inserir);
router.put('/atualizar-carro/:id',CarroController.atualizar);





module.exports = router