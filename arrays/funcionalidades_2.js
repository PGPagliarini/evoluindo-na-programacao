// removendo elementos do array
const numeros = [1, 2, 3, 4, 5, 6]

// o splice(emendar) inicia a exclusão do elemento selecionado pelo índice no primeiro parâmetro 
// no segundo se define a quantidade de elementos a serem excluídos
// a partir do terceiro (opcional) é possível definir os elementos a serem repostos
// numeros.splice(1, 4)
numeros.splice(1, 4, -1, -2, -3)
console.log(numeros)

// pop remove o último elemento da forma mais simples, porém sem flexibilidade
const numeroExcluido = numeros.pop()
console.log(numeros, numeroExcluido)
