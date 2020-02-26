newsfeed = require './newsfeed.coffee'
climate = require './climate.coffee'
utils = require './utils.coffee'

mainLoop = ->
	window.store.currentFrame++
	prevFrameTime = window.store.frameTime
	window.store.frameTime = Date.now()
	window.store.deltaTime = (window.store.frameTime - prevFrameTime) / 1000

	if (window.store.temperature >= 100)
		window.store.currentScreen = "end-screen"

	if (window.store.currentScreen == "game-screen")
		newsfeed.getNews()
		climate.modulateClimate()
		window.store.newsfeed = utils.collectGarbage(window.store.newsfeed, 4000)
		utils.cleanUpTokens()
		if window.store.currentFrame % (30 * 30) == 0
			window.store.currentYear++

	requestAnimationFrame(mainLoop)

mainLoop()
