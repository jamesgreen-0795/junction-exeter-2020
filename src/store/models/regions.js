const uuid = require('uuid/v4');

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
			corruption: 0,
        },
        ...entry,
    };
});

export default generator([

    {
        name: "albania",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "armenia",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "austria",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "azerbaijan",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "belarus",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "belgium",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "bell",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "bosnia",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "britain",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "bulgaria",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "corsica",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "crete",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "croatia",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "cyprus",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "czech",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "denmark",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "edgeoya",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "estonia",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "finland",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "france",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "georgia",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "germany",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "gotland",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "greece",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "hiumaa",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "hungary",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "iceland",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "ireland",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "italy",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "lithuania",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "macedonia",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "majorca",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "malta",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "milne",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "moldova",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "netherlands",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "nordaustlandet",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "norway",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "novaya zemlya north",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "novaya zemlya south",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "poland",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "portugal",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "prince george",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "prince of wales",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "romania",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "saaremaa",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "salisbury",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "sardinia",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "serbia",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "sicily",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "sjælland",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "slovakia",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "slovenia",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "southhampton",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "spain",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "spitsbergen",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "sweden",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "switzerland",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "terceira",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "ukraine",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "wilczek",
        continent: "europe",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },

    {
        name: "aldabra",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "algeria",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "angola",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "benin",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "bioko",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "bissau",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "boa vista",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "botswana",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "burkina",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "burundi",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "cabinda",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "cameroon",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "casamance",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "centrafrique",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "chad",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "congo",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "djibouti",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "drc",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "egypt",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "equatorial guinea",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "eritrea",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "ethiopia",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "gabon",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "gambia",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "ghana",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "gran canaria",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "grande comore",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "guinee",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "ivoire",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "kenya",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "kirgizstan",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "lanzarote",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "lesotho",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "liberia",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "libya",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "madagascar",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "madeira",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "mahe",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "malawi",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "mali",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "mauretania",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "mauritius",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "mayotte",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "morocco",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "mozambique",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "namibia",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "niger",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "nigeria",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "pico",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "praslin",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "principe",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "reunion",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "rwanda",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "santiago",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "santo antao",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "sao miguel",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "sao tome",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "senegal",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "sierra leone",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "somalia",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "somaliland",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "soqotra",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "south africa",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "south_sudan",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "swaziland",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "tanzania",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "tenerife",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "togo",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "tunisia",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "uganda",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "zambia",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "zimbabwe",
        continent: "africa",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },

    {
        name: "afghanistan",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "bali",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "bangladesh",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "bering island",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "bhutan",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "bolshevik",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "brunei",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "burma",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "cambodia",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "cebu",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "china",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "chukotka",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "east malaysia",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "emirates",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "flores",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "gan",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "hainan",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "hokkaido",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "honshu",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "india",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "iran",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "iraq",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "irian jaya",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "israel",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "iturup",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "java",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "jordan",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "kalimantan",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "kazakhstan",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "komsomolets",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "kotelny",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "kuwait",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "kyushu",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "laos",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "lebanon",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "lombok",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "luzon",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "lyakhovsky",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "malaysia",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "maldive",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "male",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "maluku",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "medny",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "mindoro",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "mongolia",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "negros",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "nepal",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "north korea",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "novaya sibir",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "october",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "oman",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "onekotan",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "pakistan",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "palawan",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "paramushir",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "qatar",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "russia",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "sakhalin",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "samar",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "saudi",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "seram",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "shikoku",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "south korea",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "sri lanka",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "sulawesi",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "sumatra",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "sumba",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "syria",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "taiwan",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "tajikistan",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "thailand",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "timor",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "turkey",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "turkmenistan",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "urup",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "uzbekistan",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "vietnam",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "wrangel",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "wrangel-w",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "yemen",
        continent: "asia",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },

    {
        name: "alexander",
        continent: "antarctica",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "antarctic peninsula",
        continent: "antarctica",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "east antarctica",
        continent: "antarctica",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "elephant",
        continent: "antarctica",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "kerguelen",
        continent: "antarctica",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "smyley",
        continent: "antarctica",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },


    {
        name: "australia",
        continent: "oceania",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "banks",
        continent: "oceania",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "bougainville",
        continent: "oceania",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "choiseul",
        continent: "oceania",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "efate",
        continent: "oceania",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "espiritu santo",
        continent: "oceania",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "fiji",
        continent: "oceania",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "malaita",
        continent: "oceania",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "malakula",
        continent: "oceania",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "new britain",
        continent: "oceania",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "new caledonia",
        continent: "oceania",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "new georgia",
        continent: "oceania",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "new ireland",
        continent: "oceania",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "new zealand north island",
        continent: "oceania",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "new zealand south island",
        continent: "oceania",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "papua new guinea",
        continent: "oceania",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "raiatea",
        continent: "oceania",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "rennell",
        continent: "oceania",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "santa ana",
        continent: "oceania",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "santa isabel",
        continent: "oceania",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "tahiti",
        continent: "oceania",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "tasmania",
        continent: "oceania",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "victoria",
        continent: "oceania",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },


    {
        name: "argentina",
        continent: "south america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "bolivia",
        continent: "south america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "brazil",
        continent: "south america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "chile",
        continent: "south america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "chiloe",
        continent: "south america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "colombia",
        continent: "south america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "ecuador",
        continent: "south america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "falklands east",
        continent: "south america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "falklands west",
        continent: "south america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "galapagos",
        continent: "south america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "guadeloupe",
        continent: "south america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "guyana",
        continent: "south america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "guyane",
        continent: "south america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "paraguay",
        continent: "south america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "peru",
        continent: "south america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "suriname",
        continent: "south america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "tierra del fuego argentina",
        continent: "south america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "tierra del fuego chile",
        continent: "south america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "uruguay",
        continent: "south america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "venezuela",
        continent: "south america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },

    {
        name: "adak",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "adak west",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "alaska",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "alaska-westcopy",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "amchitka",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "amchitka west",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "amund ringnes",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "andros",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "another aleutian west",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "attu",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "attu west",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "axel heiberg",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "baffin",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "belize",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "bimini",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "bylot",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "canada",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "cornwallis",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "costa rica",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "cuba",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "devon",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "disko",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "domincan republic",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "dominica",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "eglinton",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "el salvador",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "eleuthera",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "ellef ringnes",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "ellesmere",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "grand bahama",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "greenland",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "grenada",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "guatemala",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "haida gwaii",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "haiti",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "haiti-dominican border",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "hawaii",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "honduras",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "inagua",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "jamaica",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "james ross",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "kahului",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "kauai",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "king christian",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "king george",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "mackenzie king",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "martinique",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "mexico",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "newfoundland",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "nicaragua",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "oahu",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "panama",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "prescott",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "prince patrick",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "puerto rico",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "robert",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "st. lawrence island",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "st. lawrence island west",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "st. lucia",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "st. vincent",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "thrace",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "thurston",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "trinidad",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "ulster",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "umnak",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "umnak west",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "unalaska",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "unalaska west",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "usa",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },
    {
        name: "vancouver",
        continent: "north america",
        climate: {
            temperature: 20,
            hemisphere: "n"
        },
    },


])
