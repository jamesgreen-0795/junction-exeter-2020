window.mutations = {
    upgrades: require "./upgrades.coffee"
    useToken: (token) ->
        window.store.points += token.points
        token.timestamp = 0

}
