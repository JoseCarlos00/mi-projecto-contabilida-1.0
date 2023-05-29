var express = require('express');
var router = express.Router();
var gastos = require('../controllers/gastos/controllerGastos')

router.get('/form', gastos.formulario)

router.post('/form', gastos.crear)

router.get('/show', gastos.vistaGastos)

module.exports = router;