//Crea due caselle di input per inserire due numeri e un bottone che, quando premuto, calcoli e mostri la loro somma sullo schermo usando getElementById e textContent.
let button = document.getElementById("bt");
let a = document.getElementById("a");
let b = document.getElementById("b");
let c ;
let out=document.getElementById("msg");
button.addEventListener("click",calculate);

function calculate() {
    console.log(typeof(a));
    c = (Number(a.value)+Number(b.value)) ;
    console.log(typeof(c));
    if(isNaN(c)){
        out.textContent="Somma non calcolabile";
        return;
    }
    else {
      
    out.textContent= "Il risultato è: "+c;
    }
}
