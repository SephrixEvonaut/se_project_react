import React from "react";
import { useState, useRef, useEffect, useContext } from "react";
import "./ToggleSwitch.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext";

const ToggleSwitch = () => {
  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );
  const [checkedOne, setCheckedOne] = React.useState(false);
  const [checkedTwo, setCheckedTwo] = React.useState(false);

  const checkboxOneReference = useRef(null);

  const checkboxTwoReference = useRef(null);

  const handleChangeOne = () => {
    setCheckedOne(!checkedOne);
  };

  const handleChangeTwo = () => {
    setCheckedTwo(!checkedTwo);
  };

  useEffect(() => {
    handleToggleSwitchChange();
    const box1 = checkboxOneReference.current;
    const box2 = checkboxTwoReference.current;

    console.log(box1);

    console.log(box2);
    if (!box1 || !box2) return;

    // When checkbox one is active, bring it to front
    // if (checkedOne && !checkedTwo) {
    //   console.log(checkedOne, checkedTwo);
    //   box1.style.zIndex = 2;
    //   box1.style.opacity = 1;
    //   box2.style.zIndex = 1;
    //   box2.style.opacity = 0.6;
    // }

    console.log(box1.style.zIndex);

    if (box1.style.zIndex === "2") {
      console.log(checkedOne, checkedTwo);

      box1.style.zIndex = 1;
      box1.style.opacity = 0.5;
      box2.style.opacity = 1;
    } else {
      box1.style.zIndex = 2;
      box1.style.opacity = 1;
    }

    // When checkbox two is active, bring it to front
    // else if (checkedTwo && !checkedOne) {
    //   console.log(checkedOne, checkedTwo);
    //   box2.style.zIndex = 2;
    //   box2.style.opacity = 1;
    //   box1.style.zIndex = 1;
    //   box1.style.opacity = 0.6;
    // }
  }, [checkedOne, checkedTwo]);

  return (
    <div className="toggleSwitch">
      <Checkbox
        className="checkbox1"
        label="F"
        value={checkedOne}
        onChange={handleChangeOne}
        reference={checkboxOneReference}
      />
      <Checkbox
        className="checkbox2"
        label="C"
        value={checkedTwo}
        onChange={handleChangeTwo}
        reference={checkboxTwoReference}
      />
    </div>
  );
};

const Checkbox = ({ label, value, onChange, className, reference }) => {
  return (
    <div className={className} ref={reference}>
      <input
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
        checked={value}
        onChange={onChange}
      />

      <label className="react-switch-label" htmlFor={`react-switch-new`}>
        <span className={`react-switch-button`}>{label}</span>
      </label>
    </div>
  );
};

export default ToggleSwitch;
