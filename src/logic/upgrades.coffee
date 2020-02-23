# corrution: 6    1/0/5/0
# 
export oil1 = ->
	window.store.points -= 60
	for region in window.store.models.regions
		region.state.corruption += 1
		region.state.disinformation += 1
		region.state.infrastructure += 1
		region.state.agriculture += 1

export oil2 = ->
	window.store.points -= 120
	for region in window.store.models.regions
		region.state.temp += 1

export oil3 = ->
	window.store.points -= 750
	for region in window.store.models.regions
		region.state.corruption += 2

export oil4 = ->
	window.store.points -= 150
	for region in window.store.models.regions
		region.state.temp += 2

export transport1 = ->
	window.store.points -= 40
	for region in window.store.models.regions
		region.state.corruption += 1

export transport2 = ->
	window.store.points -= 75
	for region in window.store.models.regions
		region.state.temp += 2

export transport3 = ->
	window.store.points -= 300
	for region in window.store.models.regions
		region.state.corruption += 3

export transport4 = ->
	window.store.points -= 600
	for region in window.store.models.regions
		region.state.temp += 2

export fake1 = ->
	window.store.points -= 7
	for region in window.store.models.regions
		region.state.temp += 2

export fake2 = ->
	window.store.points -= 30
	for region in window.store.models.regions
		region.state.temp += 2

export fake3 = ->
	window.store.points -= 100
	for region in window.store.models.regions
		region.state.temp += 2

export fake4 = ->
	window.store.points -= 175
	for region in window.store.models.regions
		region.state.temp += 2

export beef1 = ->
	window.store.points -= 15
	for region in window.store.models.regions
		region.state.temp += 2

export beef2 = ->
	window.store.points -= 225
	for region in window.store.models.regions
		region.state.temp += 2

export beef3 = ->
	window.store.points -= 450
	for region in window.store.models.regions
		region.state.temp += 2

export beef4 = ->
	window.store.points -= 1000
	for region in window.store.models.regions
		region.state.temp += 2






export removeUpgrade = (toRemove, catKey) ->
	console.log catKey
	l = window.store.availableUpgrades[catKey]
	window.store.availableUpgrades[catKey] = (u for u in l when u.uuid != toRemove.uuid)

# export fakeNews1 = ->
# 	for region in window.store.models.regions
# 		region.state.
