import React from "react";
import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import ItemModal from "../ItemModal/ItemModal";
import { useState } from "react";

export default function Main({ Cards, weatherData }) {
  console.log(weatherData);
  console.log(weatherData?.main?.temp);
  const [card, setCard] = useState(null);
  return (
    <>
      <WeatherCard weatherData={weatherData} />

      <div className="forecast">
        Today is {weatherData?.main?.temp}°F / You may want to wear:
      </div>
      <div className="items__card-list">
        {Cards.filter(
          (card) =>
            weatherData?.weather?.length &&
            card.weather.includes(weatherData?.weather[0]?.main)
        ).map((filteredCard) => (
          <ItemCard
            Card={filteredCard}
            key={filteredCard._id}
            setCard={setCard}
          />
        ))}
      </div>
      <ItemModal weatherData={weatherData} card={card} />
    </>
  );
}
