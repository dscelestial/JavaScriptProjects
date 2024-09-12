const APIKey = "20ba1764f1d8ee88c5e9b39c4f2142d2";

document.getElementById("getWeather").addEventListener('click', () => {
    const locationAPI = document.getElementById("location").value;
    const APIurl = `https://api.openweathermap.org/data/2.5/weather?q=${locationAPI}&appid=${APIKey}&units=metric`
   

    fetch(APIurl)
        .then(response => response.json())
        .then(data => {
            console.log('Weather Data:', data); 
            console.log(`Temperature in ${locationAPI}: ${data.main.temp}°C`);
            console.log(`Weather: ${data.weather[0].description}`);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error); 
        });
})


