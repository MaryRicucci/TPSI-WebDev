let plus = document.getElementById("increase");
let minus = document.getElementById("decrease");
let max = 10 ;
let contatore = document.getElementById("out");
let c = 0 ;
plus.addEventListener("click", add) ;
minus.addEventListener("click", reduce);

function add () {
    minus.style.display = "inline";
    if (c < max) {
        c++;
        contatore.textContent = c;
    } else {
        contatore.textContent = "LIMITE RAGGIUNTO ⛔";
        plus.style.display = "none";
    }
}

function reduce () {
    if (c == 0) {
        contatore.textContent = "LIMITE RAGGIUNTO ⛔";
        minus.style.display = "none";
    } else {
        c--;
        contatore.textContent = c;
        plus.style.display = "inline";
    }
}
