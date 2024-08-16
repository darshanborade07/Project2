import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ParkingSlotAdd.css';



function ParkingSlotForm(){
    const [slotNumber, setSlotNumber] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');
    const [vehicleType, setVehicleType] = useState('');
    const [status, setStatus] = useState('');
    const [parkingId, setParkingId] = useState('');
    const [vehicleTypes, setVehicleTypes] = useState([]);
    const [statuses, setStatuses] = useState([]);
    const navigate = useNavigate();

    


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/parkingSlots/Add', {
              slotNumber,
              location,
              price,
              vehicleType,
              status,
              parkingId
            });
      
            if (response.status === 200) {
              alert('Parking slot added successfully');
              window.location.href = '/home';// Redirect to parking slots list or another page
            }
          }catch (error) {
            console.error('There was an error adding the parking slot!', error);
            alert('Failed to add parking slot');
          }
    };

    return (
        <div className="parking-slot-form">
          <h2>Add Parking Slot</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="slotNumber">Slot Number:</label>
              <input type="text" id="slotNumber" value={slotNumber} onChange={(e) => setSlotNumber(e.target.value)}
                required />
            </div>
            
            
    
            <div className="form-group">
              <label htmlFor="price">Price:</label>
              <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} required />
            </div>
    
            <div className="form-group">
              <label htmlFor="vehicleType">Vehicle Type:</label>
              <select id="vehicleType" value={vehicleType} onChange={(e) => setVehicleType(e.target.value)} required >
                <option value="">Select Vehicle Type</option>
             
                <option key="TWO_WHEELER" value="TWO_WHEELER"> TWO_WHEELER</option>
                <option key="FOUR_WHEELER" value="FOUR_WHEELER"> FOUR_WHEELER</option>
                
              </select>
            </div>
    
            <div className="form-group">
              <label htmlFor="status">Status:</label>
              <select
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)} required >
                <option value="">Select Status</option>
                <option key= "AVAILABLE" value="AVAILABLE">  AVAILABLE </option>
                <option key= "NOT_AVAILABLE" value="NOT_AVAILABLE">  NOT_AVAILABLE </option>
            
              </select>
            </div>
    
            <div className="form-group">
              <label htmlFor="parkingId">Parking ID:</label>
              <input type="number" id="parkingId" value={parkingId} onChange={(e) => setParkingId(e.target.value)} required />
            </div>
    
            <button type="submit">Add Parking Slot</button>
          </form>
        </div>
      );


}   
export default ParkingSlotForm;