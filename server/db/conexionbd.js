let mysql = require('mysql');

let connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "123456",
    database: "historialtweets"
});

module.exports = connection;