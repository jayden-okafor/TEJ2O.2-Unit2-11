/* Copyright (c) 2026 MTHS All rights reserved
 *
 * Created by: Jayden Okafor
 * Created on: Mar 2026
 * This program shows you
*/

let number1: number = randint(0, 99)
let number2: number = randint(0, 99)

input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showString('#1:' + number1.toString())
    basic.showIcon(IconNames.Happy)
})

input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString('#2:' + number2.toString())
    basic.showIcon(IconNames.Happy)
})

input.onGesture(Gesture.Shake, function () {
    if (number1 < number2) {
        basic.showString(number1.toString() + '<' + number2.toString())
    } else {
        basic.showString(number1.toString() + '>' + number2.toString())
    }
})