//Con una fetch lo script ottiene un pacchetto http

//Dichiaro l'URL
const URL = "https://jsonplaceholder.typicode.com/users/1";

out= document.getElementById("o");
//Interrogo l'URL con la fetch
/*fetch(URL).then(response =>{
   
    if (response.ok){
        //parse body
        response.json().then(dato =>{  //dato legge il body   ed è il parametro della funzione
            //dato prende il json riferito alla response
            console.log(dato);
           
            //out.textContent=JSON.stringify(dato); rende leggibile l'oggetto in json, trasformandolo in stringa
            for (key in dato){
                console.log(dato[key]);
            }
        });
    }
    else {
        //tutto male
        console.log("ERRORE".response.status);
    }
});
*/

fetch(URL).then(response =>{
    if (response.ok){
        console.log(response.status);
        return response.json();
    }
    else {
        throw new Error("ERRORE HTTPS "+response.status);
    }
})
.then(data => {
    for (key in data){
                if ((key==="name")||(key==="id")){
                out.textContent+=' '+(data[key]);
            }}
})
.catch(error => console.log(error));
