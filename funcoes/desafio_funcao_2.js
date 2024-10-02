// forma mais longa
/*
function notaParaConceito(nota) {
    let conceito
    switch(Math.ceil(nota)) {
        case 10: conceito = 'A+'
        break
        case 9: conceito = 'A'
        break
        case 8: conceito = 'B+'
        break
        case 7: conceito = 'B'
        break
        case 6: conceito = 'C+'
        break
        case 5: conceito = 'C'
        break
        case 4: conceito = 'D+'
        break
        case 3: conceito = 'D'
        break
        case 2: conceito = 'E+'
        break
        case 1: conceito = 'E'
        break
        case 0: conceito = 'F'
        break
        default: conceito = null
    }
    return conceito
}
*/

// forma ideal

function notaParaConceito(nota) {
    switch(Math.ceil(nota)) {
        case 10: return 'A+'
        case 9: return 'A'
        case 8: return 'B+'
        case 7: return 'B'
        case 6: return 'C+'
        case 5: return 'C'
        case 4: return 'D+'
        case 3: return 'D'
        case 2: return 'E+'
        case 1: return 'E'
        case 0: return 'F'
        default: return null
    }
}

const conceitoAlunoA = notaParaConceito(10)
const conceitoAlunoB = notaParaConceito(5)
console.log(`O conceito do Paulo é ${conceitoAlunoA}!`)
console.log(`O conceito do Doug é ${conceitoAlunoB}!`)
