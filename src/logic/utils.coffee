import uuid from 'uuid/v4'

export createStoreItem = -> {
	uuid: uuid(),
	timestamp: Date.now(),
}

export collectGarbage = (items, timeout) ->
	(item for item in items when (Date.now() - item.timestamp) < timeout)

export cleanUpTokens = () ->
	for c in window.store.models.regions
		if c.state.activeToken
			c.state.activeToken = if Date.now() - 1500 > c.state.activeToken.timestamp then null else c.state.activeToken
