//funzione anonima/lambda function//arrow functio
// () => {}
/*btn.addEventListener("click", () => {
    let x = 0 ;
    x++
    //..con ttutto il codice
})    
//Sistemare i decimali
//value.toFixed(2) //Numeri dopo la virgola
*/
let button=document.getElementById("btn");
let voto = document.getElementById ("in");
let feedback = document.getElementById("p");
let bmedia = document.getElementById("med");
let out = document.getElementById ("o");
let voti = [];

button.addEventListener("click",()=>{
    //Il tipo delle variabili che arrivano a JS sono è sempre String, 
    //La conversione qui è obbligatoria
  let v=Number(voto.value);
  if((!isNaN(v))||((v>0)&&(v<11))){
  voti.push(voto);
  feedback.textContent=v+" aggiunto nell'array";
  }
  else {
    feedback.textContent= "input non valido";
  }
  voto.value="";
})

button.addEventListener("click", () => {
    let sum = 0 ;
    let media = 0;
    if (voti==null){
        out.textContent("L'array è vuoto") ;
    }
    else {
        for (let i = 0 ; i<voti.length;i++){
            sum+=voti[i];
        }
        media=sum/voti.length;
        media.toFixed(2);
        out.textContent = "Media: "+media;
    }
})