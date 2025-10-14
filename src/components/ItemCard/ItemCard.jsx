import React from "react";
import "./ItemCard.css";
import ItemModal from "../ItemModal/ItemModal";

export default function ItemCard({ card }) {
  
  return (
    <div
      onClick={() => {
        handleOpen();
      }}
      className="item__card-section"
    >
      <div>
        <div className="item__card">
          <p className="item__title">{card.name}</p>
          <img className="item__image" src={card.link} alt={card.name} />
        </div>
      </div>
    </div>
  );
}
