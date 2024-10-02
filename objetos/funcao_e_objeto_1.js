function criarObjeto (dia = 1, mes = 1, ano = 1970) {
    return {
        dia: dia,
        mes: mes,
        ano: ano,
        formatar: function() {
            return `${this.dia}/${this.mes}/${this.ano}`
        }
    }
}

const data1 = criarObjeto(7, 11, 2023)

const data2 = criarObjeto(3, 7, 2023)

const data3 = criarObjeto(25, 1, 2025)

console.log(data1.formatar())
console.log(data2.formatar())
console.log(data3.formatar())