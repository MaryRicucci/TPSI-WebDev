//Andiamo  aprendere dal DOM l'elemento tramite id
let res = document.getElementById("res");
let btn = document.getElementById("btn");
let int = document.getElementById("int");
//Modifico il valore della variabile, sovrascrivo
res.textContent= "Hello"; 

//IL bottone deve attendere un evento per poi fare qualcosa
btn.addEventListener("click", getInputANDadd);

//Non sicuro, solo in caso da presa input da fonti affidabili
//Interpreta le parti in html
res.innerHTML += "<strong> WORLD";

//Funzione
function getInputANDadd () {
    let v = (Number)(input.value);
    if (isNaN(v)){
        res.textContent= "Non hai inserito un numero";
        return ;
    }
    res.textContent= v + ":" + (v+5);
}

//Array eterogenei e dinamici
let array=[4,67,5];
array.push(2); //Mette in coda l'elemento
console.log(array.pop()); //Elimina l'ultimo elemento e lo restituisce
