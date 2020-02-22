const uuid = require('uuid/v4');

window.store = {
    currentFrame: 0,
    currentYear: 1970,
	newsfeed: [],
    user: {
        focusedRegionUuid: null,
    },
	models: {
        regions: require("./models/regions").default,
	},
	availableUpgrades: {
		"oil": [
			{
				uuid: uuid(),
				name: "Oil Lobbying 1",
				onPurchase: window.mutations.upgrades.oil1,
				price: 10
			},
			{
				uuid: uuid(),
				name: "Oil Lobbying 2",
				onPurchase: window.mutations.upgrades.oil2,
				price: 50
			}
		],
	},
	points: 0,
    maxPoints: 10000,
    temperature: 0,
    fuzzTemperature: 15,
    maxTemperature: 20,
};
