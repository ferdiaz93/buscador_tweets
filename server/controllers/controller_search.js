require("dotenv").config();
const path = require("path");
const client = require("./conexion-twitter");


function pedirRaiz(req, res) {
    console.log("se hizo un pedido a mi raiz/buscador")
    res.sendFile(path.join(__dirname, "../../public/html/index.html"))
}

/**
 * 
 * @param {obj} req 
 * @param {function} res
 * 
 * Funcion que pide los tweets relacionados a las palabras que se le pasa por parametro a client.get() 
 */
function pedirBuscador(req, res) {
    if (req.query.q) {
        let params = req.query
        client.get('search/tweets', params, function (error, tweets, response) {
            res.send(tweets.statuses);
        });

    } else {
        console.log("no hay parametros")
        res.send("no hay parametros")
    }
}




module.exports = {
    pedirRaiz: pedirRaiz,
    pedirBuscador: pedirBuscador,

}