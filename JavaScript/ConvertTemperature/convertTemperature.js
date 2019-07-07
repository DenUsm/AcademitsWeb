if (document.readyState !== "loading") {
    onReady();
} else {
    document.addEventListener("DOMContentLoaded", onReady);
}

function onReady() {
    document.getElementById("convert").addEventListener("click", function () {
        var celsius = +document.getElementById("celsiusInput").value;
        if (isNaN(celsius)) {
            alert("Error. Please enter correct value")
        } else {
            document.getElementById("fahrenheitOutput").innerHTML = (celsius * 1.8 + 32).toFixed(2);
            document.getElementById("kelvinOutput").innerHTML = (celsius + 273.15).toFixed(2);
        }
    });
}



