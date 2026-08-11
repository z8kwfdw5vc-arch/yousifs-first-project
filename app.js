
/*-------------------------------- Variables --------------------------------*/
let score = 0;
let timeLeft = 30;
let timerInterval = null;
let isGameRunning = false;
let highScore = 0;

const scoreDisplay = document.getElementById('score-display');
const timerDisplay = document.getElementById('timer-display');
const startBtn = document.getElementById('start-btn');
const resetBtn = document.getElementById('reset-btn');
const target = document.getElementById('target');
const gameContainer = document.getElementById('game-container');

function updateScoreboard() {
    scoreDisplay.textContent = score;
    timerDisplay.textContent = timeLeft;
}

function startGame() {
    if (isGameRunning) {
        return;
    }

    score = 0;
    timeLeft = 30;
    isGameRunning = true;
    updateScoreboard();
    startTimer();
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft -= 1;
        updateScoreboard();

        if (timeLeft <= 0) {
            stopTimer();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    isGameRunning = false;

    if (score > highScore) {
        highScore = score;
        alert(`You Win! New High Score: ${highScore}`);
    } else {
        alert(`Game Over! Your Score: ${score}. High Score: ${highScore}`);
    }
}

function resetGame() {
    clearInterval(timerInterval);
    timerInterval = null;
    isGameRunning = false;
    score = 0;
    timeLeft = 30;
    updateScoreboard();
}



