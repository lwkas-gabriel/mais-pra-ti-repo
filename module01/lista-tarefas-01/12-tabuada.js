const prompt = require('prompt-sync')();

// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
//     10) utilizando um loop for.

let numero = Number(prompt("Insira um número:"));;

for(let i = 0; i <= 10; i++){
    console.log(`${numero} x ${i} = ${numero*i}`);
}