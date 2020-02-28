const uuid = require('uuid/v4');

const isOil = name => {
    var countries_with_oil = [
        "Canada",
        "UEA",
        "Russia",
        "Western Africa",
        "United States",
        "Central Asia",
        "China",
        "Brazil",
        "Central Africa",
        "Spanish South America",
        "Caribbean South America",
        "Central America",
        "The Nordics",
        "India",
        "Indonesia",
        "Middle East",
        "United Kingdom",
        "Eastern Africa",
        "Australia",
        "Northern Africa",
        "Borneo",
        "The Nordics",
        "Asean",
        "Eastern Europe",
        "Pakistan",
        "New Guinea",
        "Southern Europe",
        "Philippines",
        "Caribbean",
        "France",
        "New Zealand",
        "Japan",
        "Central Europe",
        "Southern Africa",
        "The Balkans",
        "Taiwan",
        "Horn of Africa",
        "Afghanistan",
    ];

    var foundCountry = countries_with_oil.find(country => {
        return country.toLowerCase() == name.toLowerCase();
    });

    //return as bool
    return !!foundCountry;

};


const generator = entries => entries.map(entry => {

        return {
            uuid: uuid(),
            timestamp: Date.now(),
            name: null,
            continent: null,
            state: {
                openBorders: true,
                flooding: false,
                temperture: 0,
                corruption: Math.floor(Math.random() * 2), // randomly level 0 or 1
                disinformation: Math.floor(Math.random() * 2), // randomly level 0 or 1
                infrastructure: Math.floor(Math.random() * 2), // randomly level 0 or 1
				agriculture: Math.floor(Math.random() * 2), // randomly level 0 or 1
				hasOil: isOil(entry.name),
                electicCarsBanned: false,
                renewableEnergyBanned: false,
				wildfire: false,
                activeToken: {
                    timestamp: 0,
                    key: null,
                    clicked: false,
                },
            },
            ...entry,
        };
});

export default generator([
    {
        name: "United Kingdom",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "France",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "The Balkans",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Central Europe",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Ireland",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Southern Europe",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "The Nordics",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Eastern Europe",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Central Africa",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Northern Africa",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Horn of Africa",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Madagascar",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Western Africa",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Eastern Africa",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Southern Africa",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Afghanistan",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Borneo",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Asean",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "China",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Japan",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "India",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "New Guinea",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Central Asia",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Philippines",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Mongolia",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Middle East",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Pakistan",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Russia",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Korean Peninsula",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Sri Lanka",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Indonesia",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Taiwan",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Antarctica",
        continent: "antarctica",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Australia",
        continent: "oceania",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "New Zealand",
        continent: "oceania",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Brazil",
        continent: "south america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Caribbean South America",
        continent: "south america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Spanish South America",
        continent: "south america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Alaska",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Canada",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Caribbean",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Greenland",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Hawaii",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Central America",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Usa",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
])
