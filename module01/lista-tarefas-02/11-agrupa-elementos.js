class Pedido{
    constructor(cliente, produto, quantidade) {
        this.cliente = cliente;
        this.produto = produto;
        this.quantidade = quantidade;
    }
}

const pedidos = [
    new Pedido("Ana", "Laptop", 1),
    new Pedido("Carlos", "Smartphone", 2),
    new Pedido("Ana", "Tablet", 3),
    new Pedido("Carlos", "Monitor", 1),
    new Pedido("Pedro", "Teclado", 2),
    new Pedido("Ana", "Mouse", 1)
];

const quantidadePorCliente = {};

pedidos.forEach((pedido) => {
    if (!quantidadePorCliente[pedido.cliente]) {
        quantidadePorCliente[pedido.cliente] = 0;
    }
    quantidadePorCliente[pedido.cliente] += pedido.quantidade;
});

console.log(quantidadePorCliente);