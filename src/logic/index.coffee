newsfeed = require './newsfeed.coffee'
points = require './points.coffee'
utils = require './utils.coffee'

mainLoop = ->
	window.store.currentFrame++
	newsfeed.getNews()
	points.allocatePoints()
	window.store.newsfeed = utils.collectGarbage(window.store.newsfeed, 5000)
	requestAnimationFrame(mainLoop)

mainLoop()
