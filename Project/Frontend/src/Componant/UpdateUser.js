import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateUserPage = () => {
    const { email } = useParams();
  const [firstName, setFirstName] = useState('');
  
  const [lastName, setLastName] = useState('');
 
  const [contact, setContact] = useState('');
  
  const [address, setAddress] = useState('');
  

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8080/User/updateUser/${email}`, {
        firstName,
        lastName,
        // Include if necessary, handle appropriately
        contact,
        
        address,
        // Ensure roleId is a number
      });
      toast.success('User details updated successfully!');
      // Optionally, redirect or update UI as needed
    } catch (error) {
      toast.error('Error updating user details');
      console.error(error);
    }
  };

  return (
    <div className="container">
      <ToastContainer position="top-center" />
      <div className="title">Update User Details</div>
      <div className="content">
        <form onSubmit={handleUpdate}>
          <div className="user-details">
            <div className="input-box">
              <label className="details">First Name:</label>
              <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
            </div>
            <div className="input-box">
              <label className="details">Last Name:</label>
              <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
            </div>
            
           
            <div className="input-box">
              <label className="details">Contact:</label>
              <input type="tel" value={contact} onChange={(e) => setContact(e.target.value)} required />
            </div>
            
            <div className="input-box">
              <label className="details">Address:</label>
              <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
            </div>
            
          
            
            <button type="submit">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateUserPage;
