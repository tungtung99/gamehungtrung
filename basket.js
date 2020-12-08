function basket(x, y) {
    this.x = x;
    this.y = y;
    this.vX = 5
    this.vY = 0
    this.moveLeft = function () {
        this.x -= this.vX
        this.y += this.vY
    }
    this.moveRight = function () {
        this.x += this.vX
        this.y += this.vY
    }
    this.draw = function (ctx) {
        let img = new Image()
        img.src = "images/bowl.png"
        ctx.drawImage(img, this.x, this.y);
    }
}