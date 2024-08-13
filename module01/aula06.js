// const idade = 0;

// if(idade >= 18 && idade <= 32){
//     console.log("vc pode se inscrever no concurso!");
// }else{
//     console.log("que pena... vc nao pode.");
// }


//Exercicio 1
// let numero = 13;

// if(numero % 2 === 0){
//     console.log("par");
// }else{
//     console.log("impar");
// }

// //Exercicio 2

// let numero1= 11;
// let numero2 = 0;
// let numero3 = 11;

// if(numero1 > numero2 && numero1 > numero3){
//     console.log(`o numero ${numero1} eh maior que ${numero2} e ${numero3}`);
// } else if(numero2 > numero1 && numero2 > numero3){
//     console.log(`o numero ${numero2} eh maior que ${numero3} e ${numero1}`);
// } else if(numero3 > numero1 && numero3 > numero2){
//     console.log(`o numero ${numero3} eh maior que ${numero1} e ${numero2}`);
// } else if(numero1 === numero3 && numero2 === numero3){
//     console.log("todos os numeros são iguais");
// } else if(numero1 === numero2 && numero2 > numero3){
//     console.log(`o numero ${numero1} é igual ao ${numero2}, e ambos são maiores que o numero ${numero3}`);
// } else if(numero1 === numero3 && numero1 > numero2){
//     console.log(`o numero ${numero1} é igual ao ${numero3}, e ambos são maiores que o numero ${numero2}`);
// } else if(numero2 === numero3 && numero2 > numero1){
//     console.log(`o numero ${numero2} é igual ao ${numero3}, e ambos são maiores que o numero ${numero1}`);
// } else{
//     console.log("deu algo de errado ai, campeão.. inseriu todos os dados corretamente??");
// }

// //Exercicio 3

// let numero4 = 11;
// let numero5 = 11;
// let op = "+";

// if(op === "+"){
//     console.log(numero4+numero5);
// }
// else if(op === "-"){
//     console.log(numero4-numero5);
// }
// else if(op === "*"){
//     console.log(numero4*numero5);
// }
// else if(op === "/"){
//     console.log(numero4/numero5);
// }else{
//     console.log("operacao invalida");
// }

const prompt = require('prompt-sync')();

let num1 = Number(prompt("insira o primeiro numero: "));
let num2 = Number(prompt("insira o segundo numero: "));
let op = prompt("insira a operaçao desejada(+,-,/,*): ");

switch (op){
    case '+':
        console.log(num1+num2);
        break;
    case '-':
        console.log(num1-num2);
        break;
    case '*':
        console.log(num1*num2);
        break;
    case '/':
        if(num2!=0){
            console.log(num1/num2);
            break;
        }else{
            console.log("erro, divisao por zero");
            break;
        }
    default:
        console.log("operacao invalida");
        break;
}


// if(op === "+"){
//     console.log(num1+num2);
// }
// else if(op === "-"){
//     console.log(num1-num2);
// }
// else if(op === "*"){
//     console.log(num1*num2);
// }
// else if(op === "/"){
//     if(num2!=0){
//         console.log(num1/num2);
//     }else{
//         console.log("erro, divisao por zero");
//     }
    
// }else{
//     console.log("operacao invalida");
// }