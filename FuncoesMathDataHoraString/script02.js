//Funções de String(Texto)

var texto = "Aula de JavaScript";
console.log(texto.length); // contar o nº de caracteres

console.log(texto.toUpperCase()); //tudo MAIÙSCULO

console.log(texto.toLowerCase()); //tudo minusculo

//manipulção  de texto
console.log(texto.substring(0,4)); //Aula
console.log(texto.slice(-10)); //JavaScript
console.log(texto.replace("JavaScript", "TypeScript"));

//Split (usa um caracter comum para separar em um vetor)

let linguagens = "JavaScript,C++,Pyton,Java,PHP"
let arrayLinguagens = linguagens.split(",");
console.log(arrayLinguagens);

//Trim (tesoura)
let tesoura = "   JavaScript   ";
console.log(tesoura);
console.log(tesoura.trim());


