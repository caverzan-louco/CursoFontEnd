var prompt = require("prompt-sync")();

var idade = Number(prompt("Informe sua idade: "));
if (idade < 18) {
    console.log("Você é menor de idade");
} else if (idade >= 18 && idade < 60) {
    console.log ("Você adulto");
} else {
console.log("Você é idoso");
}
