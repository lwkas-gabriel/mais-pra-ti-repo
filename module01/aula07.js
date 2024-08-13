const prompt = require('prompt-sync')();

//1

// let cont = 1;
// let some = 0;

// while(cont <= 100){
//     some += cont
//     console.log(some);
//     cont++;
// }

//2

// let media = 0;
// let contadorNumeros = 0;
// let controle = 1;

// while(controle != 0){
//     controle = Number(prompt("insira um nova numero para calcular a média: "));
//     media += controle
//     if(controle != 0){
//         contadorNumeros++;
//     }else{
//         break;
//     }
// }

//extra - exercicio do do-while

// let numero = 0

// do{
//     numero = Number(prompt("insira um nova numero positivo: "));
//     console.log(numero);
// }
// while(numero > 0);
   

// console.log(`a sua média eh ${media/contadorNumeros}`);

//3

let contador = 1;

while(contador <= 50){
    let contadorPrimo = 0;
    if(contador === 1){
        console.log("1 não é primo");
    } else if(contador == 2){
        console.log("2 é primo");
    } else {
        for(let i = 1 ; i <= contador; i++){
            if(contador%i == 0){
                contadorPrimo++;
                if(contadorPrimo > 2){
                    break;
                }
            }
        }
    }
    if(contadorPrimo==2){
        console.log(`${contador} eh primo`);
    }
    contador++;
}
