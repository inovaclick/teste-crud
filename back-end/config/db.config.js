const mysql = require('mysql');

//conexao com banco de dados local
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "umasenhaaleatoria",
    database: "inovaclick_crud"
});

connection.connect(error => {
    if(error) throw error;
    console.log("Connected!")
});

module.exports = connection;