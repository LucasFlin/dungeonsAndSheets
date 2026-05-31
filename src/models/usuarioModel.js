var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT id_player, nome, email FROM usuarios WHERE email = '${email}' AND senha = sha2('${senha}', 256);
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
async function cadastrar(nome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `INSERT INTO usuarios (nome, email, senha) VALUES ('${nome}', '${email}', sha2('${senha}', 256));`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    database.executar(instrucaoSql)
    await criarPersonagemNulo(nome)
    await criarPericiaVazia(nome)
    return
}

function criarPersonagemNulo(nome){
    let personagemNulo = `insert into personagens values (0, (select id_player from usuarios where nome = '${nome}'), '', '', '', 0, 0, 0, 0, 0, 0, 0, 0, '2000-01-01 00:00:00', '2000-01-01 00:00:00');`
    console.log("Executando a instrução SQL: \n" + personagemNulo);
    database.executar(personagemNulo)
}

function criarPericiaVazia(nome){
    var periciaNula = `INSERT INTO pericias (fk_player, fk_personagem, acrobacia, lidar_animais, arcanismo, atletismo, atuacao, blefar, furtividade, historia, intimidacao, intuicao, investigacao, medicina, natureza, percepcao, persuasao, prestidigitacao, religiao, sobrevivencia) VALUES ((select id_player from usuarios where nome = '${nome}'), (select id_personagem from personagens where fk_player = (select id_player from usuarios where nome = '${nome}') order by id_personagem desc limit 1), 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)`
    console.log("Executando a instrução SQL: \n" + periciaNula);
    database.executar(periciaNula)
}

module.exports = {
    autenticar,
    cadastrar
};