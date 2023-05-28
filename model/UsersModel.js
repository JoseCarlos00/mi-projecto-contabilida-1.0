module.exports={
    select:function (conexion, funcion) {
        const sql = "SELECT * FROM usuarios"
        conexion.query(sql, funcion);
    },
    update:function(conexion, funcion) {
        
        
    },
    delete:function(conecion, id, funcion) {
        const sql = `DELETE FROM usuarios WHERE id_usuarios=${id}`
        conecion.query(sql, funcion)
    },
    inserinto:function(conexion, funcion) {
        const sql = `INSERT INTO usuarios ('nombre', 'apellido', 'email', 'passwork') VALUES ()`
    }


}