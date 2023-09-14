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
    index:async function(req, res){
        console.log("Controller User [index]");
        await usuariosModel.select(conector, function(err, datos){
            if(err) {
                console.log(err);
            }
            res.render('./users/showUser', {users:datos});
        })
    },
    vistaCrear:function(req, res) {
        console.log("Controller [VistaCrear]");
        res.render('./users/createUser')
    },
    crear:function(req, res) {
        console.log("Controller User [crear]");
        usuariosModel.inserInto(conector, req.body, function(err) {
            if(err) {
                console.log(err);
            }
            res.redirect('/users')
        })
    },
    borrar:async function(req, res) {
        console.log("Controller User [borrar]");
        await usuariosModel.delete(conector, req.params.id, function(err){
            if(err) {
                console.log(err);
            }
            res.redirect('/users')
        })
    },
    login:function(req, res) {
        console.log("Controller User [login]");
        usuariosModel.signup(conector, function(err, datos){
            if(err) {
                console.log(err);
            }

            const {password} = req.body;
            const paswordDB = datos[0].password;

            console.log(`body en el callback:`);
            console.log(password);
            console.log(datos[0].password);

            // console.log(`Pasword: nueva: ${encryptPassword(paswwordBody)}`);

                
            res.send(datos);
        });
    },
    edit:function (req, res) {
        console.log("Controller User [edit]");
        const {id} = req.params;
        console.log(id);

        conector.query(`select * FROM usuarios WHERE id_usuarios=${id}`, (err, datos) => {
            if(err) {
                console.log(err);
            }
            const user = datos[0] || {};
            console.log(user);

            res.render('./users/editUser', {user})
            // res.send(JSON.stringify(datos[0]))
        }); 
       
    },
    update:function(req, res) {
        console.log("Controller User [update]");
        const {id} = req.params;
        const {nombre, apellido, email, password} = req.body;
        
        const user = {
            nombre,
            apellido,
            email,
            password
        }
        
        usuariosModel.update(conector,id ,user, function(err) {
            if (err) {
                throw err;
            }

            res.redirect('/users')
        })
    }
   
}
