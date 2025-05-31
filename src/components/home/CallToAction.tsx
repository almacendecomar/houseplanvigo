import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { propertyData } from '../../data/propertyData';

const CallToAction = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-20">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg"
          alt={t('location.views')}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      
      <div className="relative z-10 container-custom text-center text-white">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6">
          {t('home.cta.title')}
        </h2>
        <p className="max-w-2xl mx-auto text-lg md:text-xl mb-8">
          {t('home.cta.subtitle')}
        </p>
        <Link to="/reservar" className="btn-primary text-lg px-8 py-4">
          {t('common.book')} {t('common.from')} {propertyData.pricing.basePrice}€/{t('common.perNight')}
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;