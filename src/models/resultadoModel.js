var database = require("../database/config");

function buscarUltimasRolagens(id_player) {

    var instrucaoSql = `SELECT 
                    r.dado, p.nome    
                    FROM resultados r join personagens p on r.fk_personagem = p.id_personagem
                    join usuarios u on r.fk_player = u.id_player
                    where fk_player = ${id_player}
                    ORDER BY r.data_rolagem DESC
                    LIMIT 10`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// function buscarMedidasEmTempoReal(idAquario) {

//     var instrucaoSql = `SELECT 
//         dht11_temperatura as temperatura, 
//         dht11_umidade as umidade,
//                         DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
//                         fk_aquario 
//                         FROM medida WHERE fk_aquario = ${idAquario} 
//                     ORDER BY id DESC LIMIT 1`;

//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }

module.exports = {
    buscarUltimasRolagens,
    // buscarMedidasEmTempoReal
}
