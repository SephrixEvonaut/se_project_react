import "./ItemModal.css";

export default function ItemModal({ card, weatherData, selectedCard }) {
  function handleClose() {
    document
      .querySelectorAll(".item__modal")
      .forEach((el) => (el.style.visibility = "hidden"));
  }
  console.log(selectedCard);
  return (
    <>
      <div className="item__modal">
        <div className="item__modal__form">
          <img src={card?.link} />
          <div className="item__modal__title">{card?.name}</div>
          <div className="item__modal__weather">
            {`Weather: ${card.weather}`}
          </div>
          <button
            onClick={handleClose}
            className="modal__close-btn-delete-modal"
          >
            x
          </button>
        </div>
      </div>
    </>
  );
}
