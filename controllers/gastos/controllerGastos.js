const { response } = require('express');
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
    },
    
    // optenerSemanas: function(req, res) {

    //     console.log(req.body);
    //     let numero = parseInt(req.body.valor)
    //     console.log(typeof numero);
    //     // gastosModel.filtrarPorSemana(conector, req.body, function(err, datos) {
            
    //     //     if(err) {console.log(err);}

    //     //     // const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    //     //     res.render('reportes', {semanas: datos})
        
    //     // })
    //     console.log("[OptenerSemans]");
    //     res.redirect('/reportes')

    // },

    vistaSemanas: function(req, res) {
        console.log("aqui");
        console.log("Controller [Vista Semanas]");

        gastosModel.selectSemanas(conector, function(err, datos) {
            
            currentdate = new Date();
             var oneJan = new Date(currentdate.getFullYear(), 0, 1);
            var numberOfDays = Math.floor(
             (currentdate - oneJan) / (24 * 60 * 60 * 1000)
            );
            var result = Math.ceil((currentdate.getDay() + 1 + numberOfDays) / 7);



            if(err) {console.log(err);}
            const opciones = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            res.render('reportes', {gastos: datos, option: opciones, semanaActual: result})
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
//