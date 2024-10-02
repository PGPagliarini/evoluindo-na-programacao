// tudo em uma função só
/*
function notasParaStatus(n1, n2, n3) {
    let media
    
    if(n1 <= n2 && n1 <= n3) {
        media = (n2 + n3) / 2
    } else if(n2 <= n1 && n2 <= n3) {
        media = (n1 + n3) / 2
    } else {
        media = (n1 + n2) / 2
    }
    
    if (media >= 7) {
        return 'Aprovado'
    } else if (media >= 4) {
        return 'Recuperação'
    } else {
        return 'Reprovado'
    }
}
*/

function menorValor(n1, n2) {
    return n1 <= n2 ? n1 : n2
}

function media(n1, n2, n3) {
    const menorNota = menorValor(n2, menorValor(n2, n3))
    if(menorNota === n1) {
        return (n2 + n3) / 2
    } else if(menorNota === n2) {
        return (n1 + n3) / 2
    } else {
        return (n1 + n2) / 2
    }
}

function mediaParaStatus(media) {
    if (media >= 7) {
        return 'Aprovado'
    } else if (media >= 4) {
        return 'Recuperação'
    } else {
        return 'Reprovado'
    }
}

function notasParaStatus(n1, n2, n3) {
    let mediaFinal = media(n1, n2, n3)
    return mediaParaStatus(mediaFinal)
}

const nota1 = 7.9
const nota2 = 2.4
const nota3 = 6.5

console.log(notasParaStatus(nota1, nota2, nota3))