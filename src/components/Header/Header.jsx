import "./Header.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

export default function Header(props) {
  const [name, setName] = useState(null);
  const [image, setImage] = useState(null);
  const [weatherType, setWeatherType] = useState(null);
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  function handleOpen() {
    // document
    //   .querySelectorAll(".modal")
    //   .forEach((el) => (el.style.visibility = "visible"));
    props.setActiveModal("formModal");
  }
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
            onClick={handleOpen}
            className="add-clothes_btn"
          >
            + Add clothes
          </button>
          <div className="header__username">Terrance Tegegne</div>
          <img src="images/avatar.png" alt="User Avatar" />
        </div>
      </div>
      <ModalWithForm
        name={name}
        image={image}
        weatherType={weatherType}
        setActiveModal={props.setActiveModal}
        isOpen={props.activeModal === "formModal"}
        buttonText="Add Garment"
        heading = "New Garment"
      >
        <div className="input__modal">
          <label htmlFor="name">Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            type="text"
            id="name"
            required
          />
        </div>

        <div className="input__modal">
          <label htmlFor="image">Image</label>
          <input
            onChange={(e) => setImage(e.target.value)}
            placeholder="Image URL"
            type="text"
            id="image"
            required
          />
        </div>

        <div className="input__modal">
          <p>Select weather type:</p>
          <div className="input__checkbox">
            <input
              onChange={(e) => setWeatherType(e.target.value)}
              name="weather"
              type="radio"
              value="hot"
              id="hot"
              required
            />
            <label htmlFor="hot">hot</label>
          </div>
          <div className="input__checkbox">
            <input
              onChange={(e) => setWeatherType(e.target.value)}
              name="weather"
              type="radio"
              value="warm"
              id="warm"
              required
            />
            <label htmlFor="warm">warm</label>
          </div>
          <div className="input__checkbox">
            <input
              onChange={(e) => setWeatherType(e.target.value)}
              name="weather"
              type="radio"
              value="cold"
              id="cold"
              required
            />
            <label htmlFor="cold">cold</label>
          </div>
        </div>
      </ModalWithForm>
    </>
  );
}
