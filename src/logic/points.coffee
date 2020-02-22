export allocatePoints = ->
	if Math.random() < 0.1 && (r for r in window.store.models.regions when r.state.flooding).length > 0
		window.store.points++