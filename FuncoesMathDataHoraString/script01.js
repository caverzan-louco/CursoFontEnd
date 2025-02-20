//Funções de DATA e HORA

let agora = new Date();
console.log(agora);
console.log(agora.toLocaleString());

//definição de um objeto da classe Date()
//para a variável agora

//calculo com DATAS
let date1 = new Date("2025-01-23");
let date2 = new Date("2025-06-18");

let diferenca = date2 - date1

console.log(diferenca/(1000*60*60*24));