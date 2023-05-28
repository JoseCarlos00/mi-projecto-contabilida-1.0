var conector=require('../../config/conexionDB')
var verUsuarios=require('../../model/ShowUser')

module.exports={
    index:function(req, res){
        verUsuarios.obtener(conector, function(err, datos){
            console.log(datos);
            res.render('ShowUser', {users:datos});
        })
    },
    crear:function(req, res){
        res.render('createUser')
    }
}
