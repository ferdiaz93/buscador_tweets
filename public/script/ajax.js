const urlTweets = "http://localhost:8080/buscador";

function pedirTweets(endpoint, callback){

    fetch(`${urlTweets}?q=${endpoint}`)
    .then(response => response.json())
    .then(response => callback(response))
    .catch((error) =>{
        console.log(error);
    })
}