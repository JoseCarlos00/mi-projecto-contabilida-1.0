module.exports={
    select:async function (conexion, funcion) {
        const sql = "SELECT * FROM usuarios"
        await conexion.query(sql, funcion);
    },
    selectID: async function (conexion, id, funcion) {
        await conexion.query(`select * FROM usuarios WHERE id_usuarios=${id}`, funcion); 
    },
    update:async function(conexion, id, user, funcion) {
        await conexion.query("UPDATE usuarios SET ? WHERE id_usuarios=?",[user, id], funcion);
    },
    delete:async function(conexion, id, funcion) {
        const sql = `DELETE FROM usuarios WHERE id_usuarios=${id}`
        await conexion.query(sql, funcion)
    },
    /**
     * Base de datos
     * @param {*} conexion Variable con la conexion a la base de datos
     * @param {} datos Body del formulario
     * @param {funcion} funcion Callback
     */
    inserInto:async function (conexion, datos, funcion) {
       await conexion.query("INSERT INTO usuarios (nombre, apellido, email, password) VALUES(?,?,?,?)",[datos.nombre, datos.apellido, datos.email, datos.password], funcion);
        
    },
    signup: async function (conexion, funcion) {
        const sql = "SELECT * FROM usuarios where id_usuarios=1";
        await conexion.query(sql, funcion);
    }    
}