input.onButtonPressed(Button.A, function () {
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Violet))
    strip.show()
    if (leds[i] == 0) {
        catches += 1
        leds[i] = 1
    }
    if (catches >= 4) {
        basic.pause(500)
        score += 1
        newRound()
    }
})
function newRound () {
    strip.showRainbow(1, 360)
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
    strip.show()
    leds = [0, 0, 0, 0]
    i = 0
    catches = 0
    basic.showNumber(score)
}
input.onButtonPressed(Button.AB, function () {
    newRound()
})
let catches = 0
let i = 0
let leds: number[] = []
let score = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P1, 4, NeoPixelMode.RGB)
strip.setBrightness(20)
score = 0
newRound()
basic.forever(function () {
    strip.rotate(1)
    strip.show()
    i += 1
    i = i % 4
    basic.pause(200)
})
