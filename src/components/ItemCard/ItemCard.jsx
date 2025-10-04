import React from "react";
import "./ItemCard.css";
import ItemModal from "../ItemModal/ItemModal";

export default function ItemCard({ Card, setCard }) {
  function handleOpen() {
    document
      .querySelectorAll(".item__modal")
      .forEach((el) => (el.style.visibility = "visible"));
  }
  return (
    <>
      {/* <ItemModal /> */}
      <div
        onClick={() => {
          setCard(Card);
          handleOpen();
        }}
        className="item__card-section"
      >
        <div>
          <div className="item__card">
            <p className="item__title">{Card.name}</p>
            <img className="item__image" src={Card.link} alt={Card.name} />
          </div>
        </div>
      </div>
    </>
  );
}
