// Usando console
console.log('Usando o console');
console.log('Olá, eu sou o console');

// Criando variáveis
let nome = 'Clark Kent';
let email = 'clark@fiap.com.br';
let idade = 37;
let logado = true;

//Exibindo no console
console.log(nome);
console.log(email);
console.log(idade, logado);

//Exibindo o tipo
console.log(typeof nome);
console.log(typeof idade);
console.log(typeof logado);
console.log(typeof(nome), nome);

//Constantes (valor fixo - não pode ser mudado durante o processo)
const DATA_NASCIMENTO = '01/12/2005';
console.log(DATA_NASCIMENTO);

//Variável
var novoNome = 'Bruce Wayne';
console.log(novoNome);

var novoNome = 'Logan';
console.log(novoNome);

//Alterando valores LET
nome = 1234;
idade = false;
console.log(typeof(nome), nome);
console.log(typeof(idade), idade);

//Convertendo valores
let valorInicial = true;

valorInicial = String(valorInicial);
console.log(typeof(valorInicial), valorInicial);

valorInicial = Boolean(valorInicial);
console.log(typeof(valorInicial), valorInicial);

let numero = '12345';
console.log(typeof(numero), numero);

numero = Number(numero);
console.log(typeof numero, numero);