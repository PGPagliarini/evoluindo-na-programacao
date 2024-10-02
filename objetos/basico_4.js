const cliente = {
    codigo: 57235,
    nome: 'Paulo Gabriel Pagliarini',
    vip: true,
    endereco: {
        logradouro: 'Rua xvs',
        numero: 987,
        complemento: 'Apto 456 Bloco A',
        pontosRef: ['Hospital Sírio-Libanês', 'Shopping Iguatemi']
    },
    filhos: [
        {nome: 'Michellangelo Pagliarini', anoDeNascimento: 2035 },
        {nome: 'Madeline Pagliarini', anoDeNascimento: 2040 },
        {nome: 'Peter Pagliarini', anoDeNascimento: 2043 },
    ]
}

console.log(cliente['endereco']['logradouro'])
console.log(cliente.endereco.logradouro)
console.log(cliente.filhos[0].anoDeNascimento)