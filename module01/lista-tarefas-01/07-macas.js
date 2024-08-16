const prompt = require('prompt-sync')();

// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

let amountApples = Number(prompt("Quantas maçãs você deseja comprar?"));

if(amountApples < 0){
    console.log("Erro! Quantidade Inválida!");
}else if (amountApples >= 0 && amountApples < 12){
    console.log(`o total da sua compra foi R$${amountApples * 0.3}`);
}else{
    console.log(`o total da sua compra foi R$${amountApples * 0.25}`);
}