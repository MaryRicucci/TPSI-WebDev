//Scrivi un programma che legga un numero da input e dica se è pari o dispari, 
// mostrando il risultato in un paragrafo tramite getElementById e textContent.

let number = document.getElementById("num");
let output = document.getElementById("out");
let button = document.getElementById("b");
button.addEventListener("click", check);

function check () {
    number=Number(number.value);
if ((number%2)==0) {
    output.textContent="Il numero è pari";
}
else {
    output.textContent="Il numero è dispari";
}
}

