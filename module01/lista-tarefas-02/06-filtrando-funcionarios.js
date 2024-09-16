class Funcionario{
    constructor(nome, cargo, salario){
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }
}

const funcionarios = [
    new Funcionario("João", "Gerente", 5000),
    new Funcionario("Maria", "Desenvolvedora", 4000),
    new Funcionario("Pedro", "Analista", 3500),
    new Funcionario("Ana", "Designer", 3000),
    new Funcionario("Lucas", "Estagiário", 1500)
];

const salarioMiniumo = 3001;

for(funcionario of funcionarios){
    if(salarioMiniumo > funcionario.salario){
        continue;
    }
    console.log(funcionario);
}