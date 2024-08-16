const prompt = require('prompt-sync')();

// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

let numero = Number(prompt("Qual o fatorial a ser calculado?"));

let fatorial = 1;

if(numero < 0){
    console.log("Erro! Não existe fatorial de numero negativo!");
}else if(numero == 0 || numero == 1){
    console.log("O fatorial de zero ou um é 1.");
} else {
    for(let i = numero ; i > 0; i--){
        fatorial *= i;
    }
    console.log(`O fatorial de ${numero} é ${fatorial}`);
}