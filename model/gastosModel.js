module.exports={

    select:function (conexion, funcion) {
        const sql = "SELECT * FROM detalles_de_gastos"
        conexion.query(sql, funcion);
    },

    inserInto:function (conexion,datos, funcion) {

        conexion.query("INSERT INTO detalles_de_gastos (id_categorias_gastos, id_usuarios, fecha, detalles, monto) VALUES (?,?,?,?,?)",[datos.categoria, datos.usuario, datos.fecha, datos.detalles, datos.monto], funcion);
    }

}











