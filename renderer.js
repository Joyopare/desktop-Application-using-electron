
function getWeather() {
    const apiKey = 'b5a115139a995e77b0e21b76fb3d7c91';
    const cityInput = document.getElementById('cityInput').value;

    if (!cityInput) {
      alert('Please enter a city!');
      return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const weatherDesc = document.getElementById('weatherDesc');
        const weatherTemp = document.getElementById('weatherTemp');
        const weatherPres = document.getElementById('weatherPres');
        const weatherHumi = document.getElementById('weatherHumi');
        const weatherCoor = document.getElementById('weatherCoor');
        const weatherCoun = document.getElementById('weatherCoun');
        const weatherError = document.getElementById('weatherError');

        if (data.cod === '404') {
          weatherError.textContent = 'City not found. Please try again.';
        } else {
          const description = data.weather[0].description;
          const temperature = data.main.temp;
          const pressure = data.main.pressure;
          const humidity = data.main.humidity;
          const coordinate = data.coord.lon + ',' + data.coord.lat;
          const country_code = data.sys.country;

          weatherDesc.textContent = `Description: ${description}`;
          weatherTemp.textContent = `Temperature: ${temperature}°C`;
          weatherPres.textContent = `Pressure: ${pressure} hPa`;
          weatherHumi.textContent = `Humidity: ${humidity}%`;
          weatherCoor.textContent = `Coordinates: ${coordinate}`;
          weatherCoun.textContent = `Country: ${country_code}`;
          weatherError.textContent = '';
        }
      })
      .catch(error => console.error('Error fetching weather data:', error));
  }
  
  