utils = require './utils.coffee'
enviroActivists = ["Pink Peace","WWZ", "Extinction Stoppers"]
badCarBrands = ["Ferd","Tayata","Handa","Renot","VMW","Markedes"]
goodCarBrands = ["Bestla", "E-Autos", "iCar"]


prevEventTime = 0
eventSpacing = 0

export getNews = ->
	if window.store.frameTime - prevEventTime > eventSpacing
		prevEventTime = window.store.frameTime
		eventSpacing = 1200 + (100-window.store.temperature) * 38 + (Math.random() - 0.5) * 500
		doEvent()

toggleFlooding = (country) ->
	if country.state.flooding || Math.random() < 0.3
		if country.state.flooding
			floodedCountry = country
		else
			floodedCountry = c for c in window.store.models.regions when c.state.flooding
		if floodedCountry?
			floodedCountry.state.flooding = false
			createNewsItem(floodedCountry.name + " has stopped flooding.")
			eventSpacing *= 0.5 # make next event happen twice as fast
		else
			false
	else
		window.store.temperature += 1
		country.state.flooding = true
		country.state.activeToken = {
			timestamp: Date.now(),
			type: "flooding"
			points: 25,
			icon: "svg-impacts-flooding",
			color: "037ffc"
		}
		createNewsItem("Severe flooding in " + country.name + ".")

toggleWildfires = (country) ->
	if country.state.wildfire || Math.random() < 0.3
		if country.state.wildfire
			fireCountry = country
		else
			fireCountry = c for c in window.store.models.regions when c.state.wildfire
		if fireCountry?
			fireCountry.state.wildfire = false
			createNewsItem("Wildfires have ceased in " + fireCountry.name + ".")
			eventSpacing *= 0.5 # make next event happen twice as fast
	else
		window.store.temperature += 1
		country.state.wildfire = true
		country.state.activeToken = {
			timestamp: Date.now(),
			type: "wildfires"
			points: 25,
			icon: "svg-impacts-fire"
		}
		createNewsItem("Wildfires have broken out in " + country.name + ".")

drought = (country) ->
	if Math.floor(Math.random() * 200) < window.store.temperature
			window.store.temperature += 1
			country.state.flooding = true
			events = [" is in drought.",
				" has imposed a hose pipe ban",
				"'s water reserves are at an all time low."]
			country.state.activeToken = {
				timestamp: Date.now(),
				type: "drought"
				points: 25,
				icon: "svg-impacts-drought-brown-plant",
				color: "cc9618"
			}
			createNewsItem(country.name + events[Math.floor(Math.random() * events.length)])
		else
			false

oilDeal = (country) ->
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
			color: "583470"
		}
		createNewsItem(country.name + events[Math.floor(Math.random() * events.length)])
	else
		false

carFactory = (country) ->
	if Math.floor(Math.random() * 8) == 0
		window.store.temperature += 0.5
		events = [" have opened a new factory in " ,
				" have expanded operations in ",
				" hit a new all time sales record in ",
				" have been given a large tax break in "]
		eventString = badCarBrands[Math.floor(Math.random() * badCarBrands.length)] + events[Math.floor(Math.random() * events.length)] + country.name
		country.state.activeToken = {
			timestamp: Date.now(),
			type: "carFactory"
			points: 25,
			icon: "svg-upgrades-car-factory"
			color: "777777"
		}
		createNewsItem(eventString)
	else
		false

banElectricCars = (country) ->
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
			color: "ffeb0a"
		}
		createNewsItem(events[Math.floor(Math.random() * events.length)])
	else
		false

banRenewableEnergy = (country) ->
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
			color: "61b86d"
		}
		createNewsItem(events[Math.floor(Math.random() * events.length)])
	else
		false

closeBorders = (country) ->
	if country.state.openBorders
		country.state.openBorders = false
		if country.name == "Britain"
			createNewsItem("Brexit means brexit, " + country.name + " has closed its borders.")
		else
			createNewsItem(country.name + " has closed its borders.")
		true
	else
		false

climateJournalist = (country) ->
	if country.state.disinformation > 8
		window.store.temperature += 15
		events = ["The UN has reported widespread imprisonment of climate journalists in " + country.name + ".",]
		createNewsItem(events[Math.floor(Math.random() * events.length)])
	else
		false

beefProduction = (country) ->
	if country.state.agriculture > 2
		window.store.temperature += 1
		createNewsItem(country.name + " reports increased beef farming output.")
	else
		false

mcDonalds = (country) ->
	if country.state.agriculture > 6
		window.store.temperature += 2
		createNewsItem("McDennys expands into " + country.name + " and begins importing beef to meet rising demand.")
	else
		false

landClearance = (country) ->
	if country.state.agriculture > 11
		window.store.temperature += 3
		createNewsItem("Mass land clearances for beef farming begin in " + country.name)
	else
		false

cowDomination = (country) ->
	if country.state.agriculture > 18
		window.store.temperature += 4
		createNewsItem("Cows now vastly outnumber humans in " + country.name + " and subsequently have gained citizenship and the right to vote.")
	else
		false


# good
carbonTax = (country) ->
	if country.state.corruption < 5 && window.store.temperature > 60
		window.store.temperature -= 10
		events = [country.name + " has imposed an emergency carbon tax.",]
		createNewsItem(events[Math.floor(Math.random() * events.length)])
	else
		false

