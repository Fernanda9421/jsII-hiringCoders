const oscars = require('./database');

// Pegar o input do usuário - Escolher livro por categoria ou não:

const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar um conteúdo referente às indicações ao Oscar 2021? 1-Sim / 2-Não  ');

// Se a resposta for SIM, mostra as categorias e pergunta qual ela escolhe
// Se for NÃO, mostra todos conteúdos disponíveis, em ordem crescente de duração

if (entradaInicial === '1') {
    console.log('Essas são as categorias DISPONÍVEIS: ');
    console.log('1-Melhor Filme', '2-Animação', '3-Documentário');

    const entradaCategoria = readline.question('Qual categoria você escolhe? ');

    const retorno = oscars.filter(oscar => oscar.categoria === entradaCategoria);

    console.table(retorno)
} else {
    const ordenados = oscars.sort((a,b) => a.duracao - b.duracao);
    console.log('Esses são todos os conteúdos disponíveis: ');

    console.table(ordenados);
}

