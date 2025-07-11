// JavaScript for automatic image slider
let currentIndex = 0;
const slides = document.querySelectorAll('.slider .slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// Automatically switch slides every 3 seconds
setInterval(nextSlide, 3000);

function fetchLocationAndWeather() {
    if (!navigator.geolocation) {
        alert("Geolocation is not supported by your browser.");
        return;
    }

    navigator.geolocation.getCurrentPosition(
        position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            fetchWeatherAndAQI(lat, lon);
        },
        error => {
            alert("Unable to retrieve your location.");
        }
    );
}

function fetchWeatherAndAQI(lat, lon) {
    const apiKey = '9eaa2a49f8c94708b1a80234251006';  // Replace with your WeatherAPI key
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lon}&aqi=yes`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data && data.current) {
                const weather = data.current.condition.text;
                const temp = data.current.temp_c;
                const aqi = data.current.air_quality.pm2_5.toFixed(2);
                alert(`🌤 Weather: ${weather}, 🌡 Temp: ${temp}°C\n🌫 AQI (PM2.5): ${aqi}`);
            } else {
                alert("Couldn't fetch weather or AQI data.");
            }
        })
        .catch(err => {
            console.error(err);
            alert("Error fetching weather/AQI data.");
        });
}
