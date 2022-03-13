const countries = [
  {
    name: "Afghanistan",
    facts: [
      "This country is the world's largest supplier of opium.",
      "Drinking alchohol here is illegal.",
      "Pashto and Dari are the two offical languages.",
      "This country has the highest number of refugees in the world.",
      "The national sport is Buzkashi.",
      "The currency is called Afghani.",
    ],
  },
  {
    name: "Albania",
    facts: [
      "The currency is called the Lek.",
      "This country was a part of the Kingdom of Italy until 1943.",
      "They have never won an olympic medal.",
      "They share borders with Greece, Servia, Montenegro and Macedonia.",
      "The capitol is Tirana.",
    ],
  },
  {
    name: "Algeria",
    facts: [],
  },
  {
    name: "Andorra",
    facts: [],
  },
  {
    name: "Antigua and Barbuda",
    facts: [],
  },
  {
    name: "Argentina",
    facts: [],
  },
  {
    name: "Armenia",
    facts: [],
  },
  {
    name: "Australia",
    facts: [],
  },
  {
    name: "Austria",
    facts: [],
  },
  {
    name: "Azerbaijan",
    facts: [],
  },
  {
    name: "Bahamas",
    facts: [],
  },
  {
    name: "Bahrain",
    facts: [],
  },
  {
    name: "Bangladesh",
    facts: [],
  },
  {
    name: "Barbados",
    facts: [],
  },
  {
    name: "Belarus",
    facts: [],
  },
  {
    name: "Belgium",
    facts: [],
  },
  {
    name: "Belize",
    facts: [],
  },
  {
    name: "Benin",
    facts: [],
  },
  {
    name: "Bhutan",
    facts: [],
  },
  {
    name: "Bolivia",
    facts: [],
  },
  {
    name: "Bosnia and Herzegovina",
    facts: [],
  },
  {
    name: "Botswana",
    facts: [],
  },
  {
    name: "Brazil",
    facts: [],
  },
  {
    name: "Brunei",
    facts: [],
  },
  {
    name: "Bulgaria",
    facts: [],
  },
  {
    name: "Burkina Faso",
    facts: [],
  },
  {
    name: "Burundi",
    facts: [],
  },
  {
    name: "Côte d'Ivoire",
    facts: [],
  },
  {
    name: "Cabo Verde",
    facts: [],
  },
  {
    name: "Cambodia",
    facts: [],
  },
  {
    name: "Cameroon",
    facts: [],
  },
  {
    name: "Canada",
    facts: [],
  },
  {
    name: "Central African Republic",
    facts: [],
  },
  {
    name: "Chad",
    facts: [],
  },
  {
    name: "Chile",
    facts: [],
  },
  {
    name: "China",
    facts: [],
  },
  {
    name: "Colombia",
    facts: [],
  },
  {
    name: "Comoros",
    facts: [],
  },
  {
    name: "Congo (Congo-Brazzaville)",
    facts: [],
  },
  {
    name: "Costa Rica",
    facts: [],
  },
  {
    name: "Croatia",
    facts: [],
  },
  {
    name: "Cuba",
    facts: [],
  },
  {
    name: "Cyprus",
    facts: [],
  },
  {
    name: "Czechia (Czech Republic)",
    facts: [],
  },
  {
    name: "Democratic Republic of the Congo",
    facts: [],
  },
  {
    name: "Denmark",
    facts: [],
  },
  {
    name: "Djibouti",
    facts: [],
  },
  {
    name: "Dominica",
    facts: [],
  },
  {
    name: "Dominican Republic",
    facts: [],
  },
  {
    name: "Ecuador",
    facts: [],
  },
  {
    name: "Egypt",
    facts: [],
  },
  {
    name: "El Salvador",
    facts: [],
  },
  {
    name: "Equatorial Guinea",
    facts: [],
  },
  {
    name: "Eritrea",
    facts: [],
  },
  {
    name: "Estonia",
    facts: [],
  },
  {
    name: "Eswatini (fmr.Swaziland)",
    facts: [],
  },
  {
    name: "Ethiopia",
    facts: [],
  },
  {
    name: "Fiji",
    facts: [],
  },
  {
    name: "Finland",
    facts: [],
  },
  {
    name: "France",
    facts: [],
  },
  {
    name: "Gabon",
    facts: [],
  },
  {
    name: "Gambia",
    facts: [],
  },
  {
    name: "Georgia",
    facts: [],
  },
  {
    name: "Germany",
    facts: [],
  },
  {
    name: "Ghana",
    facts: [],
  },
  {
    name: "Greece",
    facts: [],
  },
  {
    name: "Grenada",
    facts: [],
  },
  {
    name: "Guatemala",
    facts: [],
  },
  {
    name: "Guinea",
    facts: [],
  },
  {
    name: "Guinea-Bissau",
    facts: [],
  },
  {
    name: "Guyana",
    facts: [],
  },
  {
    name: "Haiti",
    facts: [],
  },
  {
    name: "Holy See",
    facts: [],
  },
  {
    name: "Honduras",
    facts: [],
  },
  {
    name: "Hungary",
    facts: [],
  },
  {
    name: "Iceland",
    facts: [],
  },
  {
    name: "India",
    facts: [],
  },
  {
    name: "Indonesia",
    facts: [],
  },
  {
    name: "Iran",
    facts: [],
  },
  {
    name: "Iraq",
    facts: [],
  },
  {
    name: "Ireland",
    facts: [],
  },
  {
    name: "Israel",
    facts: [],
  },
  {
    name: "Italy",
    facts: [],
  },
  {
    name: "Jamaica",
    facts: [],
  },
  {
    name: "Japan",
    facts: [],
  },
  {
    name: "Jordan",
    facts: [],
  },
  {
    name: "Kazakhstan",
    facts: [],
  },
  {
    name: "Kenya",
    facts: [],
  },
  {
    name: "Kiribati",
    facts: [],
  },
  {
    name: "Kuwait",
    facts: [],
  },
  {
    name: "Kyrgyzstan",
    facts: [],
  },
  {
    name: "Laos",
    facts: [],
  },
  {
    name: "Latvia",
    facts: [],
  },
  {
    name: "Lebanon",
    facts: [],
  },
  {
    name: "Lesotho",
    facts: [],
  },
  {
    name: "Liberia",
    facts: [],
  },
  {
    name: "Libya",
    facts: [],
  },
  {
    name: "Liechtenstein",
    facts: [],
  },
  {
    name: "Lithuania",
    facts: [],
  },
  {
    name: "Luxembourg",
    facts: [],
  },
  {
    name: "Madagascar",
    facts: [],
  },
  {
    name: "Malawi",
    facts: [],
  },
  {
    name: "Malaysia",
    facts: [],
  },
  {
    name: "Maldives",
    facts: [],
  },
  {
    name: "Mali",
    facts: [],
  },
  {
    name: "Malta",
    facts: [],
  },
  {
    name: "Marshall Islands",
    facts: [],
  },
  {
    name: "Mauritania",
    facts: [],
  },
  {
    name: "Mauritius",
    facts: [],
  },
  {
    name: "Mexico",
    facts: [],
  },
  {
    name: "Micronesia",
    facts: [],
  },
  {
    name: "Moldova",
    facts: [],
  },
  {
    name: "Monaco",
    facts: [],
  },
  {
    name: "Mongolia",
    facts: [],
  },
  {
    name: "Montenegro",
    facts: [],
  },
  {
    name: "Morocco",
    facts: [],
  },
  {
    name: "Mozambique",
    facts: [],
  },
  {
    name: "Myanmar (formerly Burma)",
    facts: [],
  },
  {
    name: "Namibia",
    facts: [],
  },
  {
    name: "Nauru",
    facts: [],
  },
  {
    name: "Nepal",
    facts: [],
  },
  {
    name: "Netherlands",
    facts: [],
  },
  {
    name: "New Zealand",
    facts: [],
  },
  {
    name: "Nicaragua",
    facts: [],
  },
  {
    name: "Niger",
    facts: [],
  },
  {
    name: "Nigeria",
    facts: [],
  },
  {
    name: "North Korea",
    facts: [],
  },
  {
    name: "North Macedonia",
    facts: [],
  },
  {
    name: "Norway",
    facts: [],
  },
  {
    name: "Oman",
    facts: [],
  },
  {
    name: "Pakistan",
    facts: [],
  },
  {
    name: "Palau",
    facts: [],
  },
  {
    name: "Palestine State",
    facts: [],
  },
  {
    name: "Panama",
    facts: [],
  },
  {
    name: "Papua New Guinea",
    facts: [],
  },
  {
    name: "Paraguay",
    facts: [],
  },
  {
    name: "Peru",
    facts: [],
  },
  {
    name: "Philippines",
    facts: [],
  },
  {
    name: "Poland",
    facts: [],
  },
  {
    name: "Portugal",
    facts: [],
  },
  {
    name: "Qatar",
    facts: [],
  },
  {
    name: "Romania",
    facts: [],
  },
  {
    name: "Russia",
    facts: [],
  },
  {
    name: "Rwanda",
    facts: [],
  },
  {
    name: "Saint Kitts and Nevis",
    facts: [],
  },
  {
    name: "Saint Lucia",
    facts: [],
  },
  {
    name: "Saint Vincent and the Grenadines",
    facts: [],
  },
  {
    name: "Samoa",
    facts: [],
  },
  {
    name: "San Marino",
    facts: [],
  },
  {
    name: "Sao Tome and Principe",
    facts: [],
  },
  {
    name: "Saudi Arabia",
    facts: [],
  },
  {
    name: "Senegal",
    facts: [],
  },
  {
    name: "Serbia",
    facts: [],
  },
  {
    name: "Seychelles",
    facts: [],
  },
  {
    name: "Sierra Leone",
    facts: [],
  },
  {
    name: "Singapore",
    facts: [],
  },
  {
    name: "Slovakia",
    facts: [],
  },
  {
    name: "Slovenia",
    facts: [],
  },
  {
    name: "Solomon Islands",
    facts: [],
  },
  {
    name: "Somalia",
    facts: [],
  },
  {
    name: "South Africa",
    facts: [],
  },
  {
    name: "South Korea",
    facts: [],
  },
  {
    name: "South Sudan",
    facts: [],
  },
  {
    name: "Spain",
    facts: [],
  },
  {
    name: "Sri Lanka",
    facts: [],
  },
  {
    name: "Sudan",
    facts: [],
  },
  {
    name: "Suriname",
    facts: [],
  },
  {
    name: "Sweden",
    facts: [],
  },
  {
    name: "Switzerland",
    facts: [],
  },
  {
    name: "Syria",
    facts: [],
  },
  {
    name: "Tajikistan",
    facts: [],
  },
  {
    name: "Tanzania",
    facts: [],
  },
  {
    name: "Thailand",
    facts: [],
  },
  {
    name: "Timor-Leste",
    facts: [],
  },
  {
    name: "Togo",
    facts: [],
  },
  {
    name: "Tonga",
    facts: [],
  },
  {
    name: "Trinidad and Tobago",
    facts: [],
  },
  {
    name: "Tunisia",
    facts: [],
  },
  {
    name: "Turkey",
    facts: [],
  },
  {
    name: "Turkmenistan",
    facts: [],
  },
  {
    name: "Tuvalu",
    facts: [],
  },
  {
    name: "Uganda",
    facts: [],
  },
  {
    name: "Ukraine",
    facts: [],
  },
  {
    name: "United Arab Emirates",
    facts: [],
  },
  {
    name: "United Kingdom",
    facts: [],
  },
  {
    name: "United States of America",
    facts: [],
  },
  {
    name: "Uruguay",
    facts: [],
  },
  {
    name: "Uzbekistan",
    facts: [],
  },
  {
    name: "Vanuatu",
    facts: [],
  },
  {
    name: "Venezuela",
    facts: [],
  },
  {
    name: "Vietnam",
    facts: [],
  },
  {
    name: "Yemen",
    facts: [],
  },
  {
    name: "Zambia",
    facts: [],
  },
  {
    name: "Zimbabwe",
    facts: [],
  },
];

export default countries;
