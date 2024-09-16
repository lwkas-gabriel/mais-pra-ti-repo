class Aluno{
    constructor(nome, nota1, nota2){
        this.nome = nome;
        this.nota1 = nota1;
        this.nota2 = nota2;
    }
}

const alunos = [
    new Aluno("João" , 5.0, 9.0),
    new Aluno("Leonardo" , 6.0, 7.0),
    new Aluno("Felipe" , 7.0, 9.5),
    new Aluno("Matheus" , 8.0, 10),
];

for(let aluno of alunos){
    console.log(`${aluno.nome} - média = ${(aluno.nota1+aluno.nota2)/2}`);
}