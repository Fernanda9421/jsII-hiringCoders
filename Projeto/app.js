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

const sinopse = readline.question('Deseja acessar a sinopse de alguma opção? 1-Sim / 2-Não  ');

if (sinopse === '1') {
    const entradaSinopse = readline.question('Digite o id do filme desejado: ');
    if (entradaSinopse === '1') {
        console.log('Um idoso sofre com as confusões da própria mente e rejeita qualquer ajuda. Enquanto isso, sua filha tenta lidar com a perda do pai que está vivo, mas cada dia mais longe.');
    } else if (entradaSinopse === '2') {
        console.log('A história de Fred Hampton, um dos líderes do Partido dos Panteras Negras, que foi assassinado em 1969 sob as ordens do FBI, que coagiu um pequeno criminoso chamado William ONeal para ajudá-los a silenciar Hampton.');
    } else if (entradaSinopse === '3') {
        console.log('A Hollywood da década de 1930 é vista pelo olhar crítico do roteirista Herman J. Mankiewicz, em meio aos seus esforços para terminar o roteiro de Cidadão Kane.');
    } else if (entradaSinopse === '4') {
        console.log('Após o colapso econômico de uma cidade na zona rural de Nevada, nos Estados Unidos, Fern, uma mulher de 60 anos, entra em sua van e parte para a estrada, vivendo uma vida fora da sociedade convencional como uma nômade moderna.');
    } else if (entradaSinopse === '5') {
        console.log('Em um mundo transformado, no qual as criaturas não dependiam mais da magia para viver, dois irmãos elfos recebem um cajado de bruxo de seu falecido pai, capaz de trazê-lo de volta à vida.');
    } else if (entradaSinopse === '6') {
        console.log('Uma garota constrói uma nave espacial e parte rumo ao espaço à procura da deusa da lua.');
    } else if (entradaSinopse === '7') {
        console.log('Joe Gardner é um professor de música de ensino fundamental desanimado por não conseguir alcançar seu sonho de tocar no lendário clube de jazz The Blue Note, em Nova York.');
    } else if (entradaSinopse === '8') {
        console.log('A chegada de um caçador de lobos a uma cidadezinha irlandesa é o começo de uma grande aventura para Robyn, quando ela conhece na floresta uma menina com um estranho dom.');
    } else if (entradaSinopse === '9') {
        console.log('Um investigador particular no Chile contrata uma pessoa para trabalhar como espiã em um asilo onde há a suspeita de abusos contra os idosos.');
    } else if (entradaSinopse === '10') {
        console.log('Cristi (Vlad Ivanov) é um Inspetor da polícia de Bucareste, na Romênia, que trabalha para os dois lados da lei. Quando ele se junta a Gilda (Catrinel Marlon) em um importante roubo, ambos terão que tomar cuidado ao navegar as viradas e perigos do universo da enganação.');
    } else if (entradaSinopse === '11') {
        console.log('Em uma floresta subaquática na África do Sul, um cineasta desenvolve uma amizade improvável com um polvo e descobre mais sobre os mistérios do mundo submarino.');
    } else if (entradaSinopse === '12') {
        console.log('No final da estrada de Woodstock, uma revolução floresceu em um acampamento de verão em ruínas para adolescentes com deficiência, transformando suas vidas e iniciando um movimento marcante.');
    }
} else {
    console.log('Obrigada por usar nosso programa!')
}


