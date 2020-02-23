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
				points: 10
			},
			{
				uuid: uuid(),
				name: "Oil Lobbying 2",
				onPurchase: window.mutations.upgrades.oil2,
				points: 50
			},
            {
                uuid: uuid(),
                name: "Oil Lobbying 3",
                onPurchase: window.mutations.upgrades.oil2,
                points: 50
            },
            {
                uuid: uuid(),
                name: "Oil Lobbying 4",
                onPurchase: window.mutations.upgrades.oil2,
                points: 50
            }
		],
        "fossil": [
            {
                uuid: uuid(),
                name: "Fossil Fuel Exploration 1",
                onPurchase: window.mutations.upgrades.oil1,
                points: 10
            },
            {
                uuid: uuid(),
                name: "Fossil Fuel Exploration 2",
                onPurchase: window.mutations.upgrades.oil2,
                points: 50
            },
            {
                uuid: uuid(),
                name: "Fossil Fuel Exploration 3",
                onPurchase: window.mutations.upgrades.oil2,
                points: 50
            },
            {
                uuid: uuid(),
                name: "Fossil Fuel Exploration 4",
                onPurchase: window.mutations.upgrades.oil2,
                points: 50
            }
        ],
        "fake": [
            {
                uuid: uuid(),
                name: "Disinformation Campaign 1",
                onPurchase: window.mutations.upgrades.oil1,
                points: 10
            },
            {
                uuid: uuid(),
                name: "Disinformation Campaign 2",
                onPurchase: window.mutations.upgrades.oil2,
                points: 50
            },
            {
                uuid: uuid(),
                name: "Disinformation Campaign 3",
                onPurchase: window.mutations.upgrades.oil2,
                points: 50
            },
            {
                uuid: uuid(),
                name: "Disinformation Campaign 4",
                onPurchase: window.mutations.upgrades.oil2,
                points: 50
            }
        ],
        "beef": [
            {
                uuid: uuid(),
                name: "Livestock farming 1",
                onPurchase: window.mutations.upgrades.oil1,
                points: 10
            },
            {
                uuid: uuid(),
                name: "Livestock farming 2",
                onPurchase: window.mutations.upgrades.oil2,
                points: 50
            },
            {
                uuid: uuid(),
                name: "Livestock farming 3",
                onPurchase: window.mutations.upgrades.oil2,
                points: 50
            },
            {
                uuid: uuid(),
                name: "Livestock farming 4",
                onPurchase: window.mutations.upgrades.oil2,
                points: 50
            }
        ],
	},
	points: 10,
    maxPoints: 10000,
    temperature: 0,
    fuzzTemperature: 15,
    maxTemperature: 5,
};
