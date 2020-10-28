const express = require('express')
const app = express()
const morgan = require('morgan')

const rotaUsuarios = require('./routes/usuarios')

app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use((req, res, next) => {
    res.header('Acess-Control-Allow-Origin', '*')
    res.header(
        'Acess-Control-Allow_Header', 
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    )

    if (req.method == 'OPTIONS'){
        res.header('Acess-Control-Allow-Methods', 'PUT, POST, DELETE, GET')
        return res.status(200).send({})
    }
    
    next()
})

app.use('/usuarios', rotaUsuarios)

app.use((req, res, next) => {
    const erro = new Error('Não encontrado')
    erro.status = 404
    next(erro)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    return res.send({
        erro: {
            mensagem: error.message
        }
    })
})

module.exports = app