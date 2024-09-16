class Filme{
    constructor(titulo, diretor, anoLancamento) {
        this.titulo = titulo;
        this.diretor = diretor;
        this.anoLancamento = anoLancamento;
  }
}
  
const filmes = [
    new Filme("Inception", "Christopher Nolan", 2010),
    new Filme("The Matrix", "Wachowskis", 1999),
    new Filme("Interstellar", "Christopher Nolan", 2014),
    new Filme("The Godfather", "Francis Ford Coppola", 1972),
    new Filme("Pulp Fiction", "Quentin Tarantino", 1994)
];

const titulos = [];

filmes.forEach((filme) => {
    titulos.push(filme.titulo);
});

console.log(titulos);