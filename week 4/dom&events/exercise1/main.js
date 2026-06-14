console.log(document);

const moveRight = function(){
    const ball = document.getElementById("ball")
    let left = parseInt(ball.style.left) || 0
    left += 50
    ball.style.left = left + "px"
}

const moveLeft = function(){
    const ball = document.getElementById("ball")
    let left = parseInt(ball.style.left) || 0
    left -= 50
    ball.style.left = left + "px"
}

const moveUp = function(){
    const ball = document.getElementById("ball")
    let top = parseInt(ball.style.top) || 0
    top -= 50
    ball.style.top = top + "px"
}

const moveDown = function(){
    const ball = document.getElementById("ball")
    let top = parseInt(ball.style.top) || 0
    top += 50
    ball.style.top = top + "px"
}

const header = document.createElement("h1")
header.innerHTML = "The Best Game Ever"
header.style.color = "#c0392b"
header.style.fontFamily = "Helvetica"
document.body.appendChild(header)

const subHeader = document.createElement("h2")
subHeader.innerHTML = "Game by: Amit Shtark"
subHeader.style.color = "#3a0ebd"
subHeader.style.fontFamily = "Helvetica"
document.body.appendChild(subHeader)

const up = document.getElementById("up")
up.onclick = function () {
   moveUp();
}

const down = document.getElementById("down")
down.onclick = function () {
   moveDown();
}

const left = document.getElementById("left")
left.onclick = function () {
   moveLeft();
}

const right = document.getElementById("right")
right.onclick = function () {
   moveRight();
}