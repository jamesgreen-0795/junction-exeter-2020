newsfeed = require './newsfeed.coffee'
climate = require './climate.coffee'
utils = require './utils.coffee'

mainLoop = ->
	window.store.currentFrame++
	newsfeed.getNews()
	climate.modulateClimate()
	window.store.newsfeed = utils.collectGarbage(window.store.newsfeed, 2500)

	if window.store.currentFrame % (30 * 30) == 0
		window.store.currentYear++

	requestAnimationFrame(mainLoop)

mainLoop()

# Zoom in on the UK on load
setTimeout ( ->
		window.store.user.focusedRegionUuid = (window.store.models.regions.find ( (region) ->
			region.name == "Britain"
		) ).uuid
), 1000
