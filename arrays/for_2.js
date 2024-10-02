// Índices:      0   1    2    3   4    5   6
const numeros = [68, 55, 123, 222, 95, 44, 12]

// foreach => para cada elemento do array fará uma ação

for(let numero of numeros) {
    console.log(numero)
}

for (let i in numeros) {
     console.log(`${i} => ${numeros[i]}`)
}