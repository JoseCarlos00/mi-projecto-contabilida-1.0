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
        // console.log(req.body);
        usuariosModel.inserInto(conector, req.body, function(err) {
            if(err) {
                console.log(err);
            }
            res.redirect('/gastos/form')
        })
    }
}


// probando: function(req, res) {
//     console.log("Controller [Probando]");
//     cuerpo = {
//         categoria: '3',
//         usuario: '2',
//         fecha: '2023-05-26',
//         detail: 'OXXO',
//         monto: '528'
//     }
//     usuariosModel.probar(conector, cuerpo, function(err) {
//         if(err) {
//             console.log(err);
//         }
//         res.redirect('/gastos/show')
//     })
// }