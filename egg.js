function egg(x, y) {
    this.x = x;
    this.y = y;
    this.vX = 0;
    this.vY = 1;
    this.run = function () {
        this.x += this.vX
        this.y += this.vY
    }
    this.draw = function (ctx) {
        let img = new Image()
        img.src = "images/egg1.png"
        ctx.drawImage(img, this.x, this.y);
        /*let img =[new Image(),new Image()]
        img[0].src="images/egg1.png"
        img[1].src="images/egg2.png"
        let x =Math.round(Math.random() * 2)
        if(x==0){
            ctx.drawImage(img[0], this.x, this.y);
        }
        else{
            ctx.drawImage(img[1], this.x, this.y);
        }*/
    }
    this.drawEggFall = function (ctx) {
        let img = new Image()
        img.src = "images/egg-popped.png"
        ctx.drawImage(img, this.x, this.y);
    }
    this.clearEggFall = function(ctx) {
        ctx.clearRect(0,this.y, parseInt(canvas.width), parseInt(canvas.height));
    }
}