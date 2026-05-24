var express = require("express");
var router = express.Router();

var personagemController = require("../controllers/personagemController");

router.get("/:playerId", function (req, res) {
  personagemController.buscarPersonagensPorPlayer(req, res);
});

router.post("/cadastrar", function (req, res) {
  personagemController.cadastrar(req, res);
});

router.get("/buscarAtributos", function (req, res) {
  personagemController.buscarAtributos(req, res);
})

router.post("/atualizarVida", function (req, res) {
  personagemController.atualizarVida(req, res);
});

router.post("/atualizar", function (req, res) {
    personagemController.atualizar(req, res);
})
module.exports = router;