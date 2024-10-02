const numeros = [7, 14, 4543, 2322, 23, 356, 12, 65]

for(let i = numeros.length - 2; i >= 0; i -= 2) {
    console.log(`${i} => ${numeros[i]}`)
}

// Outra solução
const numerosInvertidos = numeros.reverse()
for(let i in numerosInvertidos){
    if(i % 2 === 1) {
        console.log(`${i} => ${numerosInvertidos[i]}`)
    }
}
