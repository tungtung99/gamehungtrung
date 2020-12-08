function chicken(x, y) {
    this.x = x;
    this.y = y;
    this.draw = function (ctx) {
        let img = new Image()
        img.src = "images/chicken.png"
        ctx.drawImage(img, this.x, this.y);
    }
}