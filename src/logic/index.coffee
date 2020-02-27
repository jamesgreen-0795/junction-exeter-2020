newsfeed = require './newsfeed.coffee'
climate = require './climate.coffee'
utils = require './utils.coffee'
dev = require './dev.coffee'

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

		window.store.timeSinceLastWeek += window.store.deltaTime
		if window.store.timeSinceLastWeek > (window.store.TIME_PER_YEAR/52)
			window.store.currentWeek++
			window.store.timeSinceLastWeek = 0
			if window.store.currentWeek >= 52
				window.store.currentYear++
				window.store.currentWeek = 0

	dev.dev()

	requestAnimationFrame(mainLoop)

mainLoop()
