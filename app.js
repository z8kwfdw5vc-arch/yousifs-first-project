/*-------------------------------- Variables --------------------------------*/
let score = 0;
let timeLeft = 30;
let timerInterval;
let isGameRunning = false;
let highScore = 0;


/*------------------------ Cached Element References ------------------------*/
const target2Element = document.querySelector('#target2');
const targetElement = document.querySelector('#target');
const scoreElement = document.querySelector('#score-display');
const timerElement = document.querySelector('#timer-display');
const startButtonElement = document.querySelector('#start-btn');
const resetButtonElement = document.querySelector('#reset-btn');
const messageElement = document.querySelector('#game-message');
const highScoreElement = document.querySelector('#High-score-display');

/*-------------------------------- Functions --------------------------------*/
function startGame() {
    if (isGameRunning) return;
    
    if (messageElement) {
        messageElement.textContent = '';
    }

    if (timeLeft === 0) {
        score = 0;
        timeLeft = 30;
        scoreElement.textContent = '0';
        timerElement.textContent = '30';
        if (targetElement) {
            targetElement.style.left = '275px';
            targetElement.style.top = '175px';
        }
        if (target2Element) {
            target2Element.style.left = '100px';
            target2Element.style.top = '175px';
        }
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
            } 

            if (highScoreElement) {
                highScoreElement.textContent = highScore;
            }

            if (messageElement) {
                messageElement.textContent = `Game Over! Your Score: ${score} | High Score: ${highScore}`;
            }
        }
    }, 1000);
}

function handleTargetClick() {
    if (!isGameRunning) return;
    new Audio('./assets/duck-shot.mp3').play();

    score = score + 1;
    scoreElement.textContent = score;

    let randomX = Math.floor(Math.random() * 880);
    let randomY = Math.floor(Math.random() * 680);
    if (targetElement) {
        targetElement.style.left = randomX + 'px';
        targetElement.style.top = randomY + 'px';
    }
}

function handleTarget2Click() {
    if (!isGameRunning) return;
    new Audio('./assets/duck-shot.mp3').play();

    score = score + 1;
    scoreElement.textContent = score;

    let randomX = Math.floor(Math.random() * 760);
    let randomY = Math.floor(Math.random() * 600);
    if (target2Element) {
        target2Element.style.left = randomX + 'px';
        target2Element.style.top = randomY + 'px';
    }
} 

function resetGame() {
    clearInterval(timerInterval);
    isGameRunning = false;

    score = 0;
    timeLeft = 30;
    scoreElement.textContent = '0';
    timerElement.textContent = '30';
    
    if (messageElement) {
        messageElement.textContent = '';
    }

    if (targetElement) {
        targetElement.style.left = '275px'; 
        targetElement.style.top = '175px'; 
    }
    if (target2Element) {
        target2Element.style.left = '100px';
        target2Element.style.top = '175px';
    }
}

/*-------------------------------- Event Listeners --------------------------------*/
if (target2Element) target2Element.addEventListener('click', handleTarget2Click);
if (targetElement) targetElement.addEventListener('click', handleTargetClick);
if (startButtonElement) startButtonElement.addEventListener('click', startGame);
if (resetButtonElement) resetButtonElement.addEventListener('click', resetGame);