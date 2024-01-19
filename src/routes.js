const express=  require('express');
const router = express.Router();
const RamalController = require('../src/controllers/RamalController')

router.get('/ramais',RamalController.buscarTodos);
router.get('/ramais/:id',RamalController.buscarPorId);
router.post('/cadastrar-ramais',RamalController.criarRamal);
router.put('/editar-ramais',RamalController.atualizarRamal);
router.delete('/deletar-ramais/:id',RamalController.apagarRamal);




module.exports = router