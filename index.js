const apiKey = ' ab8fcbf9cfcd4c52b59102430251111'; // replace with your working key
const button = document.getElementById('getWeatherBtn');
const cityInput = document.getElementById('cityInput');
const weatherResult = document.getElementById('weatherResult');

button.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (!city) {
    alert('Please enter a City');
    return;
  }

  fetch(`https://api.weatherapi.com/v1/current.json?key=ab8fcbf9cfcd4c52b59102430251111&q=${city}&aqi=no`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      weatherResult.innerHTML = `
        <h2>${data.location.name}</h2>
        <p><strong> Time:</strong> ${data.location.localtime}</p>
        <p><strong>Temperature:</strong> ${data.current.temp_c}°C</p>
        <p><strong>Condition:</strong> ${data.current.condition.text}</p>
        <img src="${data.current.condition.icon}" alt="Weather icon">
      `;
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
      weatherResult.innerHTML = '<p>Error fetching weather data</p>';
    });
});