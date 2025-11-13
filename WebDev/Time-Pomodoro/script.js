let startBtn = document.getElementById("startBtn");
let pauseBtn = document.getElementById("pauseBtn");
let resetBtn = document.getElementById("resetBtn");
let out = document.getElementById("timer");

let tomato = {
seconds:1500 , //timer per far passsare il tempo
running:false ,
timer : null 
};

function tick () {
    tomato.seconds--;
    showTimer();
}

function showTimer() {
    //Converto da secondi a minuti
let mins = Math.floor(tomato.seconds/60);//Math.floor arrotonda per difetto
let secs = tomato.seconds%60 ;
if (secs <10) {
    secs="0"+secs ;
}
out.textContent=mins+":"+secs ;
}

function start()  {
    if (!tomato.running) {//Se non è partito già lo faccio partire
        tomato.timer=setInterval(tick, 1000) ; //Cosa fare, ogni tot.tempo
        tomato.running=true;
    }
}

function reset() {
    tomato.seconds=1500;
    tomato.running = false ;
    clearInterval(tomato.timer);
    showTimer();
}
startBtn.addEventListener("click",start);
resetBtn.addEventListener("click",reset);
