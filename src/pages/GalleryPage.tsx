import { Helmet } from 'react-helmet';
import ImageGallery from '../components/gallery/ImageGallery';
import SectionTitle from '../components/common/SectionTitle';

const GalleryPage = () => {
  return (
    <>
      <Helmet>
        <title>Galería | Houseplan</title>
        <meta name="description" content="Explora las imágenes de nuestro alojamiento Houseplan. Habitaciones confortables, vistas panorámicas y todas las comodidades para tu estancia." />
      </Helmet>
      
      <div className="pt-24 pb-16">
        <div className="container-custom">
          <SectionTitle
            title="Galería de Houseplan"
            subtitle="Descubre todos los espacios de nuestro alojamiento"
            center={true}
          />
          
          <ImageGallery />
        </div>
      </div>
    </>
  );
};

export default GalleryPage;