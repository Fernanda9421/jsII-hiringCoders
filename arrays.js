// Array:

const alunasGama = ['Maria', 'Paula', 'Estela', 'Clara'];

console.log(alunasGama[2]); //Estela

// Spread Operator:
const alunasXp = [...alunasGama, 'Fernanda'];
console.log(alunasXp);

// Métodos de Iteração:

// Método antigo:
// for (let i = 0; i < alunasXp.length; i++) {
//     console.log(alunasXp[i])
// }

// Map
alunasXp.map(aluna => console.log(aluna));

// Filter
const numeros = [70, 28, 21, 59, 93, 28, 71];
const numerosImpares = numeros.filter(numero => numero%2 != 0);
const numerosPares = numeros.filter(numero => numero%2 == 0);

console.log(numerosImpares);
console.log(numerosPares);

// Find = retorna o primeiro valor que satisfaz a função passada
const valores = [10, 5, 12, 16, 14];
const encontrarValor = valores.find(valor => valor < 10);

console.log(encontrarValor);

// Sort
const numeros2 = [70, 2, 21, 59, 93, 28, 71];

const odemCrescente = numeros2.sort();
console.log(odemCrescente)

const ordemDecrescente = numeros2.sort ((a, b) => b-a);
console.log(ordemDecrescente)

// Reduce
const numeros3 = [1, 34, 35];
const soma = numeros3.reduce((valorAnterior, valorAtual) => {
    return valorAnterior + valorAtual
}, 0);
console.log(soma)
