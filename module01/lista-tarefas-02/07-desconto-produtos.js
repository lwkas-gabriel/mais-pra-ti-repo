function Produto(nome, preco, desconto) {
    this.nome = nome;
    this.preco = preco;
    this.desconto = desconto;
  }
  
const produtos = [
    new Produto("Notebook", 3000, 10),
    new Produto("Smartphone", 1500, 5),
    new Produto("Tablet", 1200, 8),
    new Produto("Monitor", 800, 12),
    new Produto("Teclado", 200, 15)
];

produtos.forEach((produto) => {
    const desconto = 1 - (produto.desconto/100);
    console.log(`Nome: ${produto.nome}, Preço: ${produto.preco*desconto}, Desconto: ${produto.desconto}%`);
});