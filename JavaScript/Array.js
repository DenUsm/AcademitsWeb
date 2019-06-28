var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Начальный массив " + array);

var sortArray = array.sort(function (a, b) {
    return b - a;
});

console.log("Отсортированный массив по убыванию " + sortArray);

var sumEvenValue = sortArray
    .filter(function (item) {
        return item % 2 === 1;
    })
    .reduce(function (sum, number) {
        return sum + number;
    });

console.log("Сумма четных элементов массива равна " + sumEvenValue);

/**
 * Создание массива от 1 до 100
 * @returns {Array} Массив чисел
 */
function createArray() {
    var array = [];
    for (let i = 1; i <= 100; i++) {
        array.push(i);
    }
    return array;
}

var squareListEvenValue = createArray().filter(function (item) {
    if (item % 2 === 0) {
        return Math.pow(item, 2);
    }
});

var fistFiveValueArray = array.slice(0, 5);
console.log("Первые пять чисел отсортированного массива " + fistFiveValueArray);

var endFiveValueArray = array.slice(array.length - 5);
console.log("Первые пять чисел отсортированного массива " + endFiveValueArray);

console.log("Массив от 1 до 100 " + createArray());

console.log("Список квадратов четных чисел массива " + squareListEvenValue);
