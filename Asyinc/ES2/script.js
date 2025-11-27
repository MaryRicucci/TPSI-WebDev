/*Esercizio 2: Gestire l'errore
Task:
Prova a fare fetch a questo URL:
https://jsonplaceholder.typicode.com/usersXXX/1
Gestisci eventuali errori con .catch() e stampa in console: "Errore nella richiesta: [messaggio errore]"
Output atteso:
Errore nella richiesta: [qualche messaggio di errore]
Hint:
.catch() cattura, ma cosa cattura nel contesto delle Fetch? 
Errori di che tipo? Ma attenzione: un 404 non è un errore di rete — è una response valida. 
Per ora concentrati solo sul .catch().
*/

const source = "https://jsonplaceholder.typicode.com/usersXXX/1";

fetch(source)
.then(response =>{
    return response.json ;
})
.catch (error => {
    
    console.log (error.message+ "impossibile trovare la risorsa");
}
);