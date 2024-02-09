function quest3 () {
    scene.setBackgroundColor(8)
    adventure.addImageToTextLog(assets.image`purple octipuse`)
    adventure.addToTextlog("Oh no! There is a octipus in your path!")
    adventure.addToTextlog("press A to fight. press B to run away from the elderly person")
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        info.changeLifeBy(-1)
        Quest1()
    } else {
        adventure.addToTextlog("you defeted the octipus you got gold!")
        adventure.addImageToTextLog(img`
            . . 5 5 5 5 . . 
            . 5 a a a a 5 . 
            5 a a a a a a 5 
            5 a a 8 8 a a 5 
            5 a a 8 8 a a 5 
            5 a a a a a a 5 
            . 5 a a a a 5 . 
            . . 5 5 5 5 . . 
            `)
        adventure.changeScoreOverride(adventure.Currency.Coins, 5)
        quest4()
    }
}
function quest4 () {
    scene.setBackgroundColor(8)
    adventure.addImageToTextLog(assets.image`purple house`)
    adventure.addToTextlog("Oh no! it is time to go home")
    adventure.addToTextlog("press A to cotinue press B to go home")
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        info.changeLifeBy(-1)
        quest2()
    } else {
        game.gameOver(true)
    }
}
function quest2 () {
    scene.setBackgroundColor(8)
    adventure.addImageToTextLog(assets.image`dragon baby`)
    adventure.addToTextlog("Oh no! There is a dragon in your path!")
    adventure.addToTextlog("press A to fight. press B to run away from the elderly person")
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        adventure.addToTextlog("you defeted the dragon you got gold!")
        adventure.addImageToTextLog(img`
            . . 5 5 5 5 . . 
            . 5 a a a a 5 . 
            5 a a a a a a 5 
            5 a a 8 8 a a 5 
            5 a a 8 8 a a 5 
            5 a a a a a a 5 
            . 5 a a a a 5 . 
            . . 5 5 5 5 . . 
            `)
        adventure.changeScoreOverride(adventure.Currency.Coins, 5)
        quest3()
    } else {
        info.changeLifeBy(-1)
        Quest1()
    }
}
info.onLifeZero(function () {
    game.over(false)
})
function Quest1 () {
    scene.setBackgroundColor(10)
    adventure.addImageToTextLog(assets.image`purple house`)
    adventure.addToTextlog("you love Adventuring so,when...")
    adventure.addToTextlog("a traveling minstrel approaches and asks you to join her adventure.")
    adventure.addToTextlog("press A to say YES!!!")
    adventure.addToTextlog("press B to say nope! I hate you!")
    pauseUntil(() => controller.anyButton.isPressed())
    if (controller.A.isPressed()) {
        adventure.addToTextlog("Great choice! come with me.")
        quest2()
    } else {
        adventure.addToTextlog("Your adventure is over before it has even begun.")
        info.changeLifeBy(-1)
        quest3()
    }
}
info.setLife(5)
adventure.setScoreOverride(adventure.Currency.Coins, 0)
Quest1()
