const numeros = [1, 2, 3, 4, 5, 4]

numeros[0] = 100
numeros.push(6)

// colocando mais um parâmetro no indexOf é contado o valor do array a partir do índice do segundo parâmetro definido (no caso o 4)
console.log(numeros.indexOf(4, 4))
console.log(numeros.indexOf(4))
// indexOf diz qual é o índice do elemento selecionado (no caso o número 2)
console.log(numeros.indexOf(2))
// includes diz se o elemento está dentro do array ou não
console.log(numeros.includes(6))
console.log(numeros.includes(10))
console.log(numeros)
// join junta todos os elementos do array
console.log(numeros.join(' - '))

// cria um novo array concatenando os parâmetros adicionados, sem modificar o array original
const numeros2 = numeros.concat(7, 8, 9)
console.log(numeros2)
console.log(numeros)