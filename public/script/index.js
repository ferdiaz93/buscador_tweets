const btnBuscar = document.getElementById("buscador");
const sectionTweets = document.getElementById("sectionTweets");
const formulario = document.getElementById("formBuscador");
const btnHistorial = document.getElementById("historial");
const sectionHistorial = document.getElementById("sectionDeHistorial");

//Se agrega evento al SUBMIT del form
// este se encarga de pedir los tweets y al mismo tiempo hacer un POST de la busqueda realizada
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const textoBuscar = document.getElementById("inputTextoBuscar");

    if (textoBuscar.value.length === 0 || textoBuscar.value === null || textoBuscar.value === undefined) {
        console.log("no se pasaron data")
    } else {
        let inputEndpoint = textoBuscar.value;
        console.log(inputEndpoint);
        //se piden los tweets pasandole los parametros correspondientes
        pedirTweets(inputEndpoint, armarTweets)

        let objPOST = {
            textoBusqueda: textoBuscar.value
        }
        let jsonPOST = JSON.stringify(objPOST)
        //se mandan el valor del input search al backend para guardar en la DB
        enviarDatos(jsonPOST)

    }
});

//Se le agrega evento al boton HISTORIAL para mostrar la lista de las busquedas realizadas
btnHistorial.addEventListener("click", (e) =>{
    e.preventDefault();
    const mainTweets = document.getElementById("mainTweets");
    const mainHistorial = document.getElementById("mainHistorial");

    mainTweets.style.display = "none";
    mainHistorial.style.display = "block";

    pedirHistorial(armarHistoriales)
})

/**
 * 
 * @param {array} datos es un array de objetos
 * Borra el contenido de la seccion de tweets
 * recorre el array y por cada elemento ejecuta la funcion armarUnTweet 
 */
function armarTweets(datos) {
    sectionTweets.innerText = " "
    for (let i = 0; i < datos.length; i++) {
        armarUnTweet(datos[i]);
    }
}

/**
 * 
 * @param {array} datos array de objetos
 * borra el contenido de la seccion del historial
 * por cada elemento del array ejecuta la funcion armarUnHistorial
 */
function armarHistoriales(datos){
    sectionHistorial.innerText= "";
    for(let i = 0; i < datos.length; i++){
        armarUnHistorial(datos[i]);
    }
}

/**
 * 
 * @param {obj} dato objeto traido de la DB
 * arma un h3 con el dato guardado en la DB
 */
function armarUnHistorial(dato){
    let h3Titulo = document.createElement("h3");
    h3Titulo.setAttribute("class", "titulosHistorial");
    h3Titulo.innerText= dato.titulo;

    sectionHistorial.appendChild(h3Titulo);
}

/**
 * 
 * @param {obj} dato toda la informacion del tweet
 * arma todos los elementos html con los datos del tweet
 */
function armarUnTweet(dato) {
    //div contenedor de todo el tweet
    let divContenedor = document.createElement("div");
    divContenedor.setAttribute("class", "divTweet");

    //div que contiene la img avatar
    let divImg = document.createElement("div");
    divImg.setAttribute("class", "divImg");

    //img avatar
    let img = document.createElement("img");
    img.setAttribute("class", "imgAvatar")
    img.setAttribute("src", dato.user.profile_image_url_https);

    divImg.appendChild(img);

    //div contenido del tweet
    let divTextoTweet = document.createElement("div");
    divTextoTweet.setAttribute("class", "contenidoTweet");

    //a con el nombre del user
    let userName = document.createElement("a");
    userName.setAttribute("class", "userTweet");
    userName.setAttribute("href", `https://twitter.com/${dato.user.screen_name}`)
    userName.innerText = dato.user.name;

    //p con el texto del tweet
    let texto = document.createElement("p");
    texto.innerText = dato.text;

    //div que contiene los iconos
    let divContenedorIconos = document.createElement("div");
    divContenedorIconos.setAttribute("class", "divContenedorBarraIconos");

    //div por cada img
    let divComentario = document.createElement("div");
    divComentario.setAttribute("class", "contenedor-iconos")
    let divRetweet = document.createElement("div");
    divRetweet.setAttribute("class", "contenedor-iconos")
    let divLike = document.createElement("div");
    divLike.setAttribute("class", "contenedor-iconos")

    //img por cada icon
    let imgComentario = document.createElement("img");
    imgComentario.setAttribute("src", "../img/comment-icon.svg");
    imgComentario.setAttribute("class", "iconos-tweet")
    let imgRetweet = document.createElement("img");
    imgRetweet.setAttribute("src", "../img/retweet-icon.svg");
    imgRetweet.setAttribute("class", "iconos-tweet")
    let imgLike = document.createElement("img");
    imgLike.setAttribute("src", "../img/like-icon.svg");
    imgLike.setAttribute("class", "iconos-tweet");

    //cada img a su respectivo div
    divComentario.appendChild(imgComentario);
    divRetweet.appendChild(imgRetweet);
    divLike.appendChild(imgLike);

    //cada div al contenedor
    divContenedorIconos.appendChild(divComentario);
    divContenedorIconos.appendChild(divRetweet);
    divContenedorIconos.appendChild(divLike);

    //ambos se agregan al div del contenido del tweet
    divTextoTweet.appendChild(userName);
    divTextoTweet.appendChild(texto);
    divTextoTweet.appendChild(divContenedorIconos);

    //agregamos todo al contenedor del tweet
    divContenedor.appendChild(divImg);
    divContenedor.appendChild(divTextoTweet);

    //agregamos el div contenedor al section de nuestro DOM
    sectionTweets.appendChild(divContenedor);

    //  console.log(dato);
}