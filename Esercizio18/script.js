/*Crea un pulsante “Start” 
che avvia una finestra temporale di 5 secondi
 in cui verranno contate tutte le pressioni dei tasti.
Quale evento posso usare per incrementare
 un contatore solo durante i 5 secondi? 
 A quale oggetto lo ‘attacco’?
Alla fine mostra “Hai premuto X tasti”.
*/
startButton = document.getElementById("start");
printCount = document.getElementById("c");
countButton = document.getElementById("cButton");

startButton.addEventListener("click", avvia) ;
countButton.disabled=true;
let timer ;
let counter = 0;

function avvia () {
    startButton.disabled=true;
    countButton.disabled=false;
    console.log("Iniziato");
    countButton.addEventListener("mousedown",count)
    timer = setTimeout(()=>{
        countButton.disabled=true;
        printCount.textContent="Hai premuto "+counter+ " tasti";
    }, 5000);
  
}

function count () {
    counter++;
    console.log(counter);
}