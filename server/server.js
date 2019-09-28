const express = require("express");
const controladorBuscador = require("./controllers/controller_search")
const app = express();
const path = require("path")
let port = 8080;

//seleccionamos la carpeta que va a usar contenido estatico
app.use(express.static(path.join(__dirname, "../public")));

//ruteo
app.get("/", controladorBuscador.pedirRaiz);
app.get("/buscador", controladorBuscador.pedirBuscador);
app.get("/historial", controladorBuscador.pedirHistorial);



app.listen(port, ()=>{
    console.log("escuchando puerto : " + port);
})