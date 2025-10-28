
//<!--Crea un array di nomi e un bottone che, quando cliccato, cerchi e mostri il nome più
//lungo tra quelli presenti nell’array. -->


let array =['Charles','Lando', 'Lewis', 'Fernando', 'George'];
let button = document.getElementById("b");
let out = document.getElementById("p");

button.addEventListener("click", count);
function count () {
  let index = 0;
  let len = [] ;
  for (let i=0;i<array.length; i++){
    len.push((array[i].length));
  }
  let value = len[0];
  for (let i=1;i<len.length;i++){
    if (value<len[i]){
      value=len[i];
     index=i ;
    }
  }
  out.textContent=array[index];  
}
