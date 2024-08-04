//Operadores Aritméticos
console.log(`
Operadores Aritméticos ---------------------

`
);

let aritmetico1 = 50;
let aritmetico2 = 10;
let resultadoAritmetico;

console.log(`Primeiro número = ${aritmetico1}`);
console.log(`Segundo número = ${aritmetico2}`);

//Adição
resultadoAritmetico = aritmetico1 + aritmetico2;
console.log(`${aritmetico1} + ${aritmetico2} = ${resultadoAritmetico}`);

//Subtração
resultadoAritmetico = aritmetico1 - aritmetico2;
console.log(`${aritmetico1} - ${aritmetico2} = ${resultadoAritmetico}`);

//Divisão
resultadoAritmetico = aritmetico1 / aritmetico2;
console.log(`${aritmetico1} / ${aritmetico2} = ${resultadoAritmetico}`);

//Multiplicação
resultadoAritmetico = aritmetico1 * aritmetico2;
console.log(`${aritmetico1} * ${aritmetico2} = ${resultadoAritmetico}`);

//Módulo
resultadoAritmetico = aritmetico1 % aritmetico2;
console.log(`${aritmetico1} % ${aritmetico2} = ${resultadoAritmetico}`);

//Potência
resultadoAritmetico = aritmetico1 ** aritmetico2;
console.log(`${aritmetico1} ** ${aritmetico2} = ${resultadoAritmetico}`);


//Operadores Relacionais
console.log(`
Operadores Relacionais ---------------------

`);

let relacional1 = 20;
let relacional2 = 10;
let resultadoRelacional;

console.log(`Primeiro número = ${relacional1}`);
console.log(`Segundo número = ${relacional2}`);

//Igualdade simples
resultadoRelacional = relacional1 == relacional2;
console.log(`${relacional1} == ${relacional2} = ${resultadoRelacional}`);

//Desigualdade simples
resultadoRelacional = relacional1 != relacional2;
console.log(`${relacional1} != ${relacional2} = ${resultadoRelacional}`);

//Igualdade estrita (compara o valor e o tipo)
resultadoRelacional = relacional1 === relacional2;
console.log(`${relacional1} === ${relacional2} = ${resultadoRelacional}`);

//Desigualdade estrita (compara o valor e tipo)
resultadoRelacional = relacional1 !== relacional2;
console.log(`${relacional1} !== ${relacional2} = ${resultadoRelacional}`);

//Maior
resultadoRelacional = relacional1 > relacional2;
console.log(`${relacional1} > ${relacional2} = ${resultadoRelacional}`);
resultadoRelacional = relacional1 >= relacional2;
console.log(`${relacional1} >= ${relacional2} = ${resultadoRelacional}`);

//Menor
resultadoRelacional = relacional1 < relacional2;
console.log(`${relacional1} < ${relacional2} = ${resultadoRelacional}`);
resultadoRelacional = relacional1 <= relacional2;
console.log(`${relacional1} <= ${relacional2} = ${resultadoRelacional}`);


//Operadores Lógicos
console.log(`
Operadores Lógicos -------------------------

`
);

let logico1 = 50;
let logico2 = 80;
let resultadoLogico;

console.log(`Primeiro número = ${logico1}`);
console.log(`Segundo número = ${logico2}`);

//E = &&
resultadoLogico = (logico1 < logico2) && (logico1 == logico2);
console.log(`&& = ${resultadoLogico}`);

//OU = ||
resultadoLogico = (logico1 < logico2) || (logico1 == logico2);
console.log(`|| = ${resultadoLogico}`);

//Negação = !
resultadoLogico = !(logico1 < logico2) && (logico1 == logico2);
console.log(`! = ${resultadoLogico}`);


//Operadores de Incremento e Decremento
console.log(`
Operadores de Incremento e Decremento ------

`
);

let cremento1 = 50;
let cremento2 = 80;
let resultadoCremento;

console.log(`Primeiro número = ${cremento1}`);
console.log(`Segundo número = ${cremento2}`);

//Incremento
cremento1++;
console.log(`++ = ${cremento1}`);

//Decremento
cremento2--;
console.log(`-- = ${cremento2}`);

//Pré-fixada
console.log("Pré-fixada");

let crementoPre1 = 20;
let crementoPre2 = 30;
let resultadoCrementoPre;
console.log(crementoPre1, crementoPre2);
resultadoCrementoPre = crementoPre1++ + crementoPre2++;     // APÓS o calculo incrementa 1
console.log(resultadoCrementoPre);
console.log(crementoPre1, crementoPre2);

//Pré-fixada
console.log("Pos-fixada");

let crementoPos1 = 20;
let crementoPos2 = 30;
let resultadoCrementoPos;
console.log(crementoPos1, crementoPos2);
resultadoCrementoPos = ++crementoPos1 + ++crementoPos2;     // ANTES do calculo incrementa 1
console.log(resultadoCrementoPos);
console.log(crementoPos1, crementoPos2);


//Operadores de Atribuição
console.log(`
Operadores de Atribuição -------------------

`
);

let atribuicao1 = 100;
console.log(`Resultado = ${atribuicao1}`);
atribuicao1 += 10;
console.log(`Resultado += ${atribuicao1}`);
atribuicao1 -= 10;
console.log(`Resultado -= ${atribuicao1}`);
atribuicao1 *= 10;
console.log(`Resultado *= ${atribuicao1}`);
atribuicao1 /= 10;
console.log(`Resultado /= ${atribuicao1}`);
atribuicao1 **= 10;
console.log(`Resultado **= ${atribuicao1}`);
atribuicao1 %= 10;
console.log(`Resultado %= ${atribuicao1}`);


//Objeto Math
console.log(`
Objeto Math --------------------------------

`
);

let objeto1 = 23.13;
console.log(`Math ceil (${objeto1}) = ${Math.ceil(objeto1)}`);      //Arredonda para cima (ceil = teto)

console.log(`Math floor (${objeto1}) = ${Math.floor(objeto1)}`);    //Arredonda para baixo (floor = chão)

console.log(`Math round (${objeto1}) = ${Math.round(objeto1)}`);    //Arredonda

console.log(`Math max (34, 23, 67, 89, 11, 100, 23) = ${Math.max(34, 23, 67, 89, 11, 100, 23)}`);

console.log(`Math min (34, 23, 67, 89, 11, 100, 23) = ${Math.min(34, 23, 67, 89, 11, 100, 23)}`);

console.log(`parseInt (34.23) = ${parseInt(34.23)}`);   //Parte inteira

console.log(`Math.pow (3^2) = ${Math.pow(3, 2)}`);      //Potência

console.log(`Math.random () = ${Math.random()}`);       //Aleatório

console.log(`Math.sqrt (121) = ${Math.sqrt(121)}`);     //Square root

console.log(`Math.cbrt (216) = ${Math.cbrt(216)}`);     //Cube root


//Objeto Math
console.log(`
Sortreando um número -----------------------

`
);

let sorteado = Math.random();
sorteado = parseInt (sorteado *=100);
console.log(`Seu número sorteado é: ${sorteado}`);