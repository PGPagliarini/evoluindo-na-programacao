function executar(funcao, x = 10, y = 10) {
    if(typeof funcao === 'function') {
        console.log(funcao(x, y))
    }
}

function somar(a, b) {
    return a + b
}

function subtrair(a, b) {
    return a - b
}

function multiplicar(a, b) {
    return a * b
}

executar(somar, 10, 8)
executar(subtrair, 33, 18)
executar(multiplicar, 12, 6)
executar(multiplicar)
executar(somar)
executar(subtrair)