console.log(`
    Estruturas de decisão
    `);


console.log(`
if / else
    `);
const precoProduto = 200.00;
const frete = 30.00;
let valorFinal = 0;

if(precoProduto <= 150){
    valorFinal = precoProduto + frete;
}
else{
    valorFinal = precoProduto;
}

console.log(`Valor a pagar é: ${valorFinal}`);

let metodoPagamento =  "Boleto";

if(metodoPagamento.toLowerCase() === "cartão de crédito"){
    console.log("Você pode parcelar em até 12 vezes");
}
else if(metodoPagamento.toLowerCase() === "boleto"){
    console.log("Você tem decosconto de 5% no valor da compra");
}
else if(metodoPagamento.toLowerCase() === "pix"){
    console.log("Você tem decosconto de 10% no valor da compra");
}
else{
    console.log("Você pagou com dinehiro, teve um desconto de 11%");
}

let estoque = 5;
let statusEstoque = (estoque > 0) ? "Produto disponível" : "Produto indiponível";       //Operador ternário

console.log(`Total estoque = ${estoque}`);
console.log(`Status produto = ${statusEstoque}`);


console.log(`
Switch / case
    `);

const regiao = "Sudeste";
let valorFrete = 0;

switch(regiao){
    case "Sudeste" :
        valorFrete = 35.00;
        break;
    case "Norte" :
        valorFrete = 40.00;
        break;
    case "Sul" :
        valorFrete = 40.00;
        break;
    deafult :
    valorFrete = 50.00;
}









