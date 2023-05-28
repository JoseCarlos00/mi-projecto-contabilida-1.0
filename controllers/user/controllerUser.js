var conector=require('../../config/conexionDB')
var usuariosModel=require('../../model/UsersModel')

module.exports={
    index:function(req, res){
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
        res.render('createUser')
    },
    crear:function(req, res) {
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
