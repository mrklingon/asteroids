input.onButtonPressed(Button.A, function () {
    fuel = 4
})
input.onButtonPressed(Button.AB, function () {
    Missile = game.createSprite(DujwIj.get(LedSpriteProperty.X), DujwIj.get(LedSpriteProperty.Y))
    Missile.set(LedSpriteProperty.Direction, DujwIj.get(LedSpriteProperty.Direction))
    for (let index = 0; index < 6; index++) {
        Missile.move(1)
        basic.pause(250)
        Missile.ifOnEdgeBounce()
    }
    Missile.delete()
})
input.onButtonPressed(Button.B, function () {
    DujwIj.turn(Direction.Right, 45)
})
let Asteroid: game.LedSprite = null
let Missile: game.LedSprite = null
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
basic.forever(function () {
    basic.pause(500 * randint(3, 7))
    if (true) {
        Asteroid = game.createSprite(randint(0, 4), randint(0, 4))
        for (let index = 0; index < randint(0, 10); index++) {
            Asteroid.turn(Direction.Right, 45)
        }
        for (let index = 0; index < 13; index++) {
            Asteroid.move(1)
            basic.pause(500)
            if (Asteroid.isTouchingEdge()) {
                Asteroid.delete()
            }
        }
        Asteroid.delete()
    }
})
