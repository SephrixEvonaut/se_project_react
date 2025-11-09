import { latitude, longitude, apiKey } from "./constants";

export async function getWeatherCondition() {
  try {
    let weatherData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`
    );
    if (!weatherData.ok) {
      return Promise.reject(`Error ${weatherData.status}`);
    }

    let weatherResponse = {};
    let weatherDataJSON = await weatherData.json();
    // console.log(weatherDataJSON);
    weatherResponse.city = weatherDataJSON.name;
    weatherResponse.temperature = {};
    weatherResponse.temperature.F = weatherDataJSON.main.temp;
    weatherResponse.temperature.C = Math.round(
      ((weatherDataJSON.main.temp - 32) * 5) / 9
    );
    weatherResponse.type = weatherDataJSON.weather[0].main;
    weatherResponse.dt = weatherDataJSON.dt;

    // console.log(weatherResponse);
    return weatherResponse;
    weatherData.Response;
  } catch (error) {
    console.error("❌ Error in getWeatherCondition:", error);
    throw error; // rethrow so it can be handled by caller
  }
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
