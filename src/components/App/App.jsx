import { useState, useEffect } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import { defaultClothingItems } from "../../utils/clothingItems";
import { getWeatherCondition } from "../../utils/weatherApi";

function App() {
  const [count, setCount] = useState(0);
  const [clothingItems, setClothingItems] = useState([]);
  const [weatherData, setWeatherData] = useState({});
  const fetchWeatherData = async () => {
    const weatherDataRes = await getWeatherCondition();
    setWeatherData(weatherDataRes);
  };
  useEffect(() => {
    fetchWeatherData();
    setClothingItems(defaultClothingItems);
  }, []);

  return (
    <>
      <div className="page">
        <Header />
        <Main Cards={clothingItems} weatherData={weatherData} />
        <Footer />
      </div>
    </>
  );
}

export default App;
