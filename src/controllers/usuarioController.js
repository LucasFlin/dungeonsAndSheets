var usuarioModel = require("../models/usuarioModel");
var personagemModel = require("../models/personagemModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var playerId = req.body.idServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha, playerId)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                        personagemModel.buscarPersonagensPorPlayer(resultadoAutenticar[0].id_player)
                            .then((resultadoPersonagens) => {
                                if (resultadoPersonagens.length > 0) {
                                    res.json({
                                        id_player: resultadoAutenticar[0].id_player,
                                        email: resultadoAutenticar[0].email,
                                        nome: resultadoAutenticar[0].nome,
                                        senha: resultadoAutenticar[0].senha,
                                        personagens: resultadoPersonagens
                                    });
                                } else {
                                    res.status(204).json({ personagens: [] });
                                }
                            })
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                        alert(`Você entrega seu pergaminho para a atendente no balcão.

Após olhar a folha ela te entrega novamente dizendo:
"Tem algo errado com sua entrada... Poderia conferir e tentar novamente?"`)
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                        alert(`Você entrega seu pergaminho para a atendente no balcão.

Após olhar a folha ela te entrega novamente dizendo:
"Parece que o login está duplicado, tem um outro cadastro com esse mesmo email e senha..."`)
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    autenticar,
    cadastrar
}