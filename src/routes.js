const express = require("express");
const router = express.Router();

const ClienteController = require("./controllers/ClienteController");

router.get('/clientes', ClienteController.listarClientes);
router.get('/cliente/:codigo', ClienteController.listarUm);
router.post('/cliente', ClienteController.inserir);
router.put('/cliente/:codigo', ClienteController.alterar);
router.delete('/cliente/:codigo', ClienteController.excluir);

module.exports = router;