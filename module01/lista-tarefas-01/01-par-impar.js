const prompt = require('prompt-sync')();

// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.

let oddOrEven = Number(prompt("insira o primeiro numero: "));

if(oddOrEven % 2 == 0){
    console.log(`o número ${oddOrEven} é par`);
}else{
    console.log(`o número ${oddOrEven} é impar`);
}