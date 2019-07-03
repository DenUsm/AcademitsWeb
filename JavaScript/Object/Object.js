var countries = [
    {
        nameCountry: "Россия",
        city: [
            {name: "Москва", population: 12506486},
            {name: "Санкт-Питербург", population: 5351935},
            {name: "Новосибирск", population: 1612833},
            {name: "Екатеринбург", population: 1468833},
            {name: "Иркутск", population: 601993}
        ]
    },
    {
        nameCountry: "Аргентина",
        city: [
            {name: "Буэнос-Айрес", population: 2776138},
            {name: "Кордова", population: 1267521},
            {name: "Росарио", population: 1028658},
        ]
    },
    {
        nameCountry: "Китай",
        city: [
            {name: "Шанхай", population: 22315426},
            {name: "Пекин", population: 18827000},
            {name: "Чунцин", population: 15294255},
            {name: "Тяньцзинь", population: 11090314},
            {name: "Гуанчжоу", population: 11070654},
        ]
    }
]

/**
 * Получить страну/страны с максимальным количеством городов
 * @param array - массив стран
 * @returns {Array} - массив стран
 */
function getCountryMaxCitiesCount(array) {
    var maxCitiesCount = 0;
    var result = [];
    for (var i = 0, l = countries.length; i < l; i++) {
        var item = countries[i].city.length;
        if (item >= maxCitiesCount) {
            maxCitiesCount = item;
            result.push(countries[i].nameCountry);
        }
    }
    return result;
}

/**
 * Получить объект ключ - значение
 * @param array - словарь (ключ: страна, значение: численность населения по всем городам)
 */
function getDictionary(array) {
    var result = {};
    for (var i = 0, l = countries.length; i < l; i++) {
        result[countries[i].nameCountry] = countries[i].city.reduce(function (total, population) {
            return total + population.population;
        }, 0);
    }
    return result;
}

console.log("Страна/страны с максимальным количеством городов " + getCountryMaxCitiesCount(countries).join(", "));

console.log(getDictionary(countries));
