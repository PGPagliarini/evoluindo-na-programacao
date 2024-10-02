// Calcular a média das notas da turma e mostrar o resultado no console usando o laço for
// Some todas as notas e divída pelo numero de alunos

const notas = [7.3, 8.1, 9.2, 8.1, 6.3, 7.9, 5.0, 6.0, 8.9]

// Ex 1
let total1 = 0
let media1 = 0

for(let i = 0; i < notas.length; i++) {
    total1 += notas[i]
}

media1 = total1 / notas.length
console.log(`A média da turma é ${media1}.`)

// Ex 2 o melhor!
let total2 = 0
let media2 = 0

for(let nota of notas) {
    total2 += nota
}

media2 = total2 / notas.length
console.log(`A média da turma é ${media2}.`)

// Ex 3
let total3 = 0
let media3 = 0

for(let i in notas) {
    total3 += notas[i]
}

media3 = total3 / notas.length
console.log(`A média da turma é ${media3}.`)