import { Bed, Bath, Users, Coffee, Wifi, Mountain as Mountains } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { propertyData } from '../../data/propertyData';
import SectionTitle from '../common/SectionTitle';

const Features = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Bed size={36} className="text-teal-600" />,
      title: `${propertyData.beds} ${t('home.features.beds')}`,
      description: '3 Camas de matrimonio 150 cómodas con ropa de alta calidad para un descanso perfecto'
    },
    {
      icon: <Bath size={36} className="text-teal-600" />,
      title: `${propertyData.bathrooms} ${t('home.features.bathrooms')}`,
      description: 'Uno en suite con bañera hidromasaje cromoterapia'
    },
    {
      icon: <Users size={36} className="text-teal-600" />,
      title: 'Hasta 6 huéspedes',
      description: 'Hasta 6 huéspedes'
    },
    {
      icon: <Coffee size={36} className="text-teal-600" />,
      title: t('home.features.kitchen'),
      description: 'Todo lo necesario para unos días fantásticos'
    },
    {
      icon: <Wifi size={36} className="text-teal-600" />,
      title: t('home.features.wifi'),
      description: 'WiFi 5G'
    },
    {
      icon: <Mountains size={36} className="text-teal-600" />,
      title: t('home.features.views'),
      description: 'Fantásticas vistas a la ría'
    }
  ];

  return (
    <section className="section bg-white">
      <div className="container-custom">
        <SectionTitle
          title={t('home.features.title')}
          subtitle={t('home.features.subtitle')}
          center={true}
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-serif font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;