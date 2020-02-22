export oil1 = ->
	for region in window.store.models.regions
		region.state.corruption += 2

export removeUpgrade = (toRemove) ->
	window.store.availableUpgrades = (u for u in window.store.availableUpgrades when u.name != toRemove.name)

# export fakeNews1 = ->
# 	for region in window.store.models.regions
# 		region.state.
