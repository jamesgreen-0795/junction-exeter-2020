export modulateClimate = ->
	if window.store.currentFrame % 50 == 0
		doModulate()

getWeek = ->
	((window.store.currentFrame / 50 ) % 52)

getSeasonOffset = ->
	Math.sin(getWeek())

doModulate = ->
	for region in window.store.models.regions
		region.climate.temperature += region.climate.temperature * getSeasonOffset()
		console.log(region.name + ": " + region.climate.temperature)