let button = document.getElementById("but");
let esito = document.getElementById("esito");
let tentativi = document.getElementById("Tentativi");
let inp = document.getElementById("in");
let ts = document.getElementById("array");

let tent = 0;
let number = Math.floor(Math.random() * 20) + 1;
let all = [];

button.addEventListener("click", () => {
  tent++;
  tentativi.textContent = "Tentativi: " + tent;

  let value = Number(inp.value);
  all.push(value);

  if (number === value) {
    esito.textContent = "Indovinato!";
    let storico = "";
    for (let x = 0; x < all.length; x++) {
      storico += "<br>(T" + (x + 1) + ": " + all[x] + ")";
    }
    ts.innerHTML = storico;
  } else if (value > number) {
    esito.textContent = "Troppo alto";
  } else {
    esito.textContent = "Troppo basso";
  }
});