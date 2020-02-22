const uuid = require('uuid/v4');

const generator = entries => entries.map(entry => {
    return {
        uuid: uuid(),
        timestamp: Date.now(),
        name: null,
        state: {
            openBorders: true,
            flooding: false,
        },
        ...entry,
    };
});

export default generator([
    {
        name: "Europe",
    },
    {
        name: "United States",
    },
    {
        name: "Asia",
    },
])
