function mediaDeUmArray(numeros) {
    if(!Array.isArray(numeros)) return null

    let total = 0
    for(let numero of numeros) {
        total += numero
    }
    return total / numeros.length
}

function Aluno(nome, disciplinas) {
    this.nome = nome
    this.disciplinas = disciplinas

    this.media = function(nomeDaDisciplina) {
        for(let disciplina of this.disciplinas) {
            if(disciplina.nome.toLowerCase() === nomeDaDisciplina.toLowerCase()) {
                return mediaDeUmArray(disciplina.notas)
            }
        }
        return null
    }

    this.mediaGlobal = function() {
        const medias = []
        for(let disciplina of this.disciplinas) {
            medias.push(mediaDeUmArray(disciplina.notas))
        }
        return mediaDeUmArray(medias)
    }
}


const aluno1 = new Aluno('Gepeto Machiavelli', [
    {nome: 'Marcenaria', notas: [10, 9.8, 10]},
    {nome: 'Robótica', notas: [9, 10, 9.5]},
    {nome: 'Inglês', notas: [8, 9, 10]},
])

console.log(aluno1.nome)
console.log(aluno1.media('marcenaria'))
console.log(aluno1.media('robótica'))
console.log(aluno1.media('inglês'))
console.log(aluno1.mediaGlobal())

