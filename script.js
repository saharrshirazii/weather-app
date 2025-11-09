const apiKey = "dce129505fd9218527e8c065abc2dfa5";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const temp = document.querySelector(".temp");
const city = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const condition = document.querySelector(".condition");

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

const weather = document.querySelector(".weather");

const error = document.querySelector(".error");


async function checkWeather(cityName) {
    const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);
    if (response.status == 404){
        error.style.display = "block";
        weather.style.display = "none";

    }else
    {
     var data = await response.json();

    city.innerHTML = data.name;    
    temp.innerHTML = Math.round(data.main.temp) + "°C";  
    humidity.innerHTML = data.main.humidity + "%";  
    wind.innerHTML = data.wind.speed + " km/h"; 
    condition.innerHTML = data.weather[0].description;
    console.log(data);

    
    if (data.weather[0].main == "Clouds") {
    // weatherIcon.classList.add("fa-cloud");
    weatherIcon.className = "fa-solid fa-cloud weather-icon";


    } else if (data.weather[0].main == "Clear") {
        weatherIcon.className = "fa-solid fa-sun weather-icon";
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.className = "fa-solid fa-cloud-showers-heavy weather-icon";
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.className = "fa-solid fa-cloud-rain weather-icon";
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.className = "fa-solid fa-smog weather-icon";
    }else if (data.weather[0].main == "Haze") {
        weatherIcon.className = "fa-solid fa-industry weather-icon";
    }else if (data.weather[0].main == "Bolt") {
        weatherIcon.className = "fa-solid fa-bolt weather-icon";
    }else if (data.weather[0].main == "wind") {
        weatherIcon.className = "fa-solid fa-wind weather-icon";

    }
    error.style.display = "none";
    weather.style.display = "block";
    }
    

}


searchBtn.addEventListener("click", ()=>{
checkWeather(searchBox.value);
});


checkWeather("Gothenburg");
