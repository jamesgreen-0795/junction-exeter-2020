window.mutations = {
	upgrades: require "./upgrades.coffee"
	useToken: (token) ->
		if !token.clicked
			token.clicked = true
			window.store.points += token.points
			token.timestamp = 0
			console.log "token used"
}
