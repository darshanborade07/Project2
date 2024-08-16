import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const NearbyParking = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [nearbyParking, setNearbyParking] = useState([]);
  const [selectedParkingId, setSelectedParkingId] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([]);
  const navigate = useNavigate();

  const handleGetCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
        toast.success('Location fetched successfully!');
      }, error => {
        toast.error('Error fetching location');
        console.error(error);
      });
    } else {
      toast.error('Geolocation is not supported by this browser');
    }
  };

  const handleFindNearbyParking = async () => {
    if (latitude !== null && longitude !== null) {
      try {
        const response = await axios.get('http://localhost:8080/parkingArea/nearby', {
          params: {
            latitude,
            longitude
          }
        });
        setNearbyParking(response.data);
        toast.success('Nearby parking areas fetched successfully!');
      } catch (error) {
        toast.error('Error fetching nearby parking areas');
        console.error(error);
      }
    } else {
      toast.error('Please fetch your current location first');
    }
  };

  const handleViewSlots = async (parkingId) => {
    setSelectedParkingId(parkingId);
    try {
      const response = await axios.get(`http://localhost:8080/parkingSlots/${parkingId}`);
      setAvailableSlots(response.data);
      toast.success('Available slots fetched successfully!');
    } catch (error) {
      toast.error('Error fetching available slots');
      console.error(error);
    }
  };

  const handleBookSlot = (slotId) => {
    navigate(`/booking/${slotId}`);
  };

  return (
    <div className="container">
      <ToastContainer position="top-center" />
      <div className="title">Find Nearby Parking Areas</div>
      <div className="content">
        <button onClick={handleGetCurrentLocation}>Get Current Location</button>
        <button onClick={handleFindNearbyParking}>Find Nearby Parking</button>
        {nearbyParking.length > 0 && (
          <div className="parking-list">
            <h3>Nearby Parking Areas:</h3>
            <ul>
              {nearbyParking.map(parking => (
                <li key={parking.id}>
                  <p>Area: {parking.area}</p>
                  <p>City: {parking.city}</p>
                  <p>Pincode: {parking.pincode}</p>
                  <p>Status: {parking.status}</p>
                  <p>Price: {parking.price}</p>
                  <button onClick={() => handleViewSlots(parking.id)}>View Slots</button>
                </li>
              ))}
            </ul>
          </div>
        )}
        {availableSlots.length > 0 && (
          <div className="slots-list">
            <h3>Available Slots:</h3>
            <ul>
              {availableSlots.map(slot => (
                <li key={slot.id}>
                  <p>Slot ID: {slot.id}</p>
                  <p>Slot Number: {slot.number}</p>
                  <p>Status: {slot.status}</p>
                  
                  <button onClick={() => handleBookSlot(slot.id)}>Book</button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NearbyParking;
