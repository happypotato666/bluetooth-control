def on_forever():
    SuperBit.servo(SuperBit.enServo.S1, 0)
basic.forever(on_forever)
