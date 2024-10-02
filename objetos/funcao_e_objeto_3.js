// As funções construtoras ficam verdes, diferente das outras funções amarelas

// Função Construtora -> Criação de Objetos
function Data(dia, mes, ano) {
    this.dia = dia 
    this.mes = mes
    this.ano = ano

    this.formatar = function() {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

const data1 = new Data(1, 1, 2027)
data1.ano = 2028
console.log(data1.formatar())

const data2 = new Data(3, 7, 2003)
console.log(data2.formatar())
console.log(data2.dia)
console.log(data2['dia'])


// 1. Inicia com Letra Maiúscula [Não Obrigatório]
// 2. Chamar função com "new" Data(...) [Não Obrigatório]
// 3. Uso do "this" para acrescentar atrib. e métodos no objeto

// JavaScript => ECMAScript