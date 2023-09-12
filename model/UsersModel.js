module.exports={
    select:function (conexion, funcion) {
        const sql = "SELECT * FROM usuarios"
        conexion.query(sql, funcion);
    },
    update:function(conexion, funcion) {
        
        
    },
    delete:function(conexion, id, funcion) {
        const sql = `DELETE FROM usuarios WHERE id_usuarios=${id}`
        conexion.query(sql, funcion)
    },
    /**
     * Base de datos
     * @param {*} conexion 
     * @param {} datos Body del formulario
     * @param {funcion} funcion Callback
     */
    inserInto: function (conexion, datos, funcion) {
        conexion.query("INSERT INTO usuarios (usuario, nombre, apellido, email, password) VALUES(?,?,?,?,?)",[datos.usuario, datos.nombre, datos.apellido, datos.email, datos.password], funcion);
        
    }

}