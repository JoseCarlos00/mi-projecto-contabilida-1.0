module.exports={

    select:function (conexion, funcion) {
        const sql = "SELECT * FROM detail_gastos"
        conexion.query(sql, funcion);
    },

    inserInto:function (conexion,datos, funcion) {
        console.log("Model [Inser Into]");
        // console.log(datos);

        let categoriaID = parseInt(datos.categoria)
        let usuarioID = parseInt(datos.usuario)
        let fecha = datos.fecha
        let detalles = datos.detail
        let cantidad = parseFloat(datos.monto)
        conexion.query("INSERT INTO detail_gastos (categoria, usuarios, fecha, detalles, monto) VALUES (?,?,?,?,?)",[categoriaID,usuarioID,fecha,detalles,cantidad], funcion);
       
    },

}


// probar:function(conexion, datos, funcion) {
//     console.log("Model [probando]");
//     console.log(datos);
//     // console.log(datos.caregoria.value());
//     let categoriaID = parseInt(datos.categoria)
//     let usuarioID = parseInt(datos.usuario)
//     let fecha = datos.fecha
//     let detalles = datos.detail
//     let cantidad = parseFloat(datos.monto)
//     conexion.query("INSERT INTO detalles_de_gastos (id_categorias_gastos, id_usuarios, fecha, detalles, monto) VALUES (?,?,?,?,?)",[categoriaID,usuarioID,fecha,detalles,cantidad], funcion);
// }











