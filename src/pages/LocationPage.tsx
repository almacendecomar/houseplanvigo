import { Helmet } from 'react-helmet';
import PropertyMap from '../components/location/PropertyMap';
import PointsOfInterest from '../components/location/PointsOfInterest';
import SectionTitle from '../components/common/SectionTitle';
import { propertyData } from '../data/propertyData';
import { MapPin } from 'lucide-react';

const LocationPage = () => {
  return (
    <>
      <Helmet>
        <title>Ubicación | Houseplan</title>
        <meta name="description" content="Descubre la ubicación de Houseplan en Vigo. Situada en la Avenida de Castelao con vistas a la ría y fácil acceso a los principales puntos de interés." />
      </Helmet>
      
      <div className="pt-24 pb-16">
        <div className="container-custom">
          <SectionTitle
            title="Ubicación"
            subtitle="Descubre dónde se encuentra Houseplan y los puntos de interés cercanos"
            center={true}
          />
          
          {/* Map */}
          <div className="mb-12">
            <PropertyMap />
          </div>
          
          {/* Address */}
          <div className="card p-6 mb-12">
            <h3 className="text-xl font-medium mb-4 flex items-center">
              <MapPin size={20} className="text-teal-600 mr-2" />
              Dirección
            </h3>
            <p className="text-gray-700 mb-2">
              {propertyData.location.address}
            </p>
            <p className="text-gray-700 mb-2">
              {propertyData.location.city}, {propertyData.location.province}
            </p>
            <p className="text-gray-700 mb-2">
              {propertyData.location.postalCode}
            </p>
            <p className="text-gray-700">
              {propertyData.location.country}
            </p>
          </div>
          
          <div className="mb-8">
            <h3 className="text-2xl font-serif font-semibold mb-6">Puntos de interés cercanos</h3>
            <PointsOfInterest />
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationPage;