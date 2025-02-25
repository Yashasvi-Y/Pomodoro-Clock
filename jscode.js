let timer;
let minutes = 25;
let seconds = 0;
function startTimer() {
    resetButtonEffects();
    document.getElementById("startButton").classList.add("active");
    timer = setInterval(updateTimer, 1000);
}

function pauseTimer() {
    resetButtonEffects();
    document.getElementById("pauseButton").classList.add("active");
    clearInterval(timer);
}

function resetTimer() {
    resetButtonEffects();
    document.getElementById("resetButton").classList.add("active");
    clearInterval(timer);
    minutes = 25;
    seconds = 0;
    updateDisplay();
}

function updateTimer() {
    if (minutes === 0 && seconds === 0) {
        clearInterval(timer);
        alert("Pomodoro completed! Take a break.");
    } else if (seconds === 0) {
        minutes--;
        seconds = 59;
    } else {
        seconds--;
    }

    updateDisplay();
}
function resetButtonEffects() {
    document.getElementById("startButton").classList.remove("active");
    document.getElementById("pauseButton").classList.remove("active");
    document.getElementById("resetButton").classList.remove("active");
}
function updateDisplay() {
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");
    document.getElementById("timer").textContent = `${formattedMinutes}:${formattedSeconds}`;
}