const canvas = document.getElementById('myCanvas')
canvas.width = 200

const ctx = canvas.getContext('2d')
const car = new Car(100, 100, 30, 50)

animate()

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  canvas.height = window.innerHeight
  car.update()
  car.draw(ctx)
  requestAnimationFrame(animate)
}
