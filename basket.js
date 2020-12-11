function basket(x, y) {
    this.x = x;
    this.y = y;
    this.vX = 8
    this.vY = 0
    this.moveLeft = function () {
        if (this.x >= 20) {
            this.x -= this.vX
            this.y += this.vY
        }
    }
    this.moveRight = function () {
        if (this.x <= 480) {
            this.x += this.vX
            this.y += this.vY
        }
    }
    this.draw = function (ctx) {
        let img = new Image()
        img.src = "images/bowl.png"
        ctx.drawImage(img, this.x, this.y);
    }
}