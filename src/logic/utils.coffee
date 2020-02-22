import uuid from 'uuid/v4'

export createStoreItem = -> {
	uuid: uuid(),
	timestamp: Date.now(),
}