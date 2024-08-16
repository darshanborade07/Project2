import React, { useState } from "react";
import "./Sign.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

const RegisterPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contact, setContact] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [roleId, setRoleId] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8080/User/Register', {
        firstName,
        lastName,
        email,
        password,
        contact,
        gender,
        address,
        roleId: parseInt(roleId, 10),
      }).then(response => {
        toast.success("Registration Successful!");
        window.location.href = '/home';
      })
      
    } catch (error) {
      toast.error('There was an error signing up!');
      console.error(error); // Log the full error for debugging
    }
  };

  return (
    <div className="container">
      <div className="title">Register Here</div>
      <div className="content">
        <form onSubmit={handleSignup}>
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
              <label className="details">Email:</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="input-box">
              <label className="details">Password:</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div className="input-box">
              <label className="details">Contact:</label>
              <input type="tel" value={contact} onChange={(e) => setContact(e.target.value)} required />
            </div>
            <div className="input-box">
              <label className="details">Gender:</label>
              <select value={gender} onChange={(e) => setGender(e.target.value)} required>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="input-box">
              <label className="details">Address:</label>
              <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
            </div>
            <div className="input-box">
              <label className="details">Role:</label>
              <select value={roleId} onChange={(e) => setRoleId(e.target.value)} required>
                <option value="">Select Role</option>
                <option value="2">Owner</option>
                <option value="3">Customer</option>
              </select>
            </div>
            <button type="submit">Sign Up</button>
          </div>
        </form>
        <ToastContainer position="top-center"/> {/* Include ToastContainer to show notifications */}
      </div>
    </div>
  );
};

export default RegisterPage;
