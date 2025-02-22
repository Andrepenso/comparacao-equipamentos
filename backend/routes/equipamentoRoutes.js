const express = require("express");
const router = express.Router();
const equipamentoController = require("../controllers/equipamentoController");

router.get("/", equipamentoController.getEquipamentos);

module.exports = router;
