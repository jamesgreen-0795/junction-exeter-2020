const uuid = require('uuid/v4');

const isOil = name => {
    var countries_with_oil = [
        "Venezuela",
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
        "Ecuador",
        "Guyana",
        "Central America",
        "Azerbaijan",
        "Norway",
        "Oman",
        "India",
        "Egypt",
        "Vietnam",
        "Indonesia",
        "Malaysia",
        "Yeman",
        "United Kingdom",
        "Syria",
        "Uganda",
        "Argentina",
        "Colombia",
        "Gabon",
        "Australia",
        "Congo",
        "Chad",
        "Brunei",
        "Equatorial Guinea",
        "Ghana",
        "Romania",
        "Turkmenistan",
        "Uzbekistan",
        "Italy",
        "Denmark",
        "Peru",
        "Tunisia",
        "Thailand",
        "Ukraine",
        "Pakistan",
        "Turkey",
        "Bolivia",
        "Cameroon",
        "Belarus",
        "Democratic Republic of the Congo",
        "Albania",
        "Papua New Guinea",
        "Chile",
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
        "Suriname",
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
        name: "Denmark",
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
        name: "Iceland",
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
        name: "Svalbard",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Norway",
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
        name: "Sweden",
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
        name: "Aldabra",
        continent: "africa",
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
        name: "Bioko",
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
        name: "Boa vista",
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
        name: "Gran canaria",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Grande comore",
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
        name: "Lanzarote",
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
        name: "Madeira",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Mahe",
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
        name: "Mauritius",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Mayotte",
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
        name: "Praslin",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Principe",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Reunion",
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
        name: "Santiago",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Santo antao",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Sao tome",
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
        name: "Soqotra",
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
        name: "Tenerife",
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
        name: "Bali",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Bangladesh",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Bhutan",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Brunei",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Burma",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Cambodia",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Cebu",
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
        name: "East malaysia",
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
        name: "Flores",
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
        name: "Hainan",
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
        name: "Irian jaya",
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
        name: "Java",
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
        name: "Kalimantan",
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
        name: "Laos",
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
        name: "Lombok",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Luzon",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Malaysia",
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
        name: "Maluku",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Mindoro",
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
        name: "Negros",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Nepal",
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
        name: "Palawan",
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
        name: "Samar",
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
        name: "Seram",
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
        name: "Sulawesi",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Sumatra",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Sumba",
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
        name: "Thailand",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Timor",
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
        name: "Vietnam",
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
        name: "Bougainville",
        continent: "oceania",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Choiseul",
        continent: "oceania",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Efate",
        continent: "oceania",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Espiritu santo",
        continent: "oceania",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Fiji",
        continent: "oceania",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Malaita",
        continent: "oceania",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Malakula",
        continent: "oceania",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "New britain",
        continent: "oceania",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "New caledonia",
        continent: "oceania",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "New georgia",
        continent: "oceania",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "New ireland",
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
        name: "Papua new guinea",
        continent: "oceania",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Rennell",
        continent: "oceania",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Santa ana",
        continent: "oceania",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Santa isabel",
        continent: "oceania",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Various Islands",
        continent: "oceania",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Argentina",
        continent: "south america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Bolivia",
        continent: "south america",
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
        name: "Chile",
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
        name: "Colombia",
        continent: "south america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Ecuador",
        continent: "south america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Guyana",
        continent: "south america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Guyane",
        continent: "south america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Paraguay",
        continent: "south america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Peru",
        continent: "south america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Suriname",
        continent: "south america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Tierra del fuego argentina",
        continent: "south america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Tierra del fuego chile",
        continent: "south america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Uruguay",
        continent: "south america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "Venezuela",
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
