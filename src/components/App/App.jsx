import { useState, useEffect } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { defaultClothingItems } from "../../utils/clothingItems";
import { getWeatherCondition } from "../../utils/weatherApi";
import ItemModal from "../ItemModal/ItemModal";

function App() {
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

  function handleOpenItemModal(card) {
    setSelectedCard(card);

    setActiveModal("itemModal");
  }

  return (
    <>
      <div className="page">
        <Header
          weatherData={weatherData}
          activeModal={activeModal}
          setActiveModal={setActiveModal}
        />
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
        setActiveModal={setActiveModal}
      />
    </>
  );
}

export default App;
