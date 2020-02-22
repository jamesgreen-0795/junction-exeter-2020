const uuid = require('uuid/v4');

export default [
    {
        uuid: uuid(),
        timestamp: Date.now(),
        name: "France",
        state: {
            "openBorders": true,
            "flooding": false
        }
    },
    {
        uuid: uuid(),
        timestamp: Date.now(),
        name: "Germany",
        state: {
            "openBorders": true,
            "flooding": false
        }
    },
    {
        uuid: uuid(),
        timestamp: Date.now(),
        name: "The United Kingdom",
        state: {
            "openBorders": true,
            "flooding": false
        }
    },
]
