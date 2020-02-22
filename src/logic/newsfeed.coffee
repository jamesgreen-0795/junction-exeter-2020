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

oilDeal = ->
	country = getCountry()
	if country.state.corruption > 2 && country.state.hasOil
		country.state.hasOil = false
		createNewsItem(country.name + " has leased its oil fields to CrudeIncorporated.")
	else
		false

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
	toggleFlooding,
	oilDeal
]

doEvent = ->
	if newsTypes[Math.floor(Math.random() * newsTypes.length)]()
		true
	else
		doEvent()


createNewsItem = (msg) ->
	item = utils.createStoreItem()
	item.message = msg
	window.store.newsfeed.push(item)
	true

getCountry = ->
	cCount = window.store.models.regions.length
	country = window.store.models.regions[Math.floor(Math.random() * cCount)]
