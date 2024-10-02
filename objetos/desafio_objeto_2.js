function mediaDeUmArray(numeros) {
    if(!Array.isArray(numeros)) return null

    let total = 0
    for(let numero of numeros) {
        total += numero
    }
    return total / numeros.length
}

const aluno = {
    nome: 'Gepeto Machiavelli',
    disciplinas: [
        {nome: 'Marcenaria', notas: [10, 9.8, 10]},
        {nome: 'Robótica', notas: [9, 10, 9.5]},
        {nome: 'Inglês', notas: [8, 9, 10]},
    ],
    media: function (nomeDaDisciplina) {
        for(let disciplina of this.disciplinas) {
            if(disciplina.nome.toLowerCase() === nomeDaDisciplina.toLowerCase()) {
                return mediaDeUmArray(disciplina.notas)
            }
        }
        return null
    },
    mediaGlobal() {
        const medias = []
        for(let disciplina of this.disciplinas) {
            medias.push(mediaDeUmArray(disciplina.notas))
        }
        return mediaDeUmArray(medias)
    }
}

console.log(aluno.nome)
console.log(aluno.media('marcenaria'))
console.log(aluno.media('robótica'))
console.log(aluno.media('inglês'))
console.log(aluno.mediaGlobal())