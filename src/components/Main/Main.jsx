import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import ItemModal from "../ItemModal/ItemModal";
import { checkWeatherType } from "../../utils/weatherApi";

export default function Main({
  cards,
  weatherData,
  handleOpenItemModal,
  selectedCard,
}) {
  const filteredCards = cards.filter(
    (card) => card.weather === checkWeatherType(weatherData?.temperature)
  );

  // .filter((card) => card.weather === weatherData.type)
  return (
    <main>
      <WeatherCard weatherData={weatherData} />

      <div className="forecast">
        Today is {weatherData?.temperature}°F / You may want to wear:
      </div>
      <div className="items__card-list">
        {filteredCards.map((filteredCard) => (
          <ItemCard
            handleOpenItemModal={handleOpenItemModal}
            card={filteredCard}
            key={filteredCard._id}
          />
        ))}
      </div>
    </main>
  );
}
