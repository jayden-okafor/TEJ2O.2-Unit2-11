/* Copyright (c) 2026 MTHS All rights reserved
 *
 * Created by: Jayden Okafor
 * Created on: Mar 2026
 * This program generates two random numbers, lets the user view them when either "A" or "B" is clicked, and compares them when the micro:bit is shaken.
*/

// show happy face
basic.showIcon(IconNames.Happy)

// variables
let number1: number = null
let number2: number = null

// reassign variables
number1 = randint(0, 99)
number2 = randint(0, 99)

// when the "A" button is pressed
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showString('#1:' + number1.toString())
    basic.showIcon(IconNames.Happy)
})

// when the "B" button is pressed
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString('#2:' + number2.toString())
    basic.showIcon(IconNames.Happy)
})

// when the microbit is shaked
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    if (number1 < number2) {
        basic.showString(number1.toString() + '<' + number2.toString())
    } else {
        basic.showString(number1.toString() + '>' + number2.toString())
    }
    basic.showIcon(IconNames.Happy)
})
