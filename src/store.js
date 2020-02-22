const uuid = require('uuid/v4');

window.store = {
	newsfeed: [],
	countries: [
		{
			uuid: uuid(),
			timestamp: Date.now(),
			name: "France",
			state: {
				"borders": 0
			}
		},
		{
			uuid: uuid(),
			timestamp: Date.now(),
			name: "Germany",
			state: {
				"borders": 0
			}
		},
		{
			uuid: uuid(),
			timestamp: Date.now(),
			name: "The United Kingdom",
			state: {
				"borders": 0
			}
		},
	]
};