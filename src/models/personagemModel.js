var database = require("../database/config");

function buscarPersonagensPorPlayer(playerId) {

  var instrucaoSql = `SELECT * FROM personagens p join pericias pe on pe.fk_personagem = p.id_personagem WHERE p.fk_player = ${playerId}`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

async function cadastrar(playerId, nome, raca, classe, forca, destreza, constituicao, inteligencia, sabedoria, carisma, acrobacia, lidar_animais, arcanismo, atletismo, atuacao, blefar, furtividade, historia, intimidacao, intuicao, investigacao, medicina, natureza, percepcao, persuasao, prestidigitacao, religiao, sobrevivencia, hp_total, hp_atual) {

  var instrucaoPersonagem = `INSERT INTO personagens (fk_player, nome, hp_total, hp_atual, raca, classe, forc, des, cons, intel, sab, car) VALUES (${playerId}, "${nome}",${hp_total},${hp_total}, "${raca}", "${classe}", ${forca}, ${destreza}, ${constituicao}, ${inteligencia}, ${sabedoria}, ${carisma})`;
  console.log("Executando a instrução SQL: \n" + instrucaoPersonagem);                                                                                                                                                                                                                                                              
  database.executar(instrucaoPersonagem)
  await cadastrarPericias(playerId, nome, acrobacia, lidar_animais, arcanismo, atletismo, atuacao, blefar, furtividade, historia, intimidacao, intuicao, investigacao, medicina, natureza, percepcao, persuasao, prestidigitacao, religiao, sobrevivencia)
  return
}

async function cadastrarPericias(playerId, nome, acrobacia, lidar_animais, arcanismo, atletismo, atuacao, blefar, furtividade, historia, intimidacao, intuicao, investigacao, medicina, natureza, percepcao, persuasao, prestidigitacao, religiao, sobrevivencia){
  var instrucaoPericias = `INSERT INTO pericias (fk_player, fk_personagem, acrobacia, lidar_animais, arcanismo, atletismo, atuacao, blefar, furtividade, historia, intimidacao, intuicao, investigacao, medicina, natureza, percepcao, persuasao, prestidigitacao, religiao, sobrevivencia) VALUES (${playerId}, (select id_personagem from personagens where fk_player = ${playerId} and nome = "${nome}" order by id_personagem desc limit 1), ${acrobacia}, ${lidar_animais}, ${arcanismo}, ${atletismo}, ${atuacao}, ${blefar}, ${furtividade}, ${historia}, ${intimidacao}, ${intuicao}, ${investigacao}, ${medicina}, ${natureza}, ${percepcao}, ${persuasao}, ${prestidigitacao}, ${religiao}, ${sobrevivencia})`
  console.log("Executando a instrução SQL: \n" + instrucaoPericias);
  database.executar(instrucaoPericias)
}

function buscarAtributos(id) {
  var instrucaoAtributo = `SELECT forc, des, cons, intel, sab, car, hp_total, hp_atual FROM personagens WHERE id_personagem = ${personagemId}`
  var instrucaoPericias = `SELECT acrobacia, lidar_animais, arcanismo, atletismo, atuacao, blefar, furtividade, historia, intimidacao, intuicao, investigacao, medicina, natureza, percepcao, persuasao, prestidigitacao, religiao, sobrevivencia from pericias where fk_personagem = ${id}`

  console.log("Executando a instrução SQL: \n" + instrucaoAtributo);
  database.executar(instrucaoAtributo)
  console.log("Executando a instrução SQL: \n" + instrucaoPericias);
  database.executar(instrucaoPericias)
  return
}

function atualizarVida(id, nome, hp_atual) {
  var instrucaoVida = `UPDATE personagens SET hp_atual = ${hp_atual} WHERE fk_player = ${id} and nome = '${nome}'`
  console.log("Executando a instrução SQL: \n" + instrucaoVida);
  database.executar(instrucaoVida)
}


module.exports = {
  buscarPersonagensPorPlayer,
  buscarAtributos,
  atualizarVida,
  cadastrar
}
