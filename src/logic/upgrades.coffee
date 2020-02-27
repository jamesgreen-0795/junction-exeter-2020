# corrution: 11   1/0/6/4
# disinform: 10   1/2/3/4
# infrastru: 15   2/5/3/5
# agricultu: 18   2/3/4/9
export oil1 = ->
	window.store.points -= window.store.availableUpgrades["oil"][0].points
	for region in window.store.models.regions
		region.state.corruption += 0
		region.state.disinformation += 0
		region.state.infrastructure += 1
		region.state.agriculture += 0

export oil2 = ->
	window.store.points -= window.store.availableUpgrades["oil"][1].points
	for region in window.store.models.regions
		region.state.corruption += 0
		region.state.disinformation += 0
		region.state.infrastructure += 2
		region.state.agriculture += 0

export oil3 = ->
	window.store.points -= window.store.availableUpgrades["oil"][2].points
	for region in window.store.models.regions
		region.state.corruption += 2
		region.state.disinformation += 0
		region.state.infrastructure += 1
		region.state.agriculture += 0

export oil4 = ->
	window.store.points -= window.store.availableUpgrades["oil"][3].points
	for region in window.store.models.regions
		region.state.corruption += 2
		region.state.disinformation += 0
		region.state.infrastructure += 2
		region.state.agriculture += 2

export transport1 = ->
	window.store.points -= window.store.availableUpgrades["transport"][0].points
	for region in window.store.models.regions
		region.state.corruption += 1
		region.state.disinformation += 0
		region.state.infrastructure += 1
		region.state.agriculture += 0

export transport2 = ->
	window.store.points -= window.store.availableUpgrades["transport"][1].points
	for region in window.store.models.regions
		region.state.corruption += 0
		region.state.disinformation += 1
		region.state.infrastructure += 1
		region.state.agriculture += 0

export transport3 = ->
	window.store.points -= window.store.availableUpgrades["transport"][2].points
	for region in window.store.models.regions
		region.state.corruption += 3
		region.state.disinformation += 2
		region.state.infrastructure += 0
		region.state.agriculture += 0

export transport4 = ->
	window.store.points -= window.store.availableUpgrades["transport"][3].points
	for region in window.store.models.regions
		region.state.corruption += 0
		region.state.disinformation += 0
		region.state.infrastructure += 3
		region.state.agriculture += 1

export fake1 = ->
	window.store.points -= window.store.availableUpgrades["fake"][0].points
	for region in window.store.models.regions
		region.state.corruption += 0
		region.state.disinformation += 1
		region.state.infrastructure += 0
		region.state.agriculture += 0

export fake2 = ->
	window.store.points -= window.store.availableUpgrades["fake"][1].points
	for region in window.store.models.regions
		region.state.corruption += 0
		region.state.disinformation += 1
		region.state.infrastructure += 0
		region.state.agriculture += 0

export fake3 = ->
	window.store.points -= window.store.availableUpgrades["fake"][2].points
	for region in window.store.models.regions
		region.state.corruption += 0
		region.state.disinformation += 1
		region.state.infrastructure += 0
		region.state.agriculture += 1

export fake4 = ->
	window.store.points -= window.store.availableUpgrades["fake"][3].points
	for region in window.store.models.regions
		region.state.corruption += 1
		region.state.disinformation += 1
		region.state.infrastructure += 0
		region.state.agriculture += 1

export beef1 = ->
	window.store.points -= window.store.availableUpgrades["beef"][0].points
	for region in window.store.models.regions
		region.state.corruption += 0
		region.state.disinformation += 0
		region.state.infrastructure += 0
		region.state.agriculture += 2

export beef2 = ->
	window.store.points -= window.store.availableUpgrades["beef"][1].points
	for region in window.store.models.regions
		region.state.corruption += 0
		region.state.disinformation += 0
		region.state.infrastructure += 2
		region.state.agriculture += 3

export beef3 = ->
	window.store.points -= window.store.availableUpgrades["beef"][2].points
	for region in window.store.models.regions
		region.state.corruption += 1
		region.state.disinformation += 0
		region.state.infrastructure += 2
		region.state.agriculture += 3

export beef4 = ->
	window.store.points -= window.store.availableUpgrades["beef"][3].points
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
