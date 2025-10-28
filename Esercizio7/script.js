/* Crea un array di numeri e un bottone che calcoli la somma di tutti gli elementi e la
mostri nel DOM con textContent. */
let array = [2,4,5,12,4,5];

let button = document.getElementById("bt");
let output = document.getElementById("out");

button.addEventListener("click", stampa) ;

function stampa () {
  let s = 0;
  for (let x=0; x<array.length; x++){
    s+=array[x];
  }
  output.textContent= "La somma è:"+s ;
}
