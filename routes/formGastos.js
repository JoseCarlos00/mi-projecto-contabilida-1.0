var express = require('express');
var router = express.Router();
// var formularioGastosController = require('../controllers/gastos/controllerForm')

router.get('/', (req, res)=> {
    if(req.query.var === '5') {
        console.log(`usuario iniciado [${req.query.var}]`);
    }
    res.render('formGastos')

})

router.post('/', (req, res) => {
    
    console.log(req.body);
    res.render('index')
})

module.exports = router;