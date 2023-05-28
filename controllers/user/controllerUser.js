var conector=require('../../config/conexionDB')
var usuariosModel=require('../../model/usersModel')

module.exports={
    index:function(req, res){
        console.log("Controller [index]");
        let bandera = false
        usuariosModel.select(conector, function(err, datos){
            // console.log(datos[0].nombre);
            res.render('showUser', {users:datos});
            bandera = true
        })

        // if(!bandera) {
        //     res.send("Pagina no encontrada")
        // }
    },
    vistaCrear:function(req, res) {
        console.log("Controller [VistaCrear]");
        res.render('createUser')
    },
    crear:function(req, res) {
        console.log("Controller [crear]");
        usuariosModel.inserInto(conector, req.body, function(err) {
            res.redirect('/users')
        })
    },
    borrar:function(req, res) {
        usuariosModel.delete(conector, req.params.id, function(err){
            res.redirect('/users')
        })

    }
    
}
