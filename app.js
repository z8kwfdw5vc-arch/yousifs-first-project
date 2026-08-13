/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let score = 0;
let timeLeft = 30;
let timerInterval;
let isGameRunning = false;
let highScore = 0;

/*------------------------ Cached Element References ------------------------*/
const target2Element = document.querySelector('#target2')
const targetElement = document.querySelector('#target')
const scoreElement = document.querySelector('#score-display');
const timerElement = document.querySelector('#timer-display');
const startButtonElement = document.querySelector('#start-btn');
const resetButtonElement = document.querySelector('#reset-btn');
/*-------------------------------- Functions --------------------------------*/
function startGame() {
    console.log("isGamingRunninng", "timeLeft", timeLeft);
    if (isGameRunning) {
        console.log("isGamingRunninng");
            return;
        }   
    if (timeLeft === 0) {
        console.log(timeLeft)
        score = 0;
        timeLeft = 30;
        scoreElement.textContent = '0';
        timerElement.textContent = '30'
        targetElement.style.left ='225px';
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

    let randomX = Math.floor(Math.random() * 550);
    let randomY = Math.floor(Math.random() * 350);
    targetElement.style.left = randomX + 'px';
    targetElement.style.top = randomY + 'px';
}

function handleTarget2Click() {
    if (!isGameRunning) return;
    score = score + 1;
    scoreElement.textContent = score;

    let randomX = Math.floor(Math.random() * 375);
    let randomY = Math.floor(Math.random() * 225);
    target2Element.style.left = randomX + 'px';
    target2Element.style.top = randomY + 'px';
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
    target2Element.style.left = '100px';
    target2Element.style.top = '100px';
}
//event listern

target2Element.addEventListener('click', handleTarget2Click);
targetElement.addEventListener('click', handleTargetClick);
startButtonElement.addEventListener('click', startGame);
resetButtonElement.addEventListener('click', resetGame);