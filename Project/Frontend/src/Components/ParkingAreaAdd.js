import './AddParkingArea.css';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AddParkingArea(){
    const [area, setArea] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [status, setStatus] = useState('');
  const [ownerId, setOwnerId] = useState('');


  const navigate = useNavigate();

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        error => {
          console.error('Error getting location:', error);
          alert('Unable to retrieve your location');
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/parkingArea/add', {
        area,
        city,
        pincode,
        latitude,
        longitude,
        status,
        ownerId
      });

      if (response.status === 200) {
        toast.success('Parking area added successfully');
        navigate('/parkingAreas'); // Redirect to parking areas list or another page
      }
    } catch (error) {
      toast.error('There was an error adding the parking area!', error);
      toast.error('Failed to add parking area');
    }
  };




  return (
    <div className="parking-area-form">
      <h2>Add Parking Area</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="area">Area:</label>
          <input
            type="text"
            id="area"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="pincode">Pincode:</label>
          <input
            type="text"
            id="pincode"
            value={pincode}
            onChange={(e) => setPincode(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="latitude">Latitude:</label>
          <input type="text" id="latitude" value={latitude} readOnly />
        </div>

        <div className="form-group">
          <label htmlFor="longitude">Longitude:</label>
          <input type="text" id="longitude" value={longitude} readOnly />
        </div>

        <div className="form-group">
          <label htmlFor="status">Status:</label>
          <select id="status" value={status} onChange={(e) => setStatus(e.target.value)} required>
            <option value="">Select Status</option>
            <option key="NOT_AVAILABLE" value="NOT_AVAILABLE">NOT_AVAILABLE </option>
              <option key="AVAILABLE" value="AVAILABLE">AVAILABLE </option>
            
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="ownerId">Owner ID:</label>
          <input
            type="number"
            id="ownerId"
            value={ownerId}
            onChange={(e) => setOwnerId(e.target.value)}
            required
          />
        </div>

        <button type="button" onClick={handleGetLocation}>Get Current Location</button>
        <button type="submit">Add Parking Area</button>
      </form>
    </div>
  );

}
export default AddParkingArea;