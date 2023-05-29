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
    inserInto:function(conexion, datos, funcion) {
        
        conexion.query("INSERT INTO usuarios (nombre, apellido, email, password) VALUES(?,?,?,?)",[datos.nombre, datos.apellido, datos.email, datos.password], funcion)
    }

}