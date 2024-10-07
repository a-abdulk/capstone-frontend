// File for API request functions. To centralize your API request logic
const API_URL = "http://localhost:5000/api"; // Base URL for your API

// Function to fetch all devices
export const fetchDevices = async () => {
  try {
    const response = await fetch(`${API_URL}/devices`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Include authorization token if required
        // 'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching devices:", error);
    throw error; // Rethrow the error to handle it in the calling component
  }
};

// Function to create a new device
export const createDevice = async (deviceData) => {
  try {
    const response = await fetch(`${API_URL}/devices`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(deviceData), // Convert object to JSON string
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return await response.json();
  } catch (error) {
    console.error("Error creating device:", error);
    throw error;
  }
};
