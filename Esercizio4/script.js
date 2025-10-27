//Realizza un piccolo programma che legga un voto da input (0-10) 
// //e mostri “Promosso!” se il voto è maggiore o uguale a 6, altrimenti “Bocciato 😢”.
let voto=document.getElementById("vo");
let bottone=document.getElementById("bu");
let output=document.getElementById("ou");

bottone.addEventListener("click",check);

function check () {
    let v=Number(voto.value);
    if (v<6){
        output.textContent="Bocciato 😓";
    }
    else {
        output.textContent="Promosso!😎";
    }
}