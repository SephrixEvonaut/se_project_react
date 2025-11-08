import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";
import { postClothingItems } from "../../utils/clothingItems";

const AddItemModal = ({
  isOpen,
  isDisabled,
  handleClose,
  fetchClothingItems,
}) => {
  const { values, handleChange } = useForm({
    name: "",
    image: "",
    weatherType: "",
  });
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const postClothingItemsRes = await postClothingItems(
        values?.name,
        values?.image,
        values?.weatherType
      );
      await fetchClothingItems();
      handleClose();
      // setClothingItems(postClothingItemsRes);
    } catch (error) {
      console.error("❌ Error posting clothing items:", error);
      // optional: handle the error visually or through state
      // setClothingItems(null);
      await fetchClothingItems();
      handleClose();
    }
  }
  console.log(values.name, values.image, values.weatherType);
  return (
    <ModalWithForm
      isDisabled={isDisabled}
      handleClose={handleClose}
      isOpen={isOpen}
      buttonText="Add Garment"
      heading="New Garment"
      handleSubmit={handleSubmit}
    >
      <div className="input__modal">
        <label htmlFor="name">Name</label>
        <input
          onChange={handleChange}
          name="name"
          placeholder="Name"
          type="text"
          id="name"
          required
        />
      </div>

      <div className="input__modal">
        <label htmlFor="image">Image</label>
        <input
          onChange={handleChange}
          name="image"
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
            onChange={handleChange}
            name="weatherType"
            type="radio"
            value="hot"
            id="hot"
            required
          />
          <label htmlFor="hot">hot</label>
        </div>
        <div className="input__checkbox">
          <input
            onChange={handleChange}
            name="weatherType"
            type="radio"
            value="warm"
            id="warm"
            required
          />
          <label htmlFor="warm">warm</label>
        </div>
        <div className="input__checkbox">
          <input
            onChange={handleChange}
            name="weatherType"
            type="radio"
            value="cold"
            id="cold"
            required
          />
          <label htmlFor="cold">cold</label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
