export oil1 = ->
	window.store.points -= 10
	for region in window.store.models.regions
		region.state.corruption += 2

export oil2 = ->
	window.store.points -= 50
	for region in window.store.models.regions
		region.state.corruption += 2

export removeUpgrade = (toRemove, catKey) ->
	console.log catKey
	l = window.store.availableUpgrades[catKey]
	window.store.availableUpgrades[catKey] = (u for u in l when u.uuid != toRemove.uuid)

# export fakeNews1 = ->
# 	for region in window.store.models.regions
# 		region.state.
