import React from "react";
import { useState, useRef, useEffect, useContext } from "react";
import "./ToggleSwitch.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

const ToggleSwitch = () => {
  const [count, setCount] = useState(0);
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );
  // const [checkedOne, setCheckedOne] = React.useState(false);
  // const [checkedTwo, setCheckedTwo] = React.useState(false);

  const checkboxOneReference = useRef(null);

  const checkboxTwoReference = useRef(null);

  // const handleChangeOne = () => {
  //   setCheckedOne(!checkedOne);
  // };

  // const handleChangeTwo = () => {
  //   setCheckedTwo(!checkedTwo);
  // };

  const handleChange = () => {
    // Call the context handler when user clicks
    handleToggleSwitchChange();
  };

  useEffect(() => {
    const box1 = checkboxOneReference.current;
    const box2 = checkboxTwoReference.current;

    if (!box1 || !box2) return;

    // When F is selected, bring F checkbox to front
    if (currentTemperatureUnit === "F") {
      box1.style.zIndex = 2;
      box1.style.opacity = 1;
      box2.style.zIndex = 1;
      box2.style.opacity = 0.6;
    }
    // When C is selected, bring C checkbox to front
    else {
      box2.style.zIndex = 2;
      box2.style.opacity = 1;
      box1.style.zIndex = 1;
      box1.style.opacity = 0.6;
    }
  }, [currentTemperatureUnit]);

  return (
    <div className="toggleSwitch">
      <Checkbox
        className="checkbox1"
        label="F"
        value={currentTemperatureUnit === "C"}
        onChange={handleChange}
        id="temp-switch-f"
        reference={checkboxOneReference}
      />
      <Checkbox
        className="checkbox2"
        label="C"
        value={currentTemperatureUnit === "C"}
        onChange={handleChange}
        reference={checkboxTwoReference}
        id="temp-switch-c"
      />
    </div>
  );
};

const Checkbox = ({ label, value, onChange, className, reference, id }) => {
  return (
    <div className={className} ref={reference}>
      <input
        className="react-switch-checkbox"
        id={id}
        type="checkbox"
        checked={value}
        onChange={onChange}
      />

      <label className="react-switch-label" htmlFor={id}>
        <span className={`react-switch-button`}>{label}</span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
