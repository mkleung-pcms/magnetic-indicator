input.onButtonPressed(Button.A, function () {
    status = 3 - status
    led.setBrightness(128)
    basic.showNumber(input.magneticForce(Dimension.X))
    status = 3 - status
})
input.onButtonPressed(Button.B, function () {
    status = 1 - status
})
let status = 0
status = 0
basic.forever(function () {
    if (status == 0) {
        led.setBrightness(128)
        basic.clearScreen()
        for (let index = 0; index <= Math.round(input.magneticForce(Dimension.X) * 0.09375 + 1); index++) {
            led.plot(Math.trunc((index - 1) / 5), (index - 1) % 5)
        }
    } else if (status == 1) {
        led.setBrightness(5 + input.magneticForce(Dimension.X) * 0.9765625)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
