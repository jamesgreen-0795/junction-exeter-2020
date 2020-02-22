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
		if Math.floor(Math.random() * 100) < window.store.temperature
			country.state.flooding = true
			window.store.points += 10
			createNewsItem("Severe flooding in " + country.name + ".")
		else
			true

emissionsTarget = ->
	country = getCountry()
	if country.state.corruption < 5 and window.store.temperature > 30
		window.store.temperature -= 2
		createNewsItem("Today, at the UN, " + country.name + " announced ambitious climate targets.")
	else
		false

drought = ->
	country = getCountry()
	if Math.floor(Math.random() * 200) < window.store.temperature
			country.state.flooding = true
			window.store.points += 25
			createNewsItem(country.name + " is in drought.")
		else
			true

oilDeal = ->
	country = getCountry()
	if country.state.corruption > 2 && country.state.hasOil
		country.state.hasOil = false
		window.store.temperature += 1
		window.store.points += 50
		createNewsItem(country.name + " has leased its oil fields to CrudeIncorporated.")
	else
		false

banElectricCars = ->
	country = getCountry()
	if country.state.corruption > 4 && !country.state.electicCarsBanned
		country.state.electicCarsBanned = true
		window.store.temperature += 2
		window.store.points += 100
		createNewsItem("The government of " + country.name + " has banned electric cars over fears of toenail cancer.")
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

carFactory = ->
	country = getCountry()
	window.store.temperature += 0.5
	createNewsItem("Ferd have opened a new car plant in " + country.name)

newsTypes = [
	# closeBorders,
	toggleFlooding,
	oilDeal,
	drought,
	emissionsTarget,
	carFactory,
	banElectricCars,
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
