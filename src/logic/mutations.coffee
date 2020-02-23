window.mutations = {
	upgrades: require "./upgrades.coffee"
	useToken: (token) ->
		window.store.points += token.points
		console.log token.region
		token.timestamp = 0
}
