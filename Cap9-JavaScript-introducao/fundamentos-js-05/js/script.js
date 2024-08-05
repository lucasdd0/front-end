//Todas as informações de data
let dataAtual = new Date();
console.log(dataAtual);

//Data do mês
let dataDia = dataAtual.getDate();
if(dataDia < 10){
    dataDia = "0" + dataDia;
}
console.log(`O dia do mês é ${dataDia}`);

//Dia da semana
let dataSemana = dataAtual.getDay();
switch(dataSemana){
    case 0:
        dataSemanaExtenso = "domingo";
        break;
    case 1:
        dataSemanaExtenso = "segunda-feira";
        break;
    case 2:
        dataSemanaExtenso = "terça-feira";
        break;
    case 3:
        dataSemanaExtenso = "quarta-feira";
        break;
    case 4:
        dataSemanaExtenso = "quinta-feira";
        break;
    case 5:
        dataSemanaExtenso = "sexta-feira";
        break;
    default:
        dataSemanaExtenso = "sábado";
}
console.log(`A semana do mês é ${dataSemanaExtenso}`);


// Mês do ano
let dataMes = dataAtual.getMonth() + 1;
let dataMesZero = (dataMes < 10) ? "0" + dataMes : dataMes;     //Operador ternário
console.log(`O mês do ano é ${dataMesZero}`);

//Ano
let dataAno = dataAtual.getFullYear();
console.log(`O ano que estamos é ${dataAno}`);

//Hora do dia
let dataHora = dataAtual.getHours();
let dataHoraZero = (dataHora < 10) ? "0" + dataHora : dataHora;
console.log(`A hora do dia é ${dataHoraZero}`);


//Minutos do dia
let dataMinuto = dataAtual.getMinutes();
let dataMinutoZero = (dataMinuto < 10) ? "0" + dataMinuto : dataMinuto;
console.log(`Os minutos do dia são ${dataMinutoZero}`);

//Segundos do dia
let dataSegundo = dataAtual.getSeconds();
let dataSegundoZero = (dataSegundo < 10) ? "0" + dataSegundo : dataSegundo;
console.log(`Os Segundos do dia são ${dataSegundoZero}`);


//Todas as informações de data
console.log(`
    ${dataSemanaExtenso}, ${dataDia}/${dataMesZero}/${dataAno}
    hora Local: ${dataHoraZero}:${dataMinutoZero}:${dataSegundoZero}`);






