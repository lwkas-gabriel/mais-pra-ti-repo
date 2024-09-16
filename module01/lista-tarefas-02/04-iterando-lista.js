class Pessoa{
    constructor(nome, idade, cidade){
        this.nome = nome;
        this.idade = idade;
        this.cidade = cidade;
    }
}

const pessoas = [
    new Pessoa("João", 30, "São Paulo"),
    new Pessoa("Maria", 25, "Rio de Janeiro"),
    new Pessoa("Pedro", 35, "Belo Horizonte"),
    new Pessoa("Ana", 28, "Curitiba"),
    new Pessoa("Lucas", 22, "Porto Alegre")
];

for(let pessoa of pessoas){
    console.log(pessoa);
}