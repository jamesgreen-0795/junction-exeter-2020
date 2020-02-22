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
