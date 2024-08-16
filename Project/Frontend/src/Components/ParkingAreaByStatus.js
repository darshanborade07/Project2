import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ParkingAreasByStatus = () => {
  const [status, setStatus] = useState('');
  const [parkingAreas, setParkingAreas] = useState([]);

  const handleChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:8080/parkingArea/byStatus', {
        params: {
          status: status,
        },
      });
      setParkingAreas(response.data);
      toast.success('Parking areas fetched successfully!');
    } catch (error) {
      toast.error('Error fetching parking areas');
      console.error(error);
    }
  };

  return (
    <div className="container">
      <ToastContainer position="top-center" />
      <div className="title">Find Parking Areas by Status</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="status">Status:</label>
        <select value={status} onChange={handleChange} required>
          <option value="">Select Status</option>
          <option value="AVAILABLE">Available</option>
          <option value="NOT_AVAILABLE">Not Available</option>
          <option value="MAINTENANCE">Maintenance</option>
          {/* Add other statuses as needed */}
        </select>
        <button type="submit">Fetch Parking Areas</button>
      </form>
      {parkingAreas.length > 0 && (
        <div className="parking-areas">
          <h3>Parking Areas:</h3>
          <ul>
            {parkingAreas.map((area) => (
              <li key={area.id}>
                <p>Area: {area.area}</p>
                <p>City: {area.city}</p>
                <p>Pincode: {area.pincode}</p>
                <p>Status: {area.status}</p>
                {/* Add other fields as needed */}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ParkingAreasByStatus;
