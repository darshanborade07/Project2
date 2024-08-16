import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserDashboard = () => {
  const [parkingAreas, setParkingAreas] = useState([]);
  const [error, setError] = useState(null);
  const [selectedParkingArea, setSelectedParkingArea] = useState(null);
  
  const getCurrentLocation = () => {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          }),
          
          error => reject(error)
        );
        alert()
      } else {
        reject(new Error('Geolocation is not supported by this browser.'));
      }
    });
  };

  const fetchParkingAreas = async () => {
    try {
      const location = await getCurrentLocation();
      const response = await axios.get('http://localhost:8080/parkingAreas/nearby', {
        params: {
          latitude: location.latitude,
          longitude: location.longitude
        }
      });
      setParkingAreas(response.data);
    } catch (error) {
      console.error('Error fetching parking areas:', error);
      setError('Failed to fetch parking areas');
    }
  };

  const handleBookSlot = async () => {
    if (!selectedParkingArea) {
      alert('Please select a parking area');
      return;
    }

    const bookingRequest = {
      slotId: selectedParkingArea.id,
      userId: 1, // Replace with the actual user ID
      bookingDateTime: new Date().toISOString ()
    };

    try {
      
    } catch (error) {
      console.error('Error booking parking slot:', error);
      alert('Booking failed');
    }
  };

  useEffect(() => {
    fetchParkingAreas();
  }, []);


  return (
    <div>
      <h2>Parking Areas Near You</h2>
      <button type='submit' onSubmit={getCurrentLocation} >Submit location</button>
      {error && <p>{error}</p>}
      <ul>
        {parkingAreas.length === 0 ? (
          <p>No parking areas available within 3km</p>
        ) : (
          parkingAreas.map(area => (
            <li key={area.id}>
              <input
                type="radio"
                name="parkingArea"
                value={area.id}
                onChange={() => setSelectedParkingArea(area)}
              />
              {`Area: ${area.area}, City: ${area.city}, Pincode: ${area.pincode}`}
            </li>
          ))
        )}
      </ul>
      <button onClick={handleBookSlot}>Book Slot</button>
    </div>
  );
};

export default UserDashboard;
