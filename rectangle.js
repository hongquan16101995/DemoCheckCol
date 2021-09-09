class Rectangle {
    x;
    y;
    width;
    height

    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    drawRectangle(ctx) {
        ctx.beginPath();
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = "red";
        ctx.fill();
    }

    moveDown() {
        this.y += 10;
    }
}