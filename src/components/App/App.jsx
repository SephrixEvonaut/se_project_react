import { useState, useEffect } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { defaultClothingItems } from "../../utils/clothingItems";
import { getWeatherCondition } from "../../utils/weatherApi";
import ItemModal from "../ItemModal/ItemModal";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function App() {
  const [name, setName] = useState(null);
  const [image, setImage] = useState(null);
  const [weatherType, setWeatherType] = useState(null);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [clothingItems, setClothingItems] = useState([]);
  const [weatherData, setWeatherData] = useState({}); // initially, weatherData = {}
  const fetchWeatherData = async () => {
    try {
      const weatherDataRes = await getWeatherCondition();
      setWeatherData(weatherDataRes); // under the hood: weatherData = weatherDataRes
    } catch (error) {
      console.error("❌ Error fetching weather data:", error);
      // optional: handle the error visually or through state
      setWeatherData(null);
    }
  };

  useEffect(() => {
    fetchWeatherData();
    setClothingItems(defaultClothingItems);
  }, []);

  function handleOpen() {
    // document
    //   .querySelectorAll(".modal")
    //   .forEach((el) => (el.style.visibility = "visible"));
    setActiveModal("garmentModal");
  }

  function handleClose(e) {
    setActiveModal("");
    // document
    //   .querySelectorAll(".modal")
    //   .forEach((el) => (el.style.visibility = "hidden"));
  }

  function handleOpenItemModal(card) {
    setSelectedCard(card);

    setActiveModal("itemModal");
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

  const [isDisabled, setIsDisabled] = useState(true);
  useEffect(() => {
    let validationPassed = validateInputs();
    if (validationPassed) {
      console.log("removing disable");
      setIsDisabled(false);
      // document.querySelector(".modal__save-btn")?.classList.remove("disabled");
    }
  }, [name, image, weatherType]);

  return (
    <>
      <div className="page">
        <Header weatherData={weatherData} handleOpen={handleOpen} />
        <Main
          selectedCard={selectedCard}
          handleOpenItemModal={handleOpenItemModal}
          cards={clothingItems}
          weatherData={weatherData}
        />
        <Footer />
      </div>
      <ItemModal
        selectedCard={selectedCard}
        card={selectedCard}
        isOpen={activeModal === "itemModal"}
        handleClose={handleClose}
      />
      <ModalWithForm
        isDisabled ={isDisabled}
        handleClose={handleClose}
        isOpen={activeModal === "garmentModal"}
        buttonText="Add Garment"
        heading="New Garment"
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

export default App;
