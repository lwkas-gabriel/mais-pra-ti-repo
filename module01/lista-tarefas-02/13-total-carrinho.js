class Carrinho{
    constructor(itens){
        this.itens = itens;
    }
}

class Item{
    constructor(nome, quantidade, precoUnitario) {
        this.nome = nome;
        this.quantidade = quantidade;
        this.precoUnitario = precoUnitario;
    }
}

const itens = [
    new Item("Laptop", 1, 1500),
    new Item("Smartphone", 2, 800),
    new Item("Tablet", 1, 600),
    new Item("Monitor", 1, 300),
    new Item("Teclado", 3, 100)
];

const carrinho = new Carrinho(itens);

let valorTotal = 0.0;

carrinho.itens.forEach(item => {
    valorTotal += item.precoUnitario * item.quantidade;
});

console.log(`o valor total do seu carrinho é ${valorTotal}`);