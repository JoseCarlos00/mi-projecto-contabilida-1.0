var conector=require('../../config/conexionDB')
var verUsuarios=require('../../model/ShowUser')

module.exports={
    index:function(req, res){
        let bandera = false
        verUsuarios.obtener(conector, function(err, datos){
            console.log(datos);
            res.render('ShowUser', {users:datos});
            bandera = true
        })

        if(!bandera) {
            res.send("Pagina no encontrada")
        }
    },
    crear:function(req, res){
        res.render('createUser')
    }
}
