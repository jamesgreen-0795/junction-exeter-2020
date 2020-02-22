newsfeed = require './newsfeed.coffee'
utils = require './utils.coffee'

mainLoop = ->
	window.store.currentFrame++
	newsfeed.getNews()
	window.store.newsfeed = utils.collectGarbage(window.store.newsfeed, 5000)
	requestAnimationFrame(mainLoop)

mainLoop()
