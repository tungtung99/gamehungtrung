function Game(canvas) {
    this.canvas = canvas
    let FRAME_BETWEEN_CARS = 150
    let nextCarCounter = 0
    let bar = new Bar(40,90);
    var bowl = new basket(250,500);
    let chickens = [ 
        new chicken(50,10),
        new chicken(150,10),
        new chicken(250,10),
        new chicken(350,10),
        new chicken(450,10),
    ]
    let eggs = []
    let ctx = this.canvas.getContext("2d");
    this.requestNextFrame = function () {
        if (nextCarCounter === 0) {
            eggs.push(initRandomEgg())
            nextCarCounter = FRAME_BETWEEN_CARS
        }
        eggFalls()
        nextCarCounter--
    }
    this.draw = function () {
        clearCanvas()
        drawEggs()
        drawbar()
        drawChickens()
        drawBowl()    
    }
    function initRandomEgg() {
        let x = Math.round(Math.random() * 5)
        if (x == 0) {
            x = 65;
        }
        else if (x == 1) {
            x = 165;
        }
        else if (x == 2) {
            x = 265;
        }
        else if (x == 3) {
            x = 365;
        }
        else {
            x = 465;
        }
        return new egg(x, 100)
    }
    function clearCanvas() {
        ctx.clearRect(0, 0, parseInt(canvas.width), parseInt(canvas.height));
    }
    function eggFalls() {
        for (let i = 0; i < eggs.length; i++) {
            if (eggs[i].y < 530) {
                eggs[i].run()
            }
        }
    }
    function drawEggs() {
        let check=1;
        for (let i = 0; i < eggs.length; i++) {
            if (eggs[i].y < 530) {
                eggs[i].draw(ctx)
            }
            else {
                eggs[i].drawEggFall(ctx)
                if(check==2){
                    eggs[i].clearEggFall(ctx)
                    eggs[i].drawEggFall(ctx)
                    check=0
                }
                check++;
            }
        }
    }
    function drawBowl(){
        bowl.draw(ctx)
    }
    function drawbar(){
        bar.draw(ctx)
    }
    function drawChickens() {
        for (let i = 0; i < chickens.length; i++) {
            chickens[i].draw(ctx)
        }
    }
    document.addEventListener('keydown',function(event){
        console.log(event);
        if(event.keyCode == 37){
            document.addEventListener('click',bowl.moveLeft(ctx))
        }
        else if(event.keyCode == 39){
            document.addEventListener('click',bowl.moveRight(ctx))
        }
    });
}