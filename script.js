async function getWeather() {

  const city = document.getElementById("city").value;

  const apiKey = "e095c77bc5d5701aeeb0e8b812fe8f85";

  const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {

    const response = await fetch(url);

    const data = await response.json();

    console.log(data);

    // إذا فيه خطأ
    if (data.cod != 200) {

      document.getElementById("weatherResult").innerHTML =
        `❌ ${data.message}`;

      return;
    }

    // إذا كل شيء تمام
    document.getElementById("weatherResult").innerHTML = `
      <h2>${data.name}</h2>
      <p>🌡️ Temperature: ${data.main.temp}°C</p>
      <p>☁️ Weather: ${data.weather[0].description}</p>
    `;

  } catch (error) {

    console.log(error);

  }
}