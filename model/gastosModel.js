module.exports={

    select:function (conexion, funcion) {
        const sql = "SELECT * FROM detail_gastos"
        conexion.query(sql, funcion);
    },
    selectSemanas:function (conexion, funcion) {
        const sql = "SELECT * FROM gastos_semanales_view ORDER BY semana"
        conexion.query(sql, funcion);
    },
    filtrarPorSemana: function(conexion, parametro ,funcion) {
        
        const sql = `SELECT * FROM gastos_semanales_view WHERE semana=${parametro} ORDER BY monto DESC`
        conexion.query(sql, funcion);
    },

    inserInto:function (conexion, datos, funcion) {
        console.log("Model [Inser Into]");

        const {categoria, usuario, fecha, detail, monto} = datos;

        conexion.query("INSERT INTO detalles_gastos (id_categorias_gastos, id_usuarios, fecha, detalles, monto) VALUES (?,?,?,?,?)",[categoria,usuario,fecha,detail,parseFloat(monto)], funcion);
       
    },

}











