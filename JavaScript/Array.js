let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * Функция сортировки массива по убыванию
 * @param array Массив чисел
 * @constructor
 */
function Sort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] < array[j]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
}

/**
 * Функция ссумирования четных чисел масива
 * @param array Массив чисел
 * @returns {number} Результат суммы
 * @constructor
 */
function SumEvenValue(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 1) {
            sum += array[i];
        }
    }
    return sum;
}

/**
 * Создание массива от 1 до 100
 * @returns {Array} Массив чисел
 */
function createArray() {
    let array = [];
    for(let i = 0; i < 100; i++) {
        array[i] = i + 1;
    }
    return array;
}

/**
 * Получение массива квадратов четных чисел масисива
 * @param array Входной массив
 * @returns {Array} Массив квадратов четных чисел
 * @constructor
 */
function SquareListEvenValue(array) {
    let squareArray = [];
    let j = 0;
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0) {
            squareArray[j] = Math.pow(array[i], 2);
            j++;
        }
    }
    return squareArray;
}

console.log("Начальный массив " + array);
Sort(array);
console.log("Отсортированный массив по убыванию " + array);

let fistFiveValueArray = array.slice(0, 5);
console.log("Первые пять чисел отсортированного массива " + fistFiveValueArray);

let endFiveValueArray = array.slice(array.length - 5, array.length);
console.log("Первые пять чисел отсортированного массива " + endFiveValueArray);

console.log("Сумма четных элементов массива равна " + SumEvenValue(array))

console.log("Массив от 1 до 100 " + createArray());

console.log("Список квадратов четных чисел массива " + SquareListEvenValue(createArray()))