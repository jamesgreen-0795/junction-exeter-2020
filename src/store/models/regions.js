const uuid = require('uuid/v4');

const isOil = name => {
    var countries_with_oil = [
        "Saudi",
        "Arabia",
        "Iran",
        "Canada",
        "Iraq",
        "UEA",
        "Kuwait",
        "Russia",
        "Libya",
        "Nigeria",
        "United States",
        "Kazakhstan",
        "China",
        "Qatar",
        "Brazil",
        "Algeria",
        "Angola",
        "Spanish South America",
        "Caribbean South America",
        "Central America",
        "Azerbaijan",
        "The Nordics",
        "Oman",
        "India",
        "Egypt",
        "Indonesia",
        "Malaysia",
        "Yeman",
        "United Kingdom",
        "Syria",
        "Uganda",
        "Gabon",
        "Australia",
        "Congo",
        "Chad",
        "Borneo",
        "Equatorial Guinea",
        "Ghana",
        "Romania",
        "Turkmenistan",
        "Uzbekistan",
        "Italy",
        "The Nordics",
        "Tunisia",
        "Asean",
        "Ukraine",
        "Pakistan",
        "Turkey",
        "Cameroon",
        "Belarus",
        "Democratic Republic of the Congo",
        "Albania",
        "New Guinea",
        "Niger",
        "Spain",
        "Germany",
        "Myanmar",
        "Philippines",
        "Poland",
        "Bahrain",
        "Caribbean",
        "Netherlands",
        "Ivory Coast",
        "France",
        "Serbia",
        "Croatia",
        "New Zealand",
        "Japan",
        "Austria",
        "Kyrgyzstan",
        "Georgia",
        "Bangladesh",
        "Hungary",
        "Mauritania",
        "Bulgaria",
        "Czech Republic",
        "South Africa",
        "Israel",
        "Lithuania",
        "Tajikistan",
        "Greece",
        "Slovakia",
        "Benin",
        "Taiwan",
        "Barbados",
        "Jordan",
        "Morocco",
        "Ethiopia",
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
        name: "Albania",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Armenia",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Austria",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Azerbaijan",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Belarus",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Belgium",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Bosnia",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "United Kingdom",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Bulgaria",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Crete",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Croatia",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Cyprus",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Czech",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Estonia",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Finland",
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
        name: "Georgia",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Germany",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Greece",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Hungary",
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
        name: "Italy",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Lithuania",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Macedonia",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Malta",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Milne",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Moldova",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Netherlands",
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
        name: "Poland",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Portugal",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Romania",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Serbia",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Slovakia",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Slovenia",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Spain",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Switzerland",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Ukraine",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Algeria",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Angola",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Benin",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Bissau",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Botswana",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Burkina",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Burundi",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Cabinda",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Cameroon",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Casamance",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Centrafrique",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Chad",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Congo",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Djibouti",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Drc",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Egypt",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Equatorial guinea",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Eritrea",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Ethiopia",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Gabon",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Gambia",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Ghana",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Guinee",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Ivoire",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Kenya",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Kirgizstan",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Lesotho",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Liberia",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Libya",
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
        name: "Malawi",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Mali",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Mauretania",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Morocco",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Mozambique",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Namibia",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Niger",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Nigeria",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Rwanda",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Senegal",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Sierra leone",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Somalia",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Somaliland",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "South africa",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "South_sudan",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Swaziland",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Tanzania",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Togo",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Tunisia",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Uganda",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Zambia",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Zimbabwe",
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
        name: "Emirates",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Gan",
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
        name: "Iran",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Iraq",
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
        name: "Israel",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Jordan",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Kazakhstan",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Kuwait",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Lebanon",
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
        name: "Maldive",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Male",
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
        name: "Oman",
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
        name: "Qatar",
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
        name: "Saudi",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Korea",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Sri lanka",
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
        name: "Syria",
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
        name: "Tajikistan",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Turkey",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Turkmenistan",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Uzbekistan",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Yemen",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "antarctica",
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
        name: "Chiloe",
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
        name: "Disko",
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
        name: "Thrace",
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
