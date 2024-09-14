class Carro{
    constructor(marca, modelo, ano, cor){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }
}

const carro = new Carro("A", "Model-1", 1990, "Vermelho");

for(let prop in carro){
    console.log(`${prop}: ${carro[prop]}`);
}