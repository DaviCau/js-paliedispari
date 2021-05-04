//L'utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione). Dichiariamo chi ha vinto.

var scelta = prompt("Scegli pari o dispari")
scelta = scelta.toLowerCase();
while (scelta != "pari") {
    if (scelta == "dispari") {
        break;
    }
    scelta = prompt("Scegli pari o dispari")
    scelta = scelta.toLowerCase();
}
console.log(scelta);

var numeroScelto = parseInt(prompt("Inserisci un numero sa 1 a 5"));
while (numeroScelto < 1 || numeroScelto > 5 || isNaN(numeroScelto)) {
    numeroScelto = parseInt(prompt("Rinserisci un numero sa 1 a 5"));
}
console.log(numeroScelto);

var numeroComputer = randomNumber(1, 5);
console.log(numeroComputer);

var tipoSomma = "";
if (isEven(numeroScelto, numeroComputer)) {
    tipoSomma = "pari";
} else {
    tipoSomma = "dispari";
}

if (tipoSomma == scelta) {
    console.log("hai vinto");
} else {
    console.log("hai perso");
}


function randomNumber(min, max) {
    var numero = Math.floor(Math.random() * (max - min + 1)) + min;
    return numero;
}

function isEven(num1, num2) {
    var somma = num1 + num2;
    console.log("somma", somma);
    if (somma % 2 == 0) {
        console.log("la somma è pari");
        return true;
    }
    console.log("la somma è dispari");
    return false;
}