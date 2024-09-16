class Empresa{
    constructor(departamentos){
        this.departamentos = departamentos;
    }
}

function Funcionario(nome) {
    this.nome = nome;
  }

function Departamento(nome, funcionarios) {
    this.nome = nome;
    this.funcionarios = funcionarios;
}

const departamentos = [
        new Departamento("Recursos Humanos", [
        new Funcionario("Ana"),
        new Funcionario("Carlos")
    ]),
        new Departamento("Tecnologia", [
        new Funcionario("Lucas"),
        new Funcionario("Julia")
    ]),
        new Departamento("Marketing", [
        new Funcionario("Pedro"),
        new Funcionario("Fernanda")
    ])
];

const empresa = new Empresa(departamentos);

for (let departamentoKey in empresa.departamentos) {
    let departamento = empresa.departamentos[departamentoKey];
    
    console.log(`Departamento: ${departamento.nome}`);
    
    for (let funcionario of departamento.funcionarios) {
      console.log(`Funcionário: ${funcionario.nome}`);
    }
    console.log("=====");
}