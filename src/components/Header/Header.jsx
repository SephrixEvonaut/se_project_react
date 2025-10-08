import "./Header.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

export default function Header(props) {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  function handleOpen() {
    document
      .querySelectorAll(".modal")
      .forEach((el) => (el.style.visibility = "visible"));
  }

  return (
    <>
      <div className="header">
        <div className="logo__section">
          <img className="logo__image" src="images/Logo.svg" alt="App logo" />
          <div className="location-date">
            <span>{currentDate}</span>
            <span>{props.weatherData.name}</span>
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
      <ModalWithForm></ModalWithForm>
    </>
  );
}
