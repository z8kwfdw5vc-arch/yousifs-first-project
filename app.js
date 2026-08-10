/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let score = 0;
let timeLeft = 30;
let timerInterval;
let isGameRunning = false;
let highScore= 0;
/*------------------------ Cached Element References ------------------------*/
const targetElement = document.querySelector('#target');
const scoreElement = document.querySelector('#score-display');
const timerElement = document.querySelector('#timer-display');
const startButtonElement = document.querySelector('#start-btn');
const resetButtonElement = document.querySelector('#reset-btn');
/*-------------------------------- Functions --------------------------------*/
function startGame() {
    if (isGameRunning) return;
    if (timeLeft === 0) {
        score = 0;
        timeLeft = 30;
        scoreElement.textContent = '0';
        timerElement.textContent = '30'
        targetElement.style.letf ='225px';
        targetElement.style.top ='175px';
    }
    isGameRunning = true;
    startTimer();
}
function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft = timeLeft - 1;
        timerElement.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timerInterval);
            isGameRunning = false;
            if (score > highScore) {
                highScore = score;
                alert(`You win! new high score: ${score}`);
            }   else {
                    alert(`Game Over! Your Score: ${score} | high score: ${highScore}`);
                }
            }
        }, 1000);
    }
    function handleTargetClick() {
        if (!isGameRunning) return;
        score = score + 1;
        scoreElement.textContent = score;

        let randomX = Math.floor(Math.random() * 550) + 'px';
        let randomY = Math.floor(Math.random() * 350) + 'px';
        targetElement.style.left = randomX;
        targetElement.style.top = randomY;
    }
    function resetGame() {
        clearInterval(timerInterval);
        isGameRunning = false;

        score = 0;
        timeLeft = 30;
        scoreElement.textContent = '0';
        timerElement.textContent = '30';
        targetElement.style.left = '225px';
        targetElement.style.top = '175px';
    }


/*----------------------------- Event Listeners -----------------------------*/
startButtonElement.addEventListener('click', startGame);
targetElement.addEventListener('click', handleTargetClick);
resetButtonElement.addEventListener('click', resetGame);