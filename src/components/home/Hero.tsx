import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { propertyData } from '../../data/propertyData';

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = propertyData.images;
  const { t } = useTranslation();
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-screen">
      {/* Background slider */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          </div>
        ))}
      </div>
      
      <div className="relative container-custom h-full flex flex-col justify-center items-start">
        <div className="max-w-2xl text-white">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            {t('home.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white">
            {t('home.hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/reservar" className="btn-primary text-center">
              {t('common.book')} {t('common.from')} {propertyData.pricing.basePrice}€/{t('common.perNight')}
            </Link>
            <Link to="/galeria" className="bg-white bg-opacity-20 backdrop-blur-sm text-white border border-white border-opacity-40 btn hover:bg-opacity-30 transition-all duration-200 text-center">
              {t('common.viewGallery')}
            </Link>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentImageIndex ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
              onClick={() => setCurrentImageIndex(index)}
              aria-label={t('gallery.viewLarger')}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;