// Indexada:    0    1    2    3    4    5
const notas = [7.6, 6.9, 5.8, 9.7, 9.5, 10]

console.log(notas)
console.log(notas[3])

//É possível alterar o valor da array, mesmo dentro de uma constante 
notas[2] = 8.5

console.log(notas[2])
console.log(notas)

// É possível adicionar arrays
notas[6] = 7.5
console.log(notas[6])
console.log(notas)

// Utilizando o "Object.freeze" não é possível alterar o array
// const notas = Object.freeze([7.6, 6.9, 5.8, 9.7, 9.5, 10])