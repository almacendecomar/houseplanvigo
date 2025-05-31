import { useState } from 'react';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { propertyData } from '../../data/propertyData';

const FloatingBookingButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to="/reservar"
      className="fixed bottom-24 right-6 z-40"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-center">
        {isHovered && (
          <div className="mr-3 bg-white text-gray-800 py-2 px-4 rounded-lg shadow-lg animate-fade-in">
            desde {propertyData.pricing.basePrice}€/noche
          </div>
        )}
        <button className="bg-teal-600 text-white p-4 rounded-full shadow-lg hover:bg-teal-700 transition-colors duration-200 flex items-center justify-center">
          <Calendar size={24} />
          <span className="sr-only">Reservar ahora</span>
        </button>
      </div>
    </Link>
  );
};

export default FloatingBookingButton;