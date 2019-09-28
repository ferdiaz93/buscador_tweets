require("dotenv").config();
const path = require("path");


let Twitter = require("twitter");
var client = new Twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCES_TOKEN_SECRET
});

var params = { screen_name: 'nodejs' };

// client.get('statuses/user_timeline', params, function (error, tweets, response) {
//     if (!error) {
//         console.log(tweets);
//     }
// });


function pedirRaiz(req, res) {
    res.sendFile(path.join(__dirname, "../../public/html/index.html"))
    // console.dir(Twitter)
}

function pedirBuscador(req, res) {
    client.get('search/tweets', { q: 'liam gallagher' }, function (error, tweets, response) {
        res.send(tweets.statuses);
    });
}

function pedirHistorial(req, res) {
    res.send("se pidio pagina historial")
}



module.exports = {
    pedirRaiz: pedirRaiz,
    pedirBuscador: pedirBuscador,
    pedirHistorial: pedirHistorial
}