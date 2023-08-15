const db = require("../db");

module.exports = {
    listarClientes: () => {
        return new Promise((aceito, rejeitado)=> {
            db.query("SELECT * FROM clientes", (error, results)=> {
                if(error) {rejeitado(error); return;}
                aceito(results);
            });
        });
    },

    listarUm: (codigo)=> {
        return new Promise((aceito, rejeitado)=> {
            db.query("SELECT * FROM clientes WHERE codigo = ?", [codigo], (error,results)=>{
                if(error) {rejeitado(error); return;}
                if(results.length > 0) {
                    aceito(results[0]);
                } else {
                    aceito(false);
                }
            });
        });
    },

    inserir: (nome, telefone, email)=> {
        return new Promise((aceito, rejeitado)=> {
                db.query("INSERT INTO clientes (nome, telefone, email) VALUES (?, ?, ?)", 
                [nome, telefone, email], 
                (error,results)=>{
                    if(error) {rejeitado(error); return;}
                    aceito(results.insertCodigo);
                } 
            );
        });
    },

    alterar: (codigo, nome, telefone, email)=> {
        return new Promise((aceito, rejeitado)=> {
                db.query("UPDATE clientes SET nome = ?, telefone = ?, email = ? WHERE codigo = ?", 
                [nome, telefone, email, codigo], 
                (error,results)=>{
                    if(error) {rejeitado(error); return;}
                    aceito(results);
                } 
            );
        });
    },
    
    excluir: (codigo) => {
        return new Promise((aceito, rejeitado)=> {
            db.query("DELETE FROM clientes WHERE codigo = ?", [codigo], (error, results)=> {
                if(error) {rejeitado(error); return;}
                aceito(results);
            });
        });
    }
};