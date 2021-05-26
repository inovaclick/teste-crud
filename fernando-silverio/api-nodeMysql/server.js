const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true}))

// Teste
app.get("/", (req,res) => {
    res.json({message: 'Bem vindo a aplicação'})
})


// Rotas
require("./app/routes/user.routes.js")(app)


app.listen(3000, () => {
    console.log("Server rodando")
})
