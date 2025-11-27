/*
Crea un form con un campo di testo e un pulsante submit.
Il pulsante deve essere disabilitato (elem. disabled = true) 
finché l’utente non scrive almeno 20 caratteri.
Usa un evento keyup per controllare la lunghezza del testo.
Al submit mostra “Form inviato!” senza ricaricare la pagina.

*/
form = document.getElementById("form");
text = form.elements['in'];
button = form.elements['invio'];
out = document.getElementById("o");
button.disabled=true;


form.addEventListener("submit",(event)=>{
    event.preventDefault();
     out.textContent="Form inviato";
})

text.addEventListener("keyup",()=>{
    let length = text.value.length;
    out.textContent="Hai scritto "+length+" caratteri";
    
    if (length>=20){
        button.disabled=false ;
        input.disabled=true;
        button.disable=true;
    }
})

