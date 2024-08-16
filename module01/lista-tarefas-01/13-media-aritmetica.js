const prompt = require('prompt-sync')();

// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

let soma = 0;
let contadorNumeros = 0;
let loopCheck = 2;

do{
    soma += Number(prompt("Insira um número:"));
    contadorNumeros++;

    loopCheck = Number(prompt("Deseja continuar? (1- sim; 2- não)"));
}while(loopCheck==1);

console.log(`A média aritmética dos números inseridos é: ${soma/contadorNumeros}`);