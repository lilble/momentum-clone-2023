const API_KEY = "84fbfd4178e1418258c47713d9cc4a79";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector(".weather");
      const location = weather.querySelector("span:first-child");
      const status = weather.querySelector("span:last-child");
      location.innerText = data.name;
      status.innerText = `${data.weather[0].main}, ${data.main.temp} F`;
    });
}

function onGeoErr() {
  alert("Can't find you. - Location Error");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr);
