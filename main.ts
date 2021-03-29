input.onButtonPressed(Button.A, function () {
    fuel = 4
})
input.onButtonPressed(Button.B, function () {
    DujwIj.turn(Direction.Right, 45)
})
let fuel = 0
let DujwIj: game.LedSprite = null
DujwIj = game.createSprite(2, 2)
fuel = 0
basic.forever(function () {
    DujwIj.move(fuel)
    fuel += -0.5
    if (fuel < 0) {
        fuel = 0.5
    }
    DujwIj.ifOnEdgeBounce()
    basic.pause(100)
})
