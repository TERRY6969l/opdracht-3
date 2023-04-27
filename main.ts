let _1 = 0
let GETAL_2 = 0
input.onButtonPressed(Button.A, function () {
    _1 = randint(0, 9)
    GETAL_2 = randint(0, 10)
    basic.showNumber(0)
    basic.pause(200)
    basic.showIcon(IconNames.No)
    basic.pause(200)
    basic.showNumber(randint(0, 9))
    basic.showLeds(`
        . . . . .
        # # # # #
        . . . . .
        # # # # #
        . . . . .
        `)
    basic.pause(200)
})
input.onButtonPressed(Button.B, function () {
    let product = 0
    basic.showNumber(product)
})
