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
                message: "Bribe local authorities in some countries to up there oil usage oil power",
				onPurchase: window.mutations.upgrades.oil1,
				price: 10
			},
			{
				uuid: uuid(),
				name: "Oil Lobbying 2",
                message: "Bribe governments officials in some countries to up there oil usage",
				onPurchase: window.mutations.upgrades.oil2,
				price: 50
			},
            {
                uuid: uuid(),
                name: "Oil Lobbying 3",
                message: "Bribe governments officials in most countries around the world to to increase oil usage",
                onPurchase: window.mutations.upgrades.oil2,
                price: 50
            },
            {
                uuid: uuid(),
                name: "Oil Lobbying 4",
                message: "Bribe government officials world wide to utilise oil power",
                onPurchase: window.mutations.upgrades.oil2,
                price: 50
            }
		],
        "fossil": [
            {
                uuid: uuid(),
                name: "Fossil Fuel Exploration 1",
                message: "",
                onPurchase: window.mutations.upgrades.oil1,
                price: 10
            },
            {
                uuid: uuid(),
                name: "Fossil Fuel Exploration 2",
                message: "",
                onPurchase: window.mutations.upgrades.oil2,
                price: 50
            },
            {
                uuid: uuid(),
                name: "Fossil Fuel Exploration 3",
                message: "",
                onPurchase: window.mutations.upgrades.oil2,
                price: 50
            },
            {
                uuid: uuid(),
                name: "Fossil Fuel Exploration 4",
                message: "",
                onPurchase: window.mutations.upgrades.oil2,
                price: 50
            }
        ],
        "fake": [
            {
                uuid: uuid(),
                name: "Disinformation Campaign 1",
                message: "",
                onPurchase: window.mutations.upgrades.oil1,
                price: 10
            },
            {
                uuid: uuid(),
                name: "Disinformation Campaign 2",
                message: "",
                onPurchase: window.mutations.upgrades.oil2,
                price: 50
            },
            {
                uuid: uuid(),
                name: "Disinformation Campaign 3",
                message: "",
                onPurchase: window.mutations.upgrades.oil2,
                price: 50
            },
            {
                uuid: uuid(),
                name: "Disinformation Campaign 4",
                message: "",
                onPurchase: window.mutations.upgrades.oil2,
                price: 50
            }
        ],
        "beef": [
            {
                uuid: uuid(),
                name: "Livestock farming 1",
                onPurchase: window.mutations.upgrades.oil1,
                price: 10
            },
            {
                uuid: uuid(),
                name: "Livestock farming 2",
                onPurchase: window.mutations.upgrades.oil2,
                price: 50
            },
            {
                uuid: uuid(),
                name: "Livestock farming 3",
                onPurchase: window.mutations.upgrades.oil2,
                price: 50
            },
            {
                uuid: uuid(),
                name: "Livestock farming 4",
                onPurchase: window.mutations.upgrades.oil2,
                price: 50
            }
        ],
	},
	points: 0,
    maxPoints: 10000,
    temperature: 0,
    fuzzTemperature: 15,
    maxTemperature: 5,
};
