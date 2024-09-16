class Transacao{
    constructor(tipo, valor) {
        this.tipo = tipo;
        this.valor = valor;
  }
}
  
const transacoes = [
    new Transacao("entrada", 1000),
    new Transacao("saída", 200),
    new Transacao("entrada", 500),
    new Transacao("saída", 300),
    new Transacao("entrada", 1200)
];
  
let saldoFinal = 0;

transacoes.forEach((transacao) => {
    if (transacao.tipo === "entrada") {
        saldoFinal += transacao.valor;
    } else {
        saldoFinal -= transacao.valor;
    }
});

console.log(`Saldo final: R$ ${saldoFinal}`);