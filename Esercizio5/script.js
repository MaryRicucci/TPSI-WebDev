//Crea un array di tre frutti e un bottone che, quando cliccato,
//  mostri sullo schermo quanti elementi contiene l’array (usando .length e textContent).

let array=["🍋‍🟩","🍈","🍎"];
let button=document.getElementById("bt");
let out=document.getElementById("p");

button.addEventListener("click", conta);

function conta() {
    let n=array.length ;

    out.textContent="Il numero di frutti è: "+n ;
}