// #1 - Função SEM parâmetros e SEM retorno
function exibirBomDia() {
    console.log('Bom dia')
}

exibirBomDia()

// #2 - Função COM parâmetros e SEM retorno
function exibirBomDiaPara(nome, msg) {
    console.log(`Bom dia ${nome}! ${msg}`)
}

exibirBomDiaPara('Paulo', 'Tudo bem?')
exibirBomDiaPara('Bella', 'Tudo bem? Não se esqueça que eu te amo!')

// #3 - Função SEM parâmetros e COM retorno
function numeroEntre0e10() {
    const numero = parseInt(Math.random() * 10)
    return numero
    // ou diretamente com o return (return parseInt(Math.random() * 10))
}

console.log(numeroEntre0e10())

// #4 - Função COM parâmetros e COM retorno
function somar(n1, n2) {
    return n1 + n2
}

// armazenada em uma const
const resultado = somar(98, 7849)
console.log(resultado)

// diretamente no console.log()
console.log(somar(4, 8))
