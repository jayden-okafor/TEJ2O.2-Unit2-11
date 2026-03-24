"""
Created by: Jayden Okafor
Created on: Mar 2026
This program generates two random numbers, lets the user view them when either "A" or "B" is clicked, and compares them when the micro:bit is shaken.
"""

from microbit import *
import random

# show happy face
display.show(Image.HAPPY)

# variables
number1 = random.randint(0, 99)
number2 = random.randint(0, 99)

while True:
    # when the "A" button is pressed
    if button_a.was_pressed():
        display.clear()
        display.scroll("#1:" + str(number1))
        display.show(Image.HAPPY)

    # when the "B" button is pressed
    if button_b.was_pressed():
        display.clear()
        display.scroll("#2:" + str(number2))
        display.show(Image.HAPPY)

    # when the microbit is shaked
    if accelerometer.was_gesture("shake"):
        display.clear()
        if number1 < number2:
            display.scroll(str(number1) + "<" + str(number2))
        else:
            display.scroll(str(number1) + ">" + str(number2))
        display.show(Image.HAPPY)
