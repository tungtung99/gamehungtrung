// tạo các tiền dề
let canvas = document.getElementById('gameCanvas')
let score = document.getElementById("score")
let game = new Game(canvas)
window.requestAnimationFrame(tick)

function tick() {
  // ... chạy các câu lệnh tại mỗi khung hình
  game.requestNextFrame()
  game.draw()
  window.requestAnimationFrame(tick)
}