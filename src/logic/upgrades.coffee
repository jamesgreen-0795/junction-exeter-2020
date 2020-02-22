export oil1 = ->
	for region in window.store.models.regions
		region.state.corruption += 2
	window.store.carbon += 5
