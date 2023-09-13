var conector=require('../../config/conexionDB');
var usuariosModel=require('../../model/usersModel');

const bcrypt =  require('bcrypt-nodejs');

const encryptPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
}



const comparePassword = (password, dbPawword) => {
    return bcrypt.compareSync(password, dbPawword);
}

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
    },
    login:function(req, res) {
        usuariosModel.signup(conector, function(err, datos){
            if(err) {
                console.log(err);
            }

            console.log(`body en el callback:`);
            console.log(req.body.password);
            console.log(datos[0].password);
            const paswwordBody =req.body.password;
            const paswordDB = datos[0].password;
            

            // console.log(`Pasword: nueva: ${encryptPassword(paswwordBody)}`);

                
            res.send(datos);
        })
    }
    
}
