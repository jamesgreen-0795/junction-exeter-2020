const uuid = require('uuid/v4');

window.store = {
    currentFrame: 0,
	newsfeed: [],
	models: {
        regions: require("./models/regions").default,
    }
};
