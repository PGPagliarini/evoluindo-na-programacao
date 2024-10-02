function exibirDataDetalhada(dia, mes, ano) {
    console.log(`Dia: ${dia}`)
    console.log(`Mês: ${mes}`)
    console.log(`Ano: ${ano}`)
    console.log(`${dia} de ${mes} de ${ano}`)
}

function exibirData(dia, mes, ano) {
    console.log(`${dia} de ${mes} de ${ano}`)
}

const d1 = 7
const m1 = 'Maio'
const a1 = 2022

const d2 = 12
const m2 = 'Dezembro'
const a2 = 2024

exibirData(22, 'Novembro', 2026)
exibirData(d1, m1, a1)
exibirData(d2, m2, a2)
exibirDataDetalhada(d1, m1, a1)