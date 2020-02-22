export modulateClimate = ->
	if window.store.currentFrame % 50 == 0
		#doModulate()
		week = window.store.currentFrame % (50 * 52)/50
		console.log(getWeekTemperature(week,0,0,0,15,10))

getWeek = ->
	((window.store.currentFrame / 50 ) % 52)

getSeasonOffset = ->
	Math.sin(getWeek())

doModulate = ->
	for region in window.store.models.regions
		region.climate.temperature += region.climate.temperature * getSeasonOffset()
		console.log(region.name + ": " + region.climate.temperature)

export fuzzYearTemperature = (temp) ->
	magnitudeSign = if Math.random() < 0.5 then 1 else -1
	rnd = Math.random()
	offset = (Math.pow(32,rnd) - 1) / (32*4)
	offset = offset * magnitudeSign
	return temp + offset

getWeekTemperature = (week, prevYr, currYr, nextYr, seasonVar, weekVar) ->
	yrPercent = (week % 52) / 52

	seasonFade = (seasonVar / 2) * Math.sin(2 * Math.PI * yrPercent)

	yrFade = 0.25 * (1 + Math.cos(2 * Math.PI * yrPercent))
	if yrPercent < 0.5
		weightedYr = yrFade * prevYr + (1-yrFade) * currYr
	else
		weightedYr = yrFade * nextYr + (1-yrFade) * currYr
	weekRand = weekVar * (Math.random() - 0.5)
	return weightedYr + seasonFade + weekRand
