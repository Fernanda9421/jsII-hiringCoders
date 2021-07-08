const pessoa = {
    nome: 'Fernanda',
    idade: 27,
    cidade: 'Belo Horizonte'
}

// Notação de ponto

console.log(pessoa.nome);

// Notação de colchetes e aspas

console.log(pessoa['idade']);

// Destructuring - Desestruturar o objeto

const {nome, idade, cidade} = pessoa;
console.log(nome);
console.log(idade);
console.log(cidade);