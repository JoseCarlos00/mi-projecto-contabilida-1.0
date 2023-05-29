var express = require('express');
var router = express.Router();
var gastos = require('../controllers/gastos/controllerGastos')

router.get('/form', gastos.formulario)

router.post('/form', gastos.crear)

router.get('/show', gastos.vistaGastos)

// router.get('/reportes', (req, res) => res.render('reportes') )
// router.post('/reportes', gastos.optenerSemanas)
// router.post('/reportes/:numeroSemana', (req, res) => {
//     console.log(req.params.numeroSemana )
//     console.log("aqui");
// })

router.get('/reportes/', gastos.vistaSemanas)

module.exports = router;