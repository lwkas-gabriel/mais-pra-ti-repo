function filtrarPropriedadesPorValor(produto, valorMinimo) {
    const resultado = {};
  
    for (let propriedade in produto) {
      if (produto[propriedade] > valorMinimo) {
        resultado[propriedade] = produto[propriedade];
      }
    }
  
    return resultado;
  }

class Produto{
    constructor(preco, peso, estoque, qualidade, desconto){
        this.preco = preco;
        this.peso = peso;
        this.estoque = estoque;
        this.qualidade = qualidade;
        this.desconto = desconto;
    }
}

const produto = new Produto(150, 500, 30, 4.5, 10);

const minimo = 100;
const produtoFiltrado = filtrarPropriedadesPorValor(produto, minimo);

console.log(produtoFiltrado);