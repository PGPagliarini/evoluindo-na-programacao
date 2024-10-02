// const numeros = [1, 2, 3]

// Objeto criado de forma Literal!
const produto = {
    nome: 'Caneta BIC Preta',
    preco: 9.99,
    desconto: 0.2,
    altoCusto: false,
}

console.log(produto['nome'])
console.log(produto['preco'])
console.log(produto['altoCusto'])
console.log(produto['desconto'])

// Forma mais utilizada para mostrar os atributos
console.log(produto.nome)
console.log(produto.preco)
console.log(produto.desconto)
console.log(produto.altoCusto)

console.log(typeof produto)

// Formas de alterar os valores dos atributos
produto['nome'] = 'Caneta BIC Vermelha'
produto.nome = 'Caneta BIC Vermelha'

console.log(produto.nome)