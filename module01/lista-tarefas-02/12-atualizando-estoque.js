class Estoque{
    constructor(produto, quantidade, minimo) {
        this.produto = produto;
        this.quantidade = quantidade;
        this.minimo = minimo;
  }
}
  
const listaEstoque = [
    new Estoque("Laptop", 5, 10),
    new Estoque("Smartphone", 8, 6),
    new Estoque("Tablet", 3, 4),
    new Estoque("Monitor", 12, 10),
    new Estoque("Teclado", 7, 5)
];
  
listaEstoque.forEach((item) => {
    if (item.quantidade < item.minimo) {
      item.quantidade *= 2; // Duplicando a quantidade
    }
});
  
console.log(listaEstoque);