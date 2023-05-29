var conector=require('../../config/conexionDB')
var gastosModel=require('../../model/gastosModel')


module.exports = {
    formulario: function(req, res) {
        res.render('formGastos')
    },

    vistaGastos: function(req, res) {
        console.log("Controller [VistaGatos]");

        gastosModel.select(conector, function(err, datos) {
            if(err) {console.log(err);}
            const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

            // var opciones = {weekday: "long", year: "numeric", month: "long", day: "numeric", hour: "numeric", hour12:"true"};

            // console.log(datos);
            res.render('showGastos', {gastos: datos, option: opciones})
        })
    },

    crear: function(req, res) {
        console.log("Controller [Enviar Gastos]");
        // console.log(req.body);
        gastosModel.inserInto(conector, req.body, function(err) {
            if(err) { console.log(err); }

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
//     gastosModel.probar(conector, cuerpo, function(err) {
//         if(err) {
//             console.log(err);
//         }
//         res.redirect('/gastos/show')
//     })
// }