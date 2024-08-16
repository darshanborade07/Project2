import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import './NearByParking.css'; // Import the CSS file for styling

const NearbyParking = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [nearbyParking, setNearbyParking] = useState([]);
  const [selectedParkingId, setSelectedParkingId] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([]);
  const navigate = useNavigate();

  const handleGetCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          toast.success('Location fetched successfully!');
        },
        (error) => {
          toast.error('Error fetching location');
          console.error(error);
        }
      );
    } else {
      toast.error('Geolocation is not supported by this browser');
    }
  };

  const handleFindNearbyParking = async () => {
    if (latitude !== null && longitude !== null) {
      try {
        const response = await axios.get('http://localhost:8080/parkingAreas/nearby', {
          params: { latitude, longitude },
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
        <button className="btn-primary" onClick={handleGetCurrentLocation}>Get Current Location</button>
        <button className="btn-primary" onClick={handleFindNearbyParking}>Find Nearby Parking</button>

        {nearbyParking.length > 0 && (
          <div className="card-container">
            {nearbyParking.map(parking => (
              <div key={parking.id} className="card">
                <h3 className="card-title">{parking.area}</h3>
                <p><strong>City:</strong> {parking.city}</p>
                <p><strong>Pincode:</strong> {parking.pincode}</p>
                <p><strong>Status:</strong> {parking.status}</p>
                <p><strong>Id:</strong> {parking.id}</p>
                <p><strong>Type:</strong> {parking.type}</p> {/* Display parking type */}
                <button className="btn-secondary" onClick={() => handleViewSlots(parking.id)}>View Slots</button>
              </div>
            ))}
          </div>
        )}

        {availableSlots.length > 0 && (
          <div className="card-container">
            {availableSlots.map(slot => (
              <div key={slot.id} className="card">
                <h3 className="card-title">Slot Number: {slot.number}</h3>
                <p><strong>Status:</strong> {slot.status}</p>
                <p><strong>ID:</strong> {slot.id}</p>
                <p><strong>vehicle_type:</strong> {slot.vehicleType}</p>
                <button className="btn-secondary" onClick={() => handleBookSlot(slot.id)}>Book</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default NearbyParking;
