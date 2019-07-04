var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Начальный массив " + array);

var sortArray = array.sort(function (a, b) {
    return b - a;
});

console.log("Отсортированный массив по убыванию " + sortArray);

var sumEvenValues = sortArray
    .filter(function (item) {
        return item % 2 === 1;
    })
    .reduce(function (sum, number) {
        return sum + number;
    }, 0);

console.log("Сумма четных элементов массива равна " + sumEvenValues);

/**
 * Создание массива от 1 до 100
 * @returns {Array} Массив чисел
 */
function createArray() {
    var array = [];
    for (var i = 1; i <= 100; i++) {
        array.push(i);
    }
    return array;
}

var arraySquaresEvenNumbers = createArray()
    .filter(function (item) {
        return item % 2 === 0;
    })
    .map(function (number) {
       return Math.pow(number, 2);
    });

var subArrayFirst = array.slice(0, 5);
console.log("Первые пять чисел отсортированного массива " + subArrayFirst);

var subArraySecond = array.slice(array.length - 5);
console.log("Первые пять чисел отсортированного массива " + subArraySecond);

console.log("Массив от 1 до 100 " + createArray());

console.log("Список квадратов четных чисел массива " + arraySquaresEvenNumbers);
