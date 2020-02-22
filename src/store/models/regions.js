const uuid = require('uuid/v4');

const generator = entries => entries.map(entry => {

    return {
        uuid: uuid(),
        timestamp: Date.now(),
        name: null,
        classIdentifier: null,
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
        classIdentifier: ".europe",
    },
    {
        name: "North America",
        classIdentifier: ".north-america",
    },
    {
        name: "South America",
        classIdentifier: ".south-america",
    },
    {
        name: "Asia",
        classIdentifier: ".asia",
    },
    {
        name: "Oceania",
        classIdentifier: ".oceania",
    },
    {
        name: "Africa",
        classIdentifier: ".africa",
    },
])
