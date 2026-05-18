var database = require("../database/config");

function buscarPersonagensPorPlayer(playerId) {

  var instrucaoSql = `SELECT * FROM personagens WHERE fk_player = ${playerId}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function cadastrar(playerId, nome, raca, classe, forca, destreza, constituicao, inteligencia, sabedoria, carisma, acrobacia, lidar_animais, arcanismo, atletismo, atuacao, blefar, furtividade, historia, intimidacao, intuicao, investigacao, medicina, natureza, percepcao, persuasao, prestidigitacao, religiao, sobrevivencia) {
  
  var instrucaoPersonagem = `INSERT INTO personagens (fk_player, nome, raca, classe, forc, des, cons, intel, sab, car) VALUES (${playerId}, "${nome}", "${raca}", "${classe}", ${forca}, ${destreza}, ${constituicao}, ${inteligencia}, ${sabedoria}, ${carisma})`;
  var instrucaoPericias = `INSERT INTO pericias (fk_personagem, acrobacia, lidar_animais, arcanismo, atletismo, atuacao, blefar, furtividade, historia, intimidacao, intuicao, investigacao, medicina, natureza, percepcao, persuasao, prestidigitacao, religiao, sobrevivencia) VALUES ((select id_personagem from personagens where nome = ${nome} and fk_player = ${playerId} order by id_personagem desc limit 1), ${acrobacia}, ${lidar_animais}, ${arcanismo}, ${atletismo}, ${atuacao}, ${blefar}, ${furtividade}, ${historia}, ${intimidacao}, ${intuicao}, ${investigacao}, ${medicina}, ${natureza}, ${percepcao}, ${persuasao}, ${prestidigitacao}, ${religiao}, ${sobrevivencia})`;
  var idPersonagem = `select id_personagem from personagens where nome = ${nome} and fk_player = ${playerId} order by id_personagem desc limit 1`

  console.log("Executando a instrução SQL: \n" + instrucaoPersonagem);
  database.executar(instrucaoPersonagem)
  console.log("Executando a instrução SQL: \n" + instrucaoPericias);
  database.executar(instrucaoPericias)
  var a = database.executar(idPersonagem)
  return 
}


module.exports = {
  buscarPersonagensPorPlayer,
  cadastrar
}
