let _١ = 0
let مجهول = 0
let _٢ = 0
input.onButtonPressed(Button.A, function () {
    _١ = _١
    basic.showNumber(_١)
})
input.onButtonPressed(Button.AB, function () {
    مجهول = _١ + _٢
    basic.showNumber(مجهول)
    _١ = 0
    _٢ = 0
})
input.onButtonPressed(Button.B, function () {
    _٢ = _٢
    basic.showNumber(_٢)
})
basic.forever(function () {
	
})
