const conDB = require("../db/conexionbd");

function obtenerHistorial(req, res) {
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
    }
}

function deleteSearch(req, res){
    if(req.params){
        let pedidoSql = `DELETE FROM tweets WHERE id=${req.params.id}`;

        conDB.query(pedidoSql, (error, result) =>{
            if(error) res.send(error);
            res.send(result);
        })
    }else{
        res.send('se hizo un delete, else')
    }
}


module.exports = {
    obtenerHistorial: obtenerHistorial,
    postearHistorial: postearHistorial,
    deleteSearch: deleteSearch
}