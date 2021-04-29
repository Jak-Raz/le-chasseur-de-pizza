info.onCountdownEnd(function () {
    requin.setPosition(0, 0)
    requin.say(score, 5000)
    game.reset()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    pizza.setPosition(randint(0, 160), randint(0, 120))
})
let score = 0
let pizza: Sprite = null
let requin: Sprite = null
info.setScore(0)
game.showLongText("Le but du jeu est de manger le plus de pizza possible avec le temps alloué.", DialogLayout.Center)
scene.setBackgroundColor(7)
requin = sprites.create(img`
    .............ccfff..............
    ............c9999f..............
    ...........c9999f...............
    ..........f99999f............ccc
    ....ffffff999999ff.........cc99c
    ..ff99999999999999fff.....c999c.
    ff999999999c9c9999999ff..c9999f.
    f9999999ff99c9c99999999fff999f..
    f9991111ff99c9c99999999999999f..
    .f911111111999999999999999999f..
    ..fccc33cc11999999999999fff999f.
    ...fc131c111999999999999...f99f.
    ....f33c111c999f99999cc.....f99f
    .....ff1111f9999f99cc........fff
    .......cccccf9999fc.............
    .............fffff..............
    `, SpriteKind.Player)
controller.moveSprite(requin)
requin.setFlag(SpriteFlag.StayInScreen, true)
pizza = sprites.create(assets.image`bigPizza`, SpriteKind.Food)
pizza.setPosition(randint(0, 160), randint(0, 120))
info.startCountdown(25)
forever(function () {
    score = info.score()
})
