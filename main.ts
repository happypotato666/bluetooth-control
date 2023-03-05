SuperBit.MotorRunDual(
SuperBit.enMotors.M1,
-255,
SuperBit.enMotors.M1,
255
)
basic.forever(function () {
    SuperBit.Servo(SuperBit.enServo.S1, 0)
})
