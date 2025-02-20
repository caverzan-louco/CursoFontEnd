//Arrays

//declarção de um Array
let dados = []; //uso de colchetes permite a declaração de Array

let numeros = [1,2,3,4,5,6,7,8,9];
let palavras = ["Bola", "Sapato", "Caixa"];

console.log(numeros.length); //quantidade de elementos do array


//indices do Array

//imprimir o 5º elemento do Array
console.log(numeros[4]); // 5

//adicionar elementos em um Array
palavras.push("Cachorro"); // no final do Array
console.log(palavras);

palavras.unshift("Prédio"); // no começo do Array
console.log(palavras);

//remover elementos
palavras.pop(); //remove o ultimo elemento
palavras.shift(); // remove o primeiro elemento
console.log(palavras);

//forEach - repetição em um vetor

palavras.forEach(palavra => {
    console.log(palavra)
});

//Splice
//remove pelo indice
palavras.splice(1,1); //remove "Sapato"
console.log(palavras);

//manipulação de Arrays
let numerosDobro = numeros.map(x => x*10);
console.log(numerosDobro);