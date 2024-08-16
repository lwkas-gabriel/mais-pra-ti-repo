const prompt = require('prompt-sync')();

// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

let peso = Number(prompt("insira o seu peso: "));
let altura = Number(prompt("insira a sua altura: "));

let imc = peso / (Math.pow(altura,2))

if(imc >= 40){
    console.log("Obesidade Grau III");
}else if(imc >= 35 && imc < 40){
    console.log("Obesidade Grau II");
}else if(imc >= 30 && imc < 35){
    console.log("Obesidade Grau I");
}else if(imc >= 25 && imc < 30){
    console.log("Pré-Obeso");
}else if(imc >= 18.5 && imc < 25){
    console.log("Adequado");
}else if(imc >= 17 && imc < 18.5){
    console.log("Magreza Grau I");
}else if(imc >= 16 && imc < 17){
    console.log("Magreza Grau II");
}else{
    console.log("Magreza Grau III");
}