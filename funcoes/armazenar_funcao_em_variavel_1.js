// Function Declaration => Declaração de Função
function somar(a, b) {
    return a + b
}

// Function Expression -> Do lado direito do igual temos uma função anônima e do lado esquerdo a declaração de uma variável (ideal usar const para declarar a variável)
const subtrair = function (a, b) {
    return a - b
}

console.log(somar(30, 27))
console.log(subtrair(30, 27))