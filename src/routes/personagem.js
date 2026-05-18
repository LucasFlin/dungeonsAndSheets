var express = require("express");
var router = express.Router();

var personagemController = require("../controllers/personagemController");

router.get("/:playerId", function (req, res) {
  personagemController.buscarPersonagensPorPlayer(req, res);
});

router.post("/cadastrar", function (req, res) {
  personagemController.cadastrar(req, res);
})

module.exports = router;