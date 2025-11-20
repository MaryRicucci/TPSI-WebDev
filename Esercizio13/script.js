/*
Tre div (rosso, giallo, verde) che rappresentano le luci.
 Bottone "Avvia ciclo". 
 Ogni click cambia la luce attiva nel giusto ordine: 
 rosso → giallo → verde → giallo → rosso. 
 Solo una luce alla volta può essere "accesa"
*/

let button = document.getElementById("start");
let div = document.getElementById("colore");
let pointer = 0;
let verso = '+';

button.addEventListener("click", change);
let sequence = ["rosso", "giallo", "verde", "giallo", "rosso"];

function change() {
    div.textContent = sequence[pointer];
    if (pointer < sequence.length) {
        pointer++;
    }
    else {
        pointer = 1;
    }
    /*if (verso='+')
      if (puntator!=2) {
        console.log(puntator);
        puntator++;
    
    }
    else {
    
       console.log(puntator);
       verso='-';
    
    }
   else {
    if (puntator==0) {
        verso='+';
    }

        else {
            puntator--;
        }
    }
        */
}




