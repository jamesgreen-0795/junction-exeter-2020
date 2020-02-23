# corrution: 11   1/0/6/4
# disinform: 10   1/2/3/4
# infrastru: 15   2/5/3/5
# agricultu: 18   2/3/4/9
export oil1 = ->
	window.store.points -= 60
	for region in window.store.models.regions
		region.state.corruption += 0
		region.state.disinformation += 0
		region.state.infrastructure += 1
		region.state.agriculture += 0

export oil2 = ->
	window.store.points -= 120
	for region in window.store.models.regions
		region.state.corruption += 0
		region.state.disinformation += 0
		region.state.infrastructure += 2
		region.state.agriculture += 0

export oil3 = ->
	window.store.points -= 750
	for region in window.store.models.regions
		region.state.corruption += 2
		region.state.disinformation += 0
		region.state.infrastructure += 1
		region.state.agriculture += 0

export oil4 = ->
	window.store.points -= 150
	for region in window.store.models.regions
		region.state.corruption += 2
		region.state.disinformation += 0
		region.state.infrastructure += 2
		region.state.agriculture += 2

export transport1 = ->
	window.store.points -= 40
	for region in window.store.models.regions
		region.state.corruption += 1
		region.state.disinformation += 0
		region.state.infrastructure += 1
		region.state.agriculture += 0

export transport2 = ->
	window.store.points -= 75
	for region in window.store.models.regions
		region.state.corruption += 0
		region.state.disinformation += 1
		region.state.infrastructure += 1
		region.state.agriculture += 0

export transport3 = ->
	window.store.points -= 300
	for region in window.store.models.regions
		region.state.corruption += 3
		region.state.disinformation += 2
		region.state.infrastructure += 0
		region.state.agriculture += 0

export transport4 = ->
	window.store.points -= 600
	for region in window.store.models.regions
		region.state.corruption += 0
		region.state.disinformation += 0
		region.state.infrastructure += 3
		region.state.agriculture += 1

export fake1 = ->
	window.store.points -= 7
	for region in window.store.models.regions
		region.state.corruption += 0
		region.state.disinformation += 1
		region.state.infrastructure += 0
		region.state.agriculture += 0

export fake2 = ->
	window.store.points -= 30
	for region in window.store.models.regions
		region.state.corruption += 0
		region.state.disinformation += 1
		region.state.infrastructure += 0
		region.state.agriculture += 0

export fake3 = ->
	window.store.points -= 100
	for region in window.store.models.regions
		region.state.corruption += 0
		region.state.disinformation += 1
		region.state.infrastructure += 0
		region.state.agriculture += 1

export fake4 = ->
	window.store.points -= 175
	for region in window.store.models.regions
		region.state.corruption += 1
		region.state.disinformation += 1
		region.state.infrastructure += 0
		region.state.agriculture += 1

export beef1 = ->
	window.store.points -= 15
	for region in window.store.models.regions
		region.state.corruption += 0
		region.state.disinformation += 0
		region.state.infrastructure += 0
		region.state.agriculture += 2

export beef2 = ->
	window.store.points -= 225
	for region in window.store.models.regions
		region.state.corruption += 0
		region.state.disinformation += 0
		region.state.infrastructure += 2
		region.state.agriculture += 3

export beef3 = ->
	window.store.points -= 450
	for region in window.store.models.regions
		region.state.corruption += 1
		region.state.disinformation += 0
		region.state.infrastructure += 2
		region.state.agriculture += 3

export beef4 = ->
	window.store.points -= 1000
	for region in window.store.models.regions
		region.state.corruption += 1
		region.state.disinformation += 3
		region.state.infrastructure += 0
		region.state.agriculture += 5


export removeUpgrade = (toRemove, catKey) ->
	l = window.store.availableUpgrades[catKey]
	window.store.availableUpgrades[catKey] = (u for u in l when u.uuid != toRemove.uuid)

# export fakeNews1 = ->
# 	for region in window.store.models.regions
# 		region.state.
