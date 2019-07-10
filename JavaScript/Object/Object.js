var countries = [
    {
        name: "Россия",
        cities: [
            {name: "Москва", population: 12506486},
            {name: "Санкт-Питербург", population: 5351935},
            {name: "Новосибирск", population: 1612833},
            {name: "Екатеринбург", population: 1468833},
            {name: "Иркутск", population: 601993}
        ]
    },
    {
        name: "Аргентина",
        cities: [
            {name: "Буэнос-Айрес", population: 2776138},
            {name: "Кордова", population: 1267521},
            {name: "Росарио", population: 1028658}
        ]
    },
    {
        name: "Китай",
        cities: [
            {name: "Шанхай", population: 22315426},
            {name: "Пекин", population: 18827000},
            {name: "Чунцин", population: 15294255},
            {name: "Тяньцзинь", population: 11090314},
            {name: "Гуанчжоу", population: 11070654}
        ]
    }
];

/**
 * Найти страну/страны с максимальным количеством городов
 * @param countries - массив стран
 * @returns {Array} - название страны/стран
 */
function getNamesOfCountriesWithMaxCitiesCount(countries) {
    var maxCitiesCount = Math.max.apply(null, countries.map(function (country) {
        return country.cities.length;
    }));
    return countries.filter(function (country) {
        return country.cities.length === maxCitiesCount
    }).map(function (country) {
        return country.name;
    });
}

/**
 * Получить объект ключ - значение
 * @param country - массив стран
 * @returns {Object} - словарь (ключ: страна, значение: численность населения по всем городам)
 */
function getPopulationsOfCountries(country) {
    var result = {};
    country.forEach(function (country) {
        result[country.name] = country.cities.reduce(function (total, city) {
            return total + city.population;
        }, 0);
    });
    return result;
}

console.log("Страна/страны с максимальным количеством городов " + getNamesOfCountriesWithMaxCitiesCount(countries).join(", "));

console.log(getPopulationsOfCountries(countries));
