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

var vinto = (isEven(numeroScelto, numeroComputer) && scelta == "pari") || (isEven(numeroScelto, numeroComputer) == false && scelta == "dispari");
if (vinto) {
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
    if (somma % 2 == 0) {
        return true;
    }
    return false;
}