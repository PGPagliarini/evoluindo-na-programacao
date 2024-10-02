function mediaPonderada(nota1, nota2, nota3) {
    const mediaP = (nota1 + 2 * nota2 + 3 * nota3) / 6
    return mediaP
}

function mediaSimples(nota1, nota2){
    return (nota1 + nota2) / 2
}

const media1 = mediaPonderada(7, 8, 9)
const media2 = mediaPonderada(8.9, 6.8, 9)
const mediaFinal = mediaSimples(media1, media2)
const mediaFinalInt = Math.ceil(mediaFinal)

console.log(`A média final do aluno é ${mediaFinalInt}!`)