emissionsTarget = (country) ->
	if country.state.corruption < 5 && window.store.temperature > 30
		window.store.temperature -= 2
		events = ["During the UN, " + country.name + " announced ambitious climate targets.",
				country.name + " has signed the Paris climate accords.",
				"Within 15 years, " + country.name + " has pledged to ban all petrol cars.",
				country.name + " are in talks with Bestla to open a new electric car factory.",]
		createNewsItem(events[Math.floor(Math.random() * events.length)])
	else
		false

emissionsTargetMet = (country) ->
	if country.state.corruption < 3 && window.store.temperature > 50
		window.store.temperature -= 7
		events = [country.name + " have reached their emissions goals " + Math.round(Math.random()*5) + " years ahead of schedule.",
				country.name + " met their carbon emission goals."]
		createNewsItem(events[Math.floor(Math.random() * events.length)])
	else
		false

carTax = (country) ->
	if country.state.corruption < 4 && country.state.disinformation < 6 == 0 && window.store.temperature > 10
		window.store.temperature -= 1
		events = [country.name + " has implemented low emission zones in major cities.",
				country.name + " has implemented a fossil-fuel powered car tax."]
		createNewsItem(events[Math.floor(Math.random() * events.length)])
	else
		false

transportLimitations = (country) ->
	if country.state.corruption < 6 && window.store.temperature > 10
		window.store.temperature -= 1
		events = [country.name + " has introduced a number plate waiting list.",
				country.name + " has introduced a 1 car per family policy."]
		createNewsItem(events[Math.floor(Math.random() * events.length)])
	else
		false

environmentalOrg = (country) ->
	if country.state.corruption > 7
		window.store.temperature -= 1
		window.store.disinformation -= 1
		createNewsItem(enviroActivists[Math.floor(Math.random() * enviroActivists.length) + "have started an environmental awareness campaign in " + country.name])
	else
		false

coalBan = (country) ->
	if country.state.corruption < 4 && country.state.infrastructure < 8 && window.store.temperature > 10
		window.store.temperature -= 5
		events = [country.name + " has closed all its coal power plants.",
				country.name + " will phase out coal within the year."]
		createNewsItem(events[Math.floor(Math.random() * events.length)])
	else
		false

whalingShipDestroyed = (country) ->
	if country.state.corruption > 8
		window.store.temperature -= 5
		events = [enviroActivists[Math.floor(Math.random() * enviroActivists.length)] + " was found to be behind the recent Whaling ship sinking.",
				enviroActivists[Math.floor(Math.random() * enviroActivists.length)] + " has chained themselves to a whaling ships in " + country.name]
		createNewsItem(events[Math.floor(Math.random() * events.length)])
	else
		false

increaseEleCars = (country) ->
	if country.state.corruption < 7 && window.store.temperature > 10
		window.store.temperature -= 1
		events = [goodCarBrands[Math.floor(Math.random() * goodCarBrands.length)] + " has achieved record sales in " + country.name,
				goodCarBrands[Math.floor(Math.random() * goodCarBrands.length)] + " has opened a new electric car factory in " + country.name]
		createNewsItem(events[Math.floor(Math.random() * events.length)])
	else
		false

megaEleCars = (country) ->
	if country.state.infrastructure > 12 && country.state.corruption < 6 && window.store.temperature > 50
		window.store.temperature -= 30
		events = [goodCarBrands[Math.floor(Math.random() * goodCarBrands.length)] + " has had a research breakthrough in electric cars"]
		createNewsItem(events[Math.floor(Math.random() * events.length)])
	else
		false

# Events with their probabilities of happening if selected
getEvent = ->
	c = getCountry()
	eventTypes = [
		[toggleFlooding,		1 * !(c.state.wildfire)],
		[toggleWildfires,		1 * !(c.state.flooding)],
		[drought,				(window.store.temperature + 0.1) / 100],
		[oilDeal,				1],
		[banElectricCars,		1],
		[banRenewableEnergy,	1],
		[carFactory,			1],
		#[closeBorders,			1],
		[climateJournalist,		1],
		[beefProduction,		1],
		[mcDonalds,				1],
		[landClearance,			0],
		[cowDomination,			0],
		[carbonTax,				1],
		[emissionsTarget,		1],
		[emissionsTargetMet,	1],
		[carTax,				1],
		[transportLimitations,	1],
		[coalBan,				1],
		[whalingShipDestroyed,	1],
		[increaseEleCars,		1],
		[megaEleCars,			1],
		]
	eventTypes = (e for e in eventTypes when e[1] > 0) # remove impossible events
	[event, prob] = eventTypes[Math.floor(Math.random() * eventTypes.length)]
	while true
		if Math.random() < prob
			return event(c)
		else
			[event, prob] = eventTypes[Math.floor(Math.random() * eventTypes.length)]

doEvent = ->
	if getEvent()
		true
	else
		doEvent()


createNewsItem = (msg) ->
	item = utils.createStoreItem()
	item.message = msg
	window.store.newsfeed.push(item)
	true

getCountry = ->
	if false
		countryList = ["Russia"]
		countryName = countryList[Math.floor(Math.random() * countryList.length)]
		for i in [0..window.store.models.regions.length - 1]
			if window.store.models.regions[i].name == countryName
				return window.store.models.regions[i]
	cCount = window.store.models.regions.length
	window.store.models.regions[Math.floor(Math.random() * cCount)]
