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
                name: "Coal Mining",
                message: "Open new coal mines, increasing the world wide supply of coal.",
                onPurchase: window.mutations.upgrades.oil1,
                points: 60
            },
            {
                uuid: uuid(),
                name: "Coal Power Plant Research",
                message: "Discover new, more cost effective ways to cut corners in burning coal.",
                onPurchase: window.mutations.upgrades.oil2,
                points: 120
            },
            {
                uuid: uuid(),
                name: "Oil Lobbying",
                message: "Bribe government officials to support the expansion of the oil industry.",
                onPurchase: window.mutations.upgrades.oil3,
                points: 750
            },
            {
                uuid: uuid(),
                name: "Artic Oil Reserves",
                message: "Pass international law to allow the drilling of oil in the artic.",
                onPurchase: window.mutations.upgrades.oil4,
                points: 150
            }
		],
        "transport": [
            {
                uuid: uuid(),
                name: "Public Transportation Strike",
                message: "Bribe Unions to go on stike.",
                onPurchase: window.mutations.upgrades.transport1,
                points: 40
            },
            {
                uuid: uuid(),
                name: "Oil propelled Transport",
                message: "Invest in local transport companies, by subsidising new fleets of oil propelled transportation.",
                onPurchase: window.mutations.upgrades.transport2,
                points: 75
            },
            {
                uuid: uuid(),
                name: "Fake Emission Tests",
                message: "Procure a car company and program cars to fake emission standards.",
                onPurchase: window.mutations.upgrades.transport3,
                points: 300
            },
            {
                uuid: uuid(),
                name: "Cheaper Jet Fuel",
                message: "Get more people flying by developing a new, cheaper airplane.\
                        increasing competition, driving down the cost to fly",
                onPurchase: window.mutations.upgrades.transport4,
                points: 600
            }
        ],
        "fake": [
            {
                uuid: uuid(),
                name: "Veganism cuts your life expectancy in half.",
                message: "Title of the latest issue of The Daily Fact.",
                onPurchase: window.mutations.upgrades.fake1,
                points: 7
            },
            {
                uuid: uuid(),
                name: "Alien abductions NUMBER ONE cause of climate change.",
                message: "Clickbait headline on thedailybuzz.co.uk.",
                onPurchase: window.mutations.upgrades.fake2,
                points: 30
            },
            {
                uuid: uuid(),
                name: "Micro Plastics found to be nuturient rich food source for fish.",
                message: "Viral social media post on the book of faces.",
                onPurchase: window.mutations.upgrades.fake3,
                points: 100
            },
            {
                uuid: uuid(),
                name: "Just throw your rubbish in the ocean, it'll end up there anyways.",
                message: "Off handed comment by the head of the UN.",
                onPurchase: window.mutations.upgrades.fake4,
                points: 175
            }
        ],
        "beef": [
            {
                uuid: uuid(),
                name: "Fast Food",
                message: "Start a new meat friendly fast food",
                onPurchase: window.mutations.upgrades.beef1,
                points: 15
            },
            {
                uuid: uuid(),
                name: "Fishing Trawlers",
                message: "Increase the number of ships trawling the ocean for fish.",
                onPurchase: window.mutations.upgrades.beef2,
                points: 225
            },
            {
                uuid: uuid(),
                name: "Buring of the Amazon",
                message: "Burn down parts of the amazon to allow more room for cattle.",
                onPurchase: window.mutations.upgrades.beef3,
                points: 450
            },
            {
                uuid: uuid(),
                name: "Vegetarianism is Sin",
                message: "World religious leader receives a message from a higher power stating that not eating meat everyday is a sin.",
                onPurchase: window.mutations.upgrades.beef4,
                points: 1000
            }
        ],
	},
	points: 10,
    maxPoints: 10000,
    temperature: 0,
    fuzzTemperature: 15,
    maxTemperature: 5,
};
