/*
Crea un pulsante “Mostra notifica”. 
Ogni volta che l’utente clicca, 
devi generare dinamicamente una notifica 
che scompare dopo 3 secondi.
Al click crea un <div> usando createElement.
Imposta il testo “Nuova notifica #N”.
Aggiungi la notifica a un container usando .append().
Dopo 3 secondi, rimuovila (elem.remove()).
Le notifiche devono impilarsi (non sovrascriversi).
*/
let button = document.getElementById("b");

let counter = 0;
let container = document.getElementById("container");

button.addEventListener("click",()=>{
    counter++;
    let notifica = document.createElement('div');
    container.appendChild(notifica);
    notifica.textContent="Notifica #"+counter;
    setTimeout(()=>{
        notifica.remove();
    },3000);
})