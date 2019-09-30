const express = require("express");
const bodyParser = require('body-parser');
const path = require("path")

const controladorBuscador = require("./controllers/controller_search")
const controladorHistorial = require("./controllers/controller_historial")

const app = express();
app.use(bodyParser.json());

let port = 8080;

//seleccionamos la carpeta que va a usar contenido estatico
app.use(express.static(path.join(__dirname, "../public")));

//ruteo
app.get("/", controladorBuscador.pedirRaiz);
app.get("/buscador", controladorBuscador.pedirBuscador);
app.get("/historial", controladorHistorial.obtenerHistorial);
app.post("/historial", controladorHistorial.postearHistorial);



app.listen(port, ()=>{
    console.log("escuchando puerto : " + port);
})