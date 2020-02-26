export dev = ->
    #fpscounter()
    return false

fps = 0
prevFPSFrame = 0
prevFPSTime = 0
fpscounter = ->
	if window.store.frameTime - prevFPSTime > 1000
		fps = (window.store.currentFrame - prevFPSFrame) * 1000 / (window.store.frameTime - prevFPSTime)
		prevFPSFrame = window.store.currentFrame
		prevFPSTime = window.store.frameTime
		console.log "fps: " + fps