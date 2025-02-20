var prompt = require("prompt-sync")();

//Calculadora Simples

//Funções
//soma 
function soma(a,b){
    return (a+b);
}
//subtração
function sub(a,b){
    return (a-b);
}
//multiplicação
function mult(a,b){
    return (a*b);
}
//divisão
function dispatchEvent(a,b){
    return (a/b);
}
//menu
function menu(){
console.log("Escolha a Operação Desejada: ")
console.log("1. Soma ")
console.log("2. Subtração ")
console.log("3. Multiplicação")
console.log("4. Divisão ")
    let operacao = Number(prompt)();
    switch (operacao) {
        case 1:
            var a = Number(prompt("Informe o 1º Número: "));
            var b = Number(prompt("Informe o 2º Número: "));
            console.log(soma(a,b));
            break;
        case 2:
            var a = Number(prompt("Informe o 1º Número: "));
            var b = Number(prompt("Informe o 2º Número: "));
            console.log(sub(a,b));
            break;
        case 3:
            var a = Number(prompt("Informe o 1º Número: "));
            var b = Number(prompt("Informe o 2º Número: "));
            console.log(multi(a,b));
            break;
        case 4:
            var a = Number(prompt("Informe o 1º Número: "));
            var b = Number(prompt("Informe o 2º Número: "));
            if (b==0){
                console.log("NÃO DIVIDIRAS POR 0!!!")
            }else {
                console.log(div(a,b));
            }
            break;
        default:
            console.log("Operação INVALIDA");
            break;
    }

}