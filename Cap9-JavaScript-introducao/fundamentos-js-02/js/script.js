let nome = 'Superman';
let poder = 'Voar';
let estaVoando = false;

console.log(nome);
console.log(poder);
console.log(estaVoando);


//Template
console.log(`Nome: ${nome} ele tem como poder ${poder}. Ele está voando? ${estaVoando}`);

let info = `Nome: ${nome} ele tem como poder ${poder}.
Ele está voando?
${estaVoando}`;

console.log(info);


//Alert
alert("Olá, sou um alerta");


//Prompt
let mensagem = prompt("Entre com uma mensagem");
console.log(`Mensagem digitada: ${mensagem}`);

//Confirm
confirm("Deseja finalizar o aplicativo?");

let resposta = confirm("Deseja finalizar o aplicativo?");
console.log(resposta);
