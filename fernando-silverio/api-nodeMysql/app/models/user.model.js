const sql = require("./db.js")

// Construtor
 const User = function (user){
     this.email = user.email
     this.username = user.username
     this.senha = user.senha
 }

/*

 ****************** CRUD ****************************

*/ 

 // Criar novo usuário
 User.create = (newUser, result) => {
     sql.query("INSERT INTO users SET ?", newUser, (err, res) => {
         if (err) {
             console.log("error: ", err)
             result(err, null)
         }

         console.log(res.insertId)
         result(null, res.insertId)
     })
 }


// Encontrar usuário pelo id
 User.findById = (userId, result) => {
     sql.query("SELECT email, username, senha FROM users WHERE id = ? ", userId, (err, res) => {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }

        result(null, res);
     })
 }

// Encontrar todos os usuários
 User.getAll = result => {
     sql.query("SELECT * FROM users", (err, res) => {
        if (err) {
            console.log("error: ", err)
            result(null, err)
        }
        
        console.log('users : ', res);  
        result(null, res);
        
     })
 }

// Atualizar usuário pelo id
 User.updateById = (id, user, result) => {
     sql.query(
         "UPDATE users SET email = ?, username = ?, senha = ? WHERE id = ?",
         [user.email, user.username, user.senha, id],
         (err, res) =>{
            if(err) {
                console.log("error: ", err)
                result(null, err)
            }
            

            if (res.affectedRows == 0) {
                result({ kind: "not_found" }, null)
            }

            console.log("updated user with id: ", id)
            result(null, res)          
         }
    )
 }

// Remover usuário pelo id
 User.removeById = (id, result) => {
     sql.query("DELETE FROM users WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err)
            result(null, err)
        }


        if (res.affectedRows == 0) {
            result({ kind: "not_found" }, null)
        }

        console.log("deleted user with id: ", id)
        result(null, res)


     })
 }


 module.exports = User