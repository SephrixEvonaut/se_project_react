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
    let weather = weatherData ? weatherData?.type : "";
    if (weather === "Drizzle") {
      weather = "Rain";
    }
    const element = document.querySelector(".weather__card-container");
    element.style.backgroundImage = `url('images/${weather + dayOrNight}.png')`;
  }, [weatherData]);

  return (
    <>
      <div className="weather__card-container">
        <div className="weather__card"></div>
        <div className="weather__results">{weatherData?.temperature}°F</div>
      </div>
    </>
  );
}
