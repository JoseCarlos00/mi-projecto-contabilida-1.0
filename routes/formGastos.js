var express = require('express');
var router = express.Router();
// var formularioGastosController = require('../controllers/gastos/controllerForm')

router.get('/', (req, res)=> {
    res.render('formGastos')

})

router.post('/', (req, res) => {
    console.log(req.body);
    res.render('index')
})

module.exports = router;