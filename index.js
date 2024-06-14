function sorteiaNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

var divResposta = document.getElementById("resposta")
var divContador = document.getElementById("contador")
var numero_sorteado = sorteiaNumero(1, 5000);
var contador = 0

console.log(numero_sorteado);

function verificaNumero(chute, numero_sorteado) {

    divResposta.innerHTML = "";

    if (chute < numero_sorteado) {
        return divResposta.innerHTML += `
            <p>Você errou! O é maior que ${chute}.<p>
        `
    }
    else if (chute > numero_sorteado) {
        return divResposta.innerHTML += `
            <p>Você errou! O é menor que ${chute}.<p>
        `
    }
    else if (chute == numero_sorteado) {
        return divResposta.innerHTML += `
            <p>Você acertou! O número era ${numero_sorteado}.<p>
        `}
}

var listaDeJogadores = []

function enter() {
    var chute = document.getElementById("chute").value

    contador++

    while (contador <= 20 && chute != numero_sorteado) {
        verificaNumero(chute, numero_sorteado)

        divContador.innerHTML = ""

        divContador.innerHTML += `
            <p>Quantidade  de chutes ${contador} <p>
        `
        document.getElementById("chute").value = ""

        return false;
    }

    divResposta.innerHTML = ""
    let nome = document.getElementById("nome").value

    if (chute != numero_sorteado) {
        divResposta.innerHTML += `
            <p>Perdeu! o número certo era ${numero_sorteado}
        `
    } else {
        listaDeJogadores.push({ nome, contador })

        for (let i = 0; i < listaDeJogadores.length; i++) {
            divTabela.innerHTML += `
                <table>
                    <tbody>
                        <tr>
                            <th>${listaDeJogadores[i].nome}</th>
                            <th>${listaDeJogadores[i].contador}</th>
                        </tr>
                    </tbody>
                </table>
            `
        }
    }

    return false;

}

function geraNovoNumero() {
    numero_sorteado = sorteiaNumero(1, 5000)
    contador = 0
    console.log(numero_sorteado)
}