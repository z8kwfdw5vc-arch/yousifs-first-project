/*-------------------------------- Variables --------------------------------*/
let score = 0;
let timeLeft = 30;
let timerInterval;
let isGameRunning = false;
let highScore = 0;

let velX1 = 3;
let velY1 = 2;

let velX2 = -2;
let velY2 = 3;

let moveInterval;


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
    moveInterval = setInterval(moveTargets, 1000 / 60);
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

function moveTargets() {
    if (!isGameRunning)
        return;

    if (targetElement) {

        let currentX = parseInt(targetElement.style.left) || 275;
        let currentY = parseInt(targetElement.style.top) ||175;

        currentX += velX1;
        currentY += velY1;

        if (currentX <= 0 || currentX >= 900) velX1 *= -1;
        if (currentY <= 0 || currentY >= 700) velY1 *= -1;

        targetElement.style.left = currentX + 'px';
        targetElement.style.top = currentY + 'px';

    }

    if (target2Element) {
        let current2X = parseInt(target2Element.style.left) || 100;
        let current2Y = parseInt(target2Element.style.top) || 175;

        current2X += velX2;
        current2Y += velY2;

        if (current2X <= 0 || current2X >= 900) velX2 *= -1;
        if (current2Y <= 0 || current2Y >= 700) velY2 *= -1;

        target2Element.style.left = current2X + 'px';
        target2Element.style.top = current2Y + 'px';
    }

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
    clearInterval(moveInterval);
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