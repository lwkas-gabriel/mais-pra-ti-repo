const prompt = require('prompt-sync')();

// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

let nota = Number(prompt("insira a sua nota: "));

if(nota >= 7){
    console.log("aprovado");
}else if(nota > 4 && nota < 7){
    console.log("recuperação");
} else{
    console.log("reprovado");
}