// Chiedere all'utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

var parola = prompt("Inserisci una parola");
parola = parola.toUpperCase();
var parolaLen = parola.length;
console.log(parola);

function palindromeCheck() {
    for (var i = 0; i < parolaLen; i++) {
        if (parola[i] != parola[parolaLen - 1 - i]) {
            return false;
        }
        return true;
    }
}

if (palindromeCheck()) {
    console.log("La parola:", parola, "è palindroma");
    document.getElementById("result").innerHTML = "La parola: " + parola + " è palindroma";
} else {
    console.log("La parola:", parola, "non è palindroma");
    document.getElementById("result").innerHTML = "La parola: " + parola + " non è palindroma";
}