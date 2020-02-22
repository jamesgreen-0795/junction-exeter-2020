export oil1 = ->
	for region in window.store.regions
		region.state.corruption += 2