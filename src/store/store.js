const uuid = require('uuid/v4');

window.store = {
    currentFrame: 0,
    currentYear: 1970,
	newsfeed: [],
	models: {
        regions: require("./models/regions").default,
    },
	points: 0,
	temperature: 12,
};
