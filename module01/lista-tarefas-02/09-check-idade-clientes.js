class Cliente{
    constructor(nome, idade, cidade){
        this.nome = nome;
        this.idade = idade;
        this.cidade = cidade;
    }
}

const clientes = [
    new Cliente("José", 30, "Fortaleza"),
    new Cliente("Maria", 21, "Aracati"),
    new Cliente("Luiza", 54, "Maranguape"),
    new Cliente("Mary", 18, "Caucaia"),
    new Cliente("Marcos", 67, "Paracuru"),
];

let contador = 0;

clientes.forEach((cliente) => {
    if(cliente.idade > 30){
        contador++;
    }
});

console.log(`O número de clientes com idade maior que 30 é: ${contador}`);