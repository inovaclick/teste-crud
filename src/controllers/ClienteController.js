const ClienteService = require("../services/ClienteService");

module.exports = {
    listarClientes: async (req, res)=> {
        let json = {error:"", result: []};

        let clientes = await ClienteService.listarClientes();

        for(let i in clientes) {
            json.result.push({
                codigo: clientes[i].codigo,
                nome: clientes[i].nome,
                telefone: clientes[i].telefone,
                email: clientes[i].email
            });
        }
        res.json(json);
    },

    listarUm: async (req, res)=> {
        let json = {error:"", result: {}};

        let codigo = req.params.codigo;
        let cliente = await ClienteService.listarUm(codigo);

        if(cliente){
            json.result = cliente;
        };
        res.json(json);
    },

    inserir: async (req, res)=> {
        let json = {error:"", result: {}};

        let nome = req.body.nome;
        let telefone = req.body.telefone;
        let email = req.body.email;
        
        if(nome && telefone && email){
            let clienteCodigo = await ClienteService.inserir(nome, telefone, email);
            json.result = {
                codigo: clienteCodigo,
                nome,
                telefone,
                email
            };
        } else {
            json.error = "Campos não enviados";
        }
        res.json(json);
    },

    alterar: async (req, res)=> {
        let json = {error:"", result: {}};

        let codigo = req.params.codigo
        let nome = req.body.nome;
        let telefone = req.body.telefone;
        let email = req.body.email;
        
        if(codigo && nome && telefone && email){
            await ClienteService.alterar(codigo, nome, telefone, email);
            json.result = {
                codigo,
                nome,
                telefone,
                email
            };
        } else {
            json.error = "Campos não enviados";
        }
        res.json(json);
    },

    excluir: async(req, res) => {
        let json = {error:"", result: {}};

        await ClienteService.excluir(req.params.codigo);

        res.json(json);
    }


}