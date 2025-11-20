let btnContainer = document.getElementById("btnContainer");
let max = 30;
let generator = null;
let index = 1 ;
let totalSum = 0 ;


function genBtn () {
    if (index>max) { //Stoppa l'intervallo 
        clearInterval(generator); //Pulire l'intervallo, che rimane in memoria
        return ;
    }
    let newBtn = document.createElement("button");//Crea un elemento
    newbtn.textContent=index;
    index++;
    brnContainer.append (newBtn); //Aggiunge in coda il nuovo elemento creato  nel contenitore
    newBtn.addEventListener("click", () => {
        //Aggiungi a somma e rimuovi
        totalSum+= Number(newBtn.textContent);
        newBtn.remove (); //rimuovo l'elemento
        console.log(totalSum);
    })
};

generator = setInterval (gentBtn, 1000) ;