import { latitude, longitude, apiKey } from "./constants";

export async function getWeatherCondition() {
  let weatherData = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`
  );
  let weatherResponse = {};
  let weatherDataJSON = await weatherData.json();
  console.log(weatherDataJSON);
  weatherResponse.city = weatherDataJSON.name;
  weatherResponse.temperature = weatherDataJSON.main.temp;
  weatherResponse.type = weatherDataJSON.weather[0].main;
  weatherResponse.dt = weatherDataJSON.dt;

  console.log(weatherResponse);
  return weatherResponse;
  weatherData.Response;
}

export const checkWeatherType = (temp) => {
  if (temp >= 82) {
    return "hot";
  } else if (temp >= 54 && temp <= 81) {
    return "warm";
  } else if (temp <= 55) {
    return "cold";
  }
};
