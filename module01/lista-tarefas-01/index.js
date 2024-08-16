const prompt = require('prompt-sync')();

// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.

// let oddOrEven = Number(prompt("insira o primeiro numero: "));

// if(oddOrEven % 2 == 0){
//     console.log(`o número ${oddOrEven} é par`);
// }else{
//     console.log(`o número ${oddOrEven} é impar`);
// }

// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
//     adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
//     controle if-else.

// let age = Number(prompt("insira a idade a ser verificada: "));

// if(age >= 18){
//     console.log("adulto");
// } else if (age > 10 && age < 18){
//     console.log("adolescente");
// } else{
//     console.log("criança");
// }

// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

// let nota = Number(prompt("insira a sua nota: "));

// if(nota >= 7){
//     console.log("aprovado");
// }else if(nota > 4 && nota < 7){
//     console.log("recuperação");
// } else{
//     console.log("reprovado");
// }

// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica des cada opção selecionada.

// console.log("O que você deseja fazer?");
// console.log("1 - Teste1");
// console.log("2 - Teste2");
// console.log("3 - Teste3");

// let opc = Number(prompt("insira sua opção: "));

// switch(opc){
//     case 1:
//         console.log("teste 1");
//         break;
//     case 2:
//         console.log("teste 2");
//         break;
//     case 3:s
//         console.log("teste 3");
//         break;
//     default:
//         console.log("erro, tente novamente!");
//         break;
// }

// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.

// let peso = Number(prompt("insira o seu peso: "));
// let altura = Number(prompt("insira a sua altura: "));

// let imc = peso / (Math.pow(altura,2))

// if(imc >= 40){
//     console.log("Obesidade Grau III");
// }else if(imc >= 35 && imc < 40){
//     console.log("Obesidade Grau II");
// }else if(imc >= 30 && imc < 35){
//     console.log("Obesidade Grau I");
// }else if(imc >= 25 && imc < 30){
//     console.log("Pré-Obeso");
// }else if(imc >= 18.5 && imc < 25){
//     console.log("Adequado");
// }else if(imc >= 17 && imc < 18.5){
//     console.log("Magreza Grau I");
// }else if(imc >= 16 && imc < 17){
//     console.log("Magreza Grau II");
// }else{
//     console.log("Magreza Grau III");
// }

// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

// let primeiroLado = Number(prompt("insira o primeiro lado do seu triangulo: "));
// let segundoLado = Number(prompt("insira o segundo lado do seu triangulo: "));
// let terceiroLado = Number(prompt("insira o terceiro lado do seu triangulo: "));

// if(primeiroLado < segundoLado + terceiroLado && segundoLado < primeiroLado + terceiroLado && terceiroLado < primeiroLado + segundoLado){
//     if(primeiroLado === segundoLado && segundoLado === terceiroLado){
//         console.log("Triângulo Equilátero");
//     }else if(primeiroLado != segundoLado && segundoLado != terceiroLado && primeiroLado != terceiroLado){
//         console.log("Triângulo Escaleno");
//     }else{
//         console.log("Triângulo Isósceles");
//     }
// }else{
//     console.log("os valores informados não formam um triângulo válido");
// }

// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

// let amountApples = Number(prompt("Quantas maçãs você deseja comprar?"));

// if(amountApples < 0){
//     console.log("Erro! Quantidade Inválida!");
// }else if (amountApples >= 0 && amountApples < 12){
//     console.log(`o total da sua compra foi R$${amountApples * 0.3}`);
// }else{
//     console.log(`o total da sua compra foi R$${amountApples * 0.25}`);
// }

// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

// let numero1 = Number(prompt("Insira o primeiro valor:"));
// let numero2 = Number(prompt("Insira o segundo valor:"));

// if (numero1 < numero2) {
//     console.log("Ordem crescente: " + numero1 + ", " + numero2);
// } else {
//     console.log("Ordem crescente: " + numero2 + ", " + numero1);
// }

// 9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console
// utilizando um loop for.

// for(let i = 10; i > 0; i--){
//     console.log(i);
// }

// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.

// let inteiro = Number(prompt("Insira um número inteiro:"));

// if(Number.isInteger(inteiro)){
//     for(let i = 1 ; i <= 10; i++){
//         console.log(inteiro);
//     }
// }else{
//     console.log("Erro, o número precisa ser inteiro");
// }

// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.

// let soma = 0;

// for(let i = 1 ; i <= 5 ; i++){
//     soma += Number(prompt("Insira um número:"));
// }s

// console.log(`A soma total é: ${soma}`);

// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
//     10) utilizando um loop for.

// let numero = Number(prompt("Insira um número:"));;

// for(let i = 0; i <= 10; i++){
//     console.log(`${numero} x ${i} = ${numero*i}`);
// }

// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.

// let soma = 0;
// let contadorNumeros = 0;
// let loopCheck = 2;

// do{
//     soma += Number(prompt("Insira um número:"));
//     contadorNumeros++;

//     loopCheck = Number(prompt("Deseja continuar? (1- sim; 2- não)"));
// }while(loopCheck==1);

// console.log(`A média aritmética dos números inseridos é: ${soma/contadorNumeros}`);

// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.

// let numero = Number(prompt("Qual o fatorial a ser calculado?"));

// let fatorial = 1;

// if(numero < 0){
//     console.log("Erro! Não existe fatorial de numero negativo!");
// }else if(numero == 0 || numero == 1){
//     console.log("O fatorial de zero ou um é 1.");
// } else {
//     for(let i = numero ; i > 0; i--){
//         fatorial *= i;
//     }
//     console.log(`O fatorial de ${numero} é ${fatorial}`);
// }

// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

// let fibo1 = 1;
// let fibo2 = 1;
// let fiboNext;
// let contador = 0;

// console.log(`o 1° número de sequência de fibonacci é ${fibo1}`);
// console.log(`o 2° número de sequência de fibonacci é ${fibo2}`);

// while(contador != 8){
//     let fiboNext = fibo1 + fibo2;
//     fibo1 = fibo2;
//     fibo2 = fiboNext;
//     contador++;
//     console.log(`o ${contador+2}° número de sequência de fibonacci é ${fibo2}`);
// }