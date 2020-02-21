const uuid = require('uuid/v4');

window.store = {
    newsfeed: [
        {
            uuid: uuid(),
            message: "Spain has closed its borders",
        },
        {
            uuid: uuid(),
            message: "Canada has closed its borders",
        },
        {
            uuid: uuid(),
            message: "France has closed its borders",
        },
    ],
};
