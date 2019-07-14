/**
 * Перевод температуры цельсии в кельвины
 * @param temp - температура цельсии
 * @returns {string} - температура в кельвинах
 */
function celsiusToKelvin(temp) {
    return (temp + 273.15).toFixed(2);
}

/**
 * Перевод температуры цельсии в фаренгейты
 * @param temp - температура цельсии
 * @returns {string} - температура в фаренгейтах
 */
function celsiusToFahrenheit(temp) {
    return (temp * 1.8 + 32).toFixed(2);
}

/**
 *  Функция обработки нажатия кнопки
 */
function onReady() {
    document.getElementById("convert").addEventListener("click", function () {
        var celsius = document.getElementById("celsiusInput");
        var fahrenheit = document.getElementById("fahrenheitOutput");
        var kelvin = document.getElementById("kelvinOutput");

        var celsiusValue = celsius.value;

        if (isNaN(+celsiusValue) || (celsiusValue === "")) {
            alert("Ошибка! Введите корректное значение");
        } else {
            fahrenheit.innerHTML = celsiusToFahrenheit(+celsiusValue);
            kelvin.innerHTML = celsiusToKelvin(+celsiusValue);
        }
    });
}

document.addEventListener("DOMContentLoaded", onReady);





