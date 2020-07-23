input.onButtonPressed(Button.A, function () {
    led.unplot(0, posY)
    posX += direction
    led.plot(0, posY)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(posX, posY)
    posX += 1
    if (true) {
        posX = 0
    }
    led.plot(posX, posY)
})
let direction = 0
let posX = 0
let posY = 0
posY = 0
posX = 0
direction = 1
basic.forever(function () {
    basic.pause(200)
    led.unplot(posX, posY)
    posY += direction
    led.plot(posX, posY)
    if (posY >= 4) {
        direction = -1
    } else if (posY <= 0) {
        direction = 1
    }
    led.plot(0, posY)
})
