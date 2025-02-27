const express = require('express');
const router = express.Router();
const UsuarioController = require('../controllers/usuarioController');


router.get('/usuario', UsuarioController.listarUsuarios); 
router.post('/usuario', UsuarioController.crearUsuario);
router.delete('/usuario/:id', UsuarioController.eliminarUsuario);


module.exports = router;


