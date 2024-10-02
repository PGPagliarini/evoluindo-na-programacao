// funcao: 3 Params => mediaSimples => console.log

function mediaSimples(nota1, nota2, nota3) {
    const media = (nota1 + nota2 + nota3) / 3
    console.log(`A Média Simples é ${media}!`)
}

mediaSimples(7, 8, 9)
mediaPonderada(7, 8, 9)

// funcao: 3 Params => mediaPonderada => console.log

function mediaPonderada (nota1, nota2, nota3) {
    const mediaP = (nota1 + 2 * nota2 + 3 * nota3) / 6
    console.log(`A Média Ponderada é ${mediaP}!`)
}

mediaSimples(8, 9, 6)
mediaPonderada(4, 10, 9)