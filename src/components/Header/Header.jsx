import "./Header.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

export default function Header(props) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  console.log(props);
  return (
    <>
      <div className="header">
        <div className="logo__section">
          <img className="logo__image" src="images/Logo.svg" alt="App logo" />
          <div className="location-date">
            <span>{currentDate}</span>
            <span>{props.weatherData.city}</span>
          </div>
        </div>
        <div className="avatar__section">
          <button
            type="button"
            onClick={props.handleOpen}
            className="add-clothes_btn"
          >
            + Add clothes
          </button>
          <div className="header__username">Terrance Tegegne</div>
          <img src="images/avatar.png" alt="User Avatar" />
        </div>
      </div>
    
    </>
  );
}
