// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
// utilizando uma estrutura de controle if.

// const prompt = require('prompt-sync')();

// let oddOrEven = Number(prompt("insira o primeiro numero: "));

// if(oddOrEven % 2 == 0){
//     console.log(`o número ${oddOrEven} é par`);
// }else{
//     console.log(`o número ${oddOrEven} é impar`);
// }

// 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
//     adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
//     controle if-else.

// const prompt = require('prompt-sync')();
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

// const prompt = require('prompt-sync')();
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

// const prompt = require('prompt-sync')();
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

// const prompt = require('prompt-sync')();
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

const prompt = require('prompt-sync')();
let primeiroLado = Number(prompt("insira o primeiro lado do seu triangulo: "));
let segundoLado = Number(prompt("insira o segundo lado do seu triangulo: "));
let terceiroLado = Number(prompt("insira o terceiro lado do seu triangulo: "));

if(primeiroLado < segundoLado + terceiroLado && segundoLado < primeiroLado + terceiroLado && terceiroLado < primeiroLado + segundoLado){
    if(primeiroLado === segundoLado && segundoLado === terceiroLado){
        console.log("Triângulo Equilátero");
    }else if(primeiroLado != segundoLado && segundoLado != terceiroLado && primeiroLado != terceiroLado){
        console.log("Triângulo Escaleno");
    }else{
        console.log("Triângulo Isósceles");
    }
}else{
    console.log("os valores informados não formam um triângulo válido");
}