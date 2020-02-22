const uuid = require('uuid/v4');

window.store = {
    currentFrame: 0,
	newsfeed: [],
	models: {
        countries: require("./models/countries").default,
    }
};
