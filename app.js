let target =[];
let targetCount = 1;
let targetImageNames = ["target1.gif", "target2.gif"];
let targetWidth = 96;
let targetHeight = 93;

let gameWidth = window.screen.width
let gameHeight = window.screen.height*3/4;


window.onload = function() {
    targets();

}

function targets() {
    target = [];
    for (let i = 0; i < targetCount; i ++) {
        let targetImageName = targetImageNames[Math.floor(Math.random()*2)];
        console.log(targetImageName);
        let targetImage = document.createElement("img");
        targetImage.src = targetImageName;
        targetImage.width = targetWidth;
        targetImage.height = targetHeight;
        targetImage.draggable = false;
        targetImage.style.position = "absolute";
        document.body.appendChild(targetImage);
        
        
        let target = {
            image: targetImage,
            x: randomPosition(gameWidth - targetWidth),
            y: randomPosition(gameHeight - targetHeight),
        }

        target.image.style.left = String(target.x) + "px";
        target.image.style.top = String(target.y) + "px";

        
    }
}

function randomPosition(limit) {
    return Math.floor(Math.random()*limit);
}