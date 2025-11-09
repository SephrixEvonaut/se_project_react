import React from "react";
import "./ClothesSection.css";
import { checkWeatherType } from "../../utils/weatherApi";
import ItemCard from "../ItemCard/ItemCard";

const ClothesSection = ({
  handleOpen,
  cards,
  weatherData,
  handleOpenItemModal,
  currentTemperatureUnit,
  handleSubmit,
}) => {
  const filteredCards = (cards || []).filter(
    (card) =>
      card.weather ===
      checkWeatherType(
        weatherData?.temperature &&
          weatherData?.temperature[currentTemperatureUnit]
      )
  );
  // console.log(filteredCards);
  return (
    <div>
      <div className="clothing__section-header">
        <div className="ownership__title">Your Items</div>
        <div className="add-new" onClick={handleOpen}>
          {" "}
          +Add new
        </div>
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
    </div>
  );
};

export default ClothesSection;
