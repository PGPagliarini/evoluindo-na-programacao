function somar(a, b, c, d) {
    return a + b + c + d
}

// armazenando em uma const
// const resultado = somar(1, 2, 3, 4)
// console.log(resultado)

// mais simples
console.log(somar(1, 2, 3, 4))

// Retorna NaN quando falta um parametro
// console.log(somar(1, 2, 3)) retorna NaN quando possui um ou mais parametros, pois eles retornam o valor undefined

// retorna os valores normalmente, ignorando os parametros a mais
// console.log(somar(1, 2, 3, 4, 5, 6, 7, 8)) // retorna os valores normalmente, ignorando os parametros a mais

console.log('Fim')
