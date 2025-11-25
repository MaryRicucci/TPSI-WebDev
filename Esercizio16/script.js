/*Realizza un campo di testo in cui l’utente deve digitare una parola entro 3 secondi dall’inizio della digitazione.
Al primo evento (quale?) parte un timer di 3 secondi.
Se l’utente completa la parola prima che scadano i 3 secondi,
 mostra un messaggio di successo.
Se i 3 secondi scadono, 
blocca l’input e mostra un messaggio di errore.
*/

let word = document.getElementById('word');
let finish = document.getElementById("fine");
let out = document.getElementById('timer');
 // metto in ascolto l'input
let started = false ;
word.addEventListener("keydown",avvia);
let timer ;

finish.addEventListener("click",greatJob);


function avvia () {
    if (!started){
        started=true;
         timer = setTimeout(stop,3000);
    }
  
}

function stop () {
    //Disabilito
    word.disabled = true ;
    out.textContent='Hai esaurito il tempo!';
}

function greatJob(){
    clearTimeout(timer);
    word.disabled=true;
    finish.disabled=true;
    out.textContent='Congratulazioni!';
}