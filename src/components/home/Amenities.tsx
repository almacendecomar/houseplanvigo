import { useTranslation } from 'react-i18next';
import { Eye, Bath, Bed, Tv, Baby, Thermometer, Shield, Wifi, UtensilsCrossed, MapPin, Car, Armchair as Wheelchair, Clock, XCircle } from 'lucide-react';
import { propertyData } from '../../data/propertyData';
import SectionTitle from '../common/SectionTitle';

const Amenities = () => {
  const { t } = useTranslation();

  const amenityCategories = [
    { 
      key: 'views',
      icon: <Eye size={24} className="text-teal-600" />,
      title: 'Vistas'
    },
    { 
      key: 'bathroom',
      icon: <Bath size={24} className="text-teal-600" />,
      title: 'Baño'
    },
    { 
      key: 'bedroom',
      icon: <Bed size={24} className="text-teal-600" />,
      title: 'Dormitorio y lavandería'
    },
    { 
      key: 'entertainment',
      icon: <Tv size={24} className="text-teal-600" />,
      title: 'Entretenimiento'
    },
    { 
      key: 'family',
      icon: <Baby size={24} className="text-teal-600" />,
      title: 'Para familias'
    },
    { 
      key: 'heating',
      icon: <Thermometer size={24} className="text-teal-600" />,
      title: 'Calefacción y refrigeración'
    },
    { 
      key: 'security',
      icon: <Shield size={24} className="text-teal-600" />,
      title: 'Seguridad en el hogar'
    },
    { 
      key: 'internet',
      icon: <Wifi size={24} className="text-teal-600" />,
      title: 'Internet y oficina'
    },
    { 
      key: 'kitchen',
      icon: <UtensilsCrossed size={24} className="text-teal-600" />,
      title: 'Cocina y comedor'
    },
    { 
      key: 'location',
      icon: <MapPin size={24} className="text-teal-600" />,
      title: 'Características de la ubicación'
    },
    { 
      key: 'parking',
      icon: <Car size={24} className="text-teal-600" />,
      title: 'Aparcamiento e instalaciones'
    },
    { 
      key: 'accessibility',
      icon: <Wheelchair size={24} className="text-teal-600" />,
      title: 'Accesibilidad'
    },
    { 
      key: 'services',
      icon: <Clock size={24} className="text-teal-600" />,
      title: 'Servicios'
    },
    { 
      key: 'notIncluded',
      icon: <XCircle size={24} className="text-coral-600" />,
      title: 'No incluidos'
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <SectionTitle
          title="¿Qué hay en este alojamiento?"
          subtitle="Descubre todas las comodidades y servicios que ofrecemos"
          center={true}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {amenityCategories.map((category) => {
            const amenities = propertyData.amenities[category.key as keyof typeof propertyData.amenities];
            if (!amenities || amenities.length === 0) return null;
            
            return (
              <div key={category.key} className="card p-6">
                <div className="flex items-center space-x-3 mb-4">
                  {category.icon}
                  <h3 className="text-lg font-medium">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {amenities.map((amenity, index) => (
                    <li key={index} className="text-gray-700 flex items-start">
                      <span className="w-2 h-2 bg-teal-600 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      {amenity}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Amenities;