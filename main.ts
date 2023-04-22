input.onButtonPressed(Button.A, function () {
    basic.showNumber(min)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(max)
    basic.clearScreen()
})
let min = 0
let max = 0
let current_temperature = input.temperature()
max = current_temperature
max = current_temperature
basic.forever(function () {
    basic.showString(".")
    current_temperature = input.temperature()
    if (current_temperature < min) {
        min = current_temperature
    }
    if (current_temperature > max) {
        max = current_temperature
    }
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(1000)
})
