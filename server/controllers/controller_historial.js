const conDB = require("../db/conexionbd");

function obtenerHistorial(req, res) {
    console.log("se hizo un pedido al historial")
    let pedidoSql = "SELECT * FROM tweets";

    conDB.query(pedidoSql, (err, result, fields) => {
        if (err) res.send(err);
        res.send(result)
    });
}


function postearHistorial(req, res) {
    if (req.body) {
        let valorAGuardar = req.body.textoBusqueda;
        let consultaMysql = `insert into tweets(titulo) VALUES ("${valorAGuardar}")`;

        conDB.query(consultaMysql, (err, result) => {
            if (err) throw err;
            res.send("Se guardo correctamente");
        });

    } else {
        res.send("Hubo un error al recibir los datos")
        console.log("no se recibieron datos");
    }
}


module.exports = {
    obtenerHistorial: obtenerHistorial,
    postearHistorial: postearHistorial
}