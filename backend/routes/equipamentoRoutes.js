const express = require("express");
const router = express.Router();
const equipamentoController = require("../controllers/equipamentoController");

// Rota para obter todos os equipamentos
router.get("/", equipamentoController.getEquipamentos);

module.exports = router;
