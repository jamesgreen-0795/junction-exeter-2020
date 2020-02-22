const uuid = require('uuid/v4');

window.store = {
    currentFrame: 0,
	newsfeed: [],
    user: {
        focusedRegionUuid: null,
    },
	models: {
        regions: require("./models/regions").default,
    },
	points: 0,
	carbon: 12,
};
