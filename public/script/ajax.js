const urlRaiz = "http://localhost:8080/";

/**
 * 
 * @param {string} endpoint es el parametro que se envia por la ruta
 * @param {function} callback es la funcion que se encarga de usar los datos pedidos
 */
function pedirTweets(endpoint, callback) {

    fetch(`${urlRaiz}buscador?q=${endpoint}`)
        .then(response => response.json())
        .then(response => callback(response))
        .catch((error) => {
            console.log(error);
        })
}

/**
 * 
 * @param {JSON} datosJSON 
 * POST con la informacion del busqueda convertida en JSON
 */
function enviarDatos(datosJSON) {
    fetch("/historial", {
        method: "POST",
        headers: { 'content-type': 'application/json' },
        body: datosJSON,
    });
}

/**
 * 
 * @param {function} callback funcion que usa los datos pedidos
 */
function pedirHistorial(callback){
    fetch("/historial")
    .then(response => response.json())
    .then(data => callback(data))
    .catch(error =>{
        console.log(error);
    })
}