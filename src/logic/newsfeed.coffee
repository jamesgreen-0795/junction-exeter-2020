utils = require './utils.coffee'

export getNews = ->
	if (Math.random()) < 0.01
		doEvent()

toggleFlooding = ->
	country = getCountry()
	if country.state.flooding
		country.state.flooding = false
		createNewsItem(country.name + " has stopped flooding.")
	else
		country.state.flooding = true
		createNewsItem(country.name + " has begun to flood.")
	true

closeBorders = ->
	country = getCountry()
	if country.state.openBorders
		country.state.openBorders = false
		createNewsItem(country.name + " has closed its borders.")
		true
	else
		false

newsTypes = [
	closeBorders,
	toggleFlooding
]

doEvent = ->
	# TODO: Garbage collection of old events
	if newsTypes[Math.floor(Math.random() * newsTypes.length)]()
		true
	else
		doEvent()


createNewsItem = (msg) ->
	item = utils.createStoreItem()
	item.message = msg
	window.store.newsfeed.push(item)

getCountry = ->
	cCount = window.store.models.countries.length
	country = window.store.models.countries[Math.floor(Math.random() * cCount)]
