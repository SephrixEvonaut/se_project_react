import { latitude, longitude, apiKey } from "./constants";

const baseUrl = "http://localhost:3001";

// Shared helper to check API responses
function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
}

async function getClothingItems() {
  try {
    const response = await fetch(`${baseUrl}/items`);
    return checkResponse(response);
  } catch (error) {
    console.error("❌ Error in getClothingItems:", error);
    throw error;
  }
}

async function postClothingItems(name, imageUrl, weather) {
  try {
    const response = await fetch(`${baseUrl}/items`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        imageUrl,
        weather,
      }),
    });
    return checkResponse(response);
  } catch (error) {
    console.error("❌ Error in postClothingItems:", error);
    throw error;
  }
}

async function deleteClothingItems(id) {
  try {
    const response = await fetch(`${baseUrl}/items/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return checkResponse(response);
  } catch (error) {
    console.error("❌ Error in deleteClothingItems:", error);
    throw error;
  }
}

// Types of "main" for weatherData: Rain, Snow, Clouds, Drizzle, Thunderstorm, Atmosphere, Clear
export { deleteClothingItems, getClothingItems, postClothingItems };
