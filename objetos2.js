const filmes = [
    {
        id: 1,
        titulo: 'Dilema das Redes',
        descricao: 'Um documentário sobre tecnologia',
        duracao: 120
    },
    {
        id: 2,
        titulo: 'Us',
        descricao: 'Filme de Terror',
        duracao: 70 
    },
    {
        id: 3,
        titulo: 'Corra',
        descricao: 'Filme de suspense',
        duracao: 140
    }
]

const [{id, titulo, descricao, duracao}] = filmes;
// console.log(titulo); // retorna o primeiro titulo 'Dilema das Redes'

filmes.map(filme => console.log(filme.descricao))

//filmes.filter(filme => console.log(filme.id > 2));
//filmes.find(filme => console.log(filme.duracao > 110));

const duracaoTotal = filmes.map(filme => filme.duracao);
const soma = duracaoTotal.reduce((valorAnterior, valorAtual) => {
    return valorAnterior + valorAtual
}, 0);
console.log(soma);
