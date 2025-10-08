import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import ItemModal from "../ItemModal/ItemModal";

export default function Main({ cards, weatherData }) {
  return (
    <>
      <WeatherCard weatherData={weatherData} />

      <div className="forecast">
        Today is {weatherData?.main?.temp}°F / You may want to wear:
      </div>
      <div className="items__card-list">
        {cards
          .filter((card) => card.weather === weatherData.type)
          .map((filteredCard) => (
            <ItemCard card={filteredCard} key={filteredCard._id} />
          ))}
      </div>
      <ItemModal weatherData={weatherData} card={cards} />
    </>
  );
}
