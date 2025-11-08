import React from "react";
import "./ModalWithForm.css";
import { func } from "prop-types";
import { useState, useEffect } from "react";

export default function ModalWithForm({
  isOpen,
  handleClose,
  buttonText,
  children,
  isDisabled,
  heading,
  handleSubmit,
}) {
  return (
    <div className={`${isOpen ? "modal_is-opened" : "modal"}`}>
      <form onSubmit={handleSubmit} className="modal__form">
        <h2> {heading}</h2>
        {children}
        <button
          className={`modal__save-btn ${isDisabled ? "disabled" : ""}`}
          type="submit"
        >
          {buttonText}
        </button>

        <button
          onClick={handleClose}
          className="modal__close-btn-delete-modal"
          type="button"
        >
          x
        </button>
      </form>
    </div>
  );
}
