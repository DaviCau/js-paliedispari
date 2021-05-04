// Chiedere all'utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

var parola = prompt("Inserisci una parola");
console.log("La parola è:", parola);

if (giraParola(parola).toLowerCase() == parola.toLowerCase()) {
    console.log("La parola:", parola, "è palindroma");
    document.getElementById("result").innerHTML = "La parola: " + parola + " è palindroma";
} else {
    console.log("La parola:", parola, "non è palindroma");
    document.getElementById("result").innerHTML = "La parola: " + parola + " non è palindroma";
}


function giraParola(stringa) {

    var stringaAlContrario = "";
    for (var i = stringa.length - 1; i >= 0; i--) {
        stringaAlContrario += stringa[i];
        }
    console.log("La parola al contrario è:", stringaAlContrario);
    return stringaAlContrario;
}

/*
var parola = prompt("Inserisci una parola");
parola = parola.toUpperCase();
var parolaLen = parola.length;
console.log(parola);

if (palindromeCheck()) {
    console.log("La parola:", parola, "è palindroma");
    document.getElementById("result").innerHTML = "La parola: " + parola + " è palindroma";
} else {
    console.log("La parola:", parola, "non è palindroma");
    document.getElementById("result").innerHTML = "La parola: " + parola + " non è palindroma";
}


function palindromeCheck() {
    for (var i = 0; i < parolaLen; i++) {
        console.log(parola[i], parola[parolaLen - 1 - i]);
        if (parola[i] != parola[parolaLen - 1 - i]) {
            return false;
        }
    }
    return true;
}
*/