import React from "react";
import "./ModalWithForm.css";
import { func } from "prop-types";
import { useState, useEffect } from "react";

export default function ModalWithForm() {
  const [name, setName] = useState(null);
  const [image, setImage] = useState(null);
  const [weatherType, setWeatherType] = useState(null);
  useEffect(() => {
    let validationPassed = validateInputs();
    if (validationPassed) {
      console.log("removing disable");
      document.querySelector(".modal__save-btn")?.classList.remove("disabled");
    }
  }, [name, image, weatherType]);

  function handleClose() {
    document
      .querySelectorAll(".modal")
      .forEach((el) => (el.style.visibility = "hidden"));
  }

  function validateInputs() {
    if (!name || !image || !weatherType) return false;

    try {
      new URL(image);
      return true;
    } catch {
      return false;
    }
  }
  return (
    <div className="modal">
      <div className="modal__form">
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
            <input type="radio" id="hot" required />
            <label htmlFor="hot">hot</label>
          </div>
          <div className="input__checkbox">
            <input
              onChange={(e) => setWeatherType(e.target.value)}
              type="radio"
              id="warm"
              required
            />
            <label htmlFor="warm">warm</label>
          </div>
          <div className="input__checkbox">
            <input type="radio" id="cold" required />
            <label htmlFor="cold">cold</label>
          </div>
        </div>
        <button className="modal__save-btn disabled" type="submit">
          Add garment
        </button>

        <button onClick={handleClose} className="modal__close-btn-delete-modal">
          x
        </button>
      </div>
    </div>
  );
}
