import React from "react";
import "./ModalWithForm.css";
import { func } from "prop-types";
import { useState, useEffect } from "react";

export default function ModalWithForm({
  isOpen,
  setActiveModal,
  buttonText,
  children,
  image,
  name,
  weatherType, 
  heading
}) {
  const [isDisabled, setIsDisabled] = useState(true);
  useEffect(() => {
    let validationPassed = validateInputs();
    if (validationPassed) {
      console.log("removing disable");
      setIsDisabled(false);
      // document.querySelector(".modal__save-btn")?.classList.remove("disabled");
    }
  }, [name, image, weatherType]);

  function handleClose(e) {
    e.preventDefault();
    setActiveModal("");
    // document
    //   .querySelectorAll(".modal")
    //   .forEach((el) => (el.style.visibility = "hidden"));
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
    <div className={`${isOpen ? "modal_is-opened" : "modal"}`}>
      <form className="modal__form">
        <h2> {heading}</h2>
        {children}
        <button
          className={`modal__save-btn ${isDisabled ? "disabled" : ""}`}
          type="submit"
        >
          {buttonText}
        </button>

        <button onClick={handleClose} className="modal__close-btn-delete-modal">
          x
        </button>
      </form>
    </div>
  );
}
