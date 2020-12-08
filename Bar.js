function Bar(x, y) {
    this.x = x;
    this.y = y;
    this.draw = function (ctx) {
        let img = new Image()
        img.src = "images/bar.png"
        ctx.drawImage(img, this.x, this.y);
    }
}