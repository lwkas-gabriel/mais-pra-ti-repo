class Venda{
    constructor(produto, quantidade, valor){
        this.produto = produto;
        this.quantidade = quantidade;
        this.valor = valor;
    }
}

const vendas = [
    new Venda("Laptop", 10, 1500),
    new Venda("Smartphone", 20, 800),
    new Venda("Tablet", 15, 600),
    new Venda("Monitor", 5, 300),
    new Venda("Teclado", 25, 100)
];

vendas.forEach((venda) => {
    const vendaTotal = venda.quantidade * venda.valor;
    console.log(`O valor total das vendas de ${venda.produto} é ${vendaTotal}`);
});