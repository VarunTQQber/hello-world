input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Cow)
    music.playTone(294, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.SmallHeart)
    music.playTone(330, music.beat(BeatFraction.Whole))
})
basic.showIcon(IconNames.Pitchfork)
music.playTone(262, music.beat(BeatFraction.Whole))
