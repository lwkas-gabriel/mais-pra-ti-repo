const prompt = require('prompt-sync')();

// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

let inteiro = Number(prompt("Insira um número inteiro:"));

if(Number.isInteger(inteiro)){
    for(let i = 1 ; i <= 10; i++){
        console.log(inteiro);
    }
}else{
    console.log("Erro, o número precisa ser inteiro");
}