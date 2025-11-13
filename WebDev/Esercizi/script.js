let bt = document.getElementByID ("bt");
let value = "nothing";
bt.addEventListener("click", saluta);

function saluta() {
    value = value.textContent("Ciao Studente!");
}
