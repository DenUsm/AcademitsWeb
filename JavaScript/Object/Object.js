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
            {name: "Росарио", population: 1028658},
        ]
    },
    {
        name: "Китай",
        cities: [
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
function getNameCountriesWithMaxCountCities(array) {
    var maxCount = 0;
    var result = [];
    array.forEach(function (item) {
        if (item.cities.length >= maxCount) {
            maxCount = item.cities.length;
            result.push(item.name);
        }
    });
    return result;
}

/**
 * Получить объект ключ - значение
 * @param array - словарь (ключ: страна, значение: численность населения по всем городам)
 */
function PopulationInCountries(array) {
    var result = {};
    array.forEach(function (item) {
        result[item.name] = item.cities.reduce(function (total, population) {
            return total + population.population;
        }, 0);
    });
    return result;
}

console.log("Страна/страны с максимальным количеством городов " + getNameCountriesWithMaxCountCities(countries).join(", "));

console.log(PopulationInCountries(countries));
