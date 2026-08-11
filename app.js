

/*-------------------------------- Variables --------------------------------*/
let score = 0;
let timeLeft = 30;
let timerInterval;
let isGameRunning;
let highScore= 0;
//startin the game
function startGame() {
    if (isGameRunning) {
        return;
    }
    isGameRunning = true;
        startTimer();
}

function startTimer() {
    timerInterval = setInterval(() => {
        isGameRunning = false;
    });
}

function stopTimer() {
    clearInterval(timerInterval) {
        isGameRunning = false;
        if (score > highScore) {
            highScore = score;
            alert(`You Win! New High Score: ${highscore}`);
        } else {
            alert(`Game Over! Your Score: ${score} | highScore: ${highScore}`);
        }
        } 1000;
    
}

