var personagemModel = require("../models/personagemModel");

function buscarPersonagensPorPlayer(req, res) {
  var idUsuario = req.params.idUsuario;

  personagemModel.buscarPersonagensPorPlayer(idUsuario).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os personagens: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}


function cadastrar(req, res) {
  var playerId = req.body.idServer;
  var nome = req.body.nomeServer;
  var raca = req.body.racaServer;
  var classe = req.body.classeServer;
  var forca = req.body.forcaServer;
  var destreza = req.body.destrezaServer;
  var constituicao = req.body.constituicaoServer;
  var inteligencia = req.body.inteligenciaServer;
  var sabedoria = req.body.sabedoriaServer;
  var carisma = req.body.carismaServer;
  var acrobacia = req.body.acrobaciaServer;
  var lidar_animais = req.body.lidarServer;
  var arcanismo = req.body.arcanismoServer;
  var atletismo = req.body.atletismoServer;
  var atuacao = req.body.atuacaoServer;
  var blefar = req.body.enganacaoServer;
  var furtividade = req.body.furtividadeServer;
  var historia = req.body.historiaServer;
  var intimidacao = req.body.intimidacaoServer;
  var intuicao = req.body.intuicaoServer;
  var investigacao = req.body.investigacaoServer;
  var medicina = req.body.medicinaServer;
  var natureza = req.body.naturezaServer;
  var percepcao = req.body.percepcaoServer;
  var persuasao = req.body.persuasaoServer;
  var prestidigitacao = req.body.prestidigitacaoServer;
  var religiao = req.body.religiaoServer;
  var sobrevivencia = req.body.sobrevivenciaServer;


  if (playerId == undefined) {
    res.status(400).send("idUsuario está undefined!");
  } else {


    personagemModel.cadastrar(playerId, nome, raca, classe, forca, destreza, constituicao, inteligencia, sabedoria, carisma, acrobacia, lidar_animais, arcanismo, atletismo, atuacao, blefar, furtividade, historia, intimidacao, intuicao, investigacao, medicina, natureza, percepcao, persuasao, prestidigitacao, religiao, sobrevivencia)
      .then((resultado) => {
        res.status(201).json(resultado);
      }
      ).catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

function buscarAtributos(req, res){
    var idPersonagem = req.script.idPersonagemAtual;

  personagemModel.buscarAtributos(idPersonagem).then((resultado) => {
    if (resultado.length > 0) {
      res.status(200).json(resultado);
    } else {
      res.status(204).json([]);
    }
  }).catch(function (erro) {
    console.log(erro);
    console.log("Houve um erro ao buscar os atributos: ", erro.sqlMessage);
    res.status(500).json(erro.sqlMessage);
  });
}

module.exports = {
  buscarPersonagensPorPlayer,
  buscarAtributos,
  cadastrar
}