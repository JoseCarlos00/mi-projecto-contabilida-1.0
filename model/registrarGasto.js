module.exports={
    obtener:function (conexion, funcion) {
        // const sql = INSERT INTO `detalles_de_gastos`(`id_detalles_de_ordenes`, `id_categorias_gastos`, `id_usuarios`, `fecha`, `detalles`, `monto`) VALUES ('[value-1]','[value-2]','[value-3]','[value-4]','[value-5]','[value-6]')


        conexion.query(sql, funcion);
    }

}











