function nomeValido(texto) {
    let teste_letras = new RegExp("[ abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZãÃâÂáÁàÀäÄêÊéÉèÈëËíÍìÌïÏîÎõÕôÔóÓòÒöÖûÛúÚùÙüÜñÑçÇýÝ]")
    for (let i = 0; i < texto.length; i++) {
        if (teste_letras.test(texto[i]) == false) {
            return 1
        }
        else {
            continue
        }
    }
    return 0
}

function emailValido(texto) {
    let teste_arroba = texto.includes('@')
    let teste_com = texto.includes('.com')
    let teste_valido = texto.indexOf('@') < texto.indexOf('.com') ? true : false

    if (teste_arroba == false || teste_com == false || teste_valido == false) {
        return 2
    } else {
        return 0
    }
}

function senhaValido(texto) {
    if (texto.length < 6 || texto.length > 50) {
        return 4
    }
    return 0
}

function senhaIgual(texto1, texto2) {
    if (texto1 != texto2) {
        return 8
    } else {
        return 0
    }
}


function validar(t1, t2, t3, t4) {
    erros = 0
    erros += nomeValido(t1)
    erros += emailValido(t2)
    erros += senhaValido(t3)
    erros += senhaIgual(t4, t3)

    let msg1 = 'seu nome só pode ser formado por letras'
    let msg2 = 'seu email deve estar num formato válido'
    let msg4 = 'sua senha precisa ter entre 6 e 50 caracteres'
    let msg8 = 'os dois campos de senha precisam estar exatamente iguais'

    if (t1 == '' || t2 == '' || t3 == '' || t4 == '') {
        alerta += `você precisa preencher o formulário para criar seu cadastro."`
        alert(alerta)
    } else if (erros == 1) {
        alerta += `${msg1}. São as regras da guilda."`
        alert(alerta)
    } else if (erros == 2) {
        alerta += `${msg2}. São as regras da guilda."`
        alert(alerta)
    } else if (erros == 3) {
        alerta += `${msg1} e ${msg2}. São as regras da guilda."`
        alert(alerta)
    } else if (erros == 4) {
        alerta += `${msg4}. São as regras da guilda."`
        alert(alerta)
    } else if (erros == 5) {
        alerta += `${msg1}, e ${msg4}. São as regras da guilda."`
        alert(alerta)
    } else if (erros == 6) {
        alerta += `${msg2}, e ${msg4}. São as regras da guilda."`
        alert(alerta)
    } else if (erros == 7) {
        alerta += `${msg1}, ${msg2} e ${msg4}. São as regras da guilda."`
        alert(alerta)
    } else if (erros == 8) {
        alerta += `${msg8}. São as regras da guilda."`
        alert(alerta)
    } else if (erros == 9) {
        alerta += `${msg1} e ${msg8}. São as regras da guilda."`
        alert(alerta)
    } else if (erros == 10) {
        alerta += `${msg2} e ${msg8}. São as regras da guilda."`
        alert(alerta)
    } else if (erros == 11) {
        alerta += `${msg1}, ${msg2} e ${msg8}. São as regras da guilda."`
        alert(alerta)
    } else if (erros == 12) {
        alerta += `${msg4} e ${msg8}. São as regras da guilda."`
        alert(alerta)
    } else if (erros == 13) {
        alerta += `${msg1}, ${msg4} e ${msg8}. São as regras da guilda."`
        alert(alerta)
    } else if (erros == 14) {
        alerta += `${msg2}, ${msg4} e ${msg8}. São as regras da guilda."`
        alert(alerta)
    } else if (erros == 15) {
        alerta += `${msg1}, ${msg2}, ${msg4} e ${msg8}. São as regras da guilda."`
        alert(alerta)
    } else {
        cadastrar(t1, t2, t3)
        alert(`Após assinar o pergaminho a atendente pega-o e começa a ler os dados informados.
            
Alguns segundos se passam e ela guarda a folha abaixo do balcão enquanto olha para você com um sorrizo dizendo:
"Será um prazer ter você com a gente, ${t1}!"`)  
    }

    alerta = `Você está prestes à assinar o formulário de admissão da Guilda, mas a atendente para sua mão antes que a caneta toque o papel.

Ela diz:
"Calma aí viajante, `
}

