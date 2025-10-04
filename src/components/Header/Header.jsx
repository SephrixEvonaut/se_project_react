import React, { useEffect, useState } from "react";
import { apiKey, latitude, longitude } from "../../utils/constants";
import "./Header.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

export default function Header() {
  const [data, setData] = useState({});
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  function handleOpen() {
    document
      .querySelectorAll(".modal")
      .forEach((el) => (el.style.visibility = "visible"));
  }

  async function fetchWeatherData() {
    let weatherData = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`
    );
    let weatherDataJSON = await weatherData.json();
    setData(weatherDataJSON);
  }
  useEffect(() => {
    fetchWeatherData();
  }, []);
  console.log(data);
  return (
    <>
      <div className="header">
        <div className="logo__section">
          <img className="logo__image" src="images/Logo.svg" alt="" />
          <div className="location-date">
            <span>{currentDate}</span>
            <span>{data.name}</span>
          </div>
        </div>
        <div className="avatar__section">
          <button
            type="button"
            onClick={handleOpen}
            className="add-clothes_btn"
          >
            + Add clothes
          </button>
          <div className="header__username">Terrance Tegegne</div>
          <img src="images/avatar.png" alt="" />
        </div>
      </div>
      <ModalWithForm></ModalWithForm>
    </>
  );
}
