var prompt = require("prompt-sync")();

//Exercicio 1 - Par Impar
var numero = Number(prompt("Informe um número: "));

if ((numero%2)==0) {
    console.log("O Número " + numero + " é Par");
} else{
    console.log("O Número " + numero + " é Impar");
}

//Exercicio 2 - laço For

for (let i = 1; i <= 100; i++) {
    console.log(i);
    
}

//Exercio