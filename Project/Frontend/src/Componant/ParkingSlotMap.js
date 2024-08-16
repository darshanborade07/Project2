import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix the default icon issue with Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const ParkingSlotMap = ({ slots }) => {
  // Default center for the map
  const defaultCenter = [51.505, -0.09];
  const zoomLevel = 13;

  return (
    <MapContainer center={defaultCenter} zoom={zoomLevel} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {slots.map((slot) => (
        <Marker key={slot.id} position={[slot.latitude, slot.longitude]}>
          <Popup>
            <div>
              <h3>{slot.area}</h3>
              <p>{slot.city}</p>
              <p>Pincode: {slot.pincode}</p>
              <p>Status: {slot.status}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default ParkingSlotMap;
