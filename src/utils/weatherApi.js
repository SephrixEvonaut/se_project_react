import { latitude, longitude, apiKey } from "./constants";

export async function getWeatherCondition() {
  let weatherData = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`
  );
  let weatherDataJSON = await weatherData.json();
  return weatherDataJSON;
}
