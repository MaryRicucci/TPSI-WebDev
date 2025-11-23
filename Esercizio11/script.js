//Calcolatrice di spesa di gruppo
//Input con nome persona e importo speso. 
// Bottone per aggiungere. 
// Mostra lista delle spese. 
// Alla fine calcola: quanto ha speso ognuno,
//  quanto dovrebbe aver speso (media), 
// chi deve dare soldi a chi per pareggiare.

somma = document.getElementById("add");
fine = document.getElementById("fine");
media = document.getElementById("media");
lista = document.getElementById("lista");
pagare = document.getElementById("pagare");
nome = document.getElementById("name");
importo = document.getElementById("importo");

let persone = [];
let importi = [];
let med = 0 ;
let num = 0;
let pi = "";

somma.addEventListener("click", () =>{
    let value = Number(importo.value);
    importi.push(value);
    persone.push(nome.value);
    num++;
});

fine.addEventListener("click",()=>{
    for (let i = 0;i<num;i++){
        pi=pi+"\n"+persone[i]+":"+importi[i];
        med+=importi[i];
    }
    med=med/num ;
    lista.textContent="Lista delle spese: "+pi ;
    media.textContent="Media: "+med.toFixed(2) ;
    
})