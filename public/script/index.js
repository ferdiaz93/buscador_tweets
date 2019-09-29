const btnBuscar = document.getElementById("buscador");
const textoBuscar = document.getElementById("inputTextoBuscar");


btnBuscar.addEventListener("click", (e) =>{
    e.preventDefault()
    pedirTweets(armarTweets)
})


function armarTweets(datos){

    for(let i = 0 ; i < datos.length ; i++){
        armarUnTweet(datos[i]);
    }
}

function armarUnTweet(dato){
    console.log(dato);
}