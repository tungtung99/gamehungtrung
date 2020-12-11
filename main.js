// tạo các tiền dề
let canvas = document.getElementById('gameCanvas')
let score = document.getElementById("score")
var game = new Game(canvas,score);
window.requestAnimationFrame(tick)
window.onkeydown = function (event) {
  console.log(event.keyCode)
  let x = event.keyCode;
  game.controlgame(x);
};
function tick() {
  // ... chạy các câu lệnh tại mỗi khung hình
  game.requestNextFrame()
  game.draw()
  window.requestAnimationFrame(tick)
}

