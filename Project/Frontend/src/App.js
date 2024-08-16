// import './Componant/Footer'
// import './Componant/Header'
import Register from './Components/Register'
import React, {useState,useEffect} from 'react';
import { BrowserRouter as Router, Routes, Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Login from './Components/Login';
import AddParkingArea from './Components/ParkingAreaAdd';
import ParkingSlotForm from './Components/ParkingSlotAdd';
import NearbyParking from './Components/NearByParking';
import ParkingAreasByStatus from './Components/ParkingAreaByStatus';


function App() {
  return (
    <div >
      <Router>
     <Routes>      
      <Route path="/" element={<Register/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/AddParkingArea" element={<AddParkingArea/>}></Route>
      <Route path='/AddParkingSlots' element={<ParkingSlotForm/>}></Route>
      <Route path='/findNearByParking' element={<NearbyParking/>}></Route>
      <Route path='/ParkingAreaByStatus' element={<ParkingAreasByStatus/>}></Route>
     </Routes>
     </Router>
    </div>
  );
}

export default App;
