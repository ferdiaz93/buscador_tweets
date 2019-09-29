const urlTweets = "http://localhost:8080/buscador";

function pedirTweets(callback){
    fetch(urlTweets)
    .then(response => response.json())
    .then(response => callback(response))
    .catch((error) =>{
        console.log(error);
    })
}