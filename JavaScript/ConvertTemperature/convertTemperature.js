document.addEventListener("DOMContentLoaded", onReady);

function onReady() {
    document.getElementById("convert").addEventListener("click", function () {
        var celsius = document.getElementById("celsiusInput");
        var fahrenheit = document.getElementById("fahrenheitOutput");
        var kelvin = document.getElementById("kelvinOutput");

        if (isNaN(+celsius.value)) {
            alert("Error. Please enter correct value")
        } else {
            fahrenheit.innerHTML = celsius2Fahrenheit(celsius);
            kelvin.innerHTML = celsius2Kelvin(celsius);
        }
    });
}

/**
 * Перевод температуры цельсии в кельвины
 * @param temp - температура цельсии
 * @returns {string} - температура в кельвинах
 */
function celsius2Kelvin(temp) {
    return (temp + 273.15).toFixed(2);
}

/**
 * Перевод температуры цельсии в фаренгейты
 * @param temp - температура цельсии
 * @returns {string} - температура в фаренгейтах
 */
function celsius2Fahrenheit(temp) {
    return (temp * 1.8 + 32).toFixed(2);
}



