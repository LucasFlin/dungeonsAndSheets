var medidaModel = require("../models/resultadoModel");

function buscarUltimasRolagens(req, res) {

    var id_player = req.params.id_player;

    console.log(`Recuperando as ultimas 10 rolagens`);

    medidaModel.buscarUltimasRolagens(id_player).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas rolagens.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


// function buscarMedidasEmTempoReal(req, res) {

//     var idAquario = req.params.idAquario;

//     console.log(`Recuperando medidas em tempo real`);

//     medidaModel.buscarMedidasEmTempoReal(idAquario).then(function (resultado) {
//         if (resultado.length > 0) {
//             res.status(200).json(resultado);
//         } else {
//             res.status(204).send("Nenhum resultado encontrado!")
//         }
//     }).catch(function (erro) {
//         console.log(erro);
//         console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
//         res.status(500).json(erro.sqlMessage);
//     });
// }

module.exports = {
    buscarUltimasRolagens,
    // buscarMedidasEmTempoReal
}