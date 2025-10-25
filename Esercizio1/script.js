//Scrivi un programma che quando premi un bottone mostri un messaggio di saluto (es. “Ciao Studente!”) cambiando il testo di un elemento con getElementById e textContent.
let button = document.getElementById("bt");
let message = document.getElementById("msg");

function hello (){
   message.textContent="Ciao studente";
    
}

button.addEventListener("click",hello);