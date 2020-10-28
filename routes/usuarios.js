const express = require('express')
const router = express.Router()
const mysql = require('../mysql').pool

//inserir um usuario
router.post('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        try{
            if (error) { return res.status(500).send({ error: error })}
            conn.query(
                'INSERT INTO usuario (cpf, nome, idade) VALUES (?, ?, ?)',
                [req.body.cpf, req.body.nome, req.body.idade],
                (error, resultado, field) => {
                    conn.release()
                    if (error) { return res.status(500).send({ error: error })}
                    res.status(201).send({mensagem: 'Usuário cadastrado com sucesso'})
                }
            )
        }catch(error){
            res.status(500).send({ error: error })
        }
    })
})

//retorna todos os usuarios
router.get('/', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        try{
            if (error) { return res.status(500).send({ error: error })}
            conn.query(
                'SELECT * FROM usuario;',
                (error, resultado, field) => {
                    conn.release()
                    if (error) { return res.status(500).send({ error: error })}
                    res.status(200).send({ response: resultado })
                }
            )
        }catch(error){
            res.status(500).send({ error: error })
        }
    })
})

//retorna os dados de um usuario
router.get('/:cpf', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        try{
            if (error) { return res.status(500).send({ error: error })}
            conn.query(
                'SELECT * FROM usuario WHERE cpf = ?;',
                [req.params.cpf],
                (error, resultado, field) => {
                    console.log("resultado: ", resultado)
                    conn.release()
                    if (error) { return res.status(500).send({ error: error })}
                    res.status(200).send({ response: resultado })
                }
            )
        }catch(error){
            res.status(500).send({ error: error })
        }       
    })
})

//edita um usuario
router.put('/:cpf', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        try{
            if (error) { return res.status(500).send({ error: error })}
            conn.query(
                `UPDATE usuario
                    SET nome = ?,
                        idade = ?
                    WHERE cpf = ?`,
                [req.body.nome, req.body.idade, req.params.cpf],
                (error, resultado, field) => {
                    conn.release()
                    if (error) { return res.status(500).send({ error: error })}
                    
                    //validando se encontrou o registro
                    if (resultado.affectedRows != 0)
                        res.status(200).send({ mensagem: 'Usuário alterado com sucesso' })
                    else    
                        res.status(500).send({ mensagem: 'Usuário não encontrado' })
                }
            )
        }catch(error){
            res.status(500).send({ error: error })
        }
    })    
})

//remove um usuario
router.delete('/:cpf', (req, res, next) => {
    mysql.getConnection((error, conn) => {
        try{
            if (error) { return res.status(500).send({ error: error })}
            conn.query(
                'DELETE FROM usuario WHERE cpf = ?;', [req.params.cpf],
                (error, resultado, field) => {
                    conn.release()
                    if (error) { return res.status(500).send({ error: error })}
                    //verifica se encontrou um usuário
                    if (resultado.affectedRows != 0)
                        res.status(200).send({ mensagem: 'Usuário removido com sucesso' })
                    else
                        res.status(500).send({ mensagem: 'Usuário não encontrado' })
                }
            )
        }catch(error){
            res.status(500).send({ error: error })
        } 
    })
})

module.exports = router