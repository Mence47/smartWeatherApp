const cityForm = document.querySelector("#city-form");
const cityInput = document.querySelector('#city');
const humidityDisplay = document.querySelector("#humidity");
const pressureDisplay = document.querySelector("#pressure");
const windDisplay = document.querySelector("#wind");
const cityNameDisplay = document.querySelector('#city-name');
const descriptionDisplay = document.querySelector("#description");
const temperatureDisplay= document.querySelector("#temp");
const main = document.querySelector('#main');
const errorSpace = document.querySelector("#error-space");
const recommedDisplay = document.querySelector("#recommendation-text");

cityForm.addEventListener("submit", displayWeather);


/**
 * Запрос погоды для города
 *
 *  Отпраляем http запрос на сервер и ждем ответ в формате JSON
 *
 * @param e событие запроса погоды для города
 */
function displayWeather(e) {
    e.preventDefault();
    console.log('button was clicked');
    console.log(cityInput.value);

    let cityName = cityInput.value;

    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", `city/${cityName}`, true);

    xmlHttp.onload = processResponse;

    xmlHttp.send();
}

/**
 * Обработка асинхронного ответа
 */
function processResponse() {
    console.log('Processing response');

    if (this.status !== 200) {
        console.log(this);
    }

    console.log(this);

    let weatherData = JSON.parse(this.responseText);

    console.log(weatherData);

    if (weatherData.cod === 200) {
        processSuccess(weatherData);
        return
    }
    processFail(weatherData);
}

function processFail(wData) {
    let errorP =  document.createElement("p");

    errorP.classList.add("error");
    errorP.innerText = "Ошибка получения данных о погоде: " + wData.message;

    errorSpace.appendChild(errorP);

    setTimeout(function () {
        errorP.remove();
    }, 3000);
}

/**
 * Обработка успешного запроса
 *
 * @param wData данные о погоде
 */
function processSuccess(wData) {
    let cityName = wData.name;
    let temp = wData.main.temp;
    let pres = wData.main.pressure;
    let hum = wData.main.humidity;
    let wind = wData.wind.speed;
    let description = wData.weather[0].description;

    console.log(cityName);
    console.log(temp);
    console.log(pres);
    console.log(hum);

    cityNameDisplay.innerText = cityName;
    temperatureDisplay.innerText = getFormatTemp(temp);
    descriptionDisplay.innerText = description;
    windDisplay.innerText = wind + " м/с";
    pressureDisplay.innerText = pres + " мм рт. ст.";
    humidityDisplay.innerText = hum + " %";
    recommedDisplay.innerText = getRecommedMessage(temp);

    showMain();
}

function showMain() {
    main.style.display = 'block';
}

function getRecommedMessage(tmp) {
    if (tmp <= -20) {
        return "Очень холодно. Одевайтесь максимально тепло.";
    } else if (tmp <= 0) {
        return "Наденьте зимную куртку, шапку и теплые ботинки.";
    } else if (tmp <= 10) {
        return "Наденьте легкое пальто и туфли.";
    } else if (tmp <= 20) {
        return "Наденьте футболку и кросовки.";
    }

    return "Очень жарко. Одевайтесь максимально легко.";
}

/**
 * Округляет температуру до целых и добавляет символ градуса
 *
 * @param t температура
 */
function getFormatTemp(t) {
    return Math.round(parseFloat(t)) +'°';
}
