const prompt = require('prompt-sync')();

// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for.

let fibo1 = 1;
let fibo2 = 1;
let fiboNext;
let contador = 0;

console.log(`o 1° número de sequência de fibonacci é ${fibo1}`);
console.log(`o 2° número de sequência de fibonacci é ${fibo2}`);

while(contador != 8){
    fiboNext = fibo1 + fibo2;
    fibo1 = fibo2;
    fibo2 = fiboNext;
    contador++;
    console.log(`o ${contador+2}° número de sequência de fibonacci é ${fibo2}`);
}