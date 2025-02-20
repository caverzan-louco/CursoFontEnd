//Estrutura de Dados

//Condicionais (If Else; Switch Case)

//If Else
var precoProduto = 150;

if (precoProduto>=100) { 
    console.log("Valor a Pagar:" +(precoProduto*0.9));
} else {
    console.log("Valor a Pagar:" +(precoProduto));
}

//Switch Case
var mes = 2;

switch (mes) {
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março") ;
        break; 
}

//Estrutura de Repetição (For; While)

//for(ponto de Início; ponto de Parada; incremento)
for (let i = 0; i < 10; i++) {
    console.log("Ìndice: "+i);
}

//while (condição de parada == false (ele para))
var continuar = true;
var numeroEscolhido = 3;
var tentativas = 0;
while (continuar) {
    let numeroSorteado = Math.round(Math.random()*10);
    if (numeroEscolhido==numeroSorteado) {
        continuar = false
    }
    tentativas++;
    console.log("Número de tentativas: "+tentativas);
    
}

//Funções (métodos)

function saudacao(nome) {
    return "Olá, "+ nome + "!!!";
}

console.log(saudação("Caverzan"));