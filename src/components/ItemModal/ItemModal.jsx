import "./ItemModal.css";

export default function ItemModal({
  card,
  weatherData,
  selectedCard,
  handleClose,
  isOpen,
}) {
  
  console.log(selectedCard);
  return (
    <div className={`${isOpen ? "itemModal_is-opened" : "item__modal"}`}>
      <div className="item__modal__form">
        <img src={card?.link} alt={card?.name} />
        <div className="item__modal__title">{card?.name}</div>
        <div className="item__modal__weather">{`Weather: ${card.weather}`}</div>
        <button onClick={handleClose} className="modal__close-btn-delete-modal">
          x
        </button>
      </div>
    </div>
  );
}
