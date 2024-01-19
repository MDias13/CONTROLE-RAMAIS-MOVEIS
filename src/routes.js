const express=  require('express');
const router = express.Router();
const RamalController = require('../src/controllers/RamalController')
const UsuarioController = require('../src/controllers/UsuarioController')

/*RAMAIS */
router.get('/ramais',RamalController.buscarTodos);
router.get('/ramais/:id',RamalController.buscarPorId);
router.post('/cadastrar-ramais',RamalController.criarRamal);
router.put('/editar-ramais',RamalController.atualizarRamal);
router.delete('/deletar-ramais/:id',RamalController.apagarRamal);


/*Usuarios*/
router.get('/usuarios',UsuarioController.buscarTodos);
router.get('/usuarios/:id', UsuarioController.buscarPorId);
router.post('/criar-usuario', UsuarioController.criarUsuario);
router.put('/atualizar-usuario/:id', UsuarioController.atualizarUsuario);
router.delete('/deletar-usuario/:id', UsuarioController.apagarUsuario);




module.exports = router