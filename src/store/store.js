const uuid = require('uuid/v4');

window.store = {
    currentFrame: 0,
    currentYear: 1970,
    currentScreen: "start-screen",
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
                name: "Fossil Fuels 1",
                message: "Coal Mining<br>Open new coal mines, increasing the world wide supply of coal.",
                onPurchase: window.mutations.upgrades.oil1,
                points: 60
            },
            {
                uuid: uuid(),
                name: "Fossil Fuels 2",
                message: "Coal Power Plant Research<br>Discover new, more cost effective ways to cut corners in burning coal.",
                onPurchase: window.mutations.upgrades.oil2,
                points: 120
            },
            {
                uuid: uuid(),
                name: "Fossil Fuels 3",
                message: "Oil Lobbying<br>Bribe government officials to support the expansion of the oil industry.",
                onPurchase: window.mutations.upgrades.oil3,
                points: 750
            },
            {
                uuid: uuid(),
                name: "Fossil Fuels 4",
                message: "Artic Oil Reserves<br>Pass international law to allow the drilling of oil in the artic.",
                onPurchase: window.mutations.upgrades.oil4,
                points: 150
            }
		],
        "transport": [
            {
                uuid: uuid(),
                name: "Transportation 1",
                message: "Public Transportation Strike<br>Bribe Unions to go on stike.",
                onPurchase: window.mutations.upgrades.transport1,
                points: 40
            },
            {
                uuid: uuid(),
                name: "Transportation 2",
                message: "Oil propelled Transport<br>Invest in local transport companies, by subsidising new fleets of oil propelled transportation.",
                onPurchase: window.mutations.upgrades.transport2,
                points: 75
            },
            {
                uuid: uuid(),
                name: "Transportation 3",
                message: "Fake Emission Tests<br>Procure a car company and program cars to fake emission standards.",
                onPurchase: window.mutations.upgrades.transport3,
                points: 300
            },
            {
                uuid: uuid(),
                name: "Transportation 4",
                message: "Cheaper Jet Fuel<br>Get more people flying by developing a new, cheaper airplane.\
                        increasing competition, driving down the cost to fly",
                onPurchase: window.mutations.upgrades.transport4,
                points: 600
            }
        ],
        "fake": [
            {
                uuid: uuid(),
                name: "Disinformation 1",
                message: "Veganism cuts your life expectancy in half.<br>Title of the latest issue of The Daily Fact.",
                onPurchase: window.mutations.upgrades.fake1,
                points: 7
            },
            {
                uuid: uuid(),
                name: "Disinformation 2",
                message: "Alien abductions NUMBER ONE cause of climate change.<br>Clickbait headline on thedailybuzz.co.uk.",
                onPurchase: window.mutations.upgrades.fake2,
                points: 30
            },
            {
                uuid: uuid(),
                name: "Disinformation 3",
                message: "Micro Plastics found to be nuturient rich food source for fish.<br>Viral social media post on the book of faces.",
                onPurchase: window.mutations.upgrades.fake3,
                points: 100
            },
            {
                uuid: uuid(),
                name: "Disinformation 4",
                message: "Just throw your rubbish in the ocean, it'll end up there anyways.<br>Off handed comment by the head of the UN.",
                onPurchase: window.mutations.upgrades.fake4,
                points: 175
            }
        ],
        "beef": [
            {
                uuid: uuid(),
                name: "Agriculture 1",
                message: "Fast Food<br>Start a new meat friendly fast food",
                onPurchase: window.mutations.upgrades.beef1,
                points: 15
            },
            {
                uuid: uuid(),
                name: "Agriculture 2",
                message: "Fishing Trawlers<br>Increase the number of ships trawling the ocean for fish.",
                onPurchase: window.mutations.upgrades.beef2,
                points: 225
            },
            {
                uuid: uuid(),
                name: "Agriculture 3",
                message: "Buring of the Amazon<br>Burn down parts of the amazon to allow more room for cattle.",
                onPurchase: window.mutations.upgrades.beef3,
                points: 450
            },
            {
                uuid: uuid(),
                name: "Agriculture 4",
                message: "Vegetarianism is Sin<br>World religious leader receives a message from a higher power stating that not eating meat everyday is a sin.",
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
