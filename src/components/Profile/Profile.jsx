import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

const Profile = ({
  handleOpen,
  cards,
  weatherData,
  handleOpenItemModal,
  currentTemperatureUnit,
  handleSubmit,
}) => {
  return (
    <div className="page">
      <div className="profile__section">
        <Sidebar></Sidebar>
        <ClothesSection
          handleOpen={handleOpen}
          cards={cards}
          weatherData={weatherData}
          handleOpenItemModal={handleOpenItemModal}
          currentTemperatureUnit={currentTemperatureUnit}
          handleSubmit = {handleSubmit}
        ></ClothesSection>
      </div>
    </div>
  );
};

export default Profile;
