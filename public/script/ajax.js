const urlRaiz = "http://localhost:8080/";

// const urlTweets = "http://localhost:8080/buscador";
// const urlHistorial = "http://localhost:8080/historial";


function pedirTweets(endpoint, callback){

    fetch(`${urlRaiz}buscador?q=${endpoint}`)
    .then(response => response.json())
    .then(response => callback(response))
    .catch((error) =>{
        console.log(error);
    })
}


function enviarDatos(datos){
    fetch(`${urlRaiz}historial`, {
        method: "POST",
        body: datos
    })
    .catch((error)=>{
        console.log(error);
    })

}