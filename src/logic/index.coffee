newsfeed = require './newsfeed.coffee'

mainLoop = ->
	window.store.currentFrame++
	newsfeed.getNews()
	requestAnimationFrame(mainLoop)

mainLoop()
