newsfeed = require './newsfeed.coffee'
climate = require './climate.coffee'
utils = require './utils.coffee'

mainLoop = ->
	window.store.currentFrame++
	newsfeed.getNews()
	climate.modulateClimate()
	window.store.newsfeed = utils.collectGarbage(window.store.newsfeed, 5000)

	if window.store.currentFrame % (30 * 30) == 0
		window.store.currentYear++

	requestAnimationFrame(mainLoop)

mainLoop()
