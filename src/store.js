const uuid = require('uuid/v4');

window.store = {
    currentFrame: 0,
	newsfeed: [],
	countries: [
		{
			uuid: uuid(),
			timestamp: Date.now(),
			name: "France",
			state: {
				"openBorders": true,
				"flooding": false
			}
		},
		{
			uuid: uuid(),
			timestamp: Date.now(),
			name: "Germany",
			state: {
				"openBorders": true,		
				"flooding": false
			}
		},
		{
			uuid: uuid(),
			timestamp: Date.now(),
			name: "The United Kingdom",
			state: {
				"openBorders": true,
				"flooding": false
			}
		},
	]
};
