const conDB = require("../db/conexionbd");

function obtenerHistorial(req, res) {
    // let pedidoSql = "SELECT * FROM tweets";

    // conDB.query(pedidoSql, (error, result) => {
    //     if (error) res.send(error);

    //     const response = {
    //         busqueda: result,
    //     };

    //     res.send(response);
    // });
    console.log("se hizo un pedido al historial", req)
}


//NO ME LLEGA NADA AL REQ.BODY
function postearHistorial(req, res) {
    console.log(req.body)
    console.log("funcion postearHistorial ENVIADO");
    res.send("enviado")
}


module.exports = {
    obtenerHistorial: obtenerHistorial,
    postearHistorial: postearHistorial
}