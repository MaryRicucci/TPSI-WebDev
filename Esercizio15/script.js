let from = document.getElementById("start");
let to = document.getElementById("finish");
let out = document.getElementById("out");
let button = document.getElementById("avvia");

button.addEventListener("click", () => {
  let inizio = Number(from.value);
  let fine = Number(to.value);
  stampaNumeri(inizio, fine);
});

function stampaNumeri(inizio, fine) {
  out.innerHTML = ""; // pulisco l'output
  let i = inizio;
  let timer = setInterval(() => {
    out.innerHTML += i + "<br>";
    if (i >= fine) {
      clearInterval(timer);
    }
    i++;
  }, 1000);
}

