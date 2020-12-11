// tạo các tiền dề
let canvas = document.getElementById('gameCanvas')
let score = document.getElementById("score")
let game = new Game(canvas)
window.requestAnimationFrame(tick)
window.onkeydown = function (event) {
  console.log(event.keyCode);
  game.conTrol(event.keyCode)
};
function tick() {
  // ... chạy các câu lệnh tại mỗi khung hình
  game.requestNextFrame()
  game.draw()
  window.requestAnimationFrame(tick)
}