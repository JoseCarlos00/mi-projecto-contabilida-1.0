var conector=require('../../config/conexionDB')
var usuariosModel=require('../../model/usersModel')

module.exports={
    index:function(req, res){
        console.log("Controller [index]");
        usuariosModel.select(conector, function(err, datos){
            if(err) {
                console.log(err);
            }
            res.render('showUser', {users:datos});
        })
    },
    vistaCrear:function(req, res) {
        console.log("Controller [VistaCrear]");
        res.render('createUser')
    },
    crear:function(req, res) {
        console.log("Controller [crear]");
        usuariosModel.inserInto(conector, req.body, function(err) {
            if(err) {
                console.log(err);
            }
            res.redirect('/users')
        })
    },
    borrar:function(req, res) {
        usuariosModel.delete(conector, req.params.id, function(err){
            if(err) {
                console.log(err);
            }
            res.redirect('/users')
        })

    }
    
}
