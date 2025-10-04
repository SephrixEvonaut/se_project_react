import React from "react";
import "./WeatherCard.css";
import { useEffect } from "react";

export default function WeatherCard({ weatherData }) {
  function getDayOrNight(dt) {
    // Convert Unix timestamp to UTC Date
    const date = new Date(dt * 1000); // JS expects ms
    const hour = date.getUTCHours();

    // Day between 6am - 6pm UTC
    if (hour >= 6 && hour < 18) {
      return "Day";
    } else {
      return "Night";
    }
  }

  useEffect(() => {
    let dayOrNight = getDayOrNight(weatherData?.dt);
    let weather = weatherData?.weather?.length
      ? weatherData?.weather[0]?.main
      : "";
    if (weather === "Drizzle") {
      weather = "Rain";
    }
    const element = document.querySelector(".weather__card-container");
    element.style.backgroundImage = `url('images/${weather + dayOrNight}.png')`;
  }, [weatherData]);

  // Example:
  console.log(getDayOrNight(weatherData?.dt)); // -> "night"

  return (
    <>
      <div className="weather__card-container">
        <div className="weather__card"></div>
        <div className="weather__results">{weatherData?.main?.temp}°F</div>
      </div>
    </>
  );
}
