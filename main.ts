input.onButtonPressed(Button.A, function () {
    status = 3 - status
    led.setBrightness(128)
    basic.clearScreen()
    basic.showNumber(input.magneticForce(Dimension.X))
    status = 3 - status
})
input.onButtonPressed(Button.AB, function () {
    input.calibrateCompass()
})
input.onButtonPressed(Button.B, function () {
    status = 1 - status
})
let status = 0
status = 0
basic.forever(function () {
    if (status == 0) {
        led.setBrightness(128)
        led.plotBarGraph(
        Math.abs(input.magneticForce(Dimension.X)),
        500
        )
    } else if (status == 1) {
        led.setBrightness(5 + Math.abs(input.magneticForce(Dimension.X)) * 0.5)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
