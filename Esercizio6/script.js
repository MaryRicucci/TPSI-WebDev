//Scrivi un programma con un array di frutti e un input in cui inserire una posizione
//(indice). Quando clicchi un bottone, mostra il frutto in quella posizione. Se l’indice
//non è valido, mostra un messaggio di errore.

let button = document.getElementById("bt");
let output = document.getElementById("out");
let n = document.getElementById("pos");

let array= ["🫐","🍎","🥝","🍍","🍋"];

button.addEventListener("click", show) ;

function show() {
  let pos = Number (n.value) ;
  if ((pos>=0)&&(pos<array.length)){
    output.textContent = array[pos] ;
  }
  else {
    output.textContent = "Input non valido";
  }
  
}
