const prompt = require('prompt-sync')();

// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

let numero1 = Number(prompt("Insira o primeiro valor:"));
let numero2 = Number(prompt("Insira o segundo valor:"));

if (numero1 < numero2) {
    console.log("Ordem crescente: " + numero1 + ", " + numero2);
} else {
    console.log("Ordem crescente: " + numero2 + ", " + numero1);
}