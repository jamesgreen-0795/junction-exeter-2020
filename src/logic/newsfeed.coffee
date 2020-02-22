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
		if Math.floor(Math.random() * 100) < window.store.carbon
			country.state.flooding = true
			window.store.points += 10
			createNewsItem("Severe flooding in " + country.name + ".")
		else
			true

emissionsTarget = ->
	country = getCountry()
	if country.state.corruption < 5 and window.store.carbon > 10
		window.store.carbon -= 2
		createNewsItem("Today, at the UN, " + country.name + " announced ambitious climate targets.")
	else
		false

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
	# closeBorders,
	toggleFlooding,
	oilDeal,
	emissionsTarget
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
