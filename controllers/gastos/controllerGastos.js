var conector=require('../../config/conexionDB')
var usuariosModel=require('../../model/gastosModel')


module.exports = {
    formulario: function(req, res) {
        res.render('formGastos')
    },
    vistaGastos: function(req, res) {
        console.log("Controller [VistaGatos]");
        res.render('showGastos')
    },
    crear: function(req, res) {
        console.log("Controller [Enviar Gastos]");
        console.log(req.body);
        res.render('index')
    }
}