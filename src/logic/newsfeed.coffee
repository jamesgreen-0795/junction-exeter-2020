utils = require './utils.coffee'

export getNews = ->
	if (Math.random()) < 0.4
		doEvent()

toggleFlooding = ->
	if Math.floor(Math.random() * 2)
		country = c for c in window.store.models.regions when c.state.flooding
		if country?
			country.state.flooding = false
			createNewsItem(country.name + " has stopped flooding.")
		else
			false
	else
		country = getCountry()
		if Math.floor(Math.random() * 100) < window.store.temperature
			country.state.flooding = true
			country.state.activeToken = {
				timestamp: Date.now(),
				type: "flooding"
				points: 25,
				icon: "svg-impacts-flooding",
			}
			createNewsItem("Severe flooding in " + country.name + ".")
		else
			true

toggleWildfires = ->
	if Math.floor(Math.random() * 2)
		country = c for c in window.store.models.regions when c.state.wildfire
		if country?
			country.state.wildfire = false
			createNewsItem("Wildfires have ceased in " + country.name + ".")
	else
		country = getCountry()
		if Math.floor(Math.random() * 150) < window.store.temperature
			country.state.wildfire = true
			country.state.activeToken = {
				timestamp: Date.now(),
				type: "wildfires"
				points: 25,
				icon: "svg-impacts-fire"
			}
			createNewsItem("Wildfires have broken out in " + country.name + ".")
		else
			true

carbonTax = ->
	country = getCountry()
	if country.state.corruption < 5 and window.store.temperature > 60
		window.store.temperature -= 10
		events = [country.name + " has imposed an emergency carbon tax.",]
		createNewsItem(events[Math.floor(Math.random() * events.length)])
	else
		false

emissionsTarget = ->
	country = getCountry()
	if country.state.corruption < 5 and window.store.temperature > 30
		window.store.temperature -= 2
		events = ["During the UN, " + country.name + " announced ambitious climate targets.",
				country.name + " has signed the Paris climate accords.",
				"Within 15 years, " + country.name + " has pledged to ban all petrol cars.",
				country.name + " are in talks with Bestla to open a new electric car factory.",]
		createNewsItem(events[Math.floor(Math.random() * events.length)])
	else
		false

emissionsTargetMet = ->
	country = getCountry()
	if country.state.corruption < 3 and window.store.temperature > 50
		window.store.temperature -= 20
		events = [country.name + " have reached their emissions goals " + Math.round(Math.random()*5) + " years ahead of schedule.",
				country.name + " met their carbon emission goals."]
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
				icon: "svg-impacts-drought-brown-plant",
			}
			createNewsItem(country.name + events[Math.floor(Math.random() * events.length)])
		else
			true

oilDeal = ->
	country = getCountry()
	if country.state.corruption > 2 && country.state.hasOil
		country.state.hasOil = false
		window.store.temperature += 1
		events = [" has started to increase investment in oil.",
				" has increased its oil exports.",
				" has given CrudeInc increased oil drilling rights.",
				" has started a national oil company",
				" approved Petroleum International's national expansion plans."]
		country.state.activeToken = {
			timestamp: Date.now(),
			type: "oilDeal"
			points: 25,
			icon: "svg-upgrades-oilrig",
		}
		createNewsItem(country.name + events[Math.floor(Math.random() * events.length)])
	else
		false

banElectricCars = ->
	country = getCountry()
	if country.state.corruption > 4 && !country.state.electicCarsBanned
		country.state.electicCarsBanned = true
		window.store.temperature += 2
		events = ["The government of " + country.name + " has banned electric cars over fears of toenail cancer.",
			country.name + " has banned electric transport over fears of reduced oil profits."]
		country.state.activeToken = {
			timestamp: Date.now(),
			type: "banElectricCars"
			points: 25,
			icon: "svg-travel-car"
		}
		createNewsItem(events[Math.floor(Math.random() * events.length)])
	else
		false

banRenewableEnergy = ->
	country = getCountry()
	if country.state.corruption > 5 && !country.state.renewableEnergyBanned
		country.state.renewableEnergyBanned = true
		window.store.temperature += 2
		events = [country.name + " has banned wind turbines over fears of sub sonic noises",
			country.name + " has banned home solar panels."]
		country.state.activeToken = {
			timestamp: Date.now(),
			type: "banRenewableEnergy"
			points: 25,
			icon: "svg-impacts-ban-renewable",
		}
		createNewsItem(events[Math.floor(Math.random() * events.length)])
	else
		false

closeBorders = ->
	country = getCountry()
	if country.state.openBorders
		country.state.openBorders = false
		if country.name == "Britain"
			createNewsItem("Brexit means brexit, " + country.name + " has closed its borders.")
		else
			createNewsItem(country.name + " has closed its borders.")
		true
	else
		false

carFactory = ->
	if Math.floor(Math.random() * 10) == 7
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
			icon: "svg-upgrades-car-factory"
		}
		createNewsItem(eventString)
	else
		false

climateJournalist = ->
	country = getCountry()
	if country.state.disinformation > 8 && Math.floor(Math.random() * 5) == 0
		window.store.temperature += 15
		events = ["The UN has reported widespread imprisonment of climate journalists in " + country.name + ".",]
		createNewsItem(events[Math.floor(Math.random() * events.length)])
	else
		false

# good
carTax = ->
	country = getCountry()
	if country.state.corruption < 4 && country.state.disinformation < 6 == 0
		window.store.temperature -= 5
		events = [country.name + " has implemented low emission zones in major cities.",
				country.name + " has implemented a fossil-fuel powered car tax."]
		createNewsItem(events[Math.floor(Math.random() * events.length)])
	else
		false

transportLimitations = ->
	country = getCountry()
	if country.state.corruption < 6 && Math.floor(Math.random() * 2) == 0
		window.store.temperature -= 5
		events = [country.name + " has introduced a number plate waiting list.",
				country.name + " has introduced a 1 car per family policy."]
		createNewsItem(events[Math.floor(Math.random() * events.length)])
	else
		false

environmentalOrg = ->
	country = getCountry()
	if country.state.corruption > 7 && Math.floor(Math.random() * 3) == 0
		window.store.temperature -= 1
		window.store.disinformation -= 1
		events = ["Pink Peace","WWZ", "Extinction Stoppers"]
		createNewsItem(events[Math.floor(Math.random() * events.length) + "have started an environmental awareness campaign in " + country.name])
	else
		false

coalBan = ->
	country = getCountry()
	if country.state.corruption < 4 && Math.floor(Math.random() * 2) == 0
		window.store.temperature -= 3
		events = [country.name + " has implemented low emission zones in major cities.",
				country.name + " has implemented a fossil-fuel powered car tax."]
		createNewsItem(events[Math.floor(Math.random() * events.length)])
	else
		false

whalingShipDestroyed = ->
	country = getCountry()
	if country.state.corruption < 4 && Math.floor(Math.random() * 2) == 0
		window.store.temperature -= 3
		events = [country.name + " has implemented low emission zones in major cities.",
				country.name + " has implemented a fossil-fuel powered car tax."]
		createNewsItem(events[Math.floor(Math.random() * events.length)])
	else
		false


newsTypes = [
	# closeBorders,
	toggleFlooding,
	oilDeal,
	drought,
	emissionsTarget,
	carFactory,
	banElectricCars,
	toggleWildfires,
	carbonTax,
	climateJournalist,
	emissionsTargetMet,
	carTax,
	transportLimitations,
	environmentalOrg,
	coalBan,
	whalingShipDestroyed,
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
