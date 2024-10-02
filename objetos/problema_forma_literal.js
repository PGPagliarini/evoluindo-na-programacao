const data1 = {
    dia: 7,
    mes: 11,
    ano: 2023,
    formatar: function() {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

const data2 = {
    dia: 3,
    mes: 7,
    ano: 2023,
    formatar: function() {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

const data3 = {
    dia: 25,
    mes: 1,
    ano: 2025,
    exibir: function() {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

console.log(data1.formatar())
console.log(data2.formatar())
console.log(data3.exibir())