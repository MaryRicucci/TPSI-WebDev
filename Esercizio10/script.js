/*
<!--Crea un array di voti e un bottone che calcoli la media dei voti. Mostra la media con
due decimali e scrivi “Promosso” se la media è maggiore o uguale a 6,
“Bocciato” altrimenti.-->
*/
let button = document.getElementById("b");
let out = document.getElmentById("p");
let array = [4,6.5,5,8.25];

button.addEventListener("click", media) ;

function media () {
let sum =0 ;
let m = 0;
for (int i =0;i<array.length;i++){
  sum+=array[i];
}
 m = sum/(array.length) ;
 let d = m.toFixed(2);
  if (d>=6){
    out.textContent="Promosso";
}
  else {
    out.textContent="Bocciato";
  }
  
  
