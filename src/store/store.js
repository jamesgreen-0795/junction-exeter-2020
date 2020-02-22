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
	availableUpgrades: [
		{
			uuid: uuid(),
			name: "Oil Lobbying 1",
			onPurchase: window.mutations.upgrades.oil1,
			price: 10
		}
	],
	points: 0,
	temperature: 12,
};
