var seconds;
var hours;
var minutes;
var diaDaSemana;
var dia;
var mes;
var ano;
const dataAtual = document.querySelector(".data");
const dataCompleta = document.querySelector(".data-completa");

setInterval(() => {
    var data = new Date();
    if(data.getHours() < 10){
        hours = "0" + data.getHours();
    }
    else {
        hours = data.getHours();
    }

    if(data.getMinutes() < 10){
        minutes = "0" + data.getMinutes();
    }
    else {
        minutes = data.getMinutes();
    }

    if(data.getSeconds() < 10){
        seconds = "0" + data.getSeconds();
    }
    else {
        seconds = data.getSeconds();
    }

    diaDaSemana = data.toLocaleDateString('pt-BR', {weekday: 'long'});
    var diaDaSemanaFormatado = diaDaSemana.charAt(0).toUpperCase() + diaDaSemana.slice(1);
    dia = data.getDay();
    mes = data.toLocaleDateString('pt-BR', {month: 'long'});
    ano = data.getFullYear();

    dataAtual.textContent = `${hours}:${minutes}:${seconds}`;
    dataCompleta.textContent = `${diaDaSemanaFormatado}, ${dia} de ${mes} de ${ano}.`;
}, 1000);