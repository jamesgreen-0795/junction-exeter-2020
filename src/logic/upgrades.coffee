export oil1 = ->
	for region in window.store.models.regions
		region.state.corruption += 2

# export fakeNews1 = ->
# 	for region in window.store.models.regions
# 		region.state.