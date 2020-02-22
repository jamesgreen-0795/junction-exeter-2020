utils = require './utils.coffee'

export getNews = ->
	if (Math.random()) < 0.01
		doEvent()

doEvent = ->
	cCount = window.store.countries.length
	country = window.store.countries[Math.floor(Math.random() * cCount)]

	if country.state.openBorders
		country.state.openBorders = false
		createNewsItem(country.name + " has closed its borders.")

createNewsItem = (msg) ->
	item = utils.createStoreItem()
	item.message = msg
	window.store.newsfeed.push(item)
