/*
Crea un semaforo con tre div (rosso, giallo, verde). 
Il colore attivo deve cambiare automaticamente ogni 2 secondi.
Cosa posso usare per ciclare tra i colori
Un pulsante deve poter fermare e 
riattivare il ciclo senza resettarlo

*/
const color = document.getElementById("c");

let p = 0 ;
let colors = ["rosso","giallo","verde"];
let button= document.getElementById("b");
let running = false ;
let timer ;
button.addEventListener("click",play);

function play () {
    if (!running){
        running = true;
        button.textContent="Pausa";
       timer= setInterval(()=>{
color.textContent=colors[p];
if(p<2){
p++;}
else {
    
    p=0;
}
},2000);
    }
    else {
        running = false ;
        button.textContent="Play";
        clearInterval(timer);
    }

}