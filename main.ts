input.onButtonPressed(Button.A, function () {
    led.unplot(0, posY)
    posY = Math.max(0, posY - 1)
    led.plot(0, posY)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(0, posY)
    posY = Math.min(4, posY + 1)
    led.plot(0, posY)
})
let posY = 0
posY = 0
led.unplot(0, posY)
let direction = 0
basic.forever(function () {
    basic.pause(200)
    posY += 1
    if (posY >= 4) {
        direction = -1
    } else if (posY <= 0) {
        direction = 1
    }
    led.plot(0, posY)
})
