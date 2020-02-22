newsfeed = require './newsfeed.coffee'
points = require './points.coffee'
climate = require './climate.coffee'
utils = require './utils.coffee'

mainLoop = ->
	window.store.currentFrame++
	newsfeed.getNews()
	points.allocatePoints()
	climate.modulateClimate()
	window.store.newsfeed = utils.collectGarbage(window.store.newsfeed, 5000)
	requestAnimationFrame(mainLoop)

mainLoop()

# Zoom in on the UK on load
setTimeout ( ->
		window.store.user.focusedRegionUuid = (window.store.models.regions.find ( (region) ->
			region.name == "britain"
		) ).uuid
), 1000
