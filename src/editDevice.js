import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";

const EditDevice = () => {
  const { id } = useParams(); // Get the device ID from the URL parameters
  const history = useHistory();
  const [device, setDevice] = useState({
    name: "",
    type: "",
    location: "",
    status: "",
  });

  // Fetch the current device data when the component mounts
  useEffect(() => {
    const fetchDevice = async () => {
      const response = await axios.get(`/api/devices/${id}`);
      setDevice(response.data);
    };

    fetchDevice();
  }, [id]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDevice((prevDevice) => ({
      ...prevDevice,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/devices/${id}`, device); // Send updated device data to the backend
      history.push("/devices"); // Redirect to the devices list page
    } catch (error) {
      console.error("Error updating device:", error);
      // Optionally, handle error feedback to the user
    }
  };

  return (
    <div>
      <h2>Edit Device</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={device.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Type:</label>
          <input
            type="text"
            name="type"
            value={device.type}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            name="location"
            value={device.location}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Status:</label>
          <input
            type="text"
            name="status"
            value={device.status}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Update Device</button>
      </form>
    </div>
  );
};

export default EditDevice;
