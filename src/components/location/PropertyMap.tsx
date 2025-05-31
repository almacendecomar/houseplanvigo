import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Home } from 'lucide-react';
import { propertyData } from '../../data/propertyData';
import L from 'leaflet';

// Fix the marker icon issue in react-leaflet
// @ts-ignore
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const PropertyMap = () => {
  const position: [number, number] = propertyData.location.coordinates;
  
  return (
    <div className="card overflow-hidden">
      <MapContainer 
        center={position} 
        zoom={13} 
        scrollWheelZoom={false}
        style={{ height: '400px', width: '100%' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            <div className="flex items-center space-x-2">
              <Home size={18} className="text-teal-600" />
              <span className="font-medium">Houseplan</span>
            </div>
            <p className="text-sm mt-1">{propertyData.location.address}, {propertyData.location.city}</p>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default PropertyMap;