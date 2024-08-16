const prompt = require('prompt-sync')();

// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

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
