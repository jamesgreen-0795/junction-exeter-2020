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
            temperture: 0,
            hasOil: false,
        },
        ...entry,
    };
});

export default generator([
    {
        name: "Europe",
        classIdentifier: ".europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "North America",
        classIdentifier: ".north-america",
        climate: {
            temperature: 22,
            hemisphere: "n"
        },
    },
    {
        name: "South America",
        classIdentifier: ".south-america",
        climate: {
            temperature: 23,
            hemisphere: "s"
        },
    },
    {
        name: "Asia",
        classIdentifier: ".asia",
        climate: {
            temperature: 14,
            hemisphere: "n"
        },
    },
    {
        name: "Oceania",
        classIdentifier: ".oceania",
        climate: {
            temperature: 28,
            hemisphere: "s"
        },
    },
    {
        name: "Africa",
        classIdentifier: ".africa",
        climate: {
            temperature: 32,
            hemisphere: "t"
        },
    },
])
