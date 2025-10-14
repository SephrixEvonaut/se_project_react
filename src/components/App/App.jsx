import { useState, useEffect } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { defaultClothingItems } from "../../utils/clothingItems";
import { getWeatherCondition } from "../../utils/weatherApi";
import ItemModal from "../ItemModal/ItemModal";

function App() {
  const [selectedCard, setSelectedCard] = useState({});
  const [clothingItems, setClothingItems] = useState([]);
  const [weatherData, setWeatherData] = useState({}); // initially, weatherData = {}
  const fetchWeatherData = async () => {
    const weatherDataRes = await getWeatherCondition();
    setWeatherData(weatherDataRes); // under the hood: weatherData = weatherDataRes
  };
  useEffect(() => {
    fetchWeatherData();
    setClothingItems(defaultClothingItems);
  }, []);

  function handleOpenItemModal(card) {
       setSelectedCard(card)

    document
      .querySelectorAll(".item__modal")
      .forEach((el) => (el.style.visibility = "visible"));
  }

  return (
    <>
      <div className="page">
        <Header weatherData={weatherData} />
        <Main cards={clothingItems} weatherData={weatherData} />
        <Footer />
      </div>
      <ItemModal card= {selectedCard}/>
    </>
  );
}

export default App;
