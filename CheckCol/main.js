let c = document.getElementById("canvas");
let ctx = c.getContext("2d");
let car = new Car(10, 400, 50, 100);
let rectangle = new Rectangle(100, 0, 50, 50)

function moveCar(event) {
    switch (event.keyCode) {
        case 37: {
            car.moveLeft();
            break;
        }
        case 38: {
            car.moveUp();
            break;
        }
        case 39: {
            car.moveRight();
            break;
        }
        case 40: {
            car.moveDown();
            break;
        }
    }
    clearCanvas();
    car.drawCar(ctx);
}

function moveObstacle() {
    if (checkCol() === true) {
        location.reload();
        clearInterval(intervalId)
        alert("Game Over");
    }
    if (rectangle.y >= 450) {
        rectangle.y = 0;
    }
    rectangle.moveDown()
    clearCanvas();
    drawCanvas();
}

function drawCanvas() {
    rectangle.drawRectangle(ctx)
    car.drawCar(ctx);
}

function checkCol() {
    if ((car.x + car.width > rectangle.x && car.y <= rectangle.y + rectangle.height) &&
        (car.x < rectangle.x + rectangle.width && car.y <= rectangle.y + rectangle.height)) {
        return true
    }
    return false

    // if ((car.x <= rectangle.x + rectangle.width && rectangle.x + rectangle.width <= car.x + car.width) &&
    //     car.y <= rectangle.y + rectangle.height) {
    //     return true;
    // } else if ((car.x <= rectangle.x - rectangle.width && rectangle.x - rectangle.width <= car.x + car.width) &&
    //     car.y <= rectangle.y - rectangle.height) {
    //     return true;
    // } else if ((car.x <= rectangle.x - rectangle.width && rectangle.x - rectangle.width <= car.x + car.width) &&
    //     car.y <= rectangle.y + rectangle.height) {
    //     return true;
    // }
    // return false;
}


function clearCanvas() {
    ctx.clearRect(0, 0, 1000, 500);
}

let intervalId = setInterval(moveObstacle, 100) //ms => 1000ms = 1s

car.drawCar(ctx);
rectangle.drawRectangle(ctx);
window.addEventListener("keydown", moveCar);
