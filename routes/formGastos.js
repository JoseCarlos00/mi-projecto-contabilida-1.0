var express = require('express');
var router = express.Router();
// var formularioGastosController = require('../controllers/gastos/controllerForm')

router.get('/', (req, res)=> {
    res.render('formGastos')

})

module.exports = router;