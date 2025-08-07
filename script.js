async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "d1ef6e3c76f880b99f86c42c4c3c47ab"; // Replace this with your OpenWeatherMap API key
  const resultDiv = document.getElementById("weatherResult");

  if (!city) {
    resultDiv.innerHTML = "Please enter a city name.";
    return;
  }

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = await res.json();

    if (data.cod === 200) {
      resultDiv.innerHTML = `
        <h3>${data.name}, ${data.sys.country}</h3>
        <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
        <p><strong>Weather:</strong> ${data.weather[0].main}</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>Wind:</strong> ${data.wind.speed} m/s</p>
      `;
    } else {
      resultDiv.innerHTML = `City not found.`;
    }
  } catch (error) {
    resultDiv.innerHTML = "Error fetching weather data.";
  }
}
