const User = require("../models/user.model.js")

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content must be not empty"
        })
    }

    const user = new User({
        email: req.body.email,
        username: req.body.username,
        senha: req.body.senha
    })

    User.create(user, (err, data) => {
        if (err) {
            res.status(500).send({
                message: 
                    err.message || "Some error occurred on user creation"
            })
        }

        else{
            res.status(200).send({message: "ok"})
        }
    })
}


exports.findAll = (req, res) => {
    User.getAll((err, data) => {
        if (err) {
            res.status(500).send({
                message: 
                    err.message || "Some error occurred on retrieving users"
            })
        }
        else{
            res.send(data)
        }
        
    })
}



exports.findOne = (req, res) => {
    User.findById(req.params.userId, (err, data) => {
        if (err){
            if (err.kind === "not_found"){
                res.status(404).send({
                    message: `Not found user with id ${req.params.userId}.`
                })
            }
            else{
                res.status(500).send({
                    message: "Error retrieving user with id " + req.params.userId
                })
            }
        }
        else{
            res.send(data)
        }
    })
}



exports.update = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content must be not empty"
        })
    }

    User.updateById(req.params.userId, new User(req.body), (err, data) => {
        if (err){
            if (err.kind === "not_found"){
                res.status(404).send({
                    message: `Not found user with id ${req.params.userId}.`
                })
            }
            else{
                res.status(500).send({
                    message: "Error retrieving user with id " + req.params.userId
                })
            }
        }
        else{
            res.send({message: "User updated"})
        }
    })
}



exports.delete = (req, res) => {
    User.removeById(req.params.userId, (err, data) => {
        if (err){
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found user with id ${req.params.userId}.`
                })
            }
            else{
                res.status(500).send({
                    message: "Could not delete user with id " + req.params.userId
                })
            }
        }
        res.send({ message: "User was deleted successfully!" })
    })
}