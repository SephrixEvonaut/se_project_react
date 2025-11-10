import React from "react";
import "./ClothesSection.css";
import { checkWeatherType } from "../../utils/weatherApi";
import ItemCard from "../ItemCard/ItemCard";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";
import { useContext } from "react";

const ClothesSection = ({
  handleOpen,
  cards,
  weatherData,
  handleOpenItemModal,
  handleSubmit,
}) => {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  // const filteredCards = (cards || []).filter(
  //   (card) =>
  //     card.weather ===
  //     checkWeatherType(
  //       weatherData?.temperature &&
  //         weatherData?.temperature[currentTemperatureUnit]
  //     )
  // );
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
        {cards.map((card) => (
          <ItemCard
            handleOpenItemModal={handleOpenItemModal}
            card={card}
            key={card._id}
          />
        ))}
      </div>
    </div>
  );
};

export default ClothesSection;
