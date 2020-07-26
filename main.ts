input.onButtonPressed(Button.A, function () {
    strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Violet))
    strip.show()
})
input.onButtonPressed(Button.AB, function () {
    reset()
})
function reset () {
    strip.showRainbow(1, 360)
    strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
    strip.show()
}
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P1, 4, NeoPixelMode.RGB)
strip.setBrightness(20)
reset()
basic.forever(function () {
	
})
basic.forever(function () {
    strip.rotate(-1)
    strip.show()
    basic.pause(200)
})
