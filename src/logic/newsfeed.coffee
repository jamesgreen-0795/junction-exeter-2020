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
	if country.state.corruption < 5 and window.store.temperature > 10
		window.store.temperature -= 2
		createNewsItem("Today, at the UN, " + country.name + " announced ambitious climate targets.")
	else
		false

oilDeal = ->
	country = getCountry()
	if country.state.corruption > 2 && country.state.hasOil
		country.state.hasOil = false
		window.store.temperature += 1
		window.store.points += 50
		
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

carFactory = ->
	country = getCountry()
	window.store.temperature += 0.5
	carBrands = ["Ferd","Tayata","Handa","Renot","VMW","Markedes"]
	events = [" have opened a new factory in " ,
			" have expanded operations in ",
			" hit a new all time sales record in ",
			" have been given a large tax break in "]
	eventString = carBrands[Math.floor(Math.random() * carBrands.length)] + events[Math.floor(Math.random() * events.length)] + country.name
	createNewsItem(eventString)

newsTypes = [
	# closeBorders,
	toggleFlooding,
	oilDeal,
	emissionsTarget,
	carFactory
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
