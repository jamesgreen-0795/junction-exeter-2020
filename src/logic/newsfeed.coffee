utils = require './utils.coffee'

export getNews = ->
	if (Math.random()) < 0.1
		doEvent()

toggleFlooding = ->
	if Math.floor(Math.random() * 2)
		country = c for c in window.store.models.regions when c.flooding
		if country
			country.state.flooding = false
			createNewsItem(country.name + " has stopped flooding.")
		else
			false
	else
		country = getCountry()
		if Math.floor(Math.random() * 100) < window.store.temperature
			country.state.flooding = true
			window.store.points += 10
			country.state.activeToken = {
				timestamp: Date.now(),
				type: "flooding"
				points: 25,
			}
			createNewsItem("Severe flooding in " + country.name + ".")
		else
			true

toggleWildfires = ->
	country = getCountry()
	if country.state.wildfire
		country.state.wildfire = false
		createNewsItem("Wildfires have ceased in " + country.name + ".")
	else
		if Math.floor(Math.random() * 150) < window.store.temperature
			country.state.wildfire = true
			window.store.points += 15
			country.state.activeToken = {
				timestamp: Date.now(),
				type: "wildfires"
				points: 25,
			}
			createNewsItem("Wildfires have broken out in " + country.name + ".")
		else
			true


emissionsTarget = ->
	country = getCountry()
	if country.state.corruption < 5 and window.store.temperature > 30
		window.store.temperature -= 2
		events = ["During the UN, " + country.name + " announced ambitious climate targets.",
				country.name + " has signed the Paris climate accords.",
				"Within 15 years, " + country.name + " has pledged to ban all petrol cars.",
				country.name + " are in talks with Bestla to open a new electric car factory.",
				country.name + " have reached their emissions goals " + Math.round(Math.random()*5) + " years ahead of schedule."]
		createNewsItem(events[Math.floor(Math.random() * events.length)])
	else
		false

drought = ->
	country = getCountry()
	if Math.floor(Math.random() * 200) < window.store.temperature
			country.state.flooding = true
			events = [" is in drought.",
				" has imposed a hose pipe ban",
				"'s water reserves are at an all time low."]
			country.state.activeToken = {
				timestamp: Date.now(),
				type: "drought"
				points: 25,
			}
			createNewsItem(country.name + events[Math.floor(Math.random() * events.length)])
		else
			true

oilDeal = ->
	country = getCountry()
	if country.state.corruption > 2 && country.state.hasOil
		country.state.hasOil = false
		window.store.temperature += 1
		window.store.points += 50
		events = [" has started to increase investment in oil.",
				" has increased its oil exports.",
				" has given CrudeInc increased oil drilling rights.",
				" has started a national oil company",
				" approved Petroleum International's national expansion plans."]
		country.state.activeToken = {
			timestamp: Date.now(),
			type: "oilDeal"
			points: 25,
		}
		createNewsItem(country.name + events[Math.floor(Math.random() * events.length)])
	else
		false

banElectricCars = ->
	country = getCountry()
	if country.state.corruption > 4 && !country.state.electicCarsBanned
		country.state.electicCarsBanned = true
		window.store.temperature += 2
		window.store.points += 100
		events = ["The government of " + country.name + " has banned electric cars over fears of toenail cancer.",
			country.name + " has banned electric transport over fears of reduced oil profits."]
		country.state.activeToken = {
			timestamp: Date.now(),
			type: "banElectricCars"
			points: 25,
		}
		createNewsItem(events[Math.floor(Math.random() * events.length)])
	else
		false

banRenewableEnergy = ->
	country = getCountry()
	if country.state.corruption > 5 && !country.state.renewableEnergyBanned
		country.state.renewableEnergyBanned = true
		window.store.temperature += 2
		window.store.points += 150
		events = [country.name + " has banned wind turbines over fears of sub sonic noises",
			country.name + " has banned home solar panels."]
		country.state.activeToken = {
			timestamp: Date.now(),
			type: "banRenewableEnergy"
			points: 25,
		}
		createNewsItem(events[Math.floor(Math.random() * events.length)])
	else
		false

closeBorders = ->
	country = getCountry()
	if country.state.openBorders
		country.state.openBorders = false
		country.state.activeToken = {
			timestamp: Date.now(),
			type: "closeBorders"
			points: 25,
		}
		if country.name == "Britain"
			createNewsItem("Brexit means brexit, " + country.name + " has closed its borders.")
		else
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
	country.state.activeToken = {
		timestamp: Date.now(),
		type: "carFactory"
		points: 25,
	}
	createNewsItem(eventString)

newsTypes = [
	# closeBorders,
	toggleFlooding,
	oilDeal,
	drought,
	emissionsTarget,
	carFactory,
	banElectricCars,
	toggleWildfires
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
	cCount = window.store.models.regions.lengthj
	country = window.store.models.regions[Math.floor(Math.random() * cCount)]

	if Math.random() < 0.5
		countryList = ["Britain", "Usa", "South Africa", "Russia", "China", "Canada", "Australia", "Brazil", "India",
			"Argentina", "Kazakhstan", "Algeria"]
		countryName = countryList[Math.floor(Math.random() * countryList.length)]
		for i in [0..window.store.models.regions.length - 1]
			if window.store.models.regions[i].name == countryName
				return window.store.models.regions[i]
	return window.store.models.regions[Math.floor(Math.random() * cCount)]
