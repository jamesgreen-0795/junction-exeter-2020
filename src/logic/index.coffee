newsfeed = require './newsfeed.coffee'

mainLoop = ->
	newsfeed.getNews()
	requestAnimationFrame(mainLoop)

mainLoop()