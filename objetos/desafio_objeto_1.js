const data = {
    dia: 20,
    mes: 5,
    ano: 2001,
    formatar: function() {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

data.dia = 12
data.mes = 5

console.log(data.formatar())