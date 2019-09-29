const btnBuscar = document.getElementById("buscador");
const textoBuscar = document.getElementById("inputTextoBuscar");
const sectionTweets = document.getElementById("sectionTweets");

btnBuscar.addEventListener("click", (e) => {
    e.preventDefault();
    if (textoBuscar.value == undefined || textoBuscar.value == null || textoBuscar.value == "") {
        console.log("no se pasaron datos")
    } else {
        let inputEndpoint = textoBuscar.value;
        console.log(inputEndpoint);
        pedirTweets(inputEndpoint, armarTweets)
    }
})


function armarTweets(datos) {
    sectionTweets.innerText = " "
    for (let i = 0; i < datos.length; i++) {
        armarUnTweet(datos[i]);
    }
}

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

    console.log(dato);
}