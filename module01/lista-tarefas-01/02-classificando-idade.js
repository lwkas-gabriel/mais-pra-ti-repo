const prompt = require('prompt-sync')();

// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
//     adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
//     controle if-else.

let age = Number(prompt("insira a idade a ser verificada: "));

if(age >= 18){
    console.log("adulto");
} else if (age > 10 && age < 18){
    console.log("adolescente");
} else{
    console.log("criança");
}