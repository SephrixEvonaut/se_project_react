import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import ItemModal from "../ItemModal/ItemModal";
import { checkWeatherType } from "../../utils/weatherApi";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import { useContext } from "react";

export default function Main({
  cards,
  weatherData,
  handleOpenItemModal,
  selectedCard,
}) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const filteredCards = cards?.filter(
    (card) =>
      card.weather ===
      checkWeatherType(weatherData?.temperature && weatherData?.temperature?.F)
  );

  // console.log(currentTemperatureUnit);

  // .filter((card) => card.weather === weatherData.type)
  return (
    <main>
      <WeatherCard weatherData={weatherData} />

      <div className="forecast">
        Today is{" "}
        {weatherData?.temperature &&
          weatherData?.temperature[currentTemperatureUnit]}
        °{currentTemperatureUnit} / You may want to wear:
      </div>
      <div className="items__card-list">
        {filteredCards?.map((filteredCard) => (
          <ItemCard
            handleOpenItemModal={handleOpenItemModal}
            card={filteredCard}
            key={filteredCard?._id}
          />
        ))}
      </div>
    </main>
  );
}
