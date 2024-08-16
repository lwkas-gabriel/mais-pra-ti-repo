const prompt = require('prompt-sync')();

// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

let soma = 0;

for(let i = 1 ; i <= 5 ; i++){
    soma += Number(prompt("Insira um número:"));
}

console.log(`A soma total é: ${soma}`);