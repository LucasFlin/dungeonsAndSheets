var database = require("../database/config");

function buscarUltimasRolagens(playerId) {

    var instrucaoSql = `SELECT 
                    r.dado, p.nome    
                    FROM resultados r join personagens p on r.fk_personagem = p.id_personagem
                    join usuarios u on r.fk_player = u.id_player
                    where r.fk_player = ${playerId}
                    ORDER BY r.data_rolagem DESC
                    LIMIT 10`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarKpis(id_player) {

    var instrucaoSql = `select (select nome from personagens where fk_player = ${id_player} order by forc desc limit 1) as forte,
    (select nome from personagens where fk_player = ${id_player} order by des desc limit 1) agil,
    (select nome from personagens where fk_player = ${id_player} order by cons desc limit 1) as resistente,
    (select nome from personagens where fk_player = ${id_player} order by intel desc limit 1) as inteligente,
    (select nome from personagens where fk_player = ${id_player} order by sab desc limit 1) as sabio,
    (select nome from personagens where fk_player = ${id_player} order by car desc limit 1) as carismatico
    from personagens limit 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function adicionarDado(id, nome, dado){
    var instrucaoDado = `insert into resultados (fk_player, fk_personagem, dado) value (${id}, (select id_personagem from personagens where fk_player = ${id} and nome = '${nome}'), ${dado})`
    console.log("Executando a instrução SQL: \n" + instrucaoDado);
    return database.executar(instrucaoDado);
}

module.exports = {
    buscarUltimasRolagens,
    adicionarDado,
    buscarKpis
}
