/*
Crea un array di numeri e un input in cui l’utente scrive un numero. Quando si clicca
il bottone, il programma controlla se quel numero è presente nell’array e mostra
“Numero trovato!” oppure “Numero non presente.
*/
let button = document.getElementById("btn");
let number= document.getElementById("val");
let out = document.getElementById("out");

let array= [33,55,12,63,16,44,23];
button.addEventListener("click" , view);

function view () {
  let f = false ;
  let n = Number (number.value) ;
  for (let i=0;i<array.length; i++) {
    if (n==array[i]) {
      trovato=true;
      break ;
    }
    
  }
  if (f) {
    out.textContent="Numero trovato!" ;
  }
  else {
    out.textContent="Numero non presente" ;
  }
  
  
}
