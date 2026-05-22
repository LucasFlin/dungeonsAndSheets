var express = require("express");
var router = express.Router();

var resultadoController = require("../controllers/resultadoController");

router.get("/ultimas/:id_player", function (req, res) {
    resultadoController.buscarUltimasRolagens(req, res);
});

router.get("/tempo-real/:id_player", function (req, res) {
    resultadoController.buscarKpis(req, res);
})

module.exports = router;