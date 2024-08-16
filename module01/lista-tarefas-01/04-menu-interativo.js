const prompt = require('prompt-sync')();

// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica des cada opção selecionada.

console.log("O que você deseja fazer?");
console.log("1 - Teste1");
console.log("2 - Teste2");
console.log("3 - Teste3");

let opc = Number(prompt("insira sua opção: "));

switch(opc){
    case 1:
        console.log("teste 1");
        break;
    case 2:
        console.log("teste 2");
        break;
    case 3:s
        console.log("teste 3");
        break;
    default:
        console.log("erro, tente novamente!");
        break;
}