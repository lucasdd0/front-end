//Objeto String
console.log(`
Objeto String ---------------------------------

`
);

let frase = "   JavaScript é uma lingaugem de programação maravilhosa";
console.log(frase);

//Tamanho da string
console.log(`A string tem ${frase.length} caracteres`);

//Percorrendo a string
console.log(frase[0]);
console.log(frase[1]);
console.log(frase[2]);
console.log(frase[3]);

//Letras maiúsculas
console.log(frase.toUpperCase());

//Letras minúsculas
console.log(frase.toLowerCase());

//Percorrendo com método
console.log(frase.charAt(0));           //caracter no
console.log(frase.charAt(1));
console.log(frase.charAt(2));
console.log(frase.charAt(3));

//Buscando algo na string - pelo início
console.log(frase.indexOf("a"));        //índice de
console.log(frase.indexOf("u"));

//Buscando algo na string - pelo final
console.log(frase.lastIndexOf("a"));
console.log(frase.lastIndexOf("u"));
console.log(frase.lastIndexOf("z"));    //não existe

//Verificando se existe
console.log(frase.includes('programação'));

//Juntando Strings
console.log(frase.concat(" ADICIONANDO ESSA FRASE").concat(frase));

//Substituindo caracteres
console.log(frase.replace("a", "@"));       //Substituir
console.log(frase.replaceAll("a", "@"));    //Substituir todos

//Parte da string
console.log(frase.substring(4, 41));
console.log(frase.slice(4, 41));        //Fatiar

//Separando a string - Array
console.log(frase.split(""));           //Dividir
console.log(frase.split(" "));
console.log(frase.split("a"));

//Retirando espaços
console.log(frase.trim());              //Aparar

//Verificando se a string começa com uma cadeia de caracteres
console.log(frase.startsWith("Java"));
console.log(frase.startsWith("   "));

//Verificando se a strign começa com uma cadeia de caracteres
console.log(frase.endsWith("virroso"));
console.log(frase.endsWith("vilhosa"));






