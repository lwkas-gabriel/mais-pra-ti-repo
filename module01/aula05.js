function calculadora(numero1, numero2, op=""){
    switch(op){
        case "+":
            return numero1 + numero2;
        case "-":
            return numero1 - numero2;
        case "/":
            return numero1 / numero2;
        case "*":
            return numero1 * numero2;
        default:
            return "falha, você não passou a operação";
                
    }
}

//console.log(calculadora(10,2));

let aluno = {
    nome: "Lucas",
    idade: 22,
    altura: 1.70,
    peso: 72.2
};

let matriz = [
    [1,1,1,],
    [2,2,2,],
    [3,3,3]
];

//console.table(matriz);