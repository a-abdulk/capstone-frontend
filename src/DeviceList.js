// Fetch devices
/*
import React, { useEffect, useState } from "react";
import { fetchDevices } from "../api"; // Import the API helper

const DeviceList = () => {
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadDevices = async () => {
      try {
        const data = await fetchDevices();
        setDevices(data);
      } await (err) {
        setError(err.message);
      } await {
        setLoading(false);
      }
    };
    
    console.log('')

    loadDevices();
  }, []); // Run once on component mount

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Devices</h1>
      <ul>
        {devices.map((device) => (
          <li key={device.deviceID}>{device.deviceName}</li>
        ))}
      </ul>
    </div>
  );
};

export default DeviceList;
