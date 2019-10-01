let mysql = require('mysql');

let connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: process.env.USER_DATABASE,
    password: process.env.PW_DATABASE,
    database: "historialtweets"
});

module.exports = connection;