class Livro{
    constructor(titulo, autor, anoPublicacao, genero){
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.genero = genero;
    }
}

const livro = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", 1954, "Fantasia");
  
let editoraExiste = false;

    for (let propriedade in livro) {
        if (propriedade === "editora") {
            editoraExiste = true;
            break;
        }
    }

    if (!editoraExiste) {
        livro.editora = "HarperCollins";
    }

console.log(livro);