let selectedLocation;

document.getElementById("refresh-button").addEventListener("click", () => {
    selectedLocation = document.getElementById("city-select").value;
    fetchData()
        .then((response) => {
            let weatherResponse = response.data;
            updateComponent(weatherResponse.name, weatherResponse.main.temp);
        });
});

function fetchData() {
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${selectedLocation},hu&APPID=af09d52af847e74ed5d930cf561434fc`;
    return axios.get(url);
}

function updateComponent(city, temp) {
    document.getElementById("city-name").innerHTML = city;
    document.getElementById("temp").innerHTML = getTempString(temp);
}

function getTempString(temp) {
    temp -= 273;
    return Number(temp.toFixed(2)) + " °C";
}