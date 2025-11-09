// import { useContext } from "react";
import "./ItemModal.css";

export default function ItemModal({
  card,
  weatherData,
  selectedCard,
  handleClose,
  isOpen,
  onDeleteClick,
}) {
  // const currentUser = useContext(CurrentUserContext);
  // const isOwn = card.owner === currentUser._id;

  // const itemDeleteBtnClassName = `item-modal__delete-btn ${
  //   isOwn ? "item-modal__delete-btn_visible" : "item-modal__delete-btn_hidden"
  // }`;
  // console.log(selectedCard);
  return (
    <div className={`${isOpen ? "itemModal_is-opened" : "item__modal"}`}>
      <div className="item__modal__form">
        <img src={card?.imageUrl} alt={card?.name} />
        <div className="item__details">
          <div>
            <h3 className="item__modal__title">{card?.name}</h3>

            <div className="item__modal__weather">{`Weather: ${card.weather}`}</div>
          </div>
          <div
            className="item-modal__delete-btn"
            onClick={() => onDeleteClick(card?._id)}
          >
            {/* /className={itemDeleteBtnClassName} */}
            Delete item
          </div>
        </div>
        <button onClick={handleClose} className="modal__close-btn-delete-modal">
          x
        </button>
      </div>
    </div>
  );
}
