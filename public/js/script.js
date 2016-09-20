var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");

// dimensions of penguin
const penguinHeight = 35;
const penguinWidth = 33;

//Align penguin in the center
var penguinX = (canvas.width - penguinWidth)/2;


var rightPressed = false;
var leftPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}

var drawPenguin = () => {
  var img = new Image();
  img.src = './public/img/penguin.svg';
   ctx.drawImage(img, penguinX, canvas.height-penguinHeight, penguinWidth, penguinHeight);
   ctx.beginPath();
}

var draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPenguin();

    if(rightPressed && penguinX < canvas.width-penguinWidth) {
        penguinX += 4;
    }
    else if(leftPressed && penguinX > 0) {
        penguinX -= 4;
    }
}

setInterval(draw,10);
