export modulateClimate = ->
	if window.store.currentFrame % (80) == 1
		window.store.fuzzTemperature = fuzzYearTemperature(window.store.temperature)
	if window.store.currentFrame % 50 == 0
		#doModulate()
		week = window.store.currentFrame % (50 * 52)/50
		#console.log(getWeekTemperature(week,0,15,10))

getWeek = ->
	((window.store.currentFrame / 50 ) % 52)

getSeasonOffset = ->
	Math.sin(getWeek())

doModulate = ->
	for region in window.store.models.regions
		region.climate.temperature += region.climate.temperature * getSeasonOffset()
		console.log(region.name + ": " + region.climate.temperature)

fuzzYearTemperature = (tempPoints) ->
	temp = 15 + (tempPoints/20) # 0=0 100=5
	magnitudeSign = if Math.random() < 0.5 then 1 else -1
	rnd = Math.random()
	offset = (Math.pow(32,rnd) - 1) / (32*4)
	offset = offset * magnitudeSign
	fuzzy = Math.round((temp + offset) * 100)/100
	if fuzzy >= 20 && window.store.temperature < 20
		return Math.round((19.99 - (Math.random()/3)) * 100)/100
	else
		return fuzzy

getWeekTemperature = (week, currYr, seasonVar, weekVar) ->
	yrPercent = (week % 52) / 52

	seasonFade = (seasonVar / 2) * Math.sin(2 * Math.PI * yrPercent)

	weekRand = weekVar * (Math.random() - 0.5)
	return currYr + seasonFade + weekRand
