import uuid from 'uuid/v4'

export createStoreItem = -> {
	uuid: uuid(),
	timestamp: Date.now(),
}

export collectGarbage = (items, timeout) -> 
	(item for item in items when (Date.now() - item.timestamp) < timeout)