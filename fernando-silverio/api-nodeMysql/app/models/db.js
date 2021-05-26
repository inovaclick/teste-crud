const mysql = require("mysql")
const config = require("../config/db.config.js")

const con = mysql.createConnection({
    host: config.HOST,
    user: config.USER,
    password: config.PASSWORD,
    database: config.DB
})

con.connect(error => {
    if (error){
        throw error
    }

    console.log("Conexão com a base de dados realizada com sucesso")
})


module.exports = con