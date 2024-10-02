const nome = ['Paulo', 'Bella', 'Wainer', 'Rose']

function praCadaElemento(elemento, indice, array) {
    console.log(elemento, indice, array)
}

nome.forEach(praCadaElemento)
// a ordem dos parâmetros importa, sempre elemento, indice e array
// se quiser ignorar um parâmetro utilize o _
/* exemplo
nome.forEach(function(elemento, _, array) {
    console.log(elemento, array)
}) */

nome.forEach(function(elemento, i, array) {
    console.log(elemento, i, array)
})