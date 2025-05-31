import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { X } from 'lucide-react';
import { propertyData } from '../../data/propertyData';

const ImageGallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = propertyData.images;

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="container-custom py-8">
      {/* Grid Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div 
            key={image.id} 
            className="aspect-w-16 aspect-h-12 cursor-pointer rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            onClick={() => openLightbox(index)}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            onClick={closeLightbox}
          >
            <X size={32} />
            <span className="sr-only">Cerrar</span>
          </button>
          
          <div className="w-full max-w-5xl">
            <Carousel
              selectedItem={currentIndex}
              showArrows={true}
              showStatus={false}
              showIndicators={false}
              infiniteLoop={true}
              dynamicHeight={false}
              useKeyboardArrows={true}
              swipeable={true}
              emulateTouch={true}
              onChange={(index) => setCurrentIndex(index)}
            >
              {images.map((image) => (
                <div key={image.id} className="h-[80vh] flex items-center justify-center">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="max-h-full max-w-full object-contain"
                  />
                  <p className="legend bg-black bg-opacity-70 text-white p-2 rounded-lg">
                    {image.alt}
                  </p>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;