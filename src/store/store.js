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
				points: 10
			},
			{
				uuid: uuid(),
				name: "Oil Lobbying 2",
                message: "Bribe governments officials in some countries to up there oil usage",
				onPurchase: window.mutations.upgrades.oil2,
				points: 50
			},
            {
                uuid: uuid(),
                name: "Oil Lobbying 3",
                message: "Bribe governments officials in most countries around the world to to increase oil usage",
                onPurchase: window.mutations.upgrades.oil2,
                points: 50
            },
            {
                uuid: uuid(),
                name: "Oil Lobbying 4",
                message: "Bribe government officials world wide to utilise oil power",
                onPurchase: window.mutations.upgrades.oil2,
                points: 50
            }
		],
        "fossil": [
            {
                uuid: uuid(),
                name: "Coal Mining",
                message: "Open new coal mines, increasing the world wide supply of coal.",
                onPurchase: window.mutations.upgrades.oil1,
                points: 10
            },
            {
                uuid: uuid(),
                name: "Coal Power Plant Research",
                message: "Discover new, more cost effective ways to cut corners in burning coal.",
                onPurchase: window.mutations.upgrades.oil2,
                points: 50
            },
            {
                uuid: uuid(),
                name: "Developing",
                message: "",
                onPurchase: window.mutations.upgrades.oil2,
                points: 50
            },
            {
                uuid: uuid(),
                name: "Artic Oil Reserves",
                message: "Pass international law to allow the drilling of oil in the artic.",
                onPurchase: window.mutations.upgrades.oil2,
                points: 50
            }
        ],
        "fake": [
            {
                uuid: uuid(),
                name: "Disinformation Campaign 1",
                message: "",
                onPurchase: window.mutations.upgrades.oil1,
                points: 10
            },
            {
                uuid: uuid(),
                name: "Disinformation Campaign 2",
                message: "",
                onPurchase: window.mutations.upgrades.oil2,
                points: 50
            },
            {
                uuid: uuid(),
                name: "Disinformation Campaign 3",
                message: "",
                onPurchase: window.mutations.upgrades.oil2,
                points: 50
            },
            {
                uuid: uuid(),
                name: "Disinformation Campaign 4",
                message: "",
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